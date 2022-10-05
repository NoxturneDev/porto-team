import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import Section from '../Section'
import Card from '../ui/Cards'
import Button from '../ui/Button'
import Slides from './Slides'
import { Wrapper } from '../Container'

function Caraousel() {
    const slide = useRef(null)

    let index = 0,
    click = true

    const start = () => {
        click = false
    }
    const finish = () => {                
        click = true
    }


    function slideIt(direction) {

        if (direction === "next") {
            console.log('next')
            if (index > 2) {
                gsap.set(slide.current, {
                    xPercent: 100, onComplete() {
                        gsap.to(slide.current, { xPercent: 0, duration: 1, 
                            onStart(){start()}, 
                            onComplete(){finish()}
                        })
                    }
                })
                index = 0
                return
            }
            const slideNext = gsap.to(slide.current, { xPercent: index * -100 , duration: 1, 
                onStart(){start()},
                onComplete(){finish()}
            })

            slideNext.play()
            console.log(index)

        }

        if (direction === "prev") {
            if (index < -2) {
                const reset = gsap.set(slide.current, {
                    xPercent: -100, onStart(){start()}, onComplete() {
                        gsap.to(slide.current, { xPercent: 0, duration: 1, 
                            onStart(){start()},
                            onComplete(){finish()}
                        })
                    }
                })

                reset.play()

                index = 0
                return
            }

            const slidePrev = gsap.to(slide.current, { xPercent: -index * 100 , duration: 1, 
                onStart(){start()},
                onComplete(){finish()}
            })

            slidePrev.play()
            console.log(index)
        }
    }

    function prevSlide() {
        if(!click) return "ga bisa"

     
        slideIt("prev")
        return
    }

    function nextSlide() {
        if(!click) return "ga bisa"
        const targets = slide.current.children

        index++
        if (index > targets.length) {
            index = targets.length
            return
        }

        slideIt("next")
        return
    }


    return (
        <>
            <Section custom="p-0">
                <ul className='container-flex w-screen p-0' ref={slide} >
                    <li className='slides slide-1'>
                        <Slides >Test 3</Slides>
                    </li>
                    <li className='slides slide-1'>
                        <Slides >Test 1</Slides>
                    </li>
                    <li className='slides slide-2'>
                        <Slides >Test 2</Slides>
                    </li>
                    <li className='slides slide-3'>
                        <Slides >Test 3</Slides>
                    </li>
                    <li className='slides slide-3'>
                        <Slides >Test 1</Slides>
                    </li>
                </ul>
                <div className="button-group-floating container-flex p-0 absolute w-screen h-screen">
                    <div className="container-flex-l w-full px-6">

                        <div onClick={prevSlide}>
                            <Button animate={true}>Prev</Button>
                        </div>
                    </div>
                    <div className="container-flex-r w-full px-6">
                        <div onClick={nextSlide}>
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
