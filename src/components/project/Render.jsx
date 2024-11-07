import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'

const Model = () => {
    const gltf = useLoader(GLTFLoader, './renders/optiframe.glb')
    return (
        <>
            <primitive object={gltf.scene} dispose={null} scale={5} />
        </>
    );
}

function Render() {
    return (
        <div className="pl-[2.063rem] pr-[2.063rem]">

            <div className="w-[95vw] h-[85vh] rounded-xl bg-white">
                <Canvas>
                    <Model />
                    <OrbitControls enableZoom={false} />
                    <Environment preset="sunset" />
                </Canvas>
            </div>
        </div>
    )
}

export default Render