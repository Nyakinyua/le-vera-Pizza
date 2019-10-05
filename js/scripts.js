
function PlaceOrder(size,crust,toppings){                                                                                             
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
}
PlaceOrder.prototype.fullOrder=function(){
    return this.size + "" + this.crust + " " + this.toppings;
}

//user interface
$(document).ready(function(){
    $("form#pizza1").submit(function (event) {
        event.preventDefault();
        var inputtedSize = $("input[type=radio][name=size]:checked").val();
        var inputtedCrust = $("input[type=radio][name=crust]:checked").val();
         var inputtedToppings = [];
        $("input[type=checkbox][name='topp']:checked").each(function () {
            inputtedToppings.push($(this).val());
            
          });
          var newOrder = new PlaceOrder(inputtedSize, inputtedCrust, inputtedToppings);
   

         $("p#first").append("<span class='size-name'>"+newOrder.size + "</span></p>");
          $("p#second").append("<span class='crust-name'>" + newOrder.crust + "</span></P>");
          $("p#third").append("<span class='toppings-name'>" + newOrder.toppings + "</span></p>");
          $(".show-Order").append("<p><span class='total'>" + newOrder.fullOrder() + "</span></P>");
          $("input[type=radio][name=size]:checked").val("");
          $("input[type=radio][name=crust]:checked").val("");
          $("input[type=checkbox][name=topp]:checked").val("");

          $(".order").last().click(function(){
              $(".show-Order").show();
              $(".size-name").text(newOrder.size);
              $(".crust-name").text(newOrder.crust);
              $(".toppings-name").text(newOrder.toppings);
          })

    });

});

