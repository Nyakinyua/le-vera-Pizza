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
})
/*function Order(size,crust,toppings){                                                                                             
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
}

//!/ Give functions useful names
Order.prototype.generateReceipt = function(){
  return this.size + "" + this.crust + " " + this.toppings;
}

//!/ Give variables useful names
Order.prototype.calculatePriceFor = function(quantity, deliveryFee) {
  return (this.size + this.crust + this.toppings) * quantity + deliveryFee
}

$(document).ready(function () {
var deliveryFee = 0;

$("#order").click(function () {
  var deliveryRadioValue = $("input[name=delivery]:checked").val(); 
  var shouldDeliver = (deliveryRadioValue === "yes"); 

  if (shouldDeliver) {
    deliveryFee = 1000;
    var location = prompt("What is your location?");
    alert("Your order will be delivered to " + location + ". You will pay an extra " + deliveryFee + "Ksh for delivery.");
  }

  var sizeCost = parseFloat(document.getElementById("sort").value);
  var crustCost = parseFloat(document.getElementById("crusty").value);


  //!/ https://www.tutorialrepublic.com/faq/how-to-get-the-values-of-selected-checkboxes-in-a-group-using-jquery.php
  var toppingsCost = 0;
  $.each($("input[name='toppings']:checked"), function () {
    toppingsCost += parseFloat($(this).val());
  });

  var order = new Order(sizeCost, crustCost, toppingsCost)

  var quantity = parseFloat(document.getElementById("num").value);
  var total = order.calculatePriceFor(quantity, deliveryFee)

  alert("You will pay KES." + total + ".")

  //!/ Finish this up
  document.getElementById("getsize").innerHTML = sizeCost;
   document.getElementById("getcrust").innerHTML = crustCost;
 document.getElementById("gettopping").innerHTML = toppingsCost;
  document.getElementById("sum").innerHTML = total;
  $(".the-order").show();

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
})*/