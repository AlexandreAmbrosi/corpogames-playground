// Generate theme color variables from the active hue defined in CSS
function updateThemeColorsFromHue() {
    const computed = getComputedStyle(document.documentElement);
    const hue = parseInt(computed.getPropertyValue('--hue')) || 210;
    const set = (name, s, l) => {
      const val = `hsl(${hue}, ${s}%, ${l}%)`;
      document.documentElement.style.setProperty(name, val);
    };
    set('--color-primary', 76, 48);
    set('--color-primary-secondary', 85, 30);
    set('--color-background-dark', 50, 10);
    set('--color-neutral-600', 40, 20);
    set('--color-neutral-400', 30, 30);
    set('---color-unactive', 30, 65);
    set('--color-hover-light', 100, 95);
    set('---color-neutral-50', 100, 98);
    set('--color-disabled', 95, 90);
    set('---color-accent-2', 71, 43);
    set('--color-accent-3', 66, 38);
    set('--color-accent-4', 66, 43);
}