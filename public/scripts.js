$(function(){
//initial variable in which to store pulled response
  var balance = "";
//click handler
  $("button").on("click", function(){
    $.ajax({
      url: "http://localhost:3000/balance",
      type: "GET"
    }).done(function(response){
      balance = response;
      moneyDrop();
      textDrop();
    })
  })
  //functions to for animating & appending items/images.
  function moneyDrop(){
    $("#moneybag").hide();
    $("#moneybag").css("top", "-260px");
    $("#moneybag").show();
    $("#moneybag").animate({"top" : "260px"})
  }
  function textDrop(){
    $("#accountDisplay").css("top", "-300px");
    $("#accountDisplay").animate({"top" : "360px"})
    $("#accountDisplay").find("p").text("");
    $("#accountDisplay").find("p").append(balance);
  }
})
