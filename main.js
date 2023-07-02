hamburger = document.querySelector(".hamburger");
nav = document.querySelector("nav");
hamburger.onclick = function() {
    nav.classList.toggle("active");
}

var tl = gsap.timeline();

tl
.from("header", {
    y:-50,
    duration:1,
    opacity:0,
})

.from(".wlmDiv", {
    y:-10,
    duration:1,
    opacity:0,
})

.from("#line", {
    y:-2,
    duration:1,
    opacity:0,
    onStart: function (){
        $('#line').textillate({ in: { effect: 'flash'} });
    }
})

.from(".row",{
    x:-20,
    duration:1,
    opacity:0,
})

.from(".row1",{
    x:20,
    duration:1,
    opacity:0,
})

// .from(".samester a",{
//     onStart: function (){
//         $('.samester a').textillate({ in: { effect: 'fadeIn',
//     } });
//     }
// })

.from("footer",{
    y:20,
    duration:1,
    opacity:0,
})