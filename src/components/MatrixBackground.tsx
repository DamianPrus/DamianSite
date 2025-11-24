import { useEffect, useRef } from 'react';

export default function MatrixBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        let scrollY = window.scrollY;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const characters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポ';

        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            opacity: number;
            opacitySpeed: number;
            color: string;
            char: string;
            baseOpacity: number;

            constructor() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                this.size = Math.random() * 14 + 10; // Larger size for text
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
                this.baseOpacity = Math.random() * 0.5 + 0.3; // Higher base opacity
                this.opacity = this.baseOpacity;
                this.opacitySpeed = Math.random() * 0.02 - 0.01;
                // Matrix green colors
                const greenShades = ['#00FF41', '#008F11', '#003B00', '#0D0208', '#00FF00'];
                this.color = greenShades[Math.floor(Math.random() * greenShades.length)];
                this.char = characters.charAt(Math.floor(Math.random() * characters.length));
            }

            update(mouseX: number, mouseY: number) {
                // Scroll effect: particles move faster or opacity increases based on scroll
                const scrollFactor = Math.min(scrollY / 1000, 1); // 0 to 1

                this.x += this.speedX * (1 + scrollFactor);
                this.y += this.speedY * (1 + scrollFactor);

                // Randomly change character occasionally
                if (Math.random() < 0.02) {
                    this.char = characters.charAt(Math.floor(Math.random() * characters.length));
                }

                // Breathing effect
                this.opacity += this.opacitySpeed;
                if (this.opacity > this.baseOpacity + 0.2 || this.opacity < this.baseOpacity - 0.2) {
                    this.opacitySpeed = -this.opacitySpeed;
                }

                // Mouse interaction (gentle repulsion)
                const dx = mouseX - this.x;
                const dy = mouseY - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDistance = 150;

                if (distance < maxDistance) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (maxDistance - distance) / maxDistance;
                    const directionX = forceDirectionX * force * 2;
                    const directionY = forceDirectionY * force * 2;

                    this.x -= directionX;
                    this.y -= directionY;
                }

                // Wrap around screen
                if (this.x > canvas!.width) this.x = 0;
                if (this.x < 0) this.x = canvas!.width;
                if (this.y > canvas!.height) this.y = 0;
                if (this.y < 0) this.y = canvas!.height;
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = this.color;

                // Increase opacity based on scroll
                const scrollOpacityBoost = Math.min(scrollY / 500, 0.5);
                ctx.globalAlpha = Math.min(this.opacity + scrollOpacityBoost, 1);

                ctx.font = `${this.size}px monospace`;
                ctx.fillText(this.char, this.x, this.y);
                ctx.globalAlpha = 1;
            }
        }

        const init = () => {
            particles = [];
            const numberOfParticles = Math.floor((canvas.width * canvas.height) / 6000); // Slightly denser for text
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle());
            }
        };

        let mouseX = -1000;
        let mouseY = -1000;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        };

        const handleScroll = () => {
            scrollY = window.scrollY;
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((particle) => {
                particle.update(mouseX, mouseY);
                particle.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', () => {
            resizeCanvas();
            init();
        });
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);

        resizeCanvas();
        init();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
            style={{ opacity: 0.3 }} // More visible Matrix characters
        />
    );
}
