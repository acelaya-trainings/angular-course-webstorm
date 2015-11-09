/**
 * Created by Usuario on 28/09/2015.
 */
function printHello(){
    console.log( "Hello, World!");
}
// Now call above function after 2 seconds
var t = setTimeout(printHello, 2000);

// Now clear the timer
clearTimeout(t);