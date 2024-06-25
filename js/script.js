

// Draggable slider


// const hide = gsap.timeline();

// hide.from(".top_title", {
//   duration: 1,
//   autoAlpha: 0,
//   y: 60
// });

// ScrollTrigger.create({
//   animation: hide,
//   trigger: ".our_work_section",
//   scrub: 0.2,
//   start: "top 80%",
//   end: "top 50%"
// });



// const panelWidth = $('.drag-figure2').outerWidth();
// const dg = gsap.timeline();

// dg.to(".dragable_slider_wrapper", {
//   duration: 1,
//   x: -panelWidth
// }).to(".dragable_slider_wrapper", {
//   duration: 1,
//   x: 2 * -panelWidth
// }, "+=1").to(".dragable_slider_wrapper", {});

// ScrollTrigger.create({
//   animation: dg,
//   trigger: ".our_work_section",
//   scrub: 0.2,
//   start: "top top",
//   end: "bottom bottom"
// });


// Calculate the width of each panel and the total width
const panelWidth = document.querySelector('.drag-figure1').offsetWidth;
const slideCount = document.querySelectorAll('.dragable_slider_wrapper .slider_item').length;

// Create a timeline for the hide animation
const hide = gsap.timeline();

hide.from(".top_title", {
  duration: 1,
  autoAlpha: 0,
  y: 60
});

ScrollTrigger.create({
  animation: hide,
  trigger: ".our_services_section",
  scrub: 1,
  start: "top 80%",
  end: "top 50%"
});

// Create a timeline for the sliding animation
const dg = gsap.timeline();
for (let i = 0; i < slideCount; i++) {
  dg.to(".dragable_slider_wrapper", {
    duration: 1,
    x: -panelWidth * (i + 1)
  }, `+=1`);
}

ScrollTrigger.create({
  animation: dg,
  trigger: ".our_services_section",
  scrub: 1,
  start: "top top",
  end: `+=${slideCount * 100}%`
});



// Masnory Grid with filter


$('#masonry-grid').masonry({
  columnWidth: 60,
  itemSelector: '.grid-item'
});


// This does the filter by binding an event on the change of a select box
$("#grid-filter li").click(function() {
    var group = $(this).data('category');
	var group_class = "." + group;
	
    if(group == "*"){
        $(".grid-item").show();
	    $('#masonry-grid').masonry('layout');
       }
    else if(group != "") {
		$(".grid-item").hide();
		$(group_class).show();
		$('#masonry-grid').masonry('layout');
	} else {
		$(".grid-item").show();
		$('#masonry-grid').masonry('layout');
	}
});



let reveal = document.querySelectorAll(".reveal") 

reveal.forEach( (el) => {
  let headings = el.querySelectorAll("h3, p")
  
  let tl = gsap.timeline ()
    .from(headings, {
      y: 80,
      stagger: 0.05,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
    .from(btn, {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, '-=0.6')
  
  ScrollTrigger.create ({
		  trigger: el,
			start: "center 100%", 
      end:"top 50%",
			markers: true,
			toggleActions: "play none none reverse ",
      animation:tl
      })
})
