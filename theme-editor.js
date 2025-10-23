// theme-editor.js - Fixed for embedded styles
(function() {
    'use strict';
    
    function extractFacesFromStyleTags() {
        const faces = new Set();
        const currentColors = {};
        
        // Parse all embedded style tags
        document.querySelectorAll('style').forEach(styleTag => {
            const cssText = styleTag.textContent;
            
            // Parse each CSS rule
            const ruleRegex = /\.([^{\s]+)\s*{([^}]*)}/g;
            let match;
            
            while ((match = ruleRegex.exec(cssText)) !== null) {
                const faceName = match[1].trim();
                const properties = match[2];
                faces.add(faceName);
                
                // Extract color and background-color
                const colorMatch = properties.match(/color:\s*([^;]+)/i);
                const bgMatch = properties.match(/background-color:\s*([^;]+)/i);
                
                currentColors[faceName] = {
                    color: colorMatch ? colorMatch[1].trim() : '',
                    backgroundColor: bgMatch ? bgMatch[1].trim() : ''
                };
            }
        });
        
        return { faces: Array.from(faces).sort(), currentColors };
    }
    
    function updateFaceColor(faceName, property, value) {
        let updated = false;
        
        document.querySelectorAll('style').forEach(styleTag => {
            const oldCss = styleTag.textContent;
            
            // Regex to find and update the specific property in this face
            const regex = new RegExp(`(\\.${faceName}\\s*{[^}]*?)(${property}:\\s*[^;]+)([^}]*)}`, 'i');
            const regexAdd = new RegExp(`(\\.${faceName}\\s*{)([^}]*)(})`, 'i');
            
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
    
    // Rest of the functions remain the same...
    function createColorEditor() {
        const { faces, currentColors } = extractFacesFromStyleTags();
        
        console.log('Found faces:', faces); // Debug log
        
        if (faces.length === 0) {
            alert('No CSS classes found in embedded styles. Check console for details.');
            return;
        }
        
        const editor = document.createElement('div');
        editor.id = 'theme-editor';
        editor.innerHTML = `
        <div style="position: fixed; top: 10px; right: 10px; background: #090909; border: 1px solid #222; padding: 15px; z-index: 1000; max-height: 80vh; overflow-y: auto; font-family: Arial, sans-serif; font-size: 12px; box-shadow: 0 4px 8px rgba(0,0,0,0.3); border-radius: 5px; min-width: 300px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                    <h3 style="margin: 0;">🎨 Theme Editor</h3>
                </div>
                <div style="margin-bottom: 10px;">
                    <button onclick="window.exportTheme()" style="margin-right: 5px; padding: 4px 8px;">Export Theme</button>
                    <button onclick="window.importTheme()" style="padding: 4px 8px;">Import Theme</button>
 
                    <button onclick="window.saveThemeLocalData()" style="margin-right: 5px; padding: 4px 8px;">Save Theme</button>
                    <button onclick="window.loadThemeLocalData()" style="padding: 4px 8px;">Load Theme</button>
                </div>
                <div style="font-size: 11px; color: #aaa; margin-bottom: 10px;">
                    ${faces.length} faces found
                </div>
                <div style="max-height: 60vh; overflow-y: auto;">
                    ${faces.map(face => `
                        <div style="margin: 8px 0; padding: 5px; border-bottom: 1px solid #eee;">
                            <div style="font-weight: bold; margin-bottom: 4px;">${face}</div>
                            <div style="display: flex; gap: 10px; align-items: center;">
                                <div>
                                    <div style="font-size: 10px;">Text:</div>
                                    <input type="color" 
                                           value="${currentColors[face].color ? convertToHex(currentColors[face].color) : '#FFFFFF'}" 
                                           onchange="window.updateFaceColor('${face}', 'color', this.value)"
                                           style="width: 50px; height: 50px;">
                                </div>
                                <div>
                                    <div style="font-size: 10px;">Background:</div>
                                    <input type="color" 
                                           value="${currentColors[face].backgroundColor ? convertToHex(currentColors[face].backgroundColor) : '#000000'}" 
                                           onchange="window.updateFaceColor('${face}', 'backgroundColor', this.value)"
                                           style="width: 50px; height: 50px;">
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        document.body.appendChild(editor);
    }
    
    // Helper to convert CSS colors to hex for color inputs
    function convertToHex(cssColor) {
        if (cssColor.startsWith('#')) return cssColor;
        if (cssColor.startsWith('rgb')) {
            // Simple rgb to hex conversion
            const rgb = cssColor.match(/\d+/g);
            if (rgb) {
                return '#' + rgb.map(x => {
                    const hex = parseInt(x).toString(16);
                    return hex.length === 1 ? '0' + hex : hex;
                }).join('');
            }
        }
        return '#000000'; // fallback
    }
    
    function parseTheme(themeJson, reporter) {
	try {
            const theme = JSON.parse(themeJson);
            Object.entries(theme).forEach(([faceName, colors]) => {
                if (colors.color) updateFaceColor(faceName, 'color', colors.color);
                if (colors.backgroundColor) updateFaceColor(faceName, 'backgroundColor', colors.backgroundColor);
            });
            reporter('Theme imported!');
        } catch (e) {
            reporter('Invalid JSON: ' + e.message);
        }
    }
    
    function saveThemeLocalData() {
	const { currentColors } = extractFacesFromStyleTags();
	const { themeData } = JSON.stringify(currentColors, null, 2);
	localStorage.setItem('theme', themeData);
    }

    function loadThemeLocalData() {
	const themeJson = localStorage.getItem('theme')
	if (!themeJson) return;	  
	parseTheme(themeJson, alert)
    }
    
    // Export/Import functions...
    function exportTheme() {
        const { currentColors } = extractFacesFromStyleTags();
        const themeData = JSON.stringify(currentColors, null, 2);
        alert('Theme data:\n\n' + themeData);
    }
    
    function importTheme() {
        const themeJson = prompt('Paste theme JSON:');
        if (!themeJson) return;
        parseTheme(themeJson, alert)
    }
    
    // Make global
    window.extractFacesFromStyleTags = extractFacesFromStyleTags;
    window.updateFaceColor = updateFaceColor;
    window.exportTheme = exportTheme;
    window.importTheme = importTheme;
    
    // Initialize
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createColorEditor);
    } else {
        createColorEditor();
    }
})();
