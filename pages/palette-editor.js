// palette-swatches.js



(function () {
  'use strict';

  window.copyText = (text) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    } else {
      alert(text);
    }
  }

  const paletteHeaderClasses = `
    palette-header
    bg-[#2a2a2a]
    py-2 px-3
    border-b-1 border-[#333]
    cursor-move
    flex
    min-width-[20em]
    justify-between
    rounded-t-xl
    items-center
  `

  const ghostButton = `
  text-[white] cursor-pointer
  `

  const buttonTailwind = `
    hover:bg-[#111]
    transition-color
    duration-500
    bg-[#333] text-[#FFF]
    border-1 border-[#555]
    p-2
    rounded
    cursor-pointer
    font-[Inter]
  `

  const paletteIcon = `
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

  const copyIcon = `
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

  const trashIcon = `
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
  const minusIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus-icon lucide-minus"><path d="M5 12h14"/></svg>
  `

  const defaultPalette = [
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
    swatch.className = 'palette-swatch w-8 h-8 relative flex items-center justify-center';
    swatch.innerHTML = `
            <input type="color"
                   value="${color}"
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
                     top-[-30px]
                     right-2
                     bg-[#242424] border-1 border-[#333]
                 ">
              <div style="font-size: small">
                ${color}
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

    // Remove right positioning and set explicit left/top
    container.style.right = 'auto';
    container.style.left = (window.innerWidth - 350) + 'px';
    container.style.top = '100px';

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
    container.className = `
      fixed
      rounded-xl
      bg-[#1a1a1a]
      border-1
      border-[#333]
      p-0
      zindex-[10001]
      shadow-xl
    `

    container.innerHTML = `
            <div class="${paletteHeaderClasses}">
                <div class="font-[Inter] text-lg text-[#FFF]} flex flex-row gap-2 items-center">${paletteIcon} Palette Editor</div>
                <div class="${buttonTailwind}"
                  onclick='togglePaletteContent()'
                >${minusIcon}</div>
            </div>
            <div id='palette-content' class="palette-content" style="padding: 10px;">
                <div class="palette-swatches-grid" style="
                    display: grid;
                    grid-template-columns: repeat(8, 30px);
                    gap: 5px;
                    margin-bottom: 10px;
                "></div>
                <div class="flex flex-row gap-2">
                    <div onclick="window.showImportDialog()"
                    class="${buttonTailwind}">Import/Load/Save</div>
                    <div onclick="window.addSwatch()"
                    class="${buttonTailwind}">Add</div>
                </div>
                <div class="text-[8pt] font-[Inter]">Saved in localstorage as <span class="font-mono">"palette"</span></div>
            </div>
        `;

    document.body.appendChild(container);
    makeDraggable(container);
    return container;
  }

  function showImportDialog() {
    const dialog = document.createElement('div');
    dialog.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #1a1a1a;
            border: 1px solid #333;
            padding: 20px;
            z-index: 10002;
            border-radius: 5px;
            color: #fff;
        `;

    dialog.innerHTML = `
            <h3 style="margin: 0 0 10px 0;">Import Palette</h3>
            <textarea id="palette-import-text" style="
                width: 400px;
                height: 200px;
                background: #2a2a2a;
                color: #fff;
                border: 1px solid #555;
                padding: 10px;
                font-family: monospace;
            " placeholder="Paste your palette array here...">${JSON.stringify(currentPalette, null, 2)}</textarea>
            <div style="margin-top: 10px; display: flex; gap: 5px;">
                <button onclick="window.importFromTextarea()" style="background: #333; color: #fff; border: 1px solid #555; padding: 5px 10px; cursor: pointer;">Import</button>
	              <button onclick="window.loadPaletteLocalData()" style="background: #333; color: #fff; border: 1px solid #555; padding: 5px 10px; cursor: pointer;">Load</button>
	              <button onclick="window.savePaletteLocalData()" style="background: #333; color: #fff; border: 1px solid #555; padding: 5px 10px; cursor: pointer;">Save</button>
	              <button onclick="this.parentElement.parentElement.remove()" style="background: #ff4444; color: #fff; border: none; padding: 5px 10px; cursor: pointer;">Close</button>
            </div>
        `;

    document.body.appendChild(dialog);
  }

  // Public API
  window.updateSwatchColor = function (index, newColor) {
    currentPalette[index].color = newColor;
  };


  window.savePaletteLocalData = function () {
    const jsonPalette = JSON.stringify(currentPalette, null, 2);
    localStorage.setItem('palette', jsonPalette);
    // alert('Saved palette to local storage');
  }

  window.loadPaletteLocalData = function () {
    const jsonPalette = localStorage.getItem('palette');
    if (!jsonPalette) return;
    try {
      const newPalette = JSON.parse(jsonPalette)
      if (Array.isArray(newPalette)) {
        currentPalette = newPalette;
        const textarea = document.getElementById('palette-import-text')
        textarea.textContent = JSON.stringify(currentPalette, null, 2);
        renderPalette();
        // alert('Loaded palette from local storage')
      }

    } catch (e) {
      alert(`Invalid palette format: ${e.message}`)
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
      alert('Invalid palette format: ' + e.message);
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
