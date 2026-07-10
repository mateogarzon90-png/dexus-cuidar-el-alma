import React from 'react';
// Importaciones de los componentes
import Button from './components/ui/Button/Button.jsx';
import Card from './components/ui/Card/Card.jsx';
import Input from './components/ui/Input/Input.jsx'; // Añadido el componente de Sasha

function App() {
  return (
    <div style={{ padding: '60px', fontFamily: 'system-ui, sans-serif', backgroundColor: '#FBF6EC', minHeight: '100vh' }}>
      <h1 style={{ color: '#3D2E26', marginBottom: '30px' }}>
        DEXUS Design System - Pruebas UI
      </h1>

      {/* PRUEBA 1: VARIANTES DE COLOR */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.2rem', color: '#6B5D55', marginBottom: '15px' }}>
          1. Botones: Variantes de Color
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
          2. Botones: Tamaños (Props: size)
        </h2>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button variant="primary" size="sm">Small (sm)</Button>
          <Button variant="primary" size="md">Medium (md)</Button>
          <Button variant="primary" size="lg">Large (lg)</Button>
        </div>
      </section>

      {/* PRUEBA 3: ESTADOS (Disabled) */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.2rem', color: '#6B5D55', marginBottom: '15px' }}>
          3. Botones: Estados (Prop: disabled)
        </h2>
        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
          <Button variant="primary" disabled={true}>Primary Disabled</Button>
          <Button variant="outline" disabled={true}>Outline Disabled</Button>
        </div>
      </section>

      {/* PRUEBA 4: COMPONENTE CARD */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.2rem', color: '#6B5D55', marginBottom: '15px' }}>
          4. Tarjetas (Componente Card)
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          
          <Card variant="normal">
            <h3 style={{ marginTop: 0, color: '#5B8FB9' }}>Tarjeta Normal</h3>
            <p style={{ color: '#6B5D55' }}>Ideal para contenido básico y lectura sin distracciones.</p>
          </Card>

          <Card variant="elevada">
            <h3 style={{ marginTop: 0, color: '#94B89C' }}>Tarjeta Elevada</h3>
            <p style={{ color: '#6B5D55' }}>Destaca sobre el fondo. Perfecta para elementos importantes.</p>
            <Button variant="primary" size="sm">Hacer clic</Button>
          </Card>

          <Card variant="outline">
            <h3 style={{ marginTop: 0, color: '#5B8FB9' }}>Tarjeta Outline</h3>
            <p style={{ color: '#6B5D55' }}>Útil para resaltar sin cargar demasiado la pantalla.</p>
          </Card>
        </div>
      </section>

      {/* PRUEBA 5: COMPONENTE INPUT (NUEVO) */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.2rem', color: '#6B5D55', marginBottom: '15px' }}>
          5. Campos de Texto (Componente Input)
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          
          {/* Input Normal */}
          <Card variant="normal">
            <Input 
              label="Nombre de tu personaje" 
              placeholder="Ej. Súper Mateo" 
            />
          </Card>

          {/* Input Requerido */}
          <Card variant="normal">
            <Input 
              label="Correo mágico" 
              type="email" 
              placeholder="ejemplo@dexus.com" 
              required={true} 
            />
          </Card>

          {/* Input con Error (Animación temblor) */}
          <Card variant="elevada">
            <Input 
              label="Contraseña secreta" 
              type="password" 
              placeholder="Escribe tu contraseña" 
              error="¡Uy! La contraseña es muy corta, intenta otra vez." 
            />
          </Card>

          {/* Input Deshabilitado */}
          <Card variant="outline">
            <Input 
              label="Nivel actual" 
              value="Nivel 99 - Maestro Scrum" 
              disabled={true} 
            />
          </Card>

        </div>
      </section>

    </div>
  );
}

export default App;