# Componente: Card

El componente `Card` (Tarjeta) es un contenedor flexible diseñado para estructurar el contenido de la aplicación. Utiliza un estilo visual **Clay-Brutalism** (combinando bordes sólidos de Neo-Brutalismo con reflejos suaves de plastilina) para lograr un aspecto táctil, físico y muy divertido, ideal para nuestro público infantil.

Este componente utiliza el patrón de **Composición** de React (`children`), lo que significa que puedes insertar cualquier elemento dentro de la tarjeta (texto, imágenes, otros componentes como botones, etc.).

## 📦 Importación

```jsx
import Card from './components/ui/Card';
// O dependiendo de tu alias: import { Card } from '@/components/ui';
```

## 🛠️ Props (Propiedades)

| Prop | Tipo | Por defecto | Descripción |
| :--- | :--- | :--- | :--- |
| `variant` | string | `'normal'` | Define el estilo visual de la tarjeta. Opciones: `normal`, `elevada`, `outline`. |
| `children` | node | Requerido | El contenido interno que se renderizará dentro de la tarjeta (texto, HTML, componentes...). |

## 🚀 Ejemplos de uso

**1. Tarjeta Básica (Normal):**
Fondo crema suave y borde color miel. Ideal para bloques de texto o lectura.
```jsx
<Card variant="normal">
  <h3>Instrucciones del juego</h3>
  <p>Lee con atención antes de empezar a jugar con tus compañeros.</p>
</Card>
```

**2. Tarjeta Destacada (Elevada) con un Botón:**
Efecto de bloque 3D (juego de mesa). Perfecta para llamadas a la acción principales.
```jsx
<Card variant="elevada">
  <h2>¡Nueva Aventura!</h2>
  <p>Descubre los animales del bosque.</p>
  <Button variant="plastilina" size="md">Jugar Ahora</Button>
</Card>
```

**3. Tarjeta de Actividad (Outline):**
Estilo "cuaderno de recortes" con borde punteado.
```jsx
<Card variant="outline">
  <h3>Zona de Dibujo</h3>
  <p>Arrastra aquí tu ilustración terminada.</p>
</Card>
```

**4. Composición Avanzada (Tarjeta con Imagen):**
La tarjeta se adapta perfectamente a elementos multimedia.
```jsx
<Card variant="elevada">
  <img 
    src="ruta-de-la-imagen.jpg" 
    alt="Niños jugando" 
    style={{ width: '100%', borderRadius: '16px', marginBottom: '15px' }} 
  />
  <h3>Aprender Jugando</h3>
  <Button variant="primary">Ver más</Button>
</Card>
```

---
*Desarrollado por el Equipo DEXUS - Sprint 1*