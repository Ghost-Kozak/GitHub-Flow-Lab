
function fuzzbuzz(maxval) {
    for (i = 1; i < maxval; i++) {
        let printed = false;
        if (i % 4 === 0) {
            console.log("fizz");
            printed = true;
        }
        if (i % 6 === 0) {
            console.log("buzz");
            printed = true;
        }
        if (printed === false) {
            console.log(i);
        }
        // probably some endline call like <br> here
    }
}