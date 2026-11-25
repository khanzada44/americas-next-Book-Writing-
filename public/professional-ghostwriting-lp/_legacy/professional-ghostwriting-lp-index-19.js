$(document).ready(function(){ 
  
  $("input[name='phone']").inputmask("number", {
  mask: "9{10}",
  autoUnmask: true,
  showMaskOnHover: false,
  clearIncomplete: true
});
  });
