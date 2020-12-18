const button = document.getElementById("button");
const dobbelArray = [];
const worp = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0
}





button.onclick = function gooi() {
    console.log("er is gegooid");
    dobbel();
    console.log(dobbelArray);
    console.log(worp)
  }

function dobbel() {
    while(dobbelArray.length < 8) {
        	dobbelArray.push(Math.floor((Math.random() * 6) + 1))
    }
}

