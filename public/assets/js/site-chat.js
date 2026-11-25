/* Zendesk chat (was the inline script in inc/chat.php). The .chat / .chatt buttons are bound in page-init.js. */
(function () {
  function loadZendeskWidget() {
    var t = document.createElement('script');
    t.type = 'text/javascript';
    t.id = 'ze-snippet';
    t.async = true;
    t.src = 'https://static.zdassets.com/ekr/snippet.js?key=b5566f55-0fef-4c06-8d31-c9e6ad283a8f';
    document.getElementsByTagName('head')[0].appendChild(t);
  }
  setTimeout(loadZendeskWidget, 5000);
  setTimeout(function () {
    if (typeof window.zE !== 'function') return;
    zE(function () { zE.activate(); });
    zE(function () {
      $zopim.livechat.setOnUnreadMsgs(function (n) {
        if (n > 0 && !$zopim.livechat.window.getDisplay()) $zopim.livechat.window.show();
      });
    });
  }, 6000);
})();
