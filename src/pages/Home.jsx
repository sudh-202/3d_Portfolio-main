import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Loader from "../components/Loader";
import { Sky, Bird, Plane, Island } from "../models/index";
import HomeInfo from "../components/HomeInfo";
{
}
const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const adjustIslandForScreen = () => {
    let screenScale = null;
    let screenPostiton = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPostiton, rotation];
  };
  const adjustPlaneForScreen = () => {
    let screenScale, screenPostiton;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPostiton = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPostiton = [0, -4, -4];
    }
    return [screenScale, screenPostiton];
  };

  const [islandScale, islandPostion, islandRotation] = adjustIslandForScreen();
  const [planeScale, planePostion] = adjustPlaneForScreen();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            position={islandPostion}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            isRotating={isRotating}
            scale={planeScale}
            position={planePostion}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
