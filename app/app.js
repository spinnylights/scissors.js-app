(function($){

  var cutUpText = $("#cut-up-text");
  var toCutUp = $("#to-cut-up");
  var firstClick = true;
  
  toCutUp.val("Write or past text to be cut up here");

  var Checkboxes = {
    reverseWords: function() { return $("#rev-words").is(':checked'); },
    shuffleWords: function() { return $("#shuf-words").is(':checked'); },
    reverseLines: function() { return $("#rev-lines").is(':checked'); },
    shuffleLines: function() { return $("#shuf-lines").is(':checked'); },
        burSplit: function() { return $("#bur-spl").is(':checked'); },
         burWord: function() { return $("#bur-wrd").is(':checked'); }
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
    var sizFuncs = [];
    var postCut = getPreCutText();

    if ( Checkboxes.reverseWords() ){
      sizFuncs.unshift( Siz.reverseWords );
    }
    if ( Checkboxes.shuffleWords() ){
      sizFuncs.unshift( Siz.shuffleWords );
    }
    if ( Checkboxes.reverseLines() ){
      sizFuncs.unshift( Siz.reverseLines );
    }
    if ( Checkboxes.shuffleLines() ){
      sizFuncs.unshift( Siz.shuffleLines );
    }
    if ( Checkboxes.burSplit() ){
      sizFuncs.unshift( Siz.burSpl );
    }
    if ( Checkboxes.burWord() ){
      sizFuncs.unshift( Siz.burWrd );
    }

    sizFuncs = _.shuffle(sizFuncs);

    console.log(postCut);
    console.log(sizFuncs);

    for (var i = 0; i < sizFuncs.length; i++){
      console.log(postCut);
      console.log(sizFuncs[i]);
      postCut = sizFuncs[i].call(window, postCut);
    }

    cutUpText.val(postCut);
  });

})(jQuery)
