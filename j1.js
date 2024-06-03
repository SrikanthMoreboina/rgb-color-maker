document.addEventListener('DOMContentLoaded', function() {
    const colorNameToRgb = {
        red: 'rgb(255, 0, 0)',
        green: 'rgb(0, 128, 0)',
        blue: 'rgb(0, 0, 255)',
        yellow: 'rgb(255, 255, 0)',
        purple: 'rgb(128, 0, 128)',
        orange: 'rgb(255, 165, 0)',
        black: 'rgb(0, 0, 0)',
        white: 'rgb(255, 255, 255)',
        gray: 'rgb(128, 128, 128)',
        pink: 'rgb(255, 192, 203)',
        brown: 'rgb(165, 42, 42)',
        cyan: 'rgb(0, 255, 255)',
        magenta: 'rgb(255, 0, 255)',
        lime: 'rgb(0, 255, 0)',
        maroon: 'rgb(128, 0, 0)',
        navy: 'rgb(0, 0, 128)',
        olive: 'rgb(128, 128, 0)',
        teal: 'rgb(0, 128, 128)',
        violet: 'rgb(238, 130, 238)',
        gold: 'rgb(255, 215, 0)',
        silver: 'rgb(192, 192, 192)',
        salmon: 'rgb(250, 128, 114)',
        coral: 'rgb(255, 127, 80)',
        crimson: 'rgb(220, 20, 60)',
        khaki: 'rgb(240, 230, 140)',
        lavender: 'rgb(230, 230, 250)',
        beige: 'rgb(245, 245, 220)',
        mint: 'rgb(189, 252, 201)',
        indigo: 'rgb(75, 0, 130)',
        chartreuse: 'rgb(127, 255, 0)',
        darkred: 'rgb(139, 0, 0)',
        darkgreen: 'rgb(0, 100, 0)',
        darkblue: 'rgb(0, 0, 139)',
        darkorange: 'rgb(255, 140, 0)',
        darkgray: 'rgb(169, 169, 169)',
        lightgray: 'rgb(211, 211, 211)',
        darkkhaki: 'rgb(189, 183, 107)',
        darkmagenta: 'rgb(139, 0, 139)',
        darkcyan: 'rgb(0, 139, 139)',
        lightgreen: 'rgb(144, 238, 144)',
        lightblue: 'rgb(173, 216, 230)',
        lightpink: 'rgb(255, 182, 193)',
        lightsalmon: 'rgb(255, 160, 122)',
        lightyellow: 'rgb(255, 255, 224)',
        lightcoral: 'rgb(240, 128, 128)',
        lightgoldenrodyellow: 'rgb(250, 250, 210)',
        lightseagreen: 'rgb(32, 178, 170)',
        lightskyblue: 'rgb(135, 206, 250)'
    };

    function setColor(rgb) {
        document.getElementById('color-display').style.backgroundColor = rgb;
        document.getElementById('color-code').innerText = rgb;
    }

    function updateColorFromSliders() {
        const red = document.getElementById('red').value;
        const green = document.getElementById('green').value;
        const blue = document.getElementById('blue').value;
        const rgb = `rgb(${red}, ${green}, ${blue})`;
        setColor(rgb);
    }

    function populateColorList() {
        const colorList = document.getElementById('color-list');
        colorList.innerHTML = '';
        for (let colorName in colorNameToRgb) {
            const li = document.createElement('li');
            li.innerText = colorName;
            li.style.backgroundColor = colorNameToRgb[colorName];
            li.addEventListener('click', function() {
                setColor(colorNameToRgb[colorName]);
                const [r, g, b] = colorNameToRgb[colorName].match(/\d+/g);
                document.getElementById('red').value = r;
                document.getElementById('green').value = g;
                document.getElementById('blue').value = b;
                document.getElementById('red-value').innerText = r;
                document.getElementById('green-value').innerText = g;
                document.getElementById('blue-value').innerText = b;
            });
            colorList.appendChild(li);
        }
    }

    function switchMode(mode) {
        if (mode === 'manual') {
            document.getElementById('manual-mode').classList.add('active');
            document.getElementById('auto-mode').classList.remove('active');
            document.getElementById('manual-button').classList.add('active');
            document.getElementById('auto-button').classList.remove('active');
        } else {
            document.getElementById('manual-mode').classList.remove('active');
            document.getElementById('auto-mode').classList.add('active');
            document.getElementById('manual-button').classList.remove('active');
            document.getElementById('auto-button').classList.add('active');
        }
    }

    document.getElementById('generate').addEventListener('click', updateColorFromSliders);

    document.getElementById('search-color').addEventListener('click', function() {
        const colorName = document.getElementById('color-name').value.toLowerCase();
        if (colorNameToRgb[colorName]) {
            setColor(colorNameToRgb[colorName]);
            const [r, g, b] = colorNameToRgb[colorName].match(/\d+/g);
            document.getElementById('red').value = r;
            document.getElementById('green').value = g;
            document.getElementById('blue').value = b;
            document.getElementById('red-value').innerText = r;
            document.getElementById('green-value').innerText = g;
            document.getElementById('blue-value').innerText = b;
        } else {
            alert('Color not found!');
        }
    });

    document.getElementById('manual-button').addEventListener('click', function() {
        switchMode('manual');
    });

    document.getElementById('auto-button').addEventListener('click', function() {
        switchMode('auto');
    });

    document.getElementById('red').addEventListener('input', function() {
        document.getElementById('red-value').innerText = this.value;
        updateColorFromSliders();
    });

    document.getElementById('green').addEventListener('input', function() {
        document.getElementById('green-value').innerText = this.value;
        updateColorFromSliders();
    });

    document.getElementById('blue').addEventListener('input', function() {
        document.getElementById('blue-value').innerText = this.value;
        updateColorFromSliders();
    });

    populateColorList();
    switchMode('manual');
});
