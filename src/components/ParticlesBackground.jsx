import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
    const [particleColor, setParticleColor] = useState(getComputedStyle(document.documentElement).getPropertyValue('--particle-color'));

    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
    }, []);

    useEffect(() => {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    setParticleColor(getComputedStyle(document.documentElement).getPropertyValue('--particle-color'));
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "transparent"
                    }
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "grab"
                        }
                    },
                    modes: {
                        grab: {
                            distance: 200
                        }
                    }
                },
                particles: {
                    color: {
                        value: particleColor
                    },
                    links: {
                        color: particleColor,
                        distance: 150,
                        enable: true,
                        opacity: 0.4,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 1,
                        direction: "none",
                        outModes: "out"
                    },
                    number: {
                        value: 150,
                        density: {
                            enable: true
                        }
                    },
                    opacity: {
                        value: 0.5,
                        animation: {
                            enable: true,
                            speed: 0.5,
                            minimumValue: 0.1
                        }
                    },
                    shape: {
                        type: "circle"
                    },
                    size: {
                        value: {
                            min: 1,
                            max: 5
                        },
                        animation: {
                            enable: true,
                            speed: 2,
                            minimumValue: 1
                        }
                    }
                }
            }}
        />
    );
};

export default ParticlesBackground;
