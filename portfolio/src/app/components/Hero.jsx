'use client'
import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient'
import * as reactSpring from '@react-spring/three'
import * as drei from '@react-three/drei'
import * as fiber from '@react-three/fiber'
import { motion } from 'framer-motion';

function Hero() {
    const shaderUrl = "https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1&cAzimuthAngle=180&cDistance=2.8&cPolarAngle=80&cameraZoom=9.1&color1=%23606080&color2=%238d7dca&color3=%23212121&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=60&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=0&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=50&rotationY=0&rotationZ=-60&shader=defaults&type=sphere&uAmplitude=0&uDensity=1.5&uFrequency=0&uSpeed=0.3&uStrength=1.5&uTime=8&wireframe=false";


    return (
        <section className='max-w-[2560px] h-[100vh] flex flex-col justify-center items-center relative'>

            <div className='w-full h-full absolute z-0'>
                <ShaderGradientCanvas
                    importedFiber={{ ...fiber, ...drei, ...reactSpring }}

                    className='absolute z-0'
                >
                    <ShaderGradient
                        control='query'
                        urlString={shaderUrl}
                    />
                </ShaderGradientCanvas>
            </div>

            <div className='absolute top-[30vh] z-30 w-[75%] border border-cyan-300'>
                <motion.h1
                    initial={{ y: '100vh' }}
                    animate={{ y: 0 }}
                    transition={{ type: 'spring', stiffness: 50, duration: 3 }}
                    className='text-white font-bold text-5xl md:text-8xl'
                >
                    Anushthan Saxena
                </motion.h1>
            </div>

            <div data-scroll data-scroll-speed={0.1} className='w-[35px] h-[64px] absolute bottom-[100px] z-30 rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate = {{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-white mb-1'
            />
          </div>

        </section>
    )
}

export default Hero