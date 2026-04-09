const subElems = document.querySelectorAll(".subheading");
const scroller = scrollama();

// Impressum items
let impHeader = document.getElementById("impheader");
let impBody = document.getElementById("impbody");

scroller.setup({
    step: ".content-section",
    offset: 0.8,
    debug: false
});

scroller
    .onStepEnter((response) => {
        const heading = response.element.querySelector(".subheading");
        if (heading) {
            heading.classList.remove("is-inactive");
        }
    })
    
    /*
    .onStepExit((response) => {
        const heading = response.element.querySelector(".subheading");
        if (heading) {
            heading.classList.add("is-inactive");
        }
    })
    */
    ;
    

window.addEventListener("resize", () => {
    scroller.resize();
});


// Impressum Click to expand
impHeader.addEventListener("click", function() {
    if (impBody.style.color === "white") {
        impBody.style.height = "auto";
        impBody.style.color = "black";
    } else {
        impBody.style.height = 0;
        impBody.style.color = "white";
    }


})