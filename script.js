$(document).ready( function() {
  $("#Rsend").click( function() {
    var text = $("#Rtext").val();
    if (text.length > 0) {
     $(".messages").append("<div class='messageR'><span class='bubbleR'>"+text+"</span></div>");
    }
    $("#Rtext").val("");
  });
  
  $("#Lsend").click( function() {
    var text = $("#Ltext").val();
    if (text.length > 0) {
     $(".messages").append("<div class='messageL'><span class='bubbleL'>"+text+"</span></div>");
    }
    $("#Ltext").val("");
  });
  
});