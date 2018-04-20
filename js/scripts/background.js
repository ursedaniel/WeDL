function executeExtensions(request) {
    chrome.storage.local.get('extensions', function (result) {
        result.extensions.forEach(function (ext) {
            if (ext.activated) {
                var extension;
                try {
                    extension = eval(ext.algorithm);
                } catch (e) {
                    console.error("Oops, seems your extension is broken. See error message:" + e.message);
                }

                var data = extension({url: request.url, text: request.pageContent, title: request.title});
                if (!ext.data) {
                    ext.data = [];
                }
                data.forEach(function (item) {
                    ext.data.push(item);
                });
                var uniq = new Set(ext.data.map(function (e) {
                    return JSON.stringify(e);
                }));
                ext.data = Array.from(uniq).map(function (e) {
                    return JSON.parse(e)
                });

            }
        });
        chrome.storage.local.set({extensions: result.extensions});
    });
}

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        chrome.storage.local.get('recordingStatus', function (result) {
            if (result.recordingStatus) {
                executeExtensions(request);
            }
        });
    }
);

// chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
//     //code in here will run every time a user goes onto a new tab, so you can insert your scripts into every new tab
//         chrome.tabs.executeScript(tabId, {code: ""},
//             function (results) {
//                 chrome.tabs.executeScript(null, {file: 'extensions/custom.js'});
//             });
// });

// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//     alert(changeInfo.status);
// });

chrome.tabs.onActivated.addListener(function (activeInfo) {
    // how to fetch tab url using activeInfo.tabid
    chrome.tabs.get(activeInfo.tabId, function () {
        chrome.tabs.executeScript(activeInfo.tabId, {code: ""},
            function (results) {
                chrome.tabs.executeScript(null, {file: 'extensions/insert.js'});
            });
    });
});