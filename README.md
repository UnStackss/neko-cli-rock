# Neko-CLI Support for VS Code

This extension provides support and formatting for **`neko.rock`** files used with **Neko-CLI** in Visual Studio Code. It enhances your development experience by offering syntax highlighting, code formatting, and other useful features.

## Features

- **Syntax Highlighting**: Neko-CLI `neko.rock` files will be highlighted with proper colors for better readability.
- **Code Formatting**: Automatically format your `neko.rock` files with one click or on save.
- **Validation**: Ensure the structure and syntax of `neko.rock` files are correct, helping you avoid common mistakes.
- **Autocomplete**: Get intelligent code completion suggestions for `neko.rock` syntax and Neko-CLI commands.
- **Hover Documentation**: View hover-over documentation for Neko-CLI keywords and values.

## Installation

1. Open Visual Studio Code.
2. Go to the **Extensions** view by clicking on the Extensions icon in the Activity Bar on the side of the window.
3. Search for **Neko-CLI Support**.
4. Click **Install**.

Alternatively, you can install it directly from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/) by searching for "Neko-CLI Support".

## Usage

- Open a `.rock` file associated with Neko-CLI in Visual Studio Code.
- The extension will automatically detect and enable syntax highlighting for `neko.rock` files.
- You can format the file using the standard VS Code formatting commands (e.g., `Shift + Alt + F`).

### Syntax Example

Here is an example of a `neko.rock` file with proper syntax highlighting:

```neko
🐱 neko-package: "example-package"
  🔖 version: "1.0.0"
  🛠️ dependencies:
    - "dependency-one@1.2.3"
    - "dependency-two@4.5.6"
```

## Configuration

You can customize the behavior of the extension through VS Code settings:

1. Open the **Settings** (by clicking the gear icon in the bottom-left corner and selecting **Settings**).
2. Search for **Neko-CLI** settings.
3. Adjust any available settings, such as enabling/disabling specific features.

## Troubleshooting

- **Syntax Highlighting Not Working**: Ensure that your file has the `.rock` extension. The extension uses this to detect files that should be processed.
- **Formatting Issues**: If auto-formatting is not working, check that you have correctly configured your formatting preferences in VS Code settings.

## Contributing

If you'd like to contribute to this extension, feel free to fork the repository and create pull requests. We welcome bug reports, feature requests, and contributions.

## License

This extension is open-source and licensed under the MIT License.
