//business logic
function ShowSummary(getSize,getCrust,getToppings){                                                                                             
     this.size = getSize;
    this.crust = getCrust;
     this.toppings = getToppings;
 }
 ShowSummary.prototype.totalSummary=function(){
    return this.getsize + "" + this.getcrust + " " + this.getToppings;
 }
var sizes= ["small", "medium", "large"]
$(document).ready(function(){
  var Amount = 0;
  $("#order").click(function(){
    var checkVal = $("input[name=Yes]:checked").val();
    if(checkVal === "yes") {
      Amount = 1000;
      var getLocation = prompt("What is your location?");
      alert("Your order will be delivered at " +  getLocation  +  "  you will pay an extra 200 Ksh for delivery fee.");
    }
  })

  //user logic
  $("#order").click(function(){
    var Size = parseFloat(document.getElementById("sort").value);
    var Crust = parseFloat(document.getElementById("crusty").value);
    var Topping = parseFloat(document.getElementById("toppings").value);
    var Quantity = parseFloat(document.getElementById("num").value);
    var Total = ((Size + Crust + Topping) * Quantity + Amount);
    alert("You will pay " + Total + " Ksh amount of money.")
    document.getElementById("getsize").innerHTML = Size;
    document.getElementById("getcrust").innerHTML = Crust;
    document.getElementById("gettopping").innerHTML = Topping;
    document.getElementById("sum").innerHTML = Total;
    $(".the-order").show();
   
  })
  $("#checkout").click(function(){
    var totalSummary=new ShowSummary((document.getElementById("sort"),(document.getElementById("crusty")), (document.getElementById("toppings")),(document.getElementById("num")))
  });
})
                                                                                           


// contact form inputs
$(".sbmt1").click(function (event) {
  event.preventDefault();
  var name = $("#contact-name").val();
  var email = $("#contact-email").val();
  if ($("#contact-name").val() == "") {
    alert("Please input name")
  }
  else if ($("#contact-email").val() == "") {
    alert("Please input email")
  }
  else if ($("#contact-message").val() == "") {
    alert("Please input your message")
  }
  else {
    alert("Thank you for contacting us, " + name + ". You will be served.");
  }
});