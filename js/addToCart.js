let place_order_btn = document.getElementById("place-order-btn");
let order_place_msg = document.getElementById("order-place-msg");

function orderPlaced() {
  window.alert(
    "You order is placed successfull and coming soon !!!! Thank You for order 😊 "
  );
}

let clear_btn = document.getElementById("clear-btn");
let container= document.getElementById("container")
function clear1(key) 
{
  switch (key) {
    case 1:
        container.style.display="none";
        document.getElementById("clear-msg").innerHTML="Your cart is empty"
        document.getElementById("empty-cart").style.display="block"
        container.style.background="url('https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png')"
      break;
  
    default:
        container.style.display="none"
      break;
  }
}
