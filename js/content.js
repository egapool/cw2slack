  chrome.storage.sync.get("actived",function(item){
    var actived = item.actived;
    console.log('cw2slack is ' + actived);

    // アクティブフラグがfalseなら終了
    if(actived === false) return;

    // 打ち消しスタイルの読み込み
    var style = document.createElement('link');
    style.rel = 'stylesheet';
    style.type = 'text/css';
    style.href = chrome.extension.getURL('/css/addstyle.css');
    (document.head||document.documentElement).appendChild(style);

    $('#_roomTitle').click(function(e){
      e.preventDefault;
      RS.view.toggleFold();
    });
  });
