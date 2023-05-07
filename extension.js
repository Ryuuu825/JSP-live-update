// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
let pwd = vscode.workspace.workspaceFolders[0].uri.fsPath + " ";
let glassfishPath = "~/GlassFish_Server/bin/asadmin";
const terminal = vscode.window.createTerminal(`JSP Live Extension Terminal`);
// remove %20 from the path
const projectName = pwd.split("/").pop().replace(/%20/g, "").replace(/ /g, "");


async function OnTextChangeEventHandler(e) {

	let buildcommand = "ant -f " + pwd + " -Dnb.internal.action.name=rebuild -DforceRedeploy=false -Dbrowser.context=" + pwd + " dist";
	let redeploycommand = glassfishPath + " redeploy --name " + projectName + " " +  "./dist/" + projectName + ".war";

	terminal.sendText(buildcommand);
	terminal.sendText(redeploycommand);

}

/**
 * @param {vscode.ExtensionContext} context
 */
async function activate(context) {

	let disposable = vscode.commands.registerCommand('jsp-live-preview.helloWorld', function () {

		terminal.sendText(glassfishPath + " start-domain");
		terminal.sendText('ant -f ' + pwd + "  " + " -Dnb.internal.action.name=run -Ddirectory.deployment.supported=true -DforceRedeploy=false -Dnb.wait.for.caches=true -Dbrowser.context=" + pwd + ' run');
		
		// open the link in the browser
		vscode.env.openExternal(vscode.Uri.parse("http://localhost:8080/" + projectName + "/"));

	});	

	context.subscriptions.push(disposable);

	vscode.workspace.onDidSaveTextDocument(await OnTextChangeEventHandler);

}

// This method is called when your extension is deactivated
function deactivate() {
	// remove the terminal
	terminal.dispose();
}

module.exports = {
	activate,
	deactivate
}
