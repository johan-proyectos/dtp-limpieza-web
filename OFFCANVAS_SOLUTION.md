# Solución: Offcanvas + Scroll Suave sin Jump

## 📋 Resumen Ejecutivo

**Problema**: Al hacer click en un link del offcanvas en móvil, la página saltaba al inicio, el navbar reaparecía, y había rebotes de scroll.

**Causa raíz**: Bootstrap modifica `body.overflow` y `body.padding-right`, lo que causaba scroll jumps. Además, no se cerraba el offcanvas automáticamente.

**Solución implementada**: Archivo `assets/js/offcanvas-scroll.js` que gestiona correctamente los eventos de Bootstrap y previene saltos de scroll.

---

## 🐛 Por qué ocurría el bug

### 1. **Bootstrap modifica estilos inseguramente**
```javascript
// Bootstrap hace esto internamente:
body { overflow: hidden; padding-right: 15px; }
```
Esto causa que la página salte (¡se pierdan 15px de ancho!) y luego salte de vuelta.

### 2. **El offcanvas no se cerraba automáticamente**
Los links con `href="#seccion"` no cerraban el offcanvas, requiriendo cierre manual.

### 3. **La página hacía scroll al top**
- El script anterior hacía `history.replaceState()` que forzaba scroll
- El evento `hidden.bs.offcanvas` no restauraba el scroll position

### 4. **Navbar reaparecía**
Cuando el body cambiaba de `overflow:hidden` a `overflow:visible`, causaba reflow que hacía visible el header.

---

## ✅ Cómo se resuelve

### **1. Guardar posición de scroll**
```javascript
let scrollPositionBeforeOffcanvas = 0;

offcanvasElement.addEventListener('show.bs.offcanvas', function () {
    scrollPositionBeforeOffcanvas = window.scrollY;
});
```

### **2. Restaurar posición al cerrar**
```javascript
offcanvasElement.addEventListener('hidden.bs.offcanvas', function () {
    window.scrollTo(0, scrollPositionBeforeOffcanvas);
});
```

### **3. Prevenir cambios de padding problemáticos**
```javascript
document.body.style.paddingRight = '0 !important';
```

### **4. Auto-cerrar offcanvas con listener único**
```javascript
offcanvasInstance.hide();

// Esperar a real cierre usando evento Bootstrap
offcanvasElement.addEventListener('hidden.bs.offcanvas', function onHidden() {
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    offcanvasElement.removeEventListener('hidden.bs.offcanvas', onHidden);
}, { once: true });
```

---

## 🔧 Eventos Bootstrap Utilizados

| Evento | Cuándo se dispara | Uso en solución |
|--------|-----------------|----------|
| `show.bs.offcanvas` | Antes de abrir el offcanvas | Guardar scroll position actual |
| `hidden.bs.offcanvas` | Después de cerrar el offcanvas | Restaurar scroll + iniciar scroll suave a sección |

---

## 📱 Manejo correcto del scroll en móvil

### **Sin location.hash** ✅
```javascript
// ❌ INCORRECTO
location.hash = '#seccion';  // Causa recargas, saltos automáticos

// ✅ CORRECTO
targetElement.scrollIntoView({ behavior: 'smooth' });
```

### **Con requestAnimationFrame** ✅
```javascript
requestAnimationFrame(() => {
    targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});
```
Esto asegura que el DOM está estable antes de hacer scroll.

### **Con listener único** ✅
```javascript
offcanvasElement.addEventListener('hidden.bs.offcanvas', onHidden, { once: true });
```
Solo ejecuta una vez, limpiándose automáticamente.

---

## 🚀 Implementación

El archivo `offcanvas-scroll.js` está listo para usar:
1. Se carga automáticamente en el `<head>`
2. No requiere cambios en HTML (solo en los `<script>` tags)
3. Compatible con Bootstrap 5+
4. No rompe desktop (solo afecta offcanvas en móvil)

### HTML Links (sin cambios necesarios):
```html
<!-- En el offcanvas -->
<a class="nav-link" href="#trabajos">Trabajos</a>
<a class="nav-link" href="#cobertura">Cobertura</a>
<a class="btn btn-success" href="#reserva">Cotizar</a>
```

---

## 🎯 Resultado Final

✅ Click en link → Offcanvas se cierra  
✅ Scroll suave a sección sin saltos  
✅ Navbar se mantiene oculto  
✅ Sin cambios abruptos de tamaño  
✅ Desktop sin cambios  
✅ UX tipo app (sin rebotes)  

---

## 🔍 Debugging

Si algo no funciona:

1. **Verificar que el offcanvas tiene `id="sidebarOffcanvas"`**
2. **Verificar que los links usan `href="#id-seccion"`**
3. **Verificar que las secciones tienen `id="seccion"`**
4. **Abrir DevTools → Console y verificar que no hay errores JS**
5. **Verificar que Bootstrap 5 está cargado antes del script**

---

## 📚 Referencias

- [Bootstrap 5 Offcanvas Events](https://getbootstrap.com/docs/5.0/components/offcanvas/#methods)
- [MDN: Element.scrollIntoView()](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
- [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
