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
  return content
    .split("\n")
    .map((line) => line.trim())
    .join("\n");
}

export function deactivate() {}
