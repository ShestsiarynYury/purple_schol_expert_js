import { defineConfig } from 'rollup';
import html from '@rollup/plugin-html';

export default defineConfig({
  input: 'index.js', 
  output: {
    file: 'dist/bundle.js', 
    format: 'iife',         
    sourcemap: true,        
  },
  plugins: [
    html({
      fileName: 'index.html', 
      title: 'My Rollup App', 
      template: ({ files, title }) => {
        // ИСПРАВЛЕНО: используем file.fileName вместо file.name
        const scriptTag = (files.js || [])
          .map(file => `<script src="./${file.fileName}"></script>`)
          .join('\n');

        return `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
</head>
<body>
    <div id="app">Приложение успешно работает из сборки!</div>
    ${scriptTag}
</body>
</html>`;
      }
    })
  ]
});