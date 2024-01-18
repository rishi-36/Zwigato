let order_button = document.getElementsByClassName("oder-button");
let order_message=document.getElementsByClassName("cart-message");
// .innerHTML="Item Added";
function AddItem(index)
{
    let currentOrder=0;
    for(var i=0;i<order_button.length;i++)
    {
        order_message.innerHTML="Item has been added";
    }
} 

// document.getElementById('cart-message').innerHTML="Item has been added";