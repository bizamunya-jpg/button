(function() {
    "use strict";

    // ---------- DOM refs ----------
    const body = document.body;
    const swatch = document.getElementById('swatch');
    const hexLabel = document.getElementById('hexLabel');
    const colorNameSpan = document.getElementById('colorName');
    const btn = document.getElementById('colorButton');

    // ---------- state ----------
    let isRed = true; // start with red

    // ---------- color definitions ----------
    const COLORS = {
        red: {
            hex: '#ff0000',
            name: 'Red'
        },
        green: {
            hex: '#00cc44',
            name: 'Green'
        }
    };

    // ---------- apply color to background ----------
    function applyColor(colorKey) {
        const color = COLORS[colorKey];

        // Change the entire body background
        body.style.backgroundColor = color.hex;

        // Update the preview swatch
        swatch.style.backgroundColor = color.hex;

        // Update the hex code display
        hexLabel.textContent = color.hex.toUpperCase();

        // Update the color name in footer
        colorNameSpan.textContent = color.name;

        // Log for debugging
        console.log(`Background changed to: ${color.name} (${color.hex})`);
    }

    // ---------- toggle handler ----------
    function handleToggle() {
        // Toggle the state
        isRed = !isRed;

        // Apply the appropriate color
        const nextColor = isRed ? 'red' : 'green';
        applyColor(nextColor);
    }

    // ---------- set initial state ----------
    function setInitialColor() {
        // Start with red
        applyColor('red');
        isRed = true;
    }

    // ---------- wire up event listener ----------
    btn.addEventListener('click', handleToggle);

    // Set initial state
    setInitialColor();

    console.log('🔄 Red ↔ Green toggle ready! Click the button to change the background.');
})();