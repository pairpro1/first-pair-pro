function Start () {
    var minute = 1;
    var sec = 30;
    sta = setInterval(function() {
      $("#timer").text(minute + " : " + sec);
      sec--;
      if (sec == 00) {
        minute --;
        sec = 59;
        if (minute === 0 && sec===0) {
          minute = 1;
          sec = 30;
         }
      }
    }, 1000);
  }
  function Stop() {
    clearInterval(this.sta);
}

 
 
 function check(correct,answer){
  for (var i=0;i<correct.length; i++){
    
      if(correct[i] !== answer[i]){
        return false ;
      }
    }
      return true;
 
}



$(document).ready(function(){
  var correct = [0,5,7,1];
  $(".b1").click(function(){
    Start();
    $(".b2").click(function(){ 
    answer=[];
    answer.push(Number($('#n1').val()))
    answer.push(Number($('#n2').val()))
    answer.push(Number($('#n3').val()))
    answer.push(Number($('#n4').val()))
    if(check(correct,answer)===false){
      stop();
      alert("you Lost");
    }
    else{
      stop();
      alert("you guessed");
    }console.log(check(correct,answer));
    })



})
})




























