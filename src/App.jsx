import { useState, useEffect } from 'react';
import './index.css';
import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { FinalQuestion } from './components/FinalQuestion';
import { SuccessScreen } from './components/SuccessScreen';

function App() {
  const [config, setConfig] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadConfig = async () => {
      try {
        const response = await fetch('/config.json');
        const data = await response.json();
        setConfig(data);
      } catch (error) {
        console.error('Error loading config:', error);
        // Fallback config
        setConfig({
          title: 'Mi amor, ¿quieres ser mi novia?',
          subtitle: 'Un viaje a través de nuestros momentos especiales',
          memories: [],
          finalQuestion: '¿Quieres ser mi novia?',
          yesButtonText: '¡SÍ, quiero! 💕',
          noButtonText: 'Mmm, no sé...',
          successMessage: '¡Eres la persona más especial de mi vida! 🌹✨',
          successSubtitle: 'Gracias por decir que sí. Este es el comienzo de nuestra historia.',
        });
      } finally {
        setLoading(false);
      }
    };

    loadConfig();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="text-center">
          <div className="text-4xl mb-4">💕</div>
          <p className="text-gray-600 text-lg">Cargando nuestros momentos especiales...</p>
        </div>
      </div>
    );
  }

  if (!config) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="text-center text-gray-600">
          <p className="text-lg">Error al cargar la configuración</p>
        </div>
      </div>
    );
  }

  if (showSuccess) {
    return <SuccessScreen config={config} />;
  }

  return (
    <div className="overflow-x-hidden bg-white">
      <Hero config={config} />
      {config.memories && config.memories.length > 0 && (
        <Timeline config={config} />
      )}
      <FinalQuestion
        config={config}
        onYes={() => setShowSuccess(true)}
      />
    </div>
  );
}

export default App;
