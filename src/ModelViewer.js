import { useEffect, useState } from 'react';
import axios from 'axios';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function ModelViewer({ url }) {
  const [scene, setScene] = useState(null);

  useEffect(() => {
    new GLTFLoader().load(url, (gltf) => setScene(gltf.scene));
  }, [url]);

  return scene ? <primitive object={scene} /> : null;
}

function ModelList() {
  const [models, setModels] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/models').then((res) => setModels(res.data));
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {models.map((model) => (
        <div key={model._id} className="bg-white rounded-xl shadow-md border p-4">
          <h3 className="text-lg font-semibold mb-2 text-center">{model.name}</h3>
          <div className="h-64">
            <Canvas>
              <ambientLight />
              <pointLight position={[10, 10, 10]} />
              <OrbitControls />
              <ModelViewer url={model.url} />
            </Canvas>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ModelList;
