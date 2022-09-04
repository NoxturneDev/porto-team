import React, { useEffect, useRef } from 'react'
import { Container } from '../components/Container'

function JumbotronAnim() {
    const CANVAS = useRef(null)
    const anim = useRef(null)
    const letter = useRef(null)
    const initAnim = () => {
        const ctx = CANVAS.current.getContext('2d')
        CANVAS.current.width = CANVAS.current.offsetWidth
        CANVAS.current.height = CANVAS.current.offsetHeight

        class Dots {
            constructor({ position, size, direction, velocity }) {
                this.position = {
                    x: position.x,
                    y: position.y
                }
                this.direction = {
                    x: direction.x,
                    y: direction.y
                }
                this.size = size
                this.velocity = velocity
            }
            draw() {
                ctx.beginPath()
                ctx.arc(this.position.x, this.position.y, this.size, 0, Math.PI * 2, false)
                ctx.fillStyle = "#A396CB"
                ctx.fill()
            }

            update() {
                this.draw()
                this.position.x += this.direction.x
                this.position.y += this.direction.y

                if (this.position.x < 0 || this.position.x > window.innerWidth) {
                    this.direction.x = -this.direction.x
                }
                if (this.position.y < 0 || this.position.y > window.innerHeight) {
                    this.direction.y = -this.direction.y
                }

            }

        }

        const arr = []

        const init = () => {

            for (let i = 1; i <= 90; i++) {
                let size = (Math.random() * 8 + 1)
                const dots = new Dots({
                    position: {
                        x: (Math.random() * (window.innerWidth - size * 2) - (size * 2) + (size * 2)),
                        y: (Math.random() * (window.innerHeight - size * 2) - (size * 2) + (size * 2))
                    },
                    direction: {
                        x: Math.random() * 5 - 2.5,
                        y: Math.random() * 5 - 2.5
                    },
                    size: size,
                    velocity: 10
                })

                arr.push(dots)
            }
        }

        function connect() {
            for (let a = 0; a < arr.length; a++) {
                for (let b = a; b < arr.length; b++) {
                    let distance = ((arr[a].position.x - arr[b].position.x) * (arr[a].position.x - arr[b].position.x)) + ((arr[a].position.y - arr[b].position.y) * (arr[a].position.y - arr[b].position.y))

                    if (distance < (window.innerWidth / 7) * (window.innerHeight / 7)) {
                        ctx.strokeStyle = "#A396CB"
                        ctx.lineWidth = 1
                        ctx.beginPath()
                        ctx.moveTo(arr[a].position.x, arr[a].position.y)
                        ctx.lineTo(arr[b].position.x, arr[b].position.y)
                        ctx.stroke()
                    }
                }
            }
        }

        const animate = () => {
            window.requestAnimationFrame(animate)
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

            for (let i = 0; i <= arr.length - 1; i++) {
                arr[i].update()
            }

            connect()
        }

        init()
        animate()
    }

    // const titleAnimation = () => {
    //     const headerString = "JUMBOTRON"

    //     headerString.split('').forEach(l => {
    //         anim.current.innerHtml(`<span>${l}</span>`))
    //     })
    // }

    useEffect(() => {
        // titleAnimation()
        initAnim()
    }, [])
    return (
        <Container custom="bg-astro-dark-100">
            <canvas ref={CANVAS} className="h-screen w-screen"></canvas>
            <Container full custom="absolute">
                <h1 className='header-lg text-white' ref={anim}><span ref={letter}>JUMBOTRON</span></h1>
            </Container>
        </Container>
    )
}

export default JumbotronAnim