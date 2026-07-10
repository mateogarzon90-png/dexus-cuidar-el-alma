import React from 'react';
// Importaciones de los componentes del Design System
import Button from './components/ui/Button/Button.jsx';
import Card from './components/ui/Card/Card.jsx';
import Input from './components/ui/Input/Input.jsx';
import TextArea from './components/ui/TextArea/TextArea.jsx';
import Badge from './components/ui/Badge/Badge.jsx';
import Alert from './components/ui/Alert/Alert.jsx';
import Spinner from './components/ui/Spinner/Spinner.jsx';

function App() {
  return (
    <div style={{ padding: '60px', fontFamily: 'system-ui, sans-serif', backgroundColor: '#FBF6EC', minHeight: '100vh' }}>
      
      <h1 style={{ color: '#3D2E26', marginBottom: '30px', textAlign: 'center' }}>
        DEXUS Design System - Vista de Componentes
      </h1>

      {/* --- SECCIÓN 1: BOTONES --- */}
      <section style={{ marginBottom: '50px' }}>
        <h2 style={{ fontSize: '1.2rem', color: '#6B5D55', marginBottom: '15px', borderBottom: '2px dashed #ECDDC0', paddingBottom: '8px' }}>
          1. Botones (Elementos Interactivos Dinámicos)
        </h2>
        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="primary" size="sm">Pequeño</Button>
          <Button variant="primary" size="lg">¡Grande!</Button>
          <Button variant="primary" disabled={true}>Desactivado</Button>
        </div>
      </section>

      {/* --- SECCIÓN 2: TARJETAS COMPONENTES --- */}
      <section style={{ marginBottom: '50px' }}>
        <h2 style={{ fontSize: '1.2rem', color: '#6B5D55', marginBottom: '15px', borderBottom: '2px dashed #ECDDC0', paddingBottom: '8px' }}>
          2. Tarjetas (Contenedores Estructurales Estables)
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          <Card variant="normal">
            <h3 style={{ marginTop: 0, color: '#5B8FB9' }}>Tarjeta Normal</h3>
            <p style={{ color: '#6B5D55', fontSize: '0.95rem' }}>Estructura básica para organizar secciones de lectura relajada.</p>
          </Card>
          <Card variant="elevada">
            <h3 style={{ marginTop: 0, color: '#94B89C' }}>Tarjeta Elevada</h3>
            <p style={{ color: '#6B5D55', fontSize: '0.95rem' }}>Efecto bloque 3D estático para resaltar contenido clave del juego.</p>
          </Card>
          <Card variant="outline">
            <h3 style={{ marginTop: 0, color: '#5B8FB9' }}>Tarjeta Outline</h3>
            <p style={{ color: '#6B5D55', fontSize: '0.95rem' }}>Líneas discontinuas ideales para bloques de actividades o tareas secundarias.</p>
          </Card>
        </div>
      </section>

      {/* --- SECCIÓN 3: FORMULARIO UNIFICADO (TU EXCELENTE IDEA) --- */}
      <section style={{ marginBottom: '50px' }}>
        <h2 style={{ fontSize: '1.2rem', color: '#6B5D55', marginBottom: '15px', borderBottom: '2px dashed #ECDDC0', paddingBottom: '8px' }}>
          3. Formularios (Estructura Unificada de Alta Usabilidad)
        </h2>
        
        {/* Limitamos el ancho para que no se estire demasiado y se vea como un verdadero formulario escolar */}
        <div style={{ maxWidth: '650px', margin: '0 auto' }}>
          
          {/* Unificamos todo el formulario de Thais y Sasha dentro de una sola Card Elevada */}
          <Card variant="elevada">
            <h3 style={{ marginTop: 0, color: '#3D2E26', marginBottom: '25px', textAlign: 'center', fontSize: '1.4rem' }}>
              ¡Crea tu personaje de la aventura!
            </h3>
            
            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              
              {/* Input de Sasha */}
              <Input 
                label="Nombre del Pequeño Explorador" 
                placeholder="Ej. David o Ester..." 
                required={true}
              />
              
              {/* Input de Sasha configurado para email */}
              <Input 
                label="Correo de los padres" 
                type="email" 
                placeholder="padres@ejemplo.com" 
              />
              
              {/* TextArea de Thais */}
              <TextArea 
                label="Escribe tu reflexión u oración del día" 
                placeholder="Hoy le doy gracias a Dios por..." 
                maxLength={200} 
              />
              
              {/* Botón de envío final del formulario */}
              <div style={{ marginTop: '15px', display: 'flex', justifyContent: 'center' }}>
                <Button variant="success" size="lg">
                  ✨ ¡Comenzar Aventura!
                </Button>
              </div>

            </form>
          </Card>

        </div>
      </section>

      {/* --- SECCIÓN 4: COMPONENTE AUXILIARES Y MICROMEDIOS --- */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.2rem', color: '#6B5D55', marginBottom: '15px', borderBottom: '2px dashed #ECDDC0', paddingBottom: '8px' }}>
          4. Componentes de Estado e Información (Feedback Visual)
        </h2>
        
        {/* Badges Rediseñados como Cromos Rectangulares Estables */}
        <div style={{ marginBottom: '25px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <Badge variant="info">Versículo nuevo</Badge>
          <Badge variant="success">Nivel completado</Badge>
          <Badge variant="warning">Fruto del Espíritu</Badge>
          <Badge variant="danger">Inténtalo de nuevo</Badge>
        </div>

        {/* Alertas Calmas con bordes de la paleta y Emojis Temáticos */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '25px' }}>
          <Alert title="¡Bienvenido explorador!" type="information">
            Recuerda leer Proverbios antes de iniciar el cuestionario diario.
          </Alert>
          <Alert title="¡Misión Lograda!" type="success">
            Has memorizado con éxito el Salmo 23. ¡Sigue así!
          </Alert>
        </div>

        {/* Spinner convertido en el Halo Celestial de Luz constante */}
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center', justifyContent: 'center', padding: '20px 0' }}>
          <span style={{ fontSize: '0.95rem', color: '#6B5D55', fontWeight: '500' }}>Cargando bendiciones:</span>
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
        </div>
      </section>

    </div>
  );
}

export default App;