// reference https://zenn.dev/taichifukumoto/articles/setup-next-12-typescript-tailwind-tamplate#tailwind.config.js-%E3%81%AE%E7%B7%A8%E9%9B%86
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      // スプレッドで展開している前に、メインとしたいフォント名を追加する
      // フォント名にスペースがある場合は、'Noto\\ Sans\\ JP'のように \ (バックスラッシュ)でエスケープする
      // Serif 体がメインの場合は、 `...defaultTheme.fontFamily.serif` を展開する
      ja: [...defaultTheme.fontFamily.sans],
      en: [...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
};
