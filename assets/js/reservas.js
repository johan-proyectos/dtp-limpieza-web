// reservas.js - Selector dinámico de servicios con 3 niveles
document.addEventListener('DOMContentLoaded', function () {

    // ====== ESTRUCTURA DE DATOS: CATEGORÍA -> TIPO/TAMAÑO -> SERVICIOS ======
    const serviciosData = {
        'Auto': {
            labelTamanio: 'Selecciona el tipo de vehículo',
            tamanios: {
                'Sedán': {
                    precioBase: 45000,
                    labelServicios: '¿Qué incluye?',
                    servicios: [
                        { id: 'sedan-tapiz', icon: '🛋️', nombre: 'Lavado de tapicería completa', desc: 'Limpieza profunda de asientos', precioDelta: 0 },
                        { id: 'sedan-desinfeccion', icon: '🧼', nombre: 'Desinfección y desodorización', desc: 'Elimina bacterias y olores', precioDelta: 0 },
                        { id: 'sedan-manchas', icon: '✨', nombre: 'Quita manchas', desc: 'Limpieza de manchas difíciles', precioDelta: 0 },
                        { id: 'sedan-consola', icon: '🧹', nombre: 'Limpieza de consola y elementos internos', desc: 'Detalles interiores', precioDelta: 0 }
                    ]
                },
                'SUV': {
                    precioBase: 50000,
                    labelServicios: '¿Qué incluye?',
                    servicios: [
                        { id: 'suv-profunda', icon: '🚗', nombre: 'Limpieza profunda de asientos, suelo, puertas y maletero', desc: 'Limpieza total del interior', precioDelta: 0 },
                        { id: 'suv-tapiz', icon: '🛋️', nombre: 'Lavado de tapicería completa', desc: 'Limpieza profunda de asientos', precioDelta: 0 },
                        { id: 'suv-desinfeccion', icon: '🧼', nombre: 'Desinfección y desodorización', desc: 'Elimina bacterias y olores', precioDelta: 0 },
                        { id: 'suv-manchas', icon: '✨', nombre: 'Quita manchas', desc: 'Limpieza de manchas difíciles', precioDelta: 0 },
                        { id: 'suv-consola', icon: '🧹', nombre: 'Limpieza de consola y elementos internos', desc: 'Detalles interiores', precioDelta: 0 }
                    ]
                },
                'Camioneta': {
                    precioBase: 56000,
                    labelServicios: '¿Qué incluye?',
                    servicios: [
                        { id: 'camio-profunda', icon: '🚗', nombre: 'Limpieza profunda de asientos, suelo, puertas y maletero', desc: 'Limpieza total del interior', precioDelta: 0 },
                        { id: 'camio-tapiz', icon: '🛋️', nombre: 'Lavado de tapicería completa', desc: 'Limpieza profunda de asientos', precioDelta: 0 },
                        { id: 'camio-desinfeccion', icon: '🧼', nombre: 'Desinfección y desodorización', desc: 'Elimina bacterias y olores', precioDelta: 0 },
                        { id: 'camio-manchas', icon: '✨', nombre: 'Quita manchas', desc: 'Limpieza de manchas difíciles', precioDelta: 0 },
                        { id: 'camio-consola', icon: '🧹', nombre: 'Limpieza de consola y elementos internos', desc: 'Detalles interiores', precioDelta: 0 }
                    ]
                }
            }
        },
        'Sillones': {
            labelTamanio: 'Selecciona el tipo de sillón',
            tamanios: {
                '1 cuerpo': {
                    precioBase: 11000,
                    labelServicios: null,
                    servicios: []
                },
                '2 cuerpos': {
                    precioBase: 27000,
                    labelServicios: null,
                    servicios: []
                },
                '3 cuerpos': {
                    precioBase: 32000,
                    labelServicios: null,
                    servicios: []
                },
                '4 cuerpos': {
                    precioBase: 38000,
                    labelServicios: null,
                    servicios: []
                },
                '5 cuerpos': {
                    precioBase: 45000,
                    labelServicios: null,
                    servicios: []
                },
                '6 cuerpos': {
                    precioBase: 52000,
                    labelServicios: null,
                    servicios: []
                },
                '7 cuerpos': {
                    precioBase: 60000,
                    labelServicios: null,
                    servicios: []
                },
                'Bergara / Reclinable': {
                    precioBase: 20000,
                    labelServicios: null,
                    servicios: []
                },
                'Otros (especificar)': {
                    precioBase: 0,
                    precioAConfirmar: true,
                    labelServicios: null,
                    servicios: []
                }
            }
        },
        'Colchones': {
            labelTamanio: 'Selecciona el tamaño del colchón',
            tamanios: {
                '1 plaza': {
                    precioBase: 15000,
                    labelServicios: null,
                    servicios: []
                },
                '1.5 plaza': {
                    precioBase: 17000,
                    labelServicios: null,
                    servicios: []
                },
                '2 plazas': {
                    precioBase: 28000,
                    labelServicios: null,
                    servicios: []
                },
                'Queen': {
                    precioBase: 33000,
                    labelServicios: null,
                    servicios: []
                },
                'King': {
                    precioBase: 32000,
                    labelServicios: null,
                    servicios: []
                },
                'Super King': {
                    precioBase: 35000,
                    labelServicios: null,
                    servicios: []
                },
                'Respaldos': {
                    precioBase: 15000,
                    labelServicios: null,
                    servicios: []
                },
                'Cuna': {
                    precioBase: 10000,
                    labelServicios: null,
                    servicios: []
                }
            }
        },
        'Alfombras': {
            labelTamanio: 'Selecciona el tipo de alfombra',
            tamanios: {
                'Decorativa (2x3 mtrs²)': {
                    precioBase: 25000,
                    labelServicios: null,
                    servicios: []
                },
                'Decorativa (3x5 mtrs²)': {
                    precioBase: 30000,
                    labelServicios: null,
                    servicios: []
                },
                'Habitación alfombrada muro a muro': {
                    precioBase: 29000,
                    labelServicios: null,
                    servicios: []
                },
                'Muro a muro (valor x metro²)': {
                    precioBase: 2200,
                    labelServicios: null,
                    servicios: []
                },
                'Escaleras alfombradas': {
                    precioBase: 20000,
                    labelServicios: null,
                    servicios: []
                }
            }
        },
        'Sillas': {
            labelTamanio: 'Selecciona el tipo de silla',
            tamanios: {
                'Base y respaldo': {
                    precioBase: 4000,
                    labelServicios: null,
                    servicios: []
                },
                'Silla tapizada completa': {
                    precioBase: 6000,
                    labelServicios: null,
                    servicios: []
                },
                'Silla de oficina': {
                    precioBase: 8600,
                    labelServicios: null,
                    servicios: []
                },
                'Banqueta / Piso bar': {
                    precioBase: 5000,
                    labelServicios: null,
                    servicios: []
                }
            }
        }
    };

    // ====== ESTADO GLOBAL ======
    let serviciosAgregados = [];
    let categoriaSeleccionada = '';
    let tamanioSeleccionado = '';
    let servicioSeleccionado = null;
    let cantidadActual = 1;

    // ====== ELEMENTOS DEL DOM - CATEGORÍA ======
    const categoriaWrapper = document.getElementById('categoriaWrapper');
    const categoriaTrigger = document.getElementById('categoriaTrigger');
    const categoriaMenu = document.getElementById('categoriaMenu');
    const categoriaBackdrop = document.getElementById('categoriaBackdrop');

    // ====== ELEMENTOS DEL DOM - TAMAÑO ======
    const tamanioWrapper = document.getElementById('tamanioWrapper');
    const tamanioTrigger = document.getElementById('tamanioTrigger');
    const tamanioMenu = document.getElementById('tamanioMenu');
    const tamanioBackdrop = document.getElementById('tamanioBackdrop');
    const labelTamanio = document.getElementById('labelTamanio');

    // ====== ELEMENTOS DEL DOM - SERVICIOS (TARJETAS) ======
    const serviciosWrapper = document.getElementById('serviciosWrapper');
    const labelServicios = document.getElementById('labelServicios');
    const serviciosCardsContainer = document.getElementById('serviciosCardsContainer');

    // ====== ELEMENTOS DEL DOM - PRECIO Y CANTIDAD ======
    const precioWrapper = document.getElementById('precioWrapper');
    const precioDisplay = document.getElementById('precioDisplay');
    const cantidadWrapper = document.getElementById('cantidadWrapper');
    const cantidadInput = document.getElementById('cantidadInput');
    const cantidadMinus = document.getElementById('cantidadMinus');
    const cantidadPlus = document.getElementById('cantidadPlus');

    // ====== ELEMENTOS DEL DOM - LISTA Y BOTONES ======
    const btnAgregar = document.getElementById('btnAgregar');
    const serviciosAgregadosDiv = document.getElementById('serviciosAgregados');
    const listaServicios = document.getElementById('listaServicios');
    const btnCotizar = document.getElementById('btnCotizar');

    // ====== ELEMENTOS DEL DOM - MODAL ======
    const modalDatos = document.getElementById('modalDatos');
    const btnCerrarModal = document.getElementById('btnCerrarModal');
    const formDatos = document.getElementById('formDatos');
    const nombreInput = document.getElementById('nombreInput');
    const telefonoInput = document.getElementById('telefonoInput');
    const direccionInput = document.getElementById('direccionInput');
    const placesResults = document.getElementById('placesResults');

    // ====== ELEMENTOS DEL DOM - SIDEBAR ======
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('menuToggle');
    const sidebarOffcanvas = document.getElementById('sidebarOffcanvas');

    let controller;

    function formatPrecio(valor) {
        return '$' + (valor).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    // ====== SIDEBAR FUNCTIONS ======
    function closeSidebar() {
        if (sidebar) {
            sidebar.classList.remove('show-desktop');
        }
    }

    function openSidebar() {
        if (sidebar) {
            sidebar.classList.add('show-desktop');
        }
    }

    function adjustSidebarTop() {
        // Ajustar la posición del sidebar según el tamaño del header
        if (sidebar) {
            const header = document.querySelector('header');
            if (header) {
                const headerHeight = header.offsetHeight;
                sidebar.style.top = headerHeight + 'px';
                sidebar.style.height = 'calc(100vh - ' + headerHeight + 'px)';
            }
        }
    }

    // ====== SIDEBAR EVENT LISTENERS ======
    if (menuToggle) {
        menuToggle.addEventListener('click', (e) => {
            // Verificar si estamos en desktop (md+) para manejar el sidebar
            const isDesktop = window.innerWidth >= 768;
            
            if (isDesktop) {
                // En desktop, manejar el sidebar personalizado
                e.preventDefault();
                e.stopPropagation();
                if (sidebar && sidebar.classList.contains('show-desktop')) {
                    closeSidebar();
                } else {
                    openSidebar();
                }
            }
            // En mobile, dejar que Bootstrap maneje el offcanvas automáticamente
        });
    }

    // ====== MOBILE OFFCANVAS ======
    // Cerrar offcanvas cuando se abre para cerrar los dropdowns
    if (sidebarOffcanvas) {
        sidebarOffcanvas.addEventListener('show.bs.offcanvas', () => {
            cerrarDropdown(categoriaMenu, categoriaTrigger, categoriaBackdrop);
            cerrarDropdown(tamanioMenu, tamanioTrigger, tamanioBackdrop);
        });
        
        // Cerrar dropdowns cuando se hace clic en un enlace
        sidebarOffcanvas.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                cerrarDropdown(categoriaMenu, categoriaTrigger, categoriaBackdrop);
                cerrarDropdown(tamanioMenu, tamanioTrigger, tamanioBackdrop);
            });
        });
    }

    // ====== DESKTOP SIDEBAR - Cerrar al hacer clic en un enlace ======
    if (sidebar) {
        sidebar.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', () => {
                // Cerrar los dropdowns si estaban abiertos
                cerrarDropdown(categoriaMenu, categoriaTrigger, categoriaBackdrop);
                cerrarDropdown(tamanioMenu, tamanioTrigger, tamanioBackdrop);
                closeSidebar();
            });
        });
    }
    function abrirDropdown(menu, trigger, backdrop) {
        // Cerrar el otro dropdown abierto para evitar solapamientos
        if (menu.id !== 'categoriaMenu') {
            cerrarDropdown(categoriaMenu, categoriaTrigger, categoriaBackdrop);
        }
        if (menu.id !== 'tamanioMenu') {
            cerrarDropdown(tamanioMenu, tamanioTrigger, tamanioBackdrop);
        }

        // Posicionar el dropdown fijo en relación al trigger (usar posición fixed para evitar stacking/overflow)
        const rect = trigger.getBoundingClientRect();
        menu.style.position = 'fixed';
        menu.style.top = (rect.bottom + 8) + 'px';
        menu.style.left = Math.max(8, rect.left) + 'px';
        menu.style.width = rect.width + 'px';
        menu.style.right = 'auto';

        // Ajustar si se sale del viewport
        const menuWidth = Math.min(window.innerWidth * 0.9, 500);
        if (rect.left + menuWidth > window.innerWidth - 8) {
            menu.style.left = 'auto';
            menu.style.right = Math.max(8, window.innerWidth - rect.right) + 'px';
        }

        // Mover el menú y backdrop al body para evitar stacking contexts de los padres
        try {
            if (!menu.dataset.appendedToBody) {
                menu._origParent = menu.parentNode;
                menu._origNext = menu.nextSibling;
                document.body.appendChild(menu);
                menu.dataset.appendedToBody = 'true';
            }
            if (backdrop && !backdrop.dataset.appendedToBody) {
                backdrop._origParent = backdrop.parentNode;
                backdrop._origNext = backdrop.nextSibling;
                document.body.appendChild(backdrop);
                backdrop.dataset.appendedToBody = 'true';
            }
        } catch (e) {
            // si falla, no bloqueamos la apertura
        }

        // Forzar orden de apilamiento: que el menú de categoría esté por encima del de tamaños
        if (menu.id === 'categoriaMenu') {
            menu.style.zIndex = '21000';
            if (backdrop) {
                backdrop.style.zIndex = '20990';
                backdrop.style.setProperty('pointer-events', 'auto', 'important');
            }
        } else if (menu.id === 'tamanioMenu') {
            menu.style.zIndex = '20000';
            if (backdrop) {
                backdrop.style.zIndex = '19990';
                backdrop.style.setProperty('pointer-events', 'auto', 'important');
            }
        } else {
            menu.style.zIndex = '20000';
        }

        menu.classList.add('show');
        trigger.classList.add('active');
        if (backdrop) backdrop.classList.add('show');
    }

    function cerrarDropdown(menu, trigger, backdrop) {
        menu.classList.remove('show');
        trigger.classList.remove('active');
        if (backdrop) backdrop.classList.remove('show');
        menu.style.top = '';
        menu.style.left = '';
        menu.style.right = '';
        menu.style.width = '';
        menu.style.position = '';
        menu.style.zIndex = '';
        if (backdrop) {
            backdrop.style.zIndex = '';
            // Asegurarse de que el backdrop siempre tiene pointer-events: none cuando está cerrado
            backdrop.style.setProperty('pointer-events', 'none', 'important');
                    // Asegurar que el backdrop está completamente oculto
                    backdrop.style.display = 'none';
        }

        // Restaurar lugar original en DOM si lo movimos
        try {
            if (menu.dataset.appendedToBody && menu._origParent) {
                if (menu._origNext) menu._origParent.insertBefore(menu, menu._origNext);
                else menu._origParent.appendChild(menu);
                delete menu._origParent;
                delete menu._origNext;
                delete menu.dataset.appendedToBody;
            }
            if (backdrop && backdrop.dataset.appendedToBody && backdrop._origParent) {
                if (backdrop._origNext) backdrop._origParent.insertBefore(backdrop, backdrop._origNext);
                else backdrop._origParent.appendChild(backdrop);
                delete backdrop._origParent;
                delete backdrop._origNext;
                delete backdrop.dataset.appendedToBody;
            }
        } catch (e) {
            // no bloquear si falla
        }
    }

    // ====== CERRAR DROPDOWNS AL HACER SCROLL (CRÍTICO) ======
    window.addEventListener('scroll', () => {
        cerrarDropdown(categoriaMenu, categoriaTrigger, categoriaBackdrop);
        cerrarDropdown(tamanioMenu, tamanioTrigger, tamanioBackdrop);
    }, { passive: true });


    // ====== PROGRESSIVE DISCLOSURE - Actualizar estado del contenedor ======
    function updateServiceBoxState() {
        const serviceBox = document.getElementById('cotizaForm');
        if (!serviceBox) return;

        // Si hay servicios agregados, mantener expandido
        if (serviciosAgregados.length > 0) {
            serviceBox.classList.remove('collapsed');
            serviceBox.classList.add('expanded');
            return;
        }

        if (!categoriaSeleccionada) {
            // Sin selección: mostrar solo categoría
            serviceBox.classList.add('collapsed');
            serviceBox.classList.remove('expanded');
            return;
        }

        // Categoría seleccionada: mostrar tamaño
        serviceBox.classList.remove('collapsed');

        if (categoriaSeleccionada && tamanioSeleccionado) {
            // Categoría + Tamaño: mostrar todo
            serviceBox.classList.add('expanded');
        } else {
            // Solo categoría: mostrar solo categoría + tamaño
            serviceBox.classList.remove('expanded');
        }
    }

    // ====== CATEGORÍA DROPDOWN ======
    if (categoriaTrigger) {
        categoriaTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            categoriaMenu.classList.contains('show')
                ? cerrarDropdown(categoriaMenu, categoriaTrigger, categoriaBackdrop)
                : abrirDropdown(categoriaMenu, categoriaTrigger, categoriaBackdrop);
        });
    }

    if (categoriaBackdrop) {
        categoriaBackdrop.addEventListener('click', () => cerrarDropdown(categoriaMenu, categoriaTrigger, categoriaBackdrop));
    }

    document.addEventListener('click', (e) => {
        if (categoriaTrigger && !categoriaTrigger.contains(e.target) && !categoriaMenu.contains(e.target)) {
            cerrarDropdown(categoriaMenu, categoriaTrigger, categoriaBackdrop);
        }
    });


    categoriaMenu.addEventListener('click', (e) => {
        const item = e.target.closest('.service-dropdown-item');
        if (!item) return;

        // Si el item tiene clase 'disabled', prevenir su selección
        if (item.classList.contains('disabled')) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }

        e.preventDefault();
        e.stopPropagation();

        const valor = item.dataset.service; // Auto, Sillones, etc
        const texto = item.querySelector('.service-dropdown-item-main').textContent.trim();


        // 🔥 ESTADO GLOBAL (ESTO FALTABA)
        categoriaSeleccionada = valor;
        tamanioSeleccionado = '';
        servicioSeleccionado = null;

        // UI trigger
        const triggerMain = categoriaTrigger.querySelector('.service-dropdown-main');
        triggerMain.textContent = texto;
        categoriaTrigger.classList.remove('placeholder');

        // Marcar seleccionado visual y deshabilitar otros items
        document.querySelectorAll('#categoriaMenu .service-dropdown-item')
            .forEach(it => {
                it.classList.remove('selected');
                it.classList.remove('disabled');
                it.style.pointerEvents = 'auto';
                it.style.opacity = '1';
            });

        item.classList.add('selected');
        item.classList.add('disabled');
        item.style.pointerEvents = 'none';
        item.style.opacity = '0.5';

        // Reset dependientes
        tamanioMenu.innerHTML = '';
        serviciosCardsContainer.innerHTML = '';
        if (labelServicios) labelServicios.textContent = '';

        // 🔥 GENERAR TAMAÑOS
        actualizarTamanios();

        // Estado visual del formulario
        updateServiceBoxState();
        actualizarPrecio();

        cerrarDropdown(categoriaMenu, categoriaTrigger, categoriaBackdrop);
    });



    // ====== TAMAÑO DROPDOWN ======
    if (tamanioTrigger) {
        tamanioTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            tamanioMenu.classList.contains('show')
                ? cerrarDropdown(tamanioMenu, tamanioTrigger, tamanioBackdrop)
                : abrirDropdown(tamanioMenu, tamanioTrigger, tamanioBackdrop);
        });
    }

    if (tamanioBackdrop) {
        tamanioBackdrop.addEventListener('click', () => cerrarDropdown(tamanioMenu, tamanioTrigger, tamanioBackdrop));
    }

    document.addEventListener('click', (e) => {
        if (tamanioTrigger && !tamanioTrigger.contains(e.target) && !tamanioMenu.contains(e.target)) {
            cerrarDropdown(tamanioMenu, tamanioTrigger, tamanioBackdrop);
        }
    });

    // ====== DELEGACIÓN DE EVENTOS PARA TAMAÑOS ======
    tamanioMenu.addEventListener('click', (e) => {
        const item = e.target.closest('.service-dropdown-item');
        if (!item) return;

        e.preventDefault();
        e.stopPropagation();

        const tamanio = item.dataset.tamanio;
        tamanioSeleccionado = tamanio;
        servicioSeleccionado = null;

        // Actualizar trigger
        const triggerMain = tamanioTrigger.querySelector('.service-dropdown-main');
        triggerMain.textContent = tamanio;
        tamanioTrigger.classList.remove('placeholder');

        // Marcar seleccionado
        document.querySelectorAll('#tamanioMenu .service-dropdown-item').forEach(it => it.classList.remove('selected'));
        item.classList.add('selected');

        cerrarDropdown(tamanioMenu, tamanioTrigger, tamanioBackdrop);
        updateServiceBoxState();
        actualizarServicios();
        actualizarPrecio();
    });

    function actualizarTamanios() {
        if (!categoriaSeleccionada) {
            return;
        }

        const datos = serviciosData[categoriaSeleccionada];
        if (!datos) return;

        if (labelTamanio) labelTamanio.textContent = datos.labelTamanio;

        // Limpiar y generar items de tamaño
        tamanioMenu.innerHTML = '';
        Object.keys(datos.tamanios).forEach(tamanio => {
            const li = document.createElement('li');
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'service-dropdown-item';
            btn.setAttribute('data-tamanio', tamanio);
            btn.innerHTML = '<div class="service-dropdown-item-text"><div class="service-dropdown-item-main">' + tamanio + '</div></div>';
            li.appendChild(btn);
            tamanioMenu.appendChild(li);
        });

        // Reset
        const triggerMain = tamanioTrigger.querySelector('.service-dropdown-main');
        triggerMain.textContent = 'Selecciona un tipo';
        tamanioTrigger.classList.add('placeholder');
        document.querySelectorAll('#tamanioMenu .service-dropdown-item').forEach(it => it.classList.remove('selected'));
    }

    // ====== ACTUALIZAR SERVICIOS/TARJETAS ======
    function actualizarServicios() {
        if (!categoriaSeleccionada || !tamanioSeleccionado) {
            return;
        }

        const datos = serviciosData[categoriaSeleccionada];
        const datosTabla = datos.tamanios[tamanioSeleccionado];

        if (!datosTabla || !datosTabla.servicios || datosTabla.servicios.length === 0) {
            // No hay servicios, solo mostrar precio
            return;
        }

        if (labelServicios) labelServicios.textContent = datosTabla.labelServicios;

        // Generar tarjetas (informativas, no clickeables)
        serviciosCardsContainer.innerHTML = '';
        datosTabla.servicios.forEach(srv => {
            const card = document.createElement('div');
            card.className = 'service-card disabled';
            card.setAttribute('data-id', srv.id);
            card.innerHTML = `
                <input type="radio" name="servicioSeleccion" id="srv-${srv.id}" value="${srv.id}" class="service-radio" disabled>
                <label for="srv-${srv.id}" class="service-card-label">
                    <div class="service-card-icon">${srv.icon}</div>
                    <div class="service-card-content">
                        <div class="service-card-title">${srv.nombre}</div>
                        <div class="service-card-desc">${srv.desc}</div>
                    </div>
                </label>
            `;
            // NO agregar event listeners - solo mostrar información
            serviciosCardsContainer.appendChild(card);
        });
    }

    // ====== ACTUALIZAR PRECIO ======
    function actualizarPrecio() {
        if (!categoriaSeleccionada || !tamanioSeleccionado) {
            if (precioDisplay) precioDisplay.textContent = '$0';
            return;
        }

        const datos = serviciosData[categoriaSeleccionada];
        const datosTabla = datos.tamanios[tamanioSeleccionado];
        // Si el tamaño requiere confirmar precio, mostrar indicación y no calcular
        if (datosTabla && datosTabla.precioAConfirmar) {
            if (precioDisplay) precioDisplay.textContent = 'A confirmar';
            precioDisplay.dataset.unitPrice = '';
            return;
        }

        let precio = datosTabla.precioBase;

        if (servicioSeleccionado && servicioSeleccionado.precioDelta !== undefined) {
            precio += servicioSeleccionado.precioDelta;
        }

        const amount = parseInt(cantidadInput.value, 10) || 1;
        if (precioDisplay) precioDisplay.textContent = formatPrecio(precio * amount);
        precioDisplay.dataset.unitPrice = precio;
    }

    // ====== EVENTOS DE CANTIDAD ======
    if (cantidadPlus) {
        cantidadPlus.addEventListener('click', () => {
            cantidadActual = (parseInt(cantidadInput.value, 10) || 1) + 1;
            cantidadInput.value = cantidadActual;
            actualizarPrecio();
        });
    }

    if (cantidadMinus) {
        cantidadMinus.addEventListener('click', () => {
            cantidadActual = Math.max(1, (parseInt(cantidadInput.value, 10) || 1) - 1);
            cantidadInput.value = cantidadActual;
            actualizarPrecio();
        });
    }

    // ====== AGREGAR SERVICIO ======
    if (btnAgregar) {
        btnAgregar.addEventListener('click', () => {
            if (!categoriaSeleccionada || !tamanioSeleccionado) {
                alert('Por favor selecciona una categoría y tamaño');
                return;
            }

            const datos = serviciosData[categoriaSeleccionada];
            const datosTabla = datos.tamanios[tamanioSeleccionado];
            let precio = datosTabla.precioBase;
            let nombreServicio = servicioSeleccionado ? servicioSeleccionado.nombre : 'Servicio estándar';

            if (servicioSeleccionado && servicioSeleccionado.precioDelta !== undefined) {
                precio += servicioSeleccionado.precioDelta;
            }

            const cantidad = parseInt(cantidadInput.value, 10) || 1;
            // Si el tamaño requiere precio a confirmar, no asignar subtotal ni precio unitario
            const esAConfirmar = !!(datosTabla && datosTabla.precioAConfirmar);
            const precioUnit = esAConfirmar ? null : precio;
            const subtotal = esAConfirmar ? 0 : (precioUnit * cantidad);

            serviciosAgregados.push({
                categoría: categoriaSeleccionada,
                tamanio: tamanioSeleccionado,
                servicio: nombreServicio,
                cantidad: cantidad,
                precioUnit: precioUnit,
                subtotal: subtotal,
                precioAConfirmar: esAConfirmar,
                displayName: servicioSeleccionado
                    ? `${categoriaSeleccionada} - ${tamanioSeleccionado} (${nombreServicio})`
                    : `${categoriaSeleccionada} - ${tamanioSeleccionado}`
            });

            actualizarListaServicios();
            serviciosAgregadosDiv.classList.add('show');

            // ===== RESET COMPLETO DEL FORMULARIO =====
            // 1. Limpiar estado global
            categoriaSeleccionada = '';
            tamanioSeleccionado = '';
            servicioSeleccionado = null;
            cantidadActual = 1;
            cantidadInput.value = '1';

            // 2. Limpiar triggers
            categoriaTrigger.querySelector('.service-dropdown-main').textContent = 'Selecciona una categoría';
            categoriaTrigger.classList.add('placeholder');
            tamanioTrigger.querySelector('.service-dropdown-main').textContent = 'Selecciona un tipo';
            tamanioTrigger.classList.add('placeholder');

            // 3. Limpiar labels
            if (labelTamanio) labelTamanio.textContent = 'Selecciona el tamaño';
            if (labelServicios) labelServicios.textContent = '';

            // 4. Limpiar selecciones visuales
            document.querySelectorAll('#categoriaMenu .service-dropdown-item').forEach(it => it.classList.remove('selected'));
            document.querySelectorAll('#tamanioMenu .service-dropdown-item').forEach(it => it.classList.remove('selected'));
            document.querySelectorAll('.service-card').forEach(c => c.classList.remove('selected'));

            // 5. Limpiar/cerrar menús
            tamanioMenu.innerHTML = '';
            serviciosCardsContainer.innerHTML = '';
            cerrarDropdown(categoriaMenu, categoriaTrigger, categoriaBackdrop);
            cerrarDropdown(tamanioMenu, tamanioTrigger, tamanioBackdrop);

            // 6. Actualizar precio y estado
            actualizarPrecio();
            updateServiceBoxState();

            // 7. Scroll suave hacia el formulario para nueva reserva
            if (categoriaWrapper) {
                categoriaWrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }



    // ====== ACTUALIZAR LISTA ======
    function actualizarListaServicios() {
        listaServicios.innerHTML = '';
        
        serviciosAgregados.forEach((s, idx) => {
            const item = document.createElement('div');
            
            const left = document.createElement('div');
            left.className = 'flex-grow-1';
            left.innerHTML = `
                <strong>${s.displayName}</strong>
                <div class="small">${s.precioAConfirmar ? 'A confirmar' : formatPrecio(s.precioUnit)}</div>
            `;
            
            const right = document.createElement('div');
            right.className = 'd-flex gap-2 align-items-center';
            right.style.flexShrink = '0';
            
            const delBtn = document.createElement('button');
            delBtn.className = 'btn btn-link text-danger p-0';
            delBtn.type = 'button';
            delBtn.innerHTML = '<i class="bi bi-trash-fill"></i>';
            delBtn.style.fontSize = '1.1rem';
            delBtn.title = 'Eliminar';
            delBtn.style.cursor = 'pointer';
            delBtn.onclick = (e) => {
                e.preventDefault();
                serviciosAgregados.splice(idx, 1);
                actualizarListaServicios();
                if (serviciosAgregados.length === 0) {
                    serviciosAgregadosDiv.classList.remove('show');
                }
                updateServiceBoxState();
            };
            right.appendChild(delBtn);
            item.appendChild(left);
            item.appendChild(right);
            listaServicios.appendChild(item);
        });
        
        const total = serviciosAgregados.reduce((a, b) => a + (b.subtotal || 0), 0);
        const tieneAConfirmar = serviciosAgregados.some(s => s.precioAConfirmar);
        
        // Aplicar descuento del 13% si hay 2 o más servicios
        const tieneDescuento = serviciosAgregados.length >= 2;
        const descuentoMonto = tieneDescuento ? total * 0.13 : 0;
        const totalConDescuento = tieneDescuento ? total * 0.87 : total;

        // Construir texto combinado: si hay items A confirmar y también hay total numérico,
        // mostrar "$X + A confirmar"; si solo A confirmar -> "A confirmar"; si solo numérico -> "$X"
        let totalText = '';
        if (tieneAConfirmar) {
            if (totalConDescuento > 0) totalText = `${formatPrecio(totalConDescuento)} + A confirmar`;
            else totalText = 'A confirmar';
        } else {
            totalText = totalConDescuento ? formatPrecio(totalConDescuento) : '$0';
        }

        // Actualizar precio en el botón
        if (btnCotizar) {
            let bottonHTML = `<i class="bi bi-calendar-check me-2"></i>Reservar ahora <span class="float-end">${totalText}</span>`;
            if (tieneDescuento) {
                bottonHTML = `${bottonHTML}<div style="font-size: 0.75rem; text-align: right; margin-top: 2px;">-${formatPrecio(descuentoMonto)} (13% descuento por 2 servicios o más)</div>`;
            }
            btnCotizar.innerHTML = bottonHTML;
        }

        // Actualizar precio en elemento adicional si existe
        const precioBoton = document.getElementById('precioBoton');
        if (precioBoton) {
            precioBoton.textContent = totalText;
        }
        
        // Actualizar tiempo estimado - 30 minutos por servicio
        const tiempoEstimado = document.getElementById('tiempoEstimado');
        if (tiempoEstimado) {
            const minutos = serviciosAgregados.length * 30;
            const horas = Math.floor(minutos / 60);
            const mins = minutos % 60;
            let tiempoTexto = '';
            if (horas > 0) {
                tiempoTexto = horas + ' hora' + (horas > 1 ? 's' : '');
                if (mins > 0) tiempoTexto += ' ' + mins + 'm';
            } else {
                tiempoTexto = mins + ' minutos';
            }
            tiempoEstimado.textContent = tiempoTexto;
        }

        // Sync botón fijo: ocultarlo si no hay servicios
        if (serviciosAgregados.length === 0) {
            if (reservaFixed) reservaFixed.classList.add('d-none');
        }
        // Si hay servicios, dejar que IntersectionObserver controle visibilidad según scroll
    }

    // ====== MODAL Y RESERVA ======
    let bootstrapModal = null;

    function mostrarModal() {
        // Cerrar cualquier dropdown abierto para evitar que aparezca sobre el modal
        cerrarDropdown(categoriaMenu, categoriaTrigger, categoriaBackdrop);
        cerrarDropdown(tamanioMenu, tamanioTrigger, tamanioBackdrop);
        
        // Actualizar resumen del modal
        const resumenServicio = document.getElementById('resumenServicio');
        const resumenTipo = document.getElementById('resumenTipo');
        const resumenTiempo = document.getElementById('resumenTiempo');
        const resumenPrecio = document.getElementById('resumenPrecio');
        
        if (serviciosAgregados.length > 0) {
            const primerServicio = serviciosAgregados[0];
            if (resumenServicio) resumenServicio.textContent = primerServicio.displayName;
            if (resumenTipo) resumenTipo.textContent = serviciosAgregados.length + (serviciosAgregados.length === 1 ? ' servicio' : ' servicios');

            // Calcular tiempo total
            const minutos = serviciosAgregados.length * 30;
            const horas = Math.floor(minutos / 60);
            const mins = minutos % 60;
            let tiempoTexto = '';
            if (horas > 0) {
                tiempoTexto = horas + 'h';
                if (mins > 0) tiempoTexto += ' ' + mins + 'm';
            } else {
                tiempoTexto = mins + 'm';
            }
            if (resumenTiempo) resumenTiempo.textContent = tiempoTexto;

            // Calcular precio total y mostrar combinaciones si corresponde
            const total = serviciosAgregados.reduce((a, b) => a + (b.subtotal || 0), 0);
            const tieneAConfirmar = serviciosAgregados.some(s => s.precioAConfirmar);
            
            // Aplicar descuento del 13% si hay 2 o más servicios
            const tieneDescuentoModal = serviciosAgregados.length >= 2;
            const descuentoMontoModal = tieneDescuentoModal ? total * 0.13 : 0;
            const totalConDescuentoModal = tieneDescuentoModal ? total * 0.87 : total;
            
            if (resumenPrecio) {
                if (tieneAConfirmar) {
                    resumenPrecio.textContent = totalConDescuentoModal > 0 ? `${formatPrecio(totalConDescuentoModal)} + A confirmar` : 'A confirmar';
                } else {
                    resumenPrecio.textContent = formatPrecio(totalConDescuentoModal);
                }
                
                // Mostrar el descuento si aplica
                if (tieneDescuentoModal) {
                    const descuentoDiv = document.createElement('div');
                    descuentoDiv.style.fontSize = '0.875rem';
                    descuentoDiv.style.color = '#28a745';
                    descuentoDiv.style.marginTop = '4px';
                    descuentoDiv.innerHTML = `<strong>-${formatPrecio(descuentoMontoModal)} (13% descuento por 2 servicios o más)</strong>`;
                    
                    // Limpiar descuentos anteriores si existen
                    const descuentoAnterior = resumenPrecio.parentElement.querySelector('.descuento-info');
                    if (descuentoAnterior) descuentoAnterior.remove();
                    
                    descuentoDiv.className = 'descuento-info';
                    resumenPrecio.parentElement.appendChild(descuentoDiv);
                }
            }
        }
        
        // Configurar restricciones de fecha
        const fechaInput = document.getElementById('fechaInput');
        if (fechaInput) {
            // Fecha mínima: hoy
            const hoy = new Date();
            const fechaMinStr = hoy.toISOString().split('T')[0];
            fechaInput.min = fechaMinStr;
            
            // Fecha máxima: 30 días a partir de hoy
            const fechaMax = new Date(hoy);
            fechaMax.setDate(fechaMax.getDate() + 30);
            const fechaMaxStr = fechaMax.toISOString().split('T')[0];
            fechaInput.max = fechaMaxStr;
        }
        
        if (!bootstrapModal) {
            bootstrapModal = new bootstrap.Modal(modalDatos);
        }
        bootstrapModal.show();
    }

    function ocultarModal() {
        if (bootstrapModal) {
            bootstrapModal.hide();
        }
    }

    if (btnCerrarModal) btnCerrarModal.addEventListener('click', ocultarModal);

    const btnCancelarModal = document.getElementById('btnCancelarModal');
    if (btnCancelarModal) btnCancelarModal.addEventListener('click', ocultarModal);

    if (btnCotizar) {
        btnCotizar.addEventListener('click', () => {
            if (serviciosAgregados.length === 0) {
                alert('Agrega al menos un servicio');
                return;
            }
            mostrarModal();
        });
    }

    // Autocomplete Nominatim
    if (direccionInput && placesResults) {
        direccionInput.setAttribute('autocomplete', 'off');
        direccionInput.addEventListener('input', async function () {
            const q = direccionInput.value.trim();
            if (q.length < 4) {
                placesResults.style.display = 'none';
                return;
            }
            if (controller) controller.abort();
            controller = new AbortController();
            try {
                const res = await fetch('https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&countrycodes=cl&limit=6&q=' + encodeURIComponent(q), {
                    signal: controller.signal,
                    headers: { 'Accept-Language': 'es' }
                });
                const data = await res.json();
                placesResults.innerHTML = '';
                if (!data || !data.length) {
                    placesResults.style.display = 'none';
                    return;
                }
                data.forEach(place => {
                    const button = document.createElement('button');
                    button.type = 'button';
                    button.className = 'list-group-item list-group-item-action text-start';
                    button.innerHTML = '<i class="bi bi-geo-alt-fill me-2 text-primary"></i>' + place.display_name;
                    button.addEventListener('click', function () {
                        direccionInput.value = place.display_name;
                        direccionInput.dataset.lat = place.lat;
                        direccionInput.dataset.lon = place.lon;
                        placesResults.style.display = 'none';
                    });
                    placesResults.appendChild(button);
                });
                placesResults.style.display = 'block';
            } catch (err) {
                if (err.name !== 'AbortError') console.error('Nominatim error', err);
            }
        });
        document.addEventListener('click', function (e) {
            if (!direccionInput.contains(e.target) && !placesResults.contains(e.target)) {
                placesResults.style.display = 'none';
            }
        });
    }

    // VALIDACIONES: telefono solo numeros (sanitizar mientras escribe)
    if (telefonoInput) {
        telefonoInput.addEventListener('input', function () {
            const cleaned = telefonoInput.value.replace(/\D+/g, '');
            if (telefonoInput.value !== cleaned) telefonoInput.value = cleaned;
        });
    }

    // Submit formulario reserva → Enviar a WhatsApp
    if (formDatos) {
        formDatos.addEventListener('submit', (e) => {
            e.preventDefault();

            // VALIDACIONES: nombre y teléfono
            const nombre = nombreInput.value ? nombreInput.value.trim() : '';
            // Requerir al menos 5 caracteres y que incluya un espacio (nombre y apellido)
            if (!nombre || nombre.length < 5 || nombre.indexOf(' ') === -1) {
                alert('Por favor ingresa tu nombre y apellidos (mínimo 5 caracteres).');
                nombreInput.focus();
                return;
            }

            // Teléfono: solo dígitos, mínimo 8 caracteres
            const telefonoCliente = telefonoInput.value ? telefonoInput.value.replace(/\D+/g, '') : '';
            if (!telefonoCliente || telefonoCliente.length < 8) {
                alert('Por favor ingresa un teléfono válido (solo números, mínimo 8 dígitos).');
                telefonoInput.focus();
                return;
            }

            // Capturar resto de datos del formulario
            const direccion = direccionInput.value;
            const casaDepto = document.getElementById('casaDeptoInput').value;
            const fecha = document.getElementById('fechaInput').value;
            const hora = document.getElementById('horaInput').value;

            // Capturar datos del servicio (resumen)
            const servicio = document.getElementById('resumenServicio').textContent;
            const tipo = document.getElementById('resumenTipo').textContent;
            const tiempo = document.getElementById('resumenTiempo').textContent;
            const precio = document.getElementById('resumenPrecio').textContent;
            const tieneAConfirmar = serviciosAgregados.some(s => s.precioAConfirmar);
            
            // Calcular si hay descuento para incluirlo en el mensaje
            const total = serviciosAgregados.reduce((a, b) => a + (b.subtotal || 0), 0);
            const tieneDescuentoMsg = serviciosAgregados.length >= 2;
            const descuentoMontoMsg = tieneDescuentoMsg ? total * 0.13 : 0;

            // Formatear dirección
            const direccionCompleta = casaDepto ? `${direccion}, ${casaDepto}` : direccion;

            // Construir mensaje (si hay items A confirmar, omitimos línea de precio e indicamos que el cliente lo escriba)
            let mensaje = '';
            if (tieneAConfirmar) {
                if (total > 0) {
                    const lineasDescuento = tieneDescuentoMsg ? `\n✓ Descuento: -${formatPrecio(descuentoMontoMsg)} (13% por 2+ servicios)` : '';
                    mensaje = `Hola ${nombre},\n\nTu reserva está confirmada ✓\n\nServicio: ${servicio}\nTipo: ${tipo}\nDuración: ${tiempo}\nPrecio calculado: ${formatPrecio(total)} + algunos precios a confirmar.${lineasDescuento}\nPor favor indica el precio para el/los servicio(s) "Otros (especificar)" en este mismo mensaje.\n\nDirección: ${direccionCompleta}\nFecha: ${fecha}\nHora: ${hora}\nTeléfono: +56${telefonoCliente}\n\nEl pago se realiza al finalizar el servicio.\n\n¡Gracias por preferirnos!`;
                } else {
                    mensaje = `Hola ${nombre},\n\nTu reserva está confirmada ✓\n\nServicio: ${servicio}\nTipo: ${tipo}\nDuración: ${tiempo}\n\nPor favor indica el precio para el/los servicio(s) "Otros (especificar)" en este mismo mensaje.\n\nDirección: ${direccionCompleta}\nFecha: ${fecha}\nHora: ${hora}\nTeléfono: +56${telefonoCliente}\n\nEl pago se realiza al finalizar el servicio.\n\n¡Gracias por preferirnos!`;
                }
            } else {
                const lineasDescuento = tieneDescuentoMsg ? `\n✓ Descuento: -${formatPrecio(descuentoMontoMsg)} (13% por 2+ servicios)` : '';
                mensaje = `Hola ${nombre},\n\nTu reserva está confirmada ✓\n\nServicio: ${servicio}\nTipo: ${tipo}\nDuración: ${tiempo}\nPrecio: ${precio}${lineasDescuento}\n\nDirección: ${direccionCompleta}\nFecha: ${fecha}\nHora: ${hora}\nTeléfono: +56${telefonoCliente}\n\nEl pago se realiza al finalizar el servicio.\n\n¡Gracias por preferirnos!`;
            }

            // Número de WhatsApp de la empresa (fijo)
            const numeroEmpresa = '927391320';

            // Construir URL de WhatsApp
            const urlWhatsapp = `https://wa.me/56${numeroEmpresa}?text=${encodeURIComponent(mensaje)}`;

            // Abrir en nueva pestaña
            window.open(urlWhatsapp, '_blank');

            // Cerrar modal después de 500ms
            setTimeout(function() {
                const modal = bootstrap.Modal.getInstance(document.getElementById('modalDatos'));
                if (modal) modal.hide();

                // Limpiar todo
                serviciosAgregados = [];
                actualizarListaServicios();
                serviciosAgregadosDiv.classList.remove('show');
                updateServiceBoxState();
                formDatos.reset();
            }, 500);
        });
    }

    // Cerrar sidebar al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (sidebar && menuToggle && !sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
            if (sidebar.classList.contains('show-desktop')) {
                closeSidebar();
            }
        }
    });

    // Ajustar posición si cambia el tamaño de la ventana
    window.addEventListener('resize', adjustSidebarTop);
    
    // Ajustar en carga inicial
    adjustSidebarTop();


    // Reposicionar dropdowns cuando hay resize
    window.addEventListener('resize', () => {
        if (categoriaMenu && categoriaMenu.classList.contains('show')) {
            const rect = categoriaTrigger.getBoundingClientRect();
            categoriaMenu.style.top = (rect.bottom + 8) + 'px';
            categoriaMenu.style.left = Math.max(8, rect.left) + 'px';
        }
        if (tamanioMenu && tamanioMenu.classList.contains('show')) {
            const rect = tamanioTrigger.getBoundingClientRect();
            tamanioMenu.style.top = (rect.bottom + 8) + 'px';
            tamanioMenu.style.left = Math.max(8, rect.left) + 'px';
        }
    });

    // ====== BOTÓN RESERVA FIXED (CONTROL DEFINITIVO) ======
    const reservaFixed = document.getElementById('reservaFixed');
    const cotizaForm = document.getElementById('cotizaForm');
    const trabajos = document.getElementById('trabajos');

    if (reservaFixed && cotizaForm) {

        const formObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                // Mostrar botón fijo SOLO si el form está OUT OF VIEW y hay servicios
                if (!entry.isIntersecting && serviciosAgregados.length > 0) {
                    reservaFixed.classList.remove('d-none');
                } else {
                    reservaFixed.classList.add('d-none');
                }
            });
        }, {
            threshold: 0.15
        });

        formObserver.observe(cotizaForm);
    }

    if (reservaFixed && trabajos) {
        const trabajosObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    reservaFixed.classList.add('d-none');
                }
            });
        }, {
            threshold: 0.1
        });

        trabajosObserver.observe(trabajos);
    }

    // Click del botón fixed → usa el botón real
    const btnCotizarFixed = document.getElementById('btnCotizarFixed');
    if (btnCotizarFixed && btnCotizar) {
        btnCotizarFixed.addEventListener('click', () => {
            btnCotizar.click();
        });
    }

});
