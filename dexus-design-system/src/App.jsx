import React from 'react';
// ¡Atención aquí! Asegúrate de que la ruta coincida con donde pusiste la carpeta
import Button from './components/ui/Button/Button.jsx';

function App() {
  return (
    <div style={{ padding: '40px', fontFamily: 'system-ui, sans-serif', backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <h1 style={{ color: '#3D2E26', marginBottom: '30px' }}>
        Pruebas de Componente: Button (DEXUS)
      </h1>

      {/* PRUEBA 1: VARIANTES DE COLOR */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.2rem', color: '#6B5D55', marginBottom: '15px' }}>
          1. Variantes de Color
        </h2>
        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="outline">Outline</Button>
        </div>
      </section>

      {/* PRUEBA 2: TAMAÑOS */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.2rem', color: '#6B5D55', marginBottom: '15px' }}>
          2. Tamaños (Props: size)
        </h2>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button variant="primary" size="sm">Small (sm)</Button>
          <Button variant="primary" size="md">Medium (md)</Button>
          <Button variant="primary" size="lg">Large (lg)</Button>
        </div>
      </section>

      {/* PRUEBA 3: ESTADOS (Disabled) */}
      <section>
        <h2 style={{ fontSize: '1.2rem', color: '#6B5D55', marginBottom: '15px' }}>
          3. Estados (Prop: disabled)
        </h2>
        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
          <Button variant="primary" disabled={true}>Primary Disabled</Button>
          <Button variant="outline" disabled={true}>Outline Disabled</Button>
        </div>
      </section>

    </div>
  );
}

export default App;