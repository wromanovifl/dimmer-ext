# dimmer-ext

Chrome extension that tracks reading time per tab

Built for my own use; public in case it helps someone.

## Getting started

```bash
# no build step needed
# chrome://extensions -> load unpacked -> select this folder
```

## Features

- No remote calls, everything stays local
- Per-tab time persisted to chrome.storage
- Popup shows today's total focus time
- Manifest V3, service worker based

## Examples

```bash
# click the toolbar icon to see today's reading time
```

## Project structure

```text
├── .github/
│   └── ISSUE_TEMPLATE/
│       └── bug_report.md
├── docs/
│   └── usage.md
├── examples/
│   └── quickstart.md
├── scripts/
│   └── dev.sh
├── src/
│   └── config.js
├── .editorconfig
├── .gitignore
├── CHANGELOG.md
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
├── SECURITY.md
├── background.js
├── manifest.json
├── popup.html
└── popup.js
```

## Development

```bash
npm install
npm test
```

## License

MIT. Do whatever you want.
