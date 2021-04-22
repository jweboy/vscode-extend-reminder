import * as vscode from 'vscode';

let timer: any = null;

const clearTimer = () => {
	clearInterval(timer);
	timer = null;
};

const setTimer = () => {
	const prevTime = new Date().getTime();

	timer = setInterval(() => {
		const currTime = new Date().getTime();
		const range = currTime - prevTime;
		const time = range % (24 * 3600 * 1000);
		const hours = Math.floor(time / (3600 * 1000));

		// console.log('hours=>', hours);
		// console.log('timer=>', timer);

		if (hours > 1 && timer) {
			vscode.window.showInformationMessage(`🤨 爸爸，您已经工作 ${hours} 小时了，快去休息一下~`);
			clearTimer();
			setTimer();
		}
	}, 1000);
};


export function activate(context: vscode.ExtensionContext) {
	
	// console.log('Congratulations, your extension "reminder" is now active!');
	setTimer();


	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	// let disposable = vscode.commands.registerCommand('reminder.helloWorld', () => {
	// 	// The code you place here will be executed every time your command is executed
	// 	// Display a message box to the user
	// 	vscode.window.showInformationMessage('Hello World from reminder!');
	// });
	// context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
	clearTimer();
}
