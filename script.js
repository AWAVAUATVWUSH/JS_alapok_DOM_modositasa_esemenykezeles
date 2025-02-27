window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    elemekFormazasa1();
    esemenykezeles1();
    esemenykezeles2();
    esemenykezeles4();
});

function elemekElerese1(){
   console.log(document.getElementById("f1").innerHTML);
}

function elemekElerese2(){
   document.getElementById("ide").innerHTML = "<p>Jóreggelt!</p>"
}

function elemekElerese3(){
    /*let ideClassElementsList = document.getElementsByClassName("ide")
    for(let i = 0; i<ideClassElementsList.length; i++){
        ideClassElementsList[i].innerHTML = "<p>Jóreggelt!</p>"
    }*/
    document.querySelector(".ide").innerHTML = "<p>Jóreggelt!</p>";
 }

function elemekElerese4(){
    let text = "<ul>"
    for(let i = 0; i<5; i++){
        text += `<li>${parseInt(Math.random()*21+10)}</li>`
    }
    text += "</ul>"
    document.querySelector(".lista").innerHTML = text;
}

function elemekFormazasa1(){
    document.querySelector(".lista").classList.add("formazott");
}

function esemenykezeles1(){
    let listaClassElement = document.querySelector(".lista");
    listaClassElement.addEventListener("click", ()=>{
        document.querySelector(".kattintasutan").innerHTML = listaClassElement.innerHTML;
    })
}

function esemenykezeles2(){
    let feladatClassElement = document.querySelector(".feladat");
    feladatClassElement.innerHTML = "<button>OK</button>";
    document.querySelector(".feladat button").addEventListener("click", ()=>{
        feladatClassElement.innerHTML += `<img src="Smile4.png" alt="MissingIMG">`;
        esemenykezeles3();
    })
}

function esemenykezeles3(){
    let feladatClassImgElement = document.querySelector(".feladat img");
    feladatClassImgElement.addEventListener("mouseenter", ()=>{
        feladatClassImgElement.style.cssText = "width: 80%;";
    })
    feladatClassImgElement.addEventListener("mouseleave", ()=>{
        feladatClassImgElement.style.cssText = "width: 100%";
    })
}

function esemenykezeles4(){
    let taroloClassDivElements = document.querySelectorAll(".tarolo div");
    for(let i = 0; i<taroloClassDivElements.length; i++){
        taroloClassDivElements[i].addEventListener("click", ()=>{
            document.querySelector(".eredmeny").innerHTML += taroloClassDivElements[i].innerHTML;
        })
    }
}
