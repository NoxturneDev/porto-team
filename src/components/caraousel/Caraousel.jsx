import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import Section from '../Section'
import Card from '../ui/Cards'
import Button from '../ui/Button'
import Slides from './Slides'

function Caraousel() {
    let i = 0
    const anim = useRef(null)
    const slide = useRef(null)
    const [click, setClick] = useState(true)

    function scrolling() {
        let st = window.scrollY
        const offset = anim.current.offsetTop + anim.current.offsetHeight

        if (st > anim.current.offsetTop - 100) {
            i--
        } else if (st < offset) {
            i++
        }

        gsap.to(anim.current, {
            x: i * 5,
            ease: "power2.out"
        })
    }

    let index = 0

    function slideIt(direction) {

        if (direction === "next") {
            console.log('next')
            if (index > 2) {
                gsap.set(slide.current, {
                    xPercent: 100, onComplete() {
                        gsap.to(slide.current, { xPercent: 0, duration: 1})
                    }
                })
                index = 0
                return
            }
            gsap.to(slide.current, { xPercent: index * -100 , duration: 1})
            console.log(index)

        }
        if (direction === "prev") {
            if (index < -2) {
                const reset = gsap.set(slide.current, {
                    xPercent: -100, onComplete() {
                        gsap.to(slide.current, { xPercent: 0, duration: 1})
                    }
                })

                reset.play()

                index = 0
                return
            }

            gsap.to(slide.current, { xPercent: -index * 100, duration: 1 })
            console.log(index)


        }
    }

    function prevSlide() {
        index--

        slideIt("prev")
        return
    }

    function nextSlide() {
        const targets = slide.current.children

        index++
        if (index > targets.length) {
            index = targets.length
            return
        }

        slideIt("next")
        return
    }

    useEffect(() => {
        window.addEventListener('scroll', scrolling)

        return (() => {
            window.removeEventListener('scroll', scrolling)
        })
    })

    return (
        <>
            <Section custom="bg-slate-500 p-0">
                <div ref={anim} className="container-flex translate-x[-100%]">
                    <Card size="sm" custom="bg-slate-800"></Card>
                    <Card size="lg" custom="bg-slate-900"></Card>
                    <Card size="sm" custom="bg-slate-800"></Card>
                    <Card size="md" custom="bg-slate-900"></Card>
                    <Card size="lg" custom="bg-slate-800"></Card>
                    <Card size="sm" custom="bg-slate-900"></Card>
                    <Card size="lg" custom="bg-slate-900"></Card>
                    <Card size="md" custom="bg-slate-800"></Card>
                </div>
            </Section>
            <Section custom="p-0 bg-slate-500">
                <ul className='container-flex w-screen bg-red-400 p-0' ref={slide} >
                    <li className='slides slide-1' >
                        <Slides position="next">Test 3</Slides>
                    </li>
                    <li className='slides slide-1'>
                        <Slides position="next">Test 1</Slides>
                    </li>
                    <li className='slides slide-2'>
                        <Slides position="current">Test 2</Slides>
                    </li>
                    <li className='slides slide-3'>
                        <Slides position="next">Test 3</Slides>
                    </li>
                    <li className='slides slide-3'>
                        <Slides position="next">Test 1</Slides>
                    </li>
                </ul>
                <div className="button-group-floating container-flex p-0 absolute w-screen h-screen">
                    <div className="container-flex-l w-full px-6">

                        <div onClick={click ? prevSlide : null}>
                            <Button animate={true}>Prev</Button>
                        </div>
                    </div>
                    <div className="container-flex-r w-full px-6">
                        <div onClick={click ? nextSlide : null}>
                            <Button animate={true}>Next</Button>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    )
}

export default Caraousel

// TODO: New slider functionality, better one
// gsap.registerPlugin(Draggable, InertiaPlugin);

// var slideDelay = 1.5;
// var slideDuration = 0.3;
// var wrap = true;

// var slides = document.querySelectorAll(".slide");
// var prevButton = document.querySelector("#prevButton");
// var nextButton = document.querySelector("#nextButton");
// var progressWrap = gsap.utils.wrap(0, 1);

// var numSlides = slides.length;

// gsap.set(slides, {
//   backgroundColor: "random([red, blue, green, purple, orange, yellow, lime, pink])",
//   xPercent: i => i * 100
// });

// var wrapX = gsap.utils.wrap(-100, (numSlides - 1) * 100);
// var timer = gsap.delayedCall(slideDelay, autoPlay);

// var animation = gsap.to(slides, {
//   xPercent: "+=" + (numSlides * 100),
//   duration: 1,
//   ease: "none",
//   paused: true,
//   repeat: -1,
//   modifiers: {
//     xPercent: wrapX
//   }
// });

// var proxy = document.createElement("div");
// var slideAnimation = gsap.to({}, {});
// var slideWidth = 0;
// var wrapWidth = 0;

// var draggable = new Draggable(proxy, {
//   trigger: ".slides-container",
//   inertia: true,
//   onPress: updateDraggable,
//   onDrag: updateProgress,
//   onThrowUpdate: updateProgress,
//   snap: {     
//     x: snapX
//   }
// });

// resize();

// window.addEventListener("resize", resize);

// prevButton.addEventListener("click", function() {
//   animateSlides(1);
// });

// nextButton.addEventListener("click", function() {
//   animateSlides(-1);
// });

// function updateDraggable() {
//   timer.restart(true);
//   slideAnimation.kill();
//   this.update();
// }

// function animateSlides(direction) {
    
//   timer.restart(true);
//   slideAnimation.kill();
//   var x = snapX(gsap.getProperty(proxy, "x") + direction * slideWidth);
  
//   slideAnimation = gsap.to(proxy, {
//     x: x,
//     duration: slideDuration,
//     onUpdate: updateProgress
//   });  
// }

// function autoPlay() {  
//   if (draggable.isPressed || draggable.isDragging || draggable.isThrowing) {
//     timer.restart(true);
//   } else {
//     animateSlides(-1);
//   }
// }

// function updateProgress() { 
//   animation.progress(progressWrap(gsap.getProperty(proxy, "x") / wrapWidth));
// }

// function snapX(value) {
//   let snapped = gsap.utils.snap(slideWidth, value);
//   return wrap ? snapped : gsap.utils.clamp(-slideWidth * (numSlides - 1), 0, snapped);
// }

// function resize() {
  
//   var norm = (gsap.getProperty(proxy, "x") / wrapWidth) || 0;
  
//   slideWidth = slides[0].offsetWidth;
//   wrapWidth = slideWidth * numSlides;
  
//   wrap || draggable.applyBounds({minX: -slideWidth * (numSlides - 1), maxX: 0});
  
//   gsap.set(proxy, {
//     x: norm * wrapWidth
//   });
  
//   animateSlides(0);
//   slideAnimation.progress(1);
// }
