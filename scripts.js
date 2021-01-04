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
    console.log(worp);
  }

function dobbel() {
    while(dobbelArray.length < 8) {
        let random = Math.floor((Math.random() * 6) + 1);
        dobbelArray.push(random);
        worp[random]++;
    }

    tabel();
}

function tabel() {
    document.getElementById("a").innerHTML = worp[1];
    document.getElementById("b").innerHTML = worp[2];
    document.getElementById("c").innerHTML = worp[3];
    document.getElementById("d").innerHTML = worp[4];
    document.getElementById("e").innerHTML = worp[5];
    document.getElementById("f").innerHTML = worp[6];
}