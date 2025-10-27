// palette-swatches.js

(function () {
  'use strict';

  window.toast = (text) => {
    Toastify({
      text: text,
      gravity: 'bottom',
      position: 'center',
      duration: 3000,
      style: {
        background: '#111',
        border: '1px solid #444',
        borderRadius: '1em',
      }
    }).showToast()
  }

  window.copyText = (text) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      toast(`${text}\ncopied to clipboard`)
    } else {
      console.log(text)
      toast(`Cannot be copied\n*requires HTTPS/SSL for clipboard access.\nCopy sent to console.`);
    }
  }

  window.saveLocationNote = `<div class="text-[9pt] font-[Inter]">Saved in <code>localstorage</code> as <code>"palette"</code> and to clipboard</div>`

  window.headingClasses = `
  font-[Inter] text-lg text-[#FFF]} flex flex-row gap-2 items-center
  `

  window.paletteHeaderClasses = `
    palette-header
    bg-[#2a2a2a]
    py-2 px-3
    border-b-1 border-[#333]
    cursor-move
    flex
    justify-between
    rounded-t-xl
    items-center
    w-[35vw]
  `

  window.ghostButton = `
  text-[#AAA] cursor-pointer hover:text-[#FFF]
  `

  window.buttonTailwind = `
    hover:bg-[#111]
    transition-color
    duration-500
    bg-[#333] text-[#FFF]
    px-3 py-1
    rounded-full
    flex
    flex-row
    items-center
    justify-between
    cursor-pointer
    text-center
    font-[Inter]
  `
  window.buttonTailwindRed = buttonTailwind.replace('111', '400').replace('333', '800')

  window.paletteIcon = `
    <svg xmlns="http://www.w3.org/2000/svg"
      width="16" height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1"
      stroke-linecap="round"
      stroke-linejoin="round">
        <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/>
        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
        <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
        <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
    </svg>
  `

  window.copyIcon = `
    <svg xmlns="http://www.w3.org/2000/svg"
         width="16" height="16"
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         stroke-width="1"
         stroke-linecap="round"
         stroke-linejoin="round">
         <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
         <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
    </svg>
  `

  window.trashIcon = `
    <svg xmlns="http://www.w3.org/2000/svg"
      width="16" height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1"
      stroke-linecap="round"
      stroke-linejoin="round"
      >
        <path d="M10 11v6"/><path d="M14 11v6"/>
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/>
        <path d="M3 6h18"/>
        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
    </svg>
  `
  window.minusIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus-icon lucide-minus"><path d="M5 12h14"/></svg>
  `

  const defaultPalette = [
    {
      "color": "#090000",
      "name": "cherry-deepestdark"
    },
    {
      "color": "#130000",
      "name": "cherry-deepdark"
    },
    {
      "color": "#ffdce3",
      "name": "cherry-powder"
    },
    {
      "color": "#ffa3b7",
      "name": "cherry-sakura"
    },
    {
      "color": "#ff5c8b",
      "name": "cherry-frosting"
    },
    {
      "color": "#e00064",
      "name": "cherry-gummy"
    },
    {
      "color": "#a00045",
      "name": "cherry-brite"
    },
    {
      "color": "#640028",
      "name": "cherry-lips"
    },
    {
      "color": "#2c000e",
      "name": "cherry-cola"
    },
    {
      "color": "#7D0109",
      "name": "cherry-deep-lighter-30%"
    },
    {
      "color": "#9A020B",
      "name": "cherry-deep-lighter-60%"
    },
    {
      "color": "#6E0000",
      "name": "cherry-deep-upsat-30%"
    },
    {
      "color": "#7D0000",
      "name": "cherry-deep-upsat-60%"
    },
    {
      "color": "#520F13",
      "name": "cherry-deep-desat-30%"
    },
    {
      "color": "#431E20",
      "name": "cherry-deep-desat-60%"
    },
    {
      "color": "#430105",
      "name": "cherry-deep-darker-30%"
    },
    {
      "color": "#260003",
      "name": "cherry-deep-darker-60%"
    },
    {
      "color": "#980716",
      "name": "cherry-crimson-lighter-30%"
    },
    {
      "color": "#BB081B",
      "name": "cherry-crimson-lighter-60%"
    },
    {
      "color": "#860004",
      "name": "cherry-crimson-upsat-30%"
    },
    {
      "color": "#970000",
      "name": "cherry-crimson-upsat-60%"
    },
    {
      "color": "#64161E",
      "name": "cherry-crimson-desat-30%"
    },
    {
      "color": "#53272B",
      "name": "cherry-crimson-desat-60%"
    },
    {
      "color": "#52040C",
      "name": "cherry-crimson-darker-30%"
    },
    {
      "color": "#2F0207",
      "name": "cherry-crimson-darker-60%"
    },
    {
      "color": "#BD1219",
      "name": "cherry-red-lighter-30%"
    },
    {
      "color": "#E8161E",
      "name": "cherry-red-lighter-60%"
    },
    {
      "color": "#A50001",
      "name": "cherry-red-upsat-30%"
    },
    {
      "color": "#B80000",
      "name": "cherry-red-upsat-60%"
    },
    {
      "color": "#7D2225",
      "name": "cherry-red-desat-30%"
    },
    {
      "color": "#6A3537",
      "name": "cherry-red-desat-60%"
    },
    {
      "color": "#660A0D",
      "name": "cherry-red-darker-30%"
    },
    {
      "color": "#3A0608",
      "name": "cherry-red-darker-60%"
    },
    {
      "color": "#B21637",
      "name": "cherry-bright-lighter-30%"
    },
    {
      "color": "#DB1B43",
      "name": "cherry-bright-lighter-60%"
    },
    {
      "color": "#9B001F",
      "name": "cherry-bright-upsat-30%"
    },
    {
      "color": "#AD0015",
      "name": "cherry-bright-upsat-60%"
    },
    {
      "color": "#772335",
      "name": "cherry-bright-desat-30%"
    },
    {
      "color": "#65353F",
      "name": "cherry-bright-desat-60%"
    },
    {
      "color": "#600C1D",
      "name": "cherry-bright-darker-30%"
    },
    {
      "color": "#370711",
      "name": "cherry-bright-darker-60%"
    },
    {
      "color": "#F7E3C1",
      "name": "cream-bright-upsat-30%"
    },
    {
      "color": "#FEE4BA",
      "name": "cream-bright-upsat-60%"
    },
    {
      "color": "#EBE0CD",
      "name": "cream-bright-desat-30%"
    },
    {
      "color": "#E4DED4",
      "name": "cream-bright-desat-60%"
    },
    {
      "color": "#D7A85D",
      "name": "cream-bright-darker-30%"
    },
    {
      "color": "#8D6523",
      "name": "cream-bright-darker-60%"
    },
    {
      "color": "#FCFBFA",
      "name": "cream-clotted-lighter-30%"
    },
    {
      "color": "#D5C2AD",
      "name": "cream-clotted-upsat-30%"
    },
    {
      "color": "#D9C3A9",
      "name": "cream-clotted-upsat-60%"
    },
    {
      "color": "#CCC2B6",
      "name": "cream-clotted-desat-30%"
    },
    {
      "color": "#C7C1BB",
      "name": "cream-clotted-desat-60%"
    },
    {
      "color": "#A4896A",
      "name": "cream-clotted-darker-30%"
    },
    {
      "color": "#604E3B",
      "name": "cream-clotted-darker-60%"
    },
    {
      "color": "#D5CBBE",
      "name": "cream-crust-lighter-30%"
    },
    {
      "color": "#F9F8F7",
      "name": "cream-crust-lighter-60%"
    },
    {
      "color": "#B69F80",
      "name": "cream-crust-upsat-30%"
    },
    {
      "color": "#BDA079",
      "name": "cream-crust-upsat-60%"
    },
    {
      "color": "#AA9D8C",
      "name": "cream-crust-desat-30%"
    },
    {
      "color": "#A39C93",
      "name": "cream-crust-desat-60%"
    },
    {
      "color": "#837056",
      "name": "cream-crust-darker-30%"
    },
    {
      "color": "#4B4031",
      "name": "cream-crust-darker-60%"
    },
    {
      "color": "#FBF9F3",
      "name": "cream-custard-lighter-30%"
    },
    {
      "color": "#EDCF8F",
      "name": "cream-custard-upsat-30%"
    },
    {
      "color": "#F8D384",
      "name": "cream-custard-upsat-60%"
    },
    {
      "color": "#D7C7A5",
      "name": "cream-custard-desat-30%"
    },
    {
      "color": "#CCC3B0",
      "name": "cream-custard-desat-60%"
    },
    {
      "color": "#C99D41",
      "name": "cream-custard-darker-30%"
    },
    {
      "color": "#765B22",
      "name": "cream-custard-darker-60%"
    },
    {
      "color": "#FF0000",
      "name": "ansi-red"
    },
    {
      "color": "#00FF00",
      "name": "ansi-green"
    },
    {
      "color": "#0000FF",
      "name": "ansi-blue"
    },
    {
      "color": "#FFFF00",
      "name": "ansi-yellow"
    },
    {
      "color": "#FF00FF",
      "name": "ansi-magenta"
    },
    {
      "color": "#00FFFF",
      "name": "ansi-cyan"
    },
    {
      "color": "#FFFFFF",
      "name": "ansi-white"
    },
    {
      "color": "#000000",
      "name": "ansi-black"
    },
    {
      "color": "#990000",
      "name": "ansi-red-60"
    },
    {
      "color": "#009900",
      "name": "ansi-green-60"
    },
    {
      "color": "#000099",
      "name": "ansi-blue-60"
    },
    {
      "color": "#999900",
      "name": "ansi-yellow-60"
    },
    {
      "color": "#990099",
      "name": "ansi-magenta-60"
    },
    {
      "color": "#009999",
      "name": "ansi-cyan-60"
    },
    {
      "color": "#999999",
      "name": "ansi-white-60"
    },
    {
      "color": "#111111",
      "name": "ansi-black-60"
    }
  ];


  let currentPalette = [...defaultPalette];
  let isDragging = false;
  let dragOffset = { x: 0, y: 0 };

  window.togglePaletteContent = function () {
    const paletteContent = document.getElementById('palette-content')
    paletteContent.hidden = !paletteContent.hidden
  }

  function createSwatch(color, name, index) {
    const swatch = document.createElement('div');
    swatch.className = 'palette-swatch relative flex items-center justify-center';
    swatch.innerHTML = `
            <input type="text"
                   value="${color}"
                   data-coloris
                   onchange="window.updateSwatchColor(${index}, this.value)"
                   class="
                       w-full h-full border-1 border-[#333] cursor-pointer p-0 m-0
                   ">
            <div class="
                     swatch-controls
                     flex flex-row gap-2
                     px-2 py-1 rounded-lg
                     hidden
                     absolute
                     top-[-70px]
                     right-10
                     bg-[#242424] border-1 border-[#333]
                 ">
              <div style="font-size: small">
                ${color}
                <span style="font-size: x-small" >${name}</span>
              </div>
              <div onclick="window.deleteSwatch(${index})" class="${ghostButton}">
                ${trashIcon}
              </div>
              <div  onclick="copyText('${color}')" class="${ghostButton}">
                ${copyIcon}
              </div>
            </div>
        `;

    swatch.addEventListener('mouseenter', () => {
      swatch.querySelector('.swatch-controls').style.display = 'flex';
    });

    swatch.addEventListener('mouseleave', () => {
      swatch.querySelector('.swatch-controls').style.display = 'none';
    });

    return swatch;
  }

  function makeDraggable(container) {
    const header = container.querySelector('.palette-header');

    header.addEventListener('mousedown', startDrag);
    document.addEventListener('mousemove', onDrag);
    document.addEventListener('mouseup', stopDrag);

    function startDrag(e) {
      if (e.target.tagName === 'BUTTON') return;
      isDragging = true;
      const rect = container.getBoundingClientRect();
      dragOffset.x = e.clientX - rect.left;
      dragOffset.y = e.clientY - rect.top;
    }

    function onDrag(e) {
      if (!isDragging) return;
      container.style.left = (e.clientX - dragOffset.x) + 'px';
      container.style.top = (e.clientY - dragOffset.y) + 'px';
      container.style.right = 'auto';
    }

    function stopDrag() {
      isDragging = false;
    }
  }

  function renderPalette() {
    const container = document.getElementById('palette-swatches') || createPaletteContainer();
    const swatchesContainer = container.querySelector('.palette-swatches-grid');
    swatchesContainer.innerHTML = '';

    currentPalette.forEach((swatch, index) => {
      swatchesContainer.appendChild(createSwatch(swatch.color, swatch.name, index));
    });
  }

  function createPaletteContainer() {
    const container = document.createElement('div');
    container.id = 'palette-swatches';
    container.style.color = '#FFFFFF;'
    container.className = `
      fixed
      rounded-xl
      bg-[#1a1a1a]
      border-1
      border-[#333]
      p-0
      zindex-[10001]
      shadow-xl
      top-1
      right-[36vw]
      w-[35vw]
    `

    container.innerHTML = `
            <div class="${paletteHeaderClasses}" style="color: #FFFFFF">
                <div class="${headingClasses}">${paletteIcon} Palette Editor</div>
                <div class="${buttonTailwind}"
                  onclick='togglePaletteContent()'
                >${minusIcon}</div>
            </div>
            <div id='palette-content' class="palette-content w-[35vw]" style="padding: 10px; color: #FFFFFF" hidden>
                <div class="palette-swatches-grid grid grid-cols-8 gap-1 w-[35vw]"></div>
                <div class="flex flex-row gap-2 my-2">
                    <div onclick="window.showImportDialog()"
                    class="${buttonTailwind}">Import</div>
                    <div onclick="window.loadPaletteLocalData()"
                    class="${buttonTailwind}">Load</div>
                    <div onclick="window.savePaletteLocalData()"
                    class="${buttonTailwind}">Save</div>
                    <div onclick="window.addSwatch()"
                    class="${buttonTailwind}">Add</div>
                </div>
                ${saveLocationNote}
            </div>
        `;

    document.body.appendChild(container);
    makeDraggable(container);
    return container;
  }

  function showImportDialog() {
    const dialog = document.createElement('div');
    dialog.className = `
            fixed
            top-[50%] left-[50%]
            bg-[#1a1a1a]
            border-1 border-[#333]
            p-2
            zindex-[10002]
            rounded-xl
            text-[white]
        `;
    dialog.style.cssText = `transform: translate(-50%, -50%);`

    dialog.innerHTML = `
            <div class="${headingClasses} mb-1">Import/Copy Palette</div>
            <textarea id="palette-import-text" class="bg-[#2a2a3a] text-[#FFF]" style="
                width: 400px;
                height: 200px;"
                placeholder="Paste your palette array here...">${JSON.stringify(currentPalette, null, 2)}</textarea>
            <div class="my-2 flex flex-row gap-2">
                <div onclick="window.importFromTextarea()"
                class="${buttonTailwind}"
                >Import From TextArea</div>
	              <div onclick="window.loadPaletteLocalData()"
                class="${buttonTailwind}"
                >Load</div>
	              <div onclick="window.savePaletteLocalData()"
                class="${buttonTailwind}"
                >Save</div>
	              <div onclick="this.parentElement.parentElement.remove()"
                class="${buttonTailwindRed}"
                >Close</div>
            </div>
            ${saveLocationNote}
        `;

    document.body.appendChild(dialog);
  }

  // Inject Coloris
  const colorisLink = document.createElement('link');
  colorisLink.rel = 'stylesheet';
  colorisLink.href = 'https://cdn.jsdelivr.net/gh/mdbassit/Coloris@latest/dist/coloris.min.css';

  const colorisScript = document.createElement('script');
  colorisScript.src = 'https://cdn.jsdelivr.net/gh/mdbassit/Coloris@latest/dist/coloris.min.js'

  document.head.appendChild(colorisLink)
  document.head.appendChild(colorisScript)

  // Add this to your initialization code, right after Coloris is loaded
  const colorisOverrideStyles = document.createElement('style');
  colorisOverrideStyles.textContent = `
    /* Target Coloris-generated structure specifically for palette swatches */
    .palette-swatch .clr-field {
      width: 2em;
      height: 2em;
    }

    .palette-swatch .clr-field button {
      width: 100% !important;
      height: 100% !important;
      border: 1px solid #333 !important;
      border-radius: 0.25rem !important;
      background: transparent !important;
      margin: 0 !important;
      padding: 0 !important;
      min-width: auto !important;
      min-height: auto !important;
    }

    .palette-swatch .clr-field input {
      display:  !important;
      opacity: 0 !important;
      position: absolute !important;

    }

    /* Ensure the clr-field doesn't interfere with your popover */
    .palette-swatch .clr-field {
      z-index: 1 !important;
    }

    .palette-swatch .swatch-controls {
      z-index: 10 !important;
    }
  `;

  // Inject the styles - you might want to add this after Coloris is loaded
  document.head.appendChild(colorisOverrideStyles);

  setTimeout(() => {
    Coloris({
      theme: 'pill',
      themeMode: 'auto',
      formatToggle: true,
      onChange: (color, inputEl) => {
        console.log(`The new color is ${color}`);
      }
    });
  }, 2000)

  // Public API
  window.updateSwatchColor = function (index, newColor) {
  currentPalette[index].color = newColor;

  // Update the visual color of the button
  const swatch = document.querySelectorAll('.palette-swatch')[index];
  const colorButton = swatch.querySelector('.clr-field button');
  if (colorButton) {
    colorButton.style.backgroundColor = newColor;
  }

  // Coloris should handle updating the input value and its internal state
};

  window.savePaletteLocalData = function () {
    const jsonPalette = JSON.stringify(currentPalette, null, 2);
    localStorage.setItem('palette', jsonPalette);
    copyText(jsonPalette);
  }

  window.loadPaletteLocalData = function () {
    const jsonPalette = localStorage.getItem('palette');
    if (!jsonPalette) return;
    try {
      const newPalette = JSON.parse(jsonPalette)
      if (Array.isArray(newPalette)) {
        currentPalette = newPalette;
        const textarea = document.getElementById('palette-import-text')
        if (textarea) {
          textarea.textContent = JSON.stringify(currentPalette, null, 2);
        }
        renderPalette();
        toast('Loaded palette from local storage')
      }

    } catch (e) {
      toast(`Invalid palette format: ${e.message}`)
    }
  }

  window.importFromTextarea = function () {
    const textarea = document.getElementById('palette-import-text');
    try {
      const newPalette = eval(textarea.value);
      if (Array.isArray(newPalette)) {
        currentPalette = newPalette;
        renderPalette();
      }
    } catch (e) {
      toast('Invalid palette format: ' + e.message);
    }
  };

  window.showImportDialog = showImportDialog;

  window.deleteSwatch = function (index) {
    currentPalette.splice(index, 1);
    renderPalette();
  };

  window.addSwatch = function () {
    const name = prompt('Swatch name:');
    const color = prompt('Color hex:');
    if (name && color) {
      currentPalette.push({ name, color });
      renderPalette();
    }
  };

  // Initialize
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderPalette);
  } else {
    renderPalette();
  }

})();
