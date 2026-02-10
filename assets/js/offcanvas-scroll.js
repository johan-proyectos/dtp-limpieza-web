/**
 * SOLUCIÓN: Offcanvas + Scroll Suave sin Jump
 * 
 * PROBLEMA QUE RESUELVE:
 * 1. Offcanvas no se cerraba al hacer click en links internos
 * 2. Scroll jump al inicio cuando se abría/cerraba el offcanvas
 * 3. Bootstrap causaba scroll jump al modificar body overflow/padding-right
 * 4. location.hash causaba recarga y scroll automático del navegador
 * 
 * SOLUCIÓN:
 * - Usar eventos Bootstrap (shown.bs.offcanvas, hidden.bs.offcanvas)
 * - Guardar scroll position antes de cada cambio de estado
 * - Cerrar offcanvas programáticamente al hacer click
 * - Scroll suave manual sin modificar location.hash
 * - Prevenir cualquier cambio de overflow/padding que cause saltos
 */

document.addEventListener('DOMContentLoaded', function () {
    const offcanvasElement = document.getElementById('sidebarOffcanvas');
    
    if (!offcanvasElement) return; // Salir si no existe el offcanvas

    // ============ 1. PREVENCIÓN DE SCROLL JUMP AL ABRIR/CERRAR ============
    
    let scrollPositionBeforeOffcanvas = 0;
    
    // Mantener el estado original del body y prevenir cambios de Bootstrap
    const bodyOverflowHidden = getComputedStyle(document.body).overflow === 'hidden';
    const originalBodyStyle = document.body.style.cssText;

    offcanvasElement.addEventListener('show.bs.offcanvas', function () {
        // Guardar posición actual ANTES de que Bootstrap modifique styles
        scrollPositionBeforeOffcanvas = window.scrollY || document.documentElement.scrollTop;
        
        // Permitir que Bootstrap agregue overflow:hidden, pero sin padding-right
        setTimeout(() => {
            if (!bodyOverflowHidden) {
                document.body.style.paddingRight = '0 !important';
            }
        }, 0);
    });

    offcanvasElement.addEventListener('hidden.bs.offcanvas', function () {
        // Restaurar body styles limpiamente
        document.body.style.overflow = '';
        document.body.style.paddingRight = '0';
        
        // Restaurar scroll position (prevenir saltos hacia arriba)
        window.scrollTo(0, scrollPositionBeforeOffcanvas);
    });

    // ============ 2. AUTO-CERRAR AL HACER CLICK EN LINKS ============
    
    const offcanvasLinks = offcanvasElement.querySelectorAll('a[href^="#"]');
    
    offcanvasLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Si es un link de navegación interna (no un botón de acción)
            if (href && href !== '#' && href.startsWith('#')) {
                e.preventDefault();
                
                // Obtener la sección destino
                const targetSelector = href.substring(1); // Remover el #
                const targetElement = document.getElementById(targetSelector);
                
                if (!targetElement) return;
                
                // Guardar posición actual
                scrollPositionBeforeOffcanvas = window.scrollY || document.documentElement.scrollTop;
                
                // Obtener instancia del offcanvas y cerrarlo
                const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement);
                if (offcanvasInstance) {
                    offcanvasInstance.hide();
                }
                
                // Esperar a que el offcanvas se cierre completamente (evento hidden.bs.offcanvas)
                // Luego hacer scroll suave
                offcanvasElement.addEventListener('hidden.bs.offcanvas', function onHidden() {
                    // Pequeño delay para asegurar que el DOM está estable
                    requestAnimationFrame(() => {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    });
                    
                    // Remover listener después de usarlo (evitar múltiples ejecuciones)
                    offcanvasElement.removeEventListener('hidden.bs.offcanvas', onHidden);
                }, { once: true });
            }
        });
    });

    // ============ 3. MANEJO DEL LOGO/HOME BUTTON (para no romper desktop) ============
    
    const homeLink = document.querySelector('[data-bs-target="#sidebarOffcanvas"]');
    if (homeLink) {
        homeLink.addEventListener('click', function () {
            // El menú se abre normalmente, sin interfering
        });
    }
});
