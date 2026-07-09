import React from 'react';
import Button from './components/ui/Button/Button';
import Input from './components/ui/Input/Input';
import TextArea from './components/ui/TextArea/TextArea';

function App() {
  return (
    <div className="container py-5">
      <header className="mb-5 text-center">
        <h1 style={{ color: 'var(--color-primary)' }}>Cuidar el Alma</h1>
        <p style={{ color: 'var(--color-text-soft)' }}>
          Panel de control de estilo - Equipo DEXUS
        </p>
      </header>

      {/* Sección de Colores — Mateo */}
      <section className="mb-5">
        <h2>Paleta de Colores</h2>
        <div className="d-flex flex-wrap gap-3">
          <div className="p-3 rounded" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>Primario</div>
          <div className="p-3 rounded" style={{ backgroundColor: 'var(--color-secondary)', color: 'white' }}>Secundario</div>
          <div className="p-3 rounded" style={{ backgroundColor: 'var(--color-accent)', color: 'white' }}>Acento</div>
          <div className="p-3 rounded border" style={{ backgroundColor: 'var(--color-background)' }}>Fondo</div>
        </div>
      </section>

      {/* Sección de Componentes — Mateo */}
      <section className="mb-5">
        <h2>Componentes Base</h2>
        <div className="card p-4 shadow-sm" style={{ borderColor: 'var(--color-border)' }}>
          <h3>Tarjeta de Ejemplo</h3>
          <p>Esta es una tarjeta utilizando los estilos globales del sistema.</p>
          <div className="d-flex gap-2">
            <button className="btn" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
              Botón Primario
            </button>
            <button className="btn btn-outline-secondary">
              Botón Secundario
            </button>
          </div>
        </div>
      </section>

      {/* Sección de Botones — Thais */}
      <section className="mb-5">
        <h2>Botones · Thais</h2>
        <div className="d-flex flex-wrap gap-3 align-items-center">
          <Button variant="primary" onClick={() => alert('Primary clicked')}>
            Leer evangelio
          </Button>
          <Button variant="secondary" onClick={() => alert('Secondary clicked')}>
            Saber más
          </Button>
          <Button variant="primary" disabled>
            No disponible
          </Button>
        </div>
      </section>

      {/* Sección de Inputs — Thais */}
      <section className="mb-5">
        <h2>Inputs · Thais</h2>
        <div className="d-flex flex-column gap-4" style={{ maxWidth: '400px' }}>
          <Input
            type="text"
            label="Nombre"
            placeholder="Escribe tu nombre"
          />
          <Input
            type="email"
            label="Correo electrónico"
            placeholder="nombre@ejemplo.com"
          />
          <Input
            type="password"
            label="Contraseña"
            placeholder="••••••••"
          />
          <Input
            type="text"
            label="Campo con error"
            placeholder="Escribe algo"
            error="Este campo es obligatorio"
          />
          <Input
            type="text"
            label="Campo desactivado"
            placeholder="No disponible"
            disabled
          />
        </div>
      </section>

      {/* Sección de TextArea — Thais */}
      <section className="mb-5">
        <h2>TextArea · Thais</h2>
        <div className="d-flex flex-column gap-4" style={{ maxWidth: '400px' }}>
          <TextArea
            label="Tu reflexión de hoy"
            placeholder="Escribe una breve reflexión..."
            maxLength={300}
          />
          <TextArea
            label="Campo con error"
            placeholder="Escribe algo..."
            maxLength={200}
            error="Este campo es obligatorio"
          />
          <TextArea
            label="Campo desactivado"
            placeholder="No disponible"
            disabled
          />
        </div>
      </section>

    </div>
  );
}

export default App;