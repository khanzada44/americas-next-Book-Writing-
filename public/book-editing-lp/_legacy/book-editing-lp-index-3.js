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
function setButtonURL() {
//zE.activate();
$zopim.livechat.window.toggle();
}
  window.$zopim || function (a, d) {
            var b = $zopim = function (a) {
                    b._.push(a)
                },
                c = b.s = a.createElement(d);
            a = a.getElementsByTagName(d)[0];
            b.set = function (a) {
                b.set._.push(a)
            };
            b._ = [];
            b.set._ = [];
            c.async = !0;
            c.setAttribute("charset", "utf-8");
            c.src = "";
            b.t = +new Date;
            c.type = "text/javascript";
            a.parentNode.insertBefore(c, a)
        }
        (document, "script");

    $zopim(function () {
        function a(a) {
            2 <= a && $zopim.livechat.window.show()
        }
        $zopim.livechat.setOnUnreadMsgs(a)
    });
//   $(document).ready(function(){ $('.phone').inputmask('(999)-999-9999'); });
  $('.chat, .chatt,.chats').click(function(){  $zopim.livechat.window.toggle(); });
