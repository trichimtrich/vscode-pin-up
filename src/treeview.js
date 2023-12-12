const vscode = require('vscode');
const PinDataProvider = require("./PinDataProvider");

var share = require("./share.js");

module.exports = function (context) {
    share.pindata = new PinDataProvider();

    // let config = vscode.workspace.getConfiguration('pin-up');

    const viewActivitybarTree = vscode.window.createTreeView("view-activitybar", {
        showCollapseAll: true,
        treeDataProvider: share.pindata
    });

    const viewExplorerTree = vscode.window.createTreeView("view-explorer", {
        showCollapseAll: true,
        treeDataProvider: share.pindata
    });


    const fileCreationDisposable = vscode.workspace.onDidCreateFiles((event) => {
        // Handle file creation event
        for (const uri of event.files) {
            // vscode.window.showInformationMessage(`File created: ${uri.path}`);
            if (share.pindata.IsPinned(uri.path)) {
                share.pindata.RefreshPin(uri.path);
                break;
            }
        }
    });

    // Register a file deletion event listener
    const fileDeletionDisposable = vscode.workspace.onDidDeleteFiles((event) => {
        // Handle file deletion event
        for (const uri of event.files) {
            // vscode.window.showInformationMessage(`File deleted: ${uri.path}`);
            if (share.pindata.IsPinned(uri.path)) {
                share.pindata.RefreshPin(uri.path);
                break;
            }
        }
    });

    // Add disposables to the context to clean up when the extension is deactivated
    context.subscriptions.push(fileCreationDisposable, fileDeletionDisposable);


    // viewActivitybarTree.title = config.ui.emoji ? "📌 Pinned Files" : "Pinned Files";
    // viewExplorerTree.title = config.ui.emoji ? "📌 Pinned Files" : "Pinned Files";
}