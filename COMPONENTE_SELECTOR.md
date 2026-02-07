# 📱 Selector de Servicios Custom - Documentación

## ✨ Resumen de Cambios

Se implementó un **selector de servicios personalizado** tipo app moderna (MercadoPago, Uber, Rappi) reemplazando el `<select>` nativo de HTML.

---

## 📁 Archivos Modificados/Creados

### 1. **assets/css/components.css** (NUEVO)
   - CSS moderno y responsivo para el dropdown custom
   - Variables CSS (colores, sombras, transiciones)
   - Animaciones suaves (fade + slide)
   - Estilos para desktop y mobile

### 2. **index.html** (MODIFICADO)
   - ✅ Enlace a `components.css`
   - ✅ Reemplazado `<select id="servicio">` por componente custom
   - ✅ HTML semántico + accesible

### 3. **assets/js/reservas.js** (MODIFICADO)
   - ✅ Agregado "Auto" a `serviciosData`
   - ✅ Nuevo manejador del dropdown custom (eventos)
   - ✅ Variables para selector custom
   - ✅ Funciones: `abrirDropdown()`, `cerrarDropdown()`

---

## 🎨 Paleta de Colores (Implementada)

```css
--primary-blue: #0d6efd          /* Azul principal (botones, focus) */
--primary-light: #e7f1ff         /* Azul claro (hover, background) */
--white: #ffffff                 /* Fondo blanco */
--text-dark: #212529             /* Texto principal */
--text-muted: #6c757d            /* Texto secundario */
--border-color: #dee2e6          /* Bordes */
--border-radius: 12px            /* Bordes redondeados */
```

---

## 🛠️ Características Implementadas

### ✅ Selector Principal
- **Altura**: 56px (responsive: 52px en mobile)
- **Border-radius**: 12px
- **Borde**: 2px, azul en focus
- **Sombra**: Suave (hover), elevada (focus)
- **Placeholder**: "Selecciona una categoría"
- **Ícono**: Chevron que rota 180° al abrirse

### ✅ Dropdown Menu
- **Posición**: Debajo del input (absolute)
- **Animación**: Fade + slide down (0.3s)
- **Sombra**: Tipo app moderna
- **Max-height**: 320px (scrollable si necesario)

### ✅ Items del Dropdown
```
[Ícono]  Nombre Servicio
         Descripción breve en gris
```

**Cada item tiene:**
- Ícono circular azul (emoji o icono)
- Nombre principal en negrita
- Descripción secundaria (más pequeña, gris)
- Hover: Fondo azul claro
- Selected: Ícono y nombre azul oscuro

### ✅ Interactividad
- Click en trigger → abre/cierra dropdown
- Click en item → selecciona servicio
- Click fuera → cierra dropdown
- Escape (preparado para futuro)
- **Dispositivo mobile**: Totalmente responsivo

---

## 📋 Servicios Disponibles

```javascript
1. Auto
   Interior, Exterior, Tapiz y Asientos
   Precios: 35k-55k CLP

2. Sillones
   Sillas, Sillones, Poltronas, Puff y más
   Precios: 8k-18k CLP

3. Colchones
   Colchones, cunas, respaldos
   Precios: 12k-36k CLP

4. Alfombras
   Muro a Muro, Decorativas, Pasillos
   Precios: 25k-40k CLP
```

---

## 🔧 Cómo Funciona

### HTML
```html
<div class="service-dropdown-wrapper">
    <label>Selecciona el tipo de servicio:</label>
    <div class="service-dropdown-trigger"><!-- Input clickeable --></div>
    <ul class="service-dropdown-menu"><!-- Items --></ul>
</div>
```

### JavaScript
```javascript
// Selecciona servicio → guarda en variable
servicioSeleccionadoActual = 'Sillones'

// Actualiza selector de tipos
actualizarTipos() → muestra tipos de sillón

// Usuario selecciona tipo
tipoSeleccionado.value = 'Individual'

// Calcula precio
actualizarPrecio() → muestra $12.500

// Usuario ajusta cantidad
cantidadInput → muestra total actualizado
```

---

## 🎯 Flujo de Uso

```
1. Usuario ve selector vacío
   ↓
2. Click en selector → dropdown abre (animación fade+slide)
   ↓
3. Selecciona servicio (ej: "Sillones")
   ↓
4. Dropdown cierra, trigger muestra "Sillones"
   ↓
5. Aparecen selector de tipos + precio + cantidad
   ↓
6. Usuario selecciona tipo, ajusta cantidad
   ↓
7. Click en "Agregar" → servicio se suma a lista
```

---

## 📱 Responsividad

| Dispositivo | Cambios |
|------------|---------|
| **Desktop** | Altura 56px, dropdown lado a lado |
| **Tablet** | Altura 54px |
| **Mobile** | Altura 52px, ancho 100%, dropdown adapta |

---

## 🚀 Próximas Mejoras Opcionales

- [ ] Busca dentro del dropdown (filtro por nombre)
- [ ] Teclado: Arrow keys para navegar
- [ ] Teclado: Enter para seleccionar, Escape para cerrar
- [ ] Animación de aparición del item seleccionado
- [ ] Favoritos/recientes
- [ ] Más emojis personalizados por servicio

---

## 🐛 Debugging

Si algo no funciona:

1. **Verificar consola** (F12 → Console)
   - Errores de JS → revisar reservas.js
   - Errores de CSS → revisar components.css

2. **Verificar clases CSS**
   - `.service-dropdown-menu.show` → dropdown abierto
   - `.service-dropdown-trigger.active` → trigger activo
   - `.service-dropdown-item.selected` → item seleccionado

3. **Verificar variable JS**
   - `servicioSeleccionadoActual` → debe tener nombre del servicio
   - `servicioTrigger` → debe existir en DOM

---

## 📞 Soporte

El componente es **independiente** de Bootstrap, pero es **compatible** con:
- ✅ Bootstrap 5
- ✅ Bootstrap Icons (usados en otros lugares)
- ✅ JavaScript vanilla (sin jQuery)

---

## 📝 Notas Técnicas

- **No hay dependencias externas** (puro CSS + JS vanilla)
- **Accesible**: Usa etiquetas semánticas
- **Mobile-first**: CSS está optimizado para mobile
- **Performance**: Sin re-renders innecesarios
- **Seguridad**: No usa innerHTML en datos del usuario

---

**Última actualización**: Febrero 7, 2026
**Versión**: 1.0
