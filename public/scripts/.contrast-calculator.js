// NOTE: Pas utilisé actuellement
    /*
    function hexFromHSL(h, s, l) {
      s /= 100;
      l /= 100;
      const k = n => (n + h / 30) % 12;
      const a = s * Math.min(l, 1 - l);
      const f = n => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
      return `#${[f(0), f(8), f(4)].map(x => Math.round(x * 255).toString(16).padStart(2, '0')).join('')}`;
    }

    function luminance(hex) {
      const [r, g, b] = hex.match(/\w\w/g).map(x => {
        const val = parseInt(x, 16) / 255;
        return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
      });
      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    }

    function contrast(hex1, hex2) {
      const L1 = luminance(hex1);
      const L2 = luminance(hex2);
      return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
    }

    function updateTextOnCTAFromThemeCSS() {
      requestAnimationFrame(() => {
        const computed = getComputedStyle(document.documentElement);
        const hue = parseInt(computed.getPropertyValue('--hue')) || 210;
        const ctaColor = hexFromHSL(hue, 76, 48);
        const white = '#ffffff';
        const dark = hexFromHSL(hue, 90, 40);
        const contrastRatio = contrast(ctaColor, white);
        const bestText = contrastRatio >= 4.5 ? white : dark;
        document.documentElement.style.setProperty('--text-on-cta', bestText);
      });
    }
    */