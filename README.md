# faceless

simple chrome extension that hides face items from the rolimons deals page.

## development

the extension source is typescript in `src/`.

```powershell
npm install
npm run build
```

chrome loads `dist/content.js`.

## install

1. open `chrome://extensions`.
2. turn on developer mode.
3. click load unpacked.
4. pick this folder: `faceless-extension`.

then open `https://rolimons.com/deals`. face deals are hidden automatically.
