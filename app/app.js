(function($){

  var cutUpText = $("#cut-up-text");
  var toCutUp = $("#to-cut-up");
  var firstClick = true;

  var getPreCutText = function(){
    return toCutUp.val();
  }

  toCutUp.focus(function(){
    if (firstClick) {
      toCutUp.val("");
      firstClick = false;
    }
  });

  $("#run-cut-up").click(function(){
    cutUpText.html(getPreCutText());
  });

})(jQuery)
