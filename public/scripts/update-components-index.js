const fs = require('fs');
const path = require('path');

// 🔁 Nouveau chemin vers app/components
const componentsDir = path.join(__dirname, '../../app/views/components');
const indexFile = path.join(componentsDir, 'index.json');

fs.readdir(componentsDir, (err, files) => {
  if (err) {
    console.error('❌ Cannot read components folder:', err);
    return;
  }

  const componentList = files
    .filter(file => file.endsWith('.html.erb'))
    .map(file => path.basename(file, '.html.erb'));

  fs.writeFile(indexFile, JSON.stringify(componentList, null, 2), err => {
    if (err) {
      console.error('❌ Failed to write index.json:', err);
    } else {
      console.log(`✅ index.json updated with ${componentList.length} component(s):`);
      componentList.forEach(name => console.log('  -', name));
    }
  });
});
