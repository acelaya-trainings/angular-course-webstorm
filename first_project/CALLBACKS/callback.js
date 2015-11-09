/**
 * callbacks.js
 * variable arguments in function calls and
 * function with callbacks
 * @author Pello Xabier Altadill Izura
 * @greetz 4 u
 */

/*
 * example
 * shows the use of variable arguments and how
 * to deal with them.
 */
function example(param1, param2) {
    console.log('example called. arguments: ' + arguments.length);

    for (i = 0; i < arguments.length; i++) {
        console.log('param ' + i + ': ' + arguments[i] + ". type: " + typeof(arguments[i]));
    }


    // check for argument types:
    // Check if first argument is an integer
    if (typeof(param1) !== 'number') {
        console.log('param1 is not a number: ');
    }

    // Check if second argument is a String
    if (typeof(param2) !== 'string') {
        console.log('param2 is not a string:');
    }

    console.log("All arguments are ok\n");

}

example();
example(5);
example(3, '6');
example('juan', 'perico', 'ejemplo');

/**
 * sumWithCallback
 * will sum two values and call the callback if any.
 */
function sumWithCallback(a, b) {

    // Is there any callback?
    var possibleCallback = arguments[arguments.length - 1];
    callback = (typeof(possibleCallback) == 'function' ? possibleCallback : null);

    // we mark the position of the last numeric argument depending of callback function presence
    var last = (callback == null) ? arguments.length : arguments.length - 1;

    // minium arguments: 1
    if (arguments.length < 1) {
        return callback(new Error("Please give me one argument."));
    }

    var result = 0;

    for (i = 0; i < last; i++) {
        if (typeof(arguments[i]) !== 'number') {
            return callback(new Error('Argument ' + i + ' n(ot a number: ' + arguments[i]));
        } else {
            result += arguments[i];
        }
    }

    if (callback == null)
        return result
    else
        return callback(null, result);
}
// Now we call the same function with a callback
var result = sumWithCallback(600, 66, function (err, data) {
    // throw error
    if (err)  throw err;

    console.log("result of operation: " + data);
    return data;
});

console.log(result);
console.log(sumWithCallback(4, 5, 2));


