// theme-editor.js - Fixed for embedded styles with palette support and grouping
(function () {
  'use strict';

  const palettePickerClasses = `
  relative
  `

  window.closeIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`

  let currentPaletteTarget = null;

  // Show palette modal
  window.showPalette = function (currentSwatch, faceName, property) {
    currentPaletteTarget = { currentSwatch, faceName, property };

    const palettePicker = document.getElementById('palette-picker');
    if (!palettePicker) return;

    // Position near the clicked swatch
    const rect = currentSwatch.getBoundingClientRect();
    palettePicker.style.left = (rect.right + 10) + 'px';
    palettePicker.style.top = (Math.min(350, rect.top)) + 'px';
    palettePicker.style.display = 'block';
  };

  // Hide palette modal
  window.hidePalette = function () {
    const palettePicker = document.getElementById('palette-picker');
    if (palettePicker) {
      palettePicker.style.display = 'none';
    }
    currentPaletteTarget = null;
  };

  // Set color from palette selection
  window.setColorFromPalette = function (colorValue) {
    if (!currentPaletteTarget) return;

    const { faceName, property, currentSwatch } = currentPaletteTarget;

    // Update the color
    window.updateFaceColor(faceName, property, colorValue);

    window.currentThemeData = extractFacesFromStyleTags();

    // Update the swatch display
    if (currentSwatch) {
      currentSwatch.style.background = colorValue;
    }

    // Update the current color text
    const parent = currentSwatch?.closest('.current-swatch')?.parentElement;
    if (parent) {
      const currentSpan = parent.querySelector('span');
      if (currentSpan) {
        /// FIXME: Never
        console.log('Current swatch Span and color value')
        console.log(currentSpan)
        console.log(colorValue)
        currentSpan.textContent = colorValue;
        currentSpan.style.color = colorValue;
      }
    }

    // Hide the palette
    window.hidePalette();
  };

  function extractFacesFromStyleTags() {
    const faces = new Set();
    const currentColors = {};
    const groupMappings = {};

    // Parse all embedded style tags
    document.querySelectorAll('style').forEach(styleTag => {
      const cssText = styleTag.textContent;

      // Parse each CSS rule
      const ruleRegex = /\.([^{\s]+)\s*{([^}]*)}/g;
      let match;

      while ((match = ruleRegex.exec(cssText)) !== null) {
        const faceName = match[1].trim();

        if (tailwindClassFilter(faceName)) {
          continue; // Skip Tailwind classes
        }

        const properties = match[2];

        // Extract color and background-color
        const colorMatch = properties.match(/color:\s*([^;]+)/i);
        const bgMatch = properties.match(/background:\s*([^;]+)/i);

        const color = colorMatch ? colorMatch[1].trim() : '';
        const background = bgMatch ? bgMatch[1].trim() : '';

        // Check if this is an auto-generated padded-number class
        const paddedNumberMatch = faceName.match(/-\d+$/);
        let displayName = faceName;

        if (paddedNumberMatch) {
          const baseName = faceName.replace(/-\d+$/, '');

          // Add to group mappings - include both base and numbered class
          if (!groupMappings[baseName]) {
            groupMappings[baseName] = new Set();
          }
          groupMappings[baseName].add(baseName);    // Add base class
          groupMappings[baseName].add(faceName);    // Add numbered class
          displayName = baseName; // Use base name for display
        }

        faces.add(displayName);

        // Store colors with both actual and display names
        currentColors[faceName] = {
          color: color,
          background: background
        };
        currentColors[displayName] = {
          color: color,
          background: background
        };
      }
    });

    // Convert Sets to Arrays for groupMappings
    Object.keys(groupMappings).forEach(key => {
      groupMappings[key] = Array.from(groupMappings[key]);
    });

    // Store group mappings
    currentColors.groupMappings = groupMappings;

    return { faces: Array.from(faces).sort(), currentColors };
  }

  function updateFaceColor(faceName, property, value) {
    let updated = false;

    // Check if this is a grouped class name
    const groupMappings = window.currentThemeData?.currentColors?.groupMappings || {};

    if (groupMappings[faceName]) {
      // Update all classes in this group
      groupMappings[faceName].forEach(actualClassName => {
        updated = updateSingleClass(actualClassName, property, value) || updated;
      });
    } else {
      // Update single class
      updated = updateSingleClass(faceName, property, value);
    }

    // Special handling for .default class - update body styles
    if ((faceName === 'default' || groupMappings['default']?.includes(faceName)) && updated) {
      if (property === 'color') {
        document.body.style.color = value;
        document.querySelectorAll('pre').forEach((e) => e.style.color = value)
      } else if (property === 'background') {
        document.body.style.background = value;
        document.querySelectorAll('pre').forEach((e) => e.style.background = value)
      }
    }

    return updated;
  }

  function updateSingleClass(className, property, value) {
    let updated = false;

    document.querySelectorAll('style').forEach(styleTag => {
      const oldCss = styleTag.textContent;

      // Regex to find and update the specific property in this face
      const regex = new RegExp(`(\\.${className}\\s*{[^}]*?)(${property}:\\s*[^;]+)([^}]*)}`, 'i');
      const regexAdd = new RegExp(`(\\.${className}\\s*{)([^}]*)(})`, 'i');

      if (regex.test(oldCss)) {
        // Replace existing property
        styleTag.textContent = oldCss.replace(regex, `$1${property}: ${value}$3}`);
        updated = true;
      } else if (regexAdd.test(oldCss)) {
        // Add new property to existing rule
        styleTag.textContent = oldCss.replace(regexAdd, `$1$2; ${property}: ${value}$3`);
        updated = true;
      }
    });

    return updated;
  }

  function getPaletteColors() {
    try {
      const paletteData = localStorage.getItem('palette');
      if (paletteData) {
        const palette = JSON.parse(paletteData);
        if (Array.isArray(palette)) {
          palette.push({ name: 'transparent', color: 'transparent' })
          return palette;
        } else {
          return []
        }
      }
    } catch (e) {
      console.error('Error loading palette:', e);
    }
    return [{ color: '#000000', name: 'Black' }, { color: '#FFFFFF', name: 'White' }]; // Fallback colors
  }

  function createPalettePicker(paletteColors) {
    const palettePicker = document.createElement('div');
    palettePicker.id = 'palette-picker';
    palettePicker.className = palettePickerClasses;

    palettePicker.innerHTML = `
    <div
      onclick="window.hidePalette()"
      class="
        absolute top-[-26px] right-[-20px]
        cursor-pointer rounded-full bg-[#222] p-1
        border-1 border-[#444]
      ">
        ${closeIcon}
      </div>
      <div class="flex flex-wrap gap-1 w-[16em] bg-[#222] border-[#444] border-1 rounded-lg p-2">
        ${paletteColors.map(paletteItem => `
          <div
              class="palette-swatch"
              style="width: 20px; height: 20px; background: ${paletteItem.color}; border: 1px solid #666; cursor: pointer;"
              title="${paletteItem.name}"
              onclick="window.setColorFromPalette('${paletteItem.color}')">
          </div>
          `)
        .join('')}
      </div>
      `;
    palettePicker.style.display = 'none';
    palettePicker.style.zIndex = 9999;
    palettePicker.style.position = 'fixed';

    return palettePicker;
  }

  function createColorSwatches(faceName, currentColor, property, paletteColors) {
    // Check if this is a grouped face
    const groupMappings = window.currentThemeData?.currentColors?.groupMappings || {};
    const isGrouped = groupMappings[faceName];
    const groupInfo = isGrouped ? ` (${groupMappings[faceName].length} classes)` : '';

    return `
    <div style="margin-bottom: 8px;">
      <div style="font-size: 10px; margin-bottom: 4px;">
        ${property}${groupInfo}:
      </div>
      <div style="display: flex; align-items: center; gap: 5px;">
        <!-- Current color swatch - click to show palette -->
        <div class="current-swatch"
             style="width: 30px; height: 30px; background: ${currentColor || 'transparent'}; border-radius: 20px; border: 1px solid #333; cursor: pointer;"
             title="Click to choose color"
             onclick="window.showPalette(this, '${faceName}', '${property}')">
        </div>
      </div>
      <div style="font-size: 9px; color: #888; margin-top: 2px;">
        <span style="color: #FFF">${currentColor || 'not set'}</span>
      </div>
    </div>
  `;
  }

  function createColorEditor() {
    const themeData = extractFacesFromStyleTags();
    window.currentThemeData = themeData; // Store for later use

    const { faces, currentColors } = themeData;
    const paletteColors = getPaletteColors();

    console.log('Found faces:', faces);
    console.log('Group mappings:', currentColors.groupMappings);
    console.log('Using palette:', paletteColors);

    if (faces.length === 0) {
      toast('No CSS classes found in embedded styles. Check console for details.');
      return;
    }

    // Apply body styles if .default class exists
    if (currentColors.default) {
      if (currentColors.default.color) {
        document.body.style.color = currentColors.default.color;
      }
      if (currentColors.default.background) {
        document.body.style.background = currentColors.default.background;
      }
    }


    const editor = document.createElement('div');
    editor.id = 'theme-editor';
    editor.innerHTML = `
      <div class="fixed top-1 w-[35vw] right-1 bg-[#222] p-3 rounded-xl border-[#333] border-1" style="color: #FFFFFF">
        <div class="flex justify-between items-center mb-2 gap-2">
          <div class="${headingClasses}">${paletteIcon} Theme Editor</div>
          <div class="font-[10px] text-[#aaa]">
            ${paletteColors.length} colors in palette
          </div>
        </div>
        <div class="flex items-center justify-start gap-2">
          <div
            class="${buttonTailwind} flex flex-row items-center gap-2"
            onclick="window.exportTheme()"
            >${copyIcon} Copy Theme</div>
          <div
            class="${buttonTailwind}"
            onclick="window.importTheme()"
            >Import Theme</div>
          <div
            class="${buttonTailwind}"
            onclick="window.saveThemeLocalData()"
            >Save Theme</div>
          <div
            class="${buttonTailwind}"
            onclick="window.loadThemeLocalData()"
            >Load Theme</div>
        </div>
        <div style="font-size: 11px; color: #aaa; margin-bottom: 10px;">
          ${faces.length} faces found
          ${Object.keys(currentColors.groupMappings || {}).length > 0 ? ` (${Object.keys(currentColors.groupMappings).length} groups)` : ''}
        </div>
        <div style="max-height: 60vh; overflow-y: auto;">
          ${faces.sort((a, b) => {
      if (a === "default") return -1;
      if (b === "default") return 1;
      return a.localeCompare(b, undefined, { numeric: true });
    })
        .map(face => {
          const groupMappings = currentColors.groupMappings || {};
          const isGrouped = groupMappings[face];
          const isDefault = face === 'default' || groupMappings['default']?.includes(face);
          const emacsFaceName = Object.keys(window.mapFontLockCssToEmacsFace)
            .includes(face)
            ? window.mapFontLockCssToEmacsFace[face] : face

          return `
              <div style="margin: 12px 0; padding: 8px; border-bottom: 1px solid #333; background: #111; ${isDefault ? 'border-left: 3px solid #4CAF50;' : ''}">
                <div style="font-weight: bold; margin-bottom: 8px; font-size: 13px;">
                  ${emacsFaceName}
                  ${isGrouped ? ` <span style="color: #FF9800; font-size: 10px;">group</span>` : ''}
                </div>
                <div style="display: flex; gap: 15px;">
                  ${createColorSwatches(face, currentColors[face]?.color, 'color', paletteColors)}
                  ${createColorSwatches(face, currentColors[face]?.background, 'background', paletteColors)}
                </div>
              </div>
            `;
        }).join('')}
        </div>
        <div class="text-[9pt] font-[Inter] mt-2">Save/Load via <code>localstorage</code> as <code>"theme"</code></div>
        <div class="text-[9pt] font-[Inter]">Active palette read from <code>localstorage</code> as <code>"palette"</code></div>
      </div>
    `;


    // Add palette picker to document
    const palettePicker = createPalettePicker(paletteColors);
    document.body.appendChild(palettePicker);
    document.body.appendChild(editor);
  }

  function parseTheme(themeJson, reporter) {
    try {
      const theme = JSON.parse(themeJson);
      Object.entries(theme).forEach(([faceName, colors]) => {
        if (colors.color) updateFaceColor(faceName, 'color', colors.color);
        if (colors.background) updateFaceColor(faceName, 'background', colors.background);
      });
      reporter('Theme imported!');
    } catch (e) {
      reporter('Invalid JSON: ' + e.message);
    }
  }

  function saveThemeLocalData() {
    const themeData = JSON.stringify(window.currentThemeData.currentColors, null, 2);
    localStorage.setItem('theme', themeData);
    toast('Theme saved to localStorage!');
  }

  function loadThemeLocalData() {
    const themeJson = localStorage.getItem('theme');
    if (!themeJson) {
      toast('No saved theme found in localStorage.');
      return;
    }
    parseTheme(themeJson, toast);
    window.refreshThemeEditor();
  }

  function exportTheme() {
    const themeDataWithEmacsNames = {};

    Object.entries(window.currentThemeData.currentColors).forEach(([cssClassName, colors]) => {
      if (cssClassName === 'groupMappings') return;

      if (!colors || typeof colors !== 'object' || !('color' in colors || 'background' in colors)) return;

      const emacsFaceName = window.mapFontLockCssToEmacsFace[cssClassName] || cssClassName;
      themeDataWithEmacsNames[emacsFaceName] = colors;
    });

    const themeJson = JSON.stringify(themeDataWithEmacsNames, null, 2);
    copyText(themeJson);
    console.log(themeJson)
  }

  function importTheme() {
    const themeJson = prompt('Paste theme JSON:');
    if (!themeJson) return;
    parseTheme(themeJson, alert)
    window.refreshThemeEditor();
  }

  function refreshEditor() {
    const existingEditor = document.getElementById('theme-editor');
    if (existingEditor) {
      existingEditor.remove();
    }
    const existingPicker = document.getElementById('palette-picker');
    if (existingPicker) {
      existingPicker.remove();
    }
    createColorEditor();
  }

  // Negate this predicate to remove tailwindClasses
  function tailwindClassFilter(name) {
    return window.tailwindClassFilterList.some(
      (prefix) => name == prefix || name.startsWith(prefix)
    )
  }

  // Make global
  window.tailwindClassFilterList = [
    "absolute",
    "fixed",
    "relative",
    "top-",
    "right-",
    "m-",
    "my-",
    "mt-",
    "mb-",
    "flex",
    "flex-",
    "grid",
    "grid-",
    "hidden",
    "h-",
    "w-",
    "cursor-move",
    "cursor-pointer",
    "items-",
    "justify-",
    "gap-",
    "rounded",
    "rounded-",
    "border-",
    "bg-",
    "p-",
    "px-",
    "py-",
    "text-",
    "font-",
    "shadow-",
    "duration-",
    "hover"
  ]

  window.mapFontLockCssToEmacsFace = {
    "warning": "font-lock-warning-face",
    "function-name": "font-lock-function-name-face",
    "function-call": "font-lock-function-call-face",
    "variable-name": "font-lock-variable-name-face",
    "variable-use": "font-lock-variable-use-face",
    "keyword": "font-lock-keyword-face",
    "comment": "font-lock-comment-face",
    "comment-delimiter": "font-lock-comment-delimiter-face",
    "type": "font-lock-type-face",
    "constant": "font-lock-constant-face",
    "builtin": "font-lock-builtin-face",
    "preprocessor": "font-lock-preprocessor-face",
    "string": "font-lock-string-face",
    "doc": "font-lock-doc-face",
    "doc-markup": "font-lock-doc-markup-face",
    "negation-char": "font-lock-negation-char-face",
    "escape": "font-lock-escape-face",
    "number": "font-lock-number-face",
    "operator": "font-lock-operator-face",
    "property-name": "font-lock-property-name-face",
    "property-use": "font-lock-property-use-face",
    "punctuation": "font-lock-punctuation-face",
    "bracket": "font-lock-bracket-face",
    "delimiter": "font-lock-delimiter-face",
    "misc-punctuation": "font-lock-misc-punctuation-face",
  }

  window.extractFacesFromStyleTags = extractFacesFromStyleTags;
  window.updateFaceColor = updateFaceColor;
  window.exportTheme = exportTheme;
  window.importTheme = importTheme;
  window.saveThemeLocalData = saveThemeLocalData;
  window.loadThemeLocalData = loadThemeLocalData;
  window.refreshThemeEditor = refreshEditor;

  // Initialize
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createColorEditor);
  } else {
    createColorEditor();
  }
})();
