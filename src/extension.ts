import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const formatProvider = vscode.languages.registerDocumentFormattingEditProvider(
    { language: "neko" },
    {
      provideDocumentFormattingEdits(document) {
        const edits: vscode.TextEdit[] = [];
        const fullText = document.getText();
        const formattedText = formatNekoRock(fullText);
        const fullRange = new vscode.Range(
          document.positionAt(0),
          document.positionAt(fullText.length)
        );
        edits.push(vscode.TextEdit.replace(fullRange, formattedText));
        return edits;
      },
    }
  );

  context.subscriptions.push(formatProvider);
}

function formatNekoRock(content: string): string {
  const lines = content.split("\n").map((line) => line.trim());

  const formattedLines = lines.map((line) => {
    if (line.includes("🐱")) {
      return `🐱 ${line.slice(2).toUpperCase()}`;
    }
    if (line.includes("🔖 version:")) {
      return `🔖 version: "${line.slice(12)}"`;
    }
    if (line.includes("📦 resolved:")) {
      return `📦 resolved: ${line.slice(12)}`;
    }
    if (line.includes("🔒 integrity:")) {
      return `🔒 integrity: ${line.slice(14)}`;
    }
    if (line.includes("⚙️ type:")) {
      return `⚙️ type: ${line.slice(8)}`;
    }
    return line;
  });

  return formattedLines.join("\n");
}

export function deactivate() {}
