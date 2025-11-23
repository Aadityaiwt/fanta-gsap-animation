var a=gsap.timeline({
    scrollTrigger:{
        trigger:".one",
        start:"0% 100%",
        end:"50% 50%",
        scrub:true
    }
})

a.to('#fanta',{
    top:"105%",
    left:"-7%",
    zIndex:2
}, 0)

a.to('#orange-cut',{
    top:"145%",
    left: "20%",
    zIndex:1
}, 0)

a.to('#orange', {
    top:"160%",
    left:"60%",
}, 0)

a.to('#leaf2',{
    top:"90%",
    right:"85%",
    rotationZ:"360",
    height:" 200px",
    width:"200px",
    zIndex:3
}, 0)

a.to('#leaf',{
    top:"100%",
    left:"90%",
    rotationZ:"360",
    height:" 150px",
    width:"150px",
    zIndex:4
}, 0)

var b = gsap.timeline({
    scrollTrigger:{
        trigger:".two",
        start:"0% 100%",
        end:"50% 50%",
        scrub:true
    }
}, 0);

b.to('#fanta',{
    top:"212%",
    left:"25%",
    // rotate:360,
}, 0);

b.to('#orange-cut',{
    top:"197%",
    height:"54vh",
    left:"35%",
    // rotate:360,
}, 0);