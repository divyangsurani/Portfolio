import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { polygonPathName, loadPolygonPath } from "tsparticles-path-polygon";

export default function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadPolygonPath(engine);
  }, []);

  return (
    <Particles
      options={{
        fpsLimit: 60,
        particles: {
          color: {
            value: "#cd5ff8",
            animation: {
              enable: true,
              speed: 10
            }
          },
          move: {
            attract: {
              enable: true,
              rotate: {
                distance: 100,
                x: 2000,
                y: 2000
              }
            },
            direction: "none",
            enable: true,
            outModes: {
              default: "destroy"
            },
            path: {
              clamp: false,
              enable: true,
              delay: {
                value: 0
              },
              generator: polygonPathName,
              options: {
                sides: 6,
                turnSteps: 30,
                angle: 30
              }
            },
            random: false,
            speed: 3,
            straight: true,
            trail: {
              fillColor: "#000",
              length: 20,
              enable: true
            }
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 0
          },
          opacity: {
            value: 0.5
          },
          shape: {
            type: "circle"
          },
          size: {
            value: 2
          }
        },
        background: {
          color: "#3c5570"
        },
        fullScreen: {
          zIndex: -1
        },
        detectRetina: true,
        emitters: {
          direction: "none",
          rate: {
            quantity: 1,
            delay: 0.25
          },
          size: {
            width: 0,
            height: 0
          },
          position: {
            x: 50,
            y: 50
          }
        }
      }}
      init={particlesInit}
    />
  );
}
