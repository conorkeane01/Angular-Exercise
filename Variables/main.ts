//Var is bad practice and should not be used, use let instead


function doSomething() {
    for (var i = 0; i <5; i++) {
        console.log(i);
    }

    console.log('Finally: ' + i);
}

doSomething();