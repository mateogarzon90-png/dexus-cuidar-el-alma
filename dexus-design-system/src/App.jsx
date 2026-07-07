import React from 'react';
// ¡Atención aquí! Asegúrate de que la ruta coincida con donde pusiste la carpeta
import Button from './components/ui/Button/Button.jsx';
import Card from './components/ui/Card/Card.jsx';

function App() {
  return (
    <div style={{ padding: '60px', fontFamily: 'system-ui, sans-serif', backgroundColor: '#FBF6EC', minHeight: '100vh' }}>
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




      {/* PRUEBA 4: COMPONENTE CARD */}
      <section style={{ marginTop: '40px' }}>
        <h2 style={{ fontSize: '1.2rem', color: '#6B5D55', marginBottom: '15px' }}>
          4. Tarjetas (Componente Card)
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          
          {/* Card Normal */}
          <Card variant="normal">
            <h3 style={{ marginTop: 0, color: '#5B8FB9' }}>Tarjeta Normal</h3>
            <p style={{ color: '#6B5D55' }}>Ideal para contenido básico y lectura sin distracciones.</p>
          </Card>

          {/* Card Elevada */}
          <Card variant="elevada">
            <h3 style={{ marginTop: 0, color: '#94B89C' }}>Tarjeta Elevada</h3>
            <p style={{ color: '#6B5D55' }}>Destaca sobre el fondo. Perfecta para elementos importantes.</p>
            {/* ¡Fíjate cómo podemos meter el botón que hiciste antes dentro de la tarjeta! */}
            <Button variant="primary" size="sm">Hacer clic</Button>
          </Card>

          {/* Card Outline */}
          <Card variant="outline">
            <h3 style={{ marginTop: 0, color: '#5B8FB9' }}>Tarjeta Outline</h3>
            <p style={{ color: '#6B5D55' }}>Útil para resaltar sin cargar demasiado la pantalla.</p>
          </Card>

        </div>
      </section>
    </div>
  );
}

export default App;