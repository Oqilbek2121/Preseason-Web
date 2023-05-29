/*
**
** QWASAR.IO -- my_average_mark
**
**
** @param {String_integer[]} param_1
** @return {float}

**
*/


function my_average_mark(param_1) {
    if (param_1.length == 0) {
        return 0,0;
    }

    let pul = 0;

    for(let tanga = 0; tanga < param_1.length; tanga++) {
        pul = pul + param_1[tanga]["integer"];
    }

    return (pul/param_1.length).toFixed(1);
};