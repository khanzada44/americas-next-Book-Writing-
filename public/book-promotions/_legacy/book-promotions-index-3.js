setTimeout(function(){
        $('#offerModal').modal('show');
    }, 3000);
     setTimeout(function(){
loadZendeskWidget();

}, 5000);
function loadZendeskWidget() {
var script = document.createElement('script');
script.type = 'text/javascript';
script.id = 'ze-snippet';
script.async = true;
script.src = 'https://static.zdassets.com/ekr/snippet.js?key=b5566f55-0fef-4c06-8d31-c9e6ad283a8f';
document.getElementsByTagName('head')[0].appendChild(script);

};
 setTimeout(function(){
zE(function() {
zE.activate();
});
zE(function() {
        $zopim.livechat.setOnUnreadMsgs(function(numUnread) {
            if (numUnread > 0 && !$zopim.livechat.window.getDisplay()) {
                $zopim.livechat.window.show();
            }
        })
    });

    function setButtonURL() {

        $zopim.livechat.window.show();

    }

    function toggleChat() {

        $zopim.livechat.window.show();

    }
}, 6000);
  $(document).ready(function(){ 
  $('.chat, .chatt').click(function(){  $zopim.livechat.window.toggle(); });  });
