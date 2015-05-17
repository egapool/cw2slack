var tabId;

chrome.tabs.onUpdated.addListener(function(id,changeInfo, tab){
	if (tab.url.indexOf("chatwork.com") != -1) {
		chrome.pageAction.show(id);
		tabId = id;

		// iconをオンに
		chrome.storage.sync.get("actived",function(item){
			if(item.actived) {
		    	chrome.pageAction.setIcon({tabId:tabId,path:"/img/icon_on.png"}, function(){});
			}
		});
	}
});

// chrome.storage.sync.clear();


// オンオフをクリックで切り替え
chrome.pageAction.onClicked.addListener(function(){
	var actived;
	var on_off;
	var option = chrome.storage.sync.get("actived",function(item){
		actived = item.actived;

		if(actived === undefined) {
			chrome.storage.sync.set({actived : true}, function(){
				chrome.pageAction.setIcon({tabId:tabId,path:"/img/icon_on.png"}, function(){});
			});

			return;
		}

		if(actived) {
			on_off = "on";
		}else {
			on_off = "off";

		}
		chrome.storage.sync.set({actived : !actived},function(){
			chrome.pageAction.setIcon({tabId:tabId,path:"/img/icon_"+on_off+".png"}, function(){});
		});

		chrome.tabs.reload();
	});

});
