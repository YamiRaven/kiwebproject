const subElems = document.querySelectorAll(".subheading");
const scroller = scrollama();



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


