import React, { useRef } from 'react'
import { OrbitControls, RenderTexture } from '@react-three/drei';
import { Text} from '@react-three/drei';
import { PerspectiveCamera } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
const Cube = () => {
    const textRef=useRef();
    useFrame(state=>(textRef.current.position.x=Math.sin(state.clock.elapsedTime)*2));
  return (
    <mesh>
    <boxGeometry args={[2,2,2]}/>
    <meshStandardMaterial>
<RenderTexture attach="map">
<perspectiveCamera makeDefault position={[0,0,5]}/>
<color attach="background" args={["#dc9dcd"]}/>
<Text ref={textRef} fontSize={2} color="#555">
hello
</Text>
</RenderTexture>
    </meshStandardMaterial>
</mesh>
  )
}

export default Cube