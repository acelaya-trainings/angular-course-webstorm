var divide = function(x,y,next) {
    // if error condition?
    if ( y === 0 ) {
        // "throw" the error safely by calling the completion callback
        // with the first argument being the error
        next(new Error("Can't divide by zero"))
    }
    else {
        // no error occured, continue on
        next(null, x/y)
    }
}

divide(4,2,function(err,result){
    // did an error occur?
    if ( err ) {
        // handle the error safely
        console.log('4/2=err', err)
    }
    else {
        // no error occured, continue on
        console.log('4/2='+result)
    }
})

divide(4,0,function(err,result){
    // did an error occur?
    if ( err ) {
        // handle the error safely
        console.log('4/0=err', err)
    }
    else {
        // no error occured, continue on
        console.log('4/0='+result)
    }
})