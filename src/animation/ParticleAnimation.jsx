import React, {useEffect, useRef} from 'react'

function ParticleAnimation() {
    const CANVAS = useRef(null)

    const initAnim = () => {
        const ctx = CANVAS.current.getContext("2d");
        CANVAS.current.width = CANVAS.current.offsetWidth;
        CANVAS.current.height = CANVAS.current.offsetHeight;

        class Dots {
            constructor({ position, size, direction, velocity }) {
                this.position = {
                    x: position.x,
                    y: position.y,
                };
                this.direction = {
                    x: direction.x,
                    y: direction.y,
                };
                this.size = size;
                this.velocity = velocity;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(
                    this.position.x,
                    this.position.y,
                    this.size,
                    0,
                    Math.PI * 2,
                    false
                );
                ctx.fillStyle = "#A396CB";
                ctx.fill();
            }

            update() {
                this.draw();
                this.position.x += this.direction.x;
                this.position.y += this.direction.y;

                if (this.position.x < 0 || this.position.x > window.innerWidth) {
                    this.direction.x = -this.direction.x;
                }
                if (this.position.y < 0 || this.position.y > window.innerHeight) {
                    this.direction.y = -this.direction.y;
                }
            }
        }

        const arr = [];

        const init = () => {
            for (let i = 1; i <= 30; i++) {
                let size = Math.random() * 8 + 1;
                const dots = new Dots({
                    position: {
                        x:
                            Math.random() * (window.innerWidth - size * 2) -
                            size  +
                            size ,
                        y:
                            Math.random() * (window.innerHeight - size * 2) -
                            size  +
                            size ,
                    },
                    direction: {
                        x: Math.random() * 2 - 2.5,
                        y: Math.random() * 2 - 2.5,
                    },
                    size: size,
                    velocity: 10,
                });

                arr.push(dots);
            }
        };


        const animate = () => {
            window.requestAnimationFrame(animate);
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

            for (let i = 0; i <= arr.length - 1; i++) {
                arr[i].update();
            }
        };

        init();
        animate();
    };

    useEffect(() => {
        initAnim();
    }, []);
    return (
        <canvas ref={CANVAS} className="w-screen h-screen opacity-50 absolute "></canvas>
    )
}

export default ParticleAnimation