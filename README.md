# Farcaster Shortkeys

A Chrome extension that provides keyboard shortcuts for navigating Farcaster (https://farcaster.xyz/).

## Features

### Sidebar Navigation
- `H` - Home
- `O` - Notifications
- `D` - Direct Casts
- `E` - Explore
- `I` - Invites
- `B` - Bookmarks
- `T` - Starter Packs
- `M` - Mini Apps
- `W` - Warps
- `V` - Developers
- `P` - Profile

### Main Navigation
- `N` - New Cast
- `S` - Settings

## Installation

1. Download the latest release from the [Releases page](https://github.com/codestin/FARKEYS/releases)

2. Load the extension in Chrome:
   - Open Chrome and go to `chrome://extensions/`
   - Enable "Developer mode" in the top right
   - Click "Load unpacked"
   - Select the downloaded folder

## Development

For developers who want to modify the extension:

1. Clone this repository:
```bash
git clone https://github.com/codestin/FARKEYS.git
cd FARKEYS
```

2. Install dependencies:
```bash
npm install
```

3. Build the extension:
```bash
npm run build
```

4. Load the extension in Chrome:
   - Open Chrome and go to `chrome://extensions/`
   - Enable "Developer mode" in the top right
   - Click "Load unpacked"
   - Select the `dist` folder from the build output

To start development with hot reloading:
```bash
npm run dev
```

## Usage

1. Visit https://farcaster.xyz/
2. Use the keyboard shortcuts to navigate the site
3. Click the extension icon to see all available shortcuts

## Known Issues

- When on the Direct Casts page, keyboard shortcuts won't work because the text input box owns the focus. Please submit a pull request if you know of a way to fix this!

## Contributing

Contributions welcome! Feel free to submit PRs for:
- Fixing the focus issue on Direct Casts page
- Adding more keyboard shortcuts
- Improving the popup UI
- Adding support for other browsers

```bash
# Setup
git clone https://github.com/codestin/FARKEYS.git
cd FARKEYS
npm install
npm run dev
```

## License

MIT License - see LICENSE.md for details
