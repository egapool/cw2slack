chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){
	if(tab.url.indexOf('chatwork.com') != -1) {
		chrome.pageAction.show(tabId);
	}
});
var addStyle = function() {
	console.log('addstyled!');
	var style = document.createElement('link');
	style.rel = 'stylesheet';
	style.type = 'text/css';
	style.href = chrome.extension.getURL('css/style.css');
	(document.head||document.documentElement).appendChild(style);
};
chrome.pageAction.onClicked.addListener(function(){
	console.log('click!');
	debugger;
	// chrome.tabs.insertCSS(null,{
	// 	"file":"css/style.css"
	// });
	chrome.tabs.executeScript(null,{
		"code":"("+addStyle.toString()+")()"
	});

});