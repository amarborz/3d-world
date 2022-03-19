import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import React, { Suspense, useRef } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Facts from './Facts'

const Scene = () => {
	const gltf = useLoader(GLTFLoader, '/earth/scene.gltf')
	const earthRef = useRef()

	useFrame(() => {
		earthRef.current.rotation.y += 0.01
	})

	return <primitive object={gltf.scene} scale={0.02} ref={earthRef} />
}

const CanvasArea = () => {
	return (
		<>
			<Canvas>
				<Suspense fallback={null}>
					<ambientLight />
					<pointLight position={[10, 10, 10]} />
					<OrbitControls />
					<Scene />
				</Suspense>
			</Canvas>
			<div className="facts">
				<Facts />
			</div>
		</>
	)
}

export default CanvasArea
