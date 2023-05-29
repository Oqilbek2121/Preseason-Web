/*
**
** QWASAR.IO -- my_recursive_pow
**
**
** @param {Integer} param_1
** @param {Integer} param_2
** @return {integer}

**
*/

function my_recursive_pow(base, exponent) {
    if (exponent == 0)
        return 1;
      else
        return base * my_recursive_pow(base, exponent - 1);
    };