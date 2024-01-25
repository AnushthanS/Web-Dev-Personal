import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient'
import * as reactSpring from '@react-spring/three'
import * as drei from '@react-three/drei'
import * as fiber from '@react-three/fiber'

function Hero() {
    const shaderUrl = "https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=0.8&cAzimuthAngle=270&cDistance=0.5&cPolarAngle=180&cameraZoom=15.1&color1=%2373bfc4&color2=%23ff810a&color3=%238da0ce&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=60&frameRate=10&gizmoHelper=hide&grain=on&lightType=env&pixelDensity=1.4&positionX=-0.1&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.4&rotationX=0&rotationY=130&rotationZ=70&shader=positionMix&type=sphere&uAmplitude=5.3&uDensity=0.8&uFrequency=5.5&uSpeed=0.3&uStrength=0.3&uTime=0&wireframe=false";


  return (
    <section>
        <ShaderGradientCanvas
      importedFiber={{ ...fiber, ...drei, ...reactSpring }}
      style={{
        position: 'absolute',
        top: 0,
      }}
    >
      <ShaderGradient
        control='query'
        urlString={shaderUrl}
      />
    </ShaderGradientCanvas>

    </section>
  )
}

export default Hero