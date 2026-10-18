import { defineConfig } from 'rollup';
import html from '@rollup/plugin-html';

export default defineConfig({
  input: 'index.js', // Ваш главный исходный файл
  output: {
    file: 'dist/bundle.js', // Куда складывать бандл
    format: 'iife',         // Формат для браузера (самовызывающаяся функция)
    sourcemap: true,        // Полезно для отладки в браузере
  },
  plugins: [
    html({
      fileName: 'index.html', // Имя файла на выходе в папке dist
      title: 'My Rollup App', // Заголовок страницы
      // Кастомный шаблон, который сам генерирует правильный тег <script> без type="module"
      template: ({ files, title }) => {
        const scriptTag = (files.js || [])
          .map(file => `<script src="./${file.name}"></script>`)
          .join('\n');

        return `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
</head>
<body>
    <div id="app">Приложение работает из сборки!</div>
    ${scriptTag}
</body>
</html>`;
      }
    })
  ]
});