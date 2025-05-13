import UploadForm from './UploadForm';
import ModelList from './ModelViewer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <header className="bg-blue-600 text-white p-6 text-center text-2xl font-bold shadow">
        3D Model Viewer Dashboard
      </header>
      <main className="p-6">
        <UploadForm />
        <div className="mt-12">
          <ModelList />
        </div>
      </main>
    </div>
  );
}

export default App;
