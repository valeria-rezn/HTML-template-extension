// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	let disposable = vscode.commands.registerCommand('create-basic-html.createHTML', function () {
		const editor = vscode.window.activeTextEditor;
		const document = editor.document;
		const languageId = document.languageId;
		
		if (editor && languageId==='html') {
		  let text = '<!DOCTYPE html>\n<html>\n<head>\n\t<title></title>\n</head>\n<body>\n<h1>Hello, World!</h1>\n</body>\n</html>';
		  editor.edit((editBuilder) => {
			editBuilder.insert(editor.selection.start, text);
		  });
		}
		else if(languageId!='html')
		{
			vscode.window.showInformationMessage(`Selected file language is ${languageId} and not HTML`);
		}
  });
	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
