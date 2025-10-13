import { Suspense, useEffect, useState, memo } from "react";
import { Canvas } from "@react-three/fiber";
import {
	OrbitControls,
	Preload,
	useGLTF,
	// Import the Html component to display web content in the 3D scene
	Html,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

// 3D Model Component
const Computers = memo(({ isMobile }) => {
	const [showProject, setShowProject] = useState(false);
	const { scene } = useGLTF("./desktop_pc/scene-draco.gltf");

	return (
		<group>
			{/* Lighting Setup */}
			<hemisphereLight intensity={2.5} groundColor="black" />
			<pointLight intensity={2} />
			<spotLight
				position={[-20, 50, 10]}
				angle={0.12}
				penumbra={1}
				intensity={1.2}
				castShadow
				shadowMapSize={1024} // ✅ Correct prop name
			/>

			{/* 3D Model */}
			{/* Wrap the model in a group to handle clicks */}
			<group
				scale={isMobile ? 0.2 : 0.55}
				position={[0, -3, -1]}
				rotation={[-0.01, -0.02, -0.1]}>
				<primitive
					object={scene}
					onClick={() => setShowProject(!showProject)}
				/>

				{/* Conditionally render an HTML iframe on the screen */}
				{showProject && (
					<Html
						transform
						wrapperClass="htmlScreen"
						distanceFactor={1.17}
						position={[0, 1.56, -1.55]}
						rotation-x={-0.256}>
						<iframe src="https://your-project-live-url.com/" />
					</Html>
				)}
			</group>
		</group>
	);
});

// Main Canvas Component
const ComputersCanvas = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 768px)");
		setIsMobile(mediaQuery.matches);

		const handleMediaQueryChange = (e) => setIsMobile(e.matches);
		mediaQuery.addEventListener("change", handleMediaQueryChange);

		return () => {
			mediaQuery.removeEventListener("change", handleMediaQueryChange);
		};
	}, []);

	return (
		<Canvas
			frameloop="demand"
			shadows
			dpr={[1, 2]} // ✅ Device pixel ratio optimization
			camera={{ position: [20, 5, 3], fov: 23 }}>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					enableZoom={false}
					enablePan={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Computers isMobile={isMobile} />
			</Suspense>
			{/* Preload the specific model to ensure it's ready */}
			<Preload url="./desktop_pc/scene-draco.gltf" />
		</Canvas>
	);
};

export default ComputersCanvas;
