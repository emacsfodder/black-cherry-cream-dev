// palette-swatches.js
(function() {
    'use strict';
    
    const defaultPalette = [
        {name: 'red', color: '#ff0000'},
        {name: 'green', color: '#00ff00'},
        {name: 'blue', color: '#0000ff'},
        {name: 'yellow', color: '#ffff00'},
        {name: 'cyan', color: '#00ffff'},
        {name: 'magenta', color: '#ff00ff'},
        {name: 'white', color: '#ffffff'},
        {name: 'black', color: '#000000'}
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
                    ">Import</button>
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
                <button onclick="this.parentElement.parentElement.remove()" style="background: #ff4444; color: #fff; border: none; padding: 5px 10px; cursor: pointer;">Cancel</button>
            </div>
        `;
        
        document.body.appendChild(dialog);
    }
    
    // Public API
    window.updateSwatchColor = function(index, newColor) {
        currentPalette[index].color = newColor;
    };
    
    window.importFromTextarea = function() {
        const textarea = document.getElementById('palette-import-text');
        try {
            const newPalette = eval(textarea.value);
            if (Array.isArray(newPalette)) {
                currentPalette = newPalette;
                renderPalette();
                textarea.parentElement.parentElement.remove();
            }
        } catch (e) {
            alert('Invalid palette format: ' + e.message);
        }
    };
    
    window.showImportDialog = showImportDialog;
    
    window.deleteSwatch = function(index) {
        currentPalette.splice(index, 1);
        renderPalette();
    };
    
    window.addSwatch = function() {
        const name = prompt('Swatch name:');
        const color = prompt('Color hex:');
        if (name && color) {
            currentPalette.push({name, color});
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
