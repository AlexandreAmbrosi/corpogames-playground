document.getElementById('themeSelector').addEventListener('change', (e) => {
    const selected = e.target.value;
    document.documentElement.setAttribute('data-theme', selected);
    document.getElementById('theme-style').href = `themes/theme-${selected}.css`;
    setTimeout(() => {
      updateThemeColorsFromHue();
      // updateTextOnCTAFromThemeCSS();
    }, 100);
  });