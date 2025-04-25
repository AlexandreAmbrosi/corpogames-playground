// Generate theme color variables from the active hue defined in CSS
function updateThemeColorsFromHue() {
    const computed = getComputedStyle(document.documentElement);
    const hue = parseInt(computed.getPropertyValue('--hue')) || 210;
    const set = (name, s, l) => {
      const val = `hsl(${hue}, ${s}%, ${l}%)`;
      document.documentElement.style.setProperty(name, val);
    };
    set('--color-cta', 76, 48);
    set('--color-header', 90, 30);
    set('--color-dark', 90, 40);
    set('--color-soft', 40, 20);
    set('--color-border', 30, 30);
    set('--color-not-active-btn', 30, 65);
    set('--color-hover', 100, 95);
    set('--color-white-brand', 100, 98);
    set('--color-btn-disabled', 95, 90);
    set('--color-top-2', 71, 43);
    set('--color-top-3', 66, 38);
    set('--color-top-4', 66, 43);
}