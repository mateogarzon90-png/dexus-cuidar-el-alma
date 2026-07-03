# Componente: Button

El componente `Button` es el elemento principal de interacción del Design System "Cuidar el Alma". Está diseñado con bordes redondeados (estilo píldora) y animaciones fluidas de rebote para resultar amigable, táctil e ideal para nuestro público infantil.

## 📦 Importación

```jsx
import Button from './components/ui/Button/Button';
```

## 🛠️ Props (Propiedades)

| Prop | Tipo | Por defecto | Descripción |
| :--- | :--- | :--- | :--- |
| `variant` | string | `'primary'` | Define el color visual. Opciones: `primary`, `secondary`, `success`, `danger`, `outline`. |
| `size` | string | `'md'` | Define el tamaño del botón. Opciones: `sm`, `md`, `lg`. |
| `disabled` | boolean | `false` | Si es `true`, desactiva el botón visual y funcionalmente. |
| `onClick` | function | `undefined` | Función que se ejecuta al hacer clic en el botón. |
| `children` | node | Requerido | El texto o contenido interno del botón. |

## 🚀 Ejemplos de uso

**1. Botón básico (Primary):**
```jsx
<Button onClick={() => console.log('¡Clic!')}>
  Guardar cambios
</Button>
```

**2. Botón de Acción Secundaria (Verde Salvia):**
```jsx
<Button variant="secondary" size="lg">
  Volver al inicio
</Button>
```

**3. Botón de Éxito (Success):**
```jsx
<Button variant="success" size="md">
  ¡Completado!
</Button>
```

**4. Botón de Peligro Desactivado:**
```jsx
<Button variant="danger" disabled={true}>
  Eliminar cuenta
</Button>
```

**5. Botón Outline (Contorno):**
```jsx
<Button variant="outline" size="sm">
  Saber más
</Button>
```

---
*Desarrollado por el Equipo DEXUS - Sprint 1*