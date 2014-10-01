(function($){

  var cutUpText = $("#cut-up-text");
  var toCutUp = $("#to-cut-up");
  var firstClick = true;
  
  toCutUp.val("Write or past text to be cut up here");

  var Checkboxes = {
    reverseWords: $("#rev-words").is(':checked'),
    shuffleWords: $("#shuf-words").is(':checked'),
    reverseLines: $("#rev-lines").is(':checked'),
    shuffleLines: $("#shuf-lines").is(':checked'),
        burSplit: $("#bur-spl").is(':checked'),
         burWord: $("#bur-wrd").is(':checked')
  }

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
    var toCut = getPreCutText();
    var sizFuncs = [];
    var postCut = toCut;

    if ( Checkboxes.reverseWords ){
      sizFuncs.unshift( Siz.reverseWords );
    }
    if ( Checkboxes.shuffleWords ){
      sizFuncs.unshift( Siz.shuffleWords );
    }
    if ( Checkboxes.reverseLines ){
      sizFuncs.unshift( Siz.reverseLines );
    }
    if ( Checkboxes.shuffleLines ){
      sizFuncs.unshift( Siz.shuffleLines );
    }
    if ( Checkboxes.burSplit ){
      sizFuncs.unshift( Siz.burSpl );
    }
    if ( Checkboxes.burWord ){
      sizFuncs.unshift( Siz.burWrd );
    }

    sizFuncs = _.shuffle(sizFuncs);

    console.log(postCut);

    for (var i = 0; i < sizFuncs.length; i++){
      console.log(postCut);
      console.log(sizFuncs[i]);
      postCut = sizFuncs[i].call(window, postCut);
    }

    cutUpText.html(postCut);
  });

})(jQuery)
