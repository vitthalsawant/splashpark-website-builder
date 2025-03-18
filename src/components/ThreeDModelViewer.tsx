
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PresentationControls, Stage, useGLTF } from '@react-three/drei';

interface ModelProps {
  modelPath: string;
}

function Model({ modelPath }: ModelProps) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={1.5} />;
}

interface ThreeDModelViewerProps {
  modelPath: string;
  className?: string;
}

const ThreeDModelViewer = ({ modelPath, className }: ThreeDModelViewerProps) => {
  return (
    <div className={`${className} relative h-[400px] md:h-[500px]`}>
      <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
        <Suspense fallback={null}>
          <PresentationControls
            global
            rotation={[0, -Math.PI / 4, 0]}
            polar={[-Math.PI / 4, Math.PI / 4]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
            config={{ mass: 2, tension: 400 }}
            snap={{ mass: 4, tension: 400 }}
          >
            <Stage environment="city" intensity={0.5} contactShadow shadows>
              <Model modelPath={modelPath} />
            </Stage>
          </PresentationControls>
          <OrbitControls enableZoom={true} makeDefault />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm text-sm px-2 py-1 rounded-md">
        Drag to rotate • Scroll to zoom
      </div>
    </div>
  );
};

export default ThreeDModelViewer;
