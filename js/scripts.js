function PlaceOrder(size, crust, toppings) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
}


//user interface
document.ready(function(){
    $("form#pizza1").submit(function (event) {
        event.preventDefault();
        var inputtedSize = $("#size").val();
        var inputtedCrust = $("#Crust").val();
        var inputtedToppings = [];
        $("input[type=checkbox]:checked").each(function () {
            inputtedToppings.push($(this).val());
            var newOrder = new PlaceOrder(inputtedSize, inputtedCrust, inputtedToppings);

    });
});