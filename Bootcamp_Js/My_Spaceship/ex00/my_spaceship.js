function my_spaceship(string){
    var x = 0;
    var y = 0;
    var side_side1 = 'up';
    let list_side = ['up', 'right', 'down', 'left'];
    
        for (i in string) {
            el = string[i];

            if (el == "R") {
                index = list_side.indexOf(side_side1) + 1;
                if (index < list_side.length && index > -1) {
                    side_side1 = list_side[index];
                }
                else{
                    index = 0;
                    side_side1 = list_side[index];
                }
            }
     
            else if (el == "L") {
                index = list_side.indexOf(side_side1) - 1;
                if (index < list_side.length && index > -1){
                    side_side1 = list_side[index];
                }
                else {
                    index = 3;
                    side_side1 = list_side[index];
                }
            }

            else if (el == "A") {
                if (side_side1 == "up") y--
                else if(side_side1 == "down") y++
                else if(side_side1 == "left") x--
                else if(side_side1 == "right") x++
            }

        }  

        return "{x: " + x + ", y: " + y + ", direction: '" + side_side1 + "'}";
}