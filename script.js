const subElems = document.querySelectorAll(".subheading");
const scroller = scrollama();



scroller.setup({
    step: ".content-section",
    offset: 0.8,
    debug: true
});

scroller
    .onStepEnter((response) => {
        const heading = response.element.querySelector(".subheading");
        if (heading) {
            heading.classList.add("is-active");
        }
    })
    .onStepExit((response) => {
        const heading = response.element.querySelector(".subheading");
        if (heading) {
            heading.classList.remove("is-active");
        }
    });

window.addEventListener("resize", () => {
    scroller.resize();
});