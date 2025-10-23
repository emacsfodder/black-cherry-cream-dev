// palette-swatches.js
(function () {
  'use strict';

  const defaultPalette = [
    [
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
        "color": "#FFFFFF",
        "name": "cream-bright-lighter-30%"
      },
      {
        "color": "#FFFFFF",
        "name": "cream-bright-lighter-60%"
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
        "color": "#FFFFFF",
        "name": "cream-clotted-lighter-60%"
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
        "color": "#FFFFFF",
        "name": "cream-custard-lighter-60%"
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
    ]
  ];

  let currentPalette = [...defaultPalette];
  let isDragging = false;
  let dragOffset = { x: 0, y: 0 };

  function createSwatch(color, name, index) {
    const swatch = document.createElement('div');
    swatch.className = 'palette-swatch';
    swatch.style.cssText = `
            width: 30px;
            height: 30px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
        `;

    swatch.innerHTML = `
            <input type="color"
                   value="${color}"
                   onchange="window.updateSwatchColor(${index}, this.value)"
                   style="
                       width: 100%;
                       height: 100%;
                       border: 1px solid #333;
                       cursor: pointer;
                       padding: 0;
                       margin: 0;
                       border-radius: 0;
                   ">
            <div class="swatch-controls" style="
                position: absolute;
                top: -20px;
                background: #1a1a1a;
                border: 1px solid #333;
                padding: 2px;
                border-radius: 3px;
                display: none;
                gap: 2px;
            ">
                <button onclick="window.deleteSwatch(${index})" style="background: none; border: none; color: #fff; cursor: pointer;">🗑️</button>
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
      container.style.cursor = 'grabbing';
    }

    function onDrag(e) {
      if (!isDragging) return;
      container.style.left = (e.clientX - dragOffset.x) + 'px';
      container.style.top = (e.clientY - dragOffset.y) + 'px';
      container.style.right = 'auto';
    }

    function stopDrag() {
      isDragging = false;
      container.style.cursor = 'grab';
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
    container.style.cssText = `
            position: fixed;
            background: #1a1a1a;
            border: 1px solid #333;
            padding: 0;
            z-index: 10001;
            border-radius: 5px;
            cursor: grab;
            user-select: none;
            box-shadow: 0 4px 8px rgba(0,0,0,0.6);
        `;

    container.innerHTML = `
            <div class="palette-header" style="
                background: #2a2a2a;
                padding: 8px 10px;
                border-bottom: 1px solid #333;
                cursor: grab;
                display: flex;
                justify-content: space-between;
                align-items: center;
            ">
                <span style="color: #fff; font-weight: bold;">🎨 Palette</span>
            </div>
            <div class="palette-content" style="padding: 10px;">
                <div class="palette-swatches-grid" style="
                    display: grid;
                    grid-template-columns: repeat(8, 30px);
                    gap: 5px;
                    margin-bottom: 10px;
                "></div>
                <div style="display: flex; gap: 5px;">
                    <button onclick="window.showImportDialog()" style="
                        background: #333;
                        color: #fff;
                        border: 1px solid #555;
                        padding: 5px 10px;
                        cursor: pointer;
                        flex: 1;
        ">Import/Load/Save</button>
                    <button onclick="window.addSwatch()" style="
                        background: #333;
                        color: #fff;
                        border: 1px solid #555;
                        padding: 5px 10px;
                        cursor: pointer;
                        flex: 1;
                    ">Add</button>
                </div>
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
            cursor: default;
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
