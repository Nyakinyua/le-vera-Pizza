
/*function PlaceOrder(size,crust,toppings){                                                                                             
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
}
PlaceOrder.prototype.fullOrder=function(){
    return this.size + "" + this.crust + " " + this.toppings;
}

//user interface
$(document).ready(function(){
    $("#another").click(function(){
        $("another-order")
    })
    $("form#pizza1").submit(function (event) {
        event.preventDefault();
        var inputtedSize = $("input[type=radio][name=size]:checked").val();
        var inputtedCrust = $("input[type=radio][name=crust]:checked").val();
         var inputtedToppings = [];
        $("input[type=checkbox][name='topp']:checked").each(function () {
            inputtedToppings.push($(this).val());
            
          });
          var newOrder = new PlaceOrder(inputtedSize, inputtedCrust, inputtedToppings);
          console.log(newOrder*/

//    });

//})



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
    var Topping = [];
    parseFloat(document.getElementById("toppings").value);
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
/*var toppingsArr = [];
$("input[type=checkbox]:checked").each(function() {
    toppingsArr.push($(this).val());
});*/