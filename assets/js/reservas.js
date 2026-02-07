// reservas.js - Selector dinámico de servicios con 3 niveles
document.addEventListener('DOMContentLoaded', function () {

    // ====== ESTRUCTURA DE DATOS: CATEGORÍA -> TIPO/TAMAÑO -> SERVICIOS ======
    const serviciosData = {
        'Auto': {
            labelTamanio: 'Selecciona el tamaño del auto',
            tamanios: {
                'Pequeño (Hatchback, Sedán)': {
                    precioBase: 35000,
                    labelServicios: '¿Qué quieres limpiar?',
                    servicios: [
                        { id: 'auto-interior-exterior', icon: '🚗', nombre: 'Interior + Exterior', desc: 'Limpieza completa del vehículo', precioDelta: 0 },
                        { id: 'auto-tapiz', icon: '🛋️', nombre: 'Lavado Tapiz', desc: 'Solo tapiz y asientos', precioDelta: -5000 },
                        { id: 'auto-full', icon: '✨', nombre: 'Auto Full', desc: 'Servicio integral premium', precioDelta: 8000 }
                    ]
                },
                'Mediano (SUV, Van)': {
                    precioBase: 45000,
                    labelServicios: '¿Qué quieres limpiar?',
                    servicios: [
                        { id: 'auto-interior-exterior', icon: '🚗', nombre: 'Interior + Exterior', desc: 'Limpieza completa del vehículo', precioDelta: 0 },
                        { id: 'auto-tapiz', icon: '🛋️', nombre: 'Lavado Tapiz', desc: 'Solo tapiz y asientos', precioDelta: -5000 },
                        { id: 'auto-full', icon: '✨', nombre: 'Auto Full', desc: 'Servicio integral premium', precioDelta: 8000 }
                    ]
                },
                'Grande (Camioneta, Pickup)': {
                    precioBase: 50000,
                    labelServicios: '¿Qué quieres limpiar?',
                    servicios: [
                        { id: 'auto-interior-exterior', icon: '🚗', nombre: 'Interior + Exterior', desc: 'Limpieza completa del vehículo', precioDelta: 0 },
                        { id: 'auto-tapiz', icon: '🛋️', nombre: 'Lavado Tapiz', desc: 'Solo tapiz y asientos', precioDelta: -5000 },
                        { id: 'auto-full', icon: '✨', nombre: 'Auto Full', desc: 'Servicio integral premium', precioDelta: 8000 }
                    ]
                }
            }
        },
        'Sillones': {
            labelTamanio: 'Selecciona el tipo de sillón',
            tamanios: {
                '1 cuerpo': {
                    precioBase: 12500,
                    labelServicios: 'Selecciona el servicio',
                    servicios: [
                        { id: 'sillon-estandar', icon: '✨', nombre: 'Limpieza estándar', desc: 'Limpieza profunda y cuidadosa', precioDelta: 0 },
                        { id: 'sillon-profunda', icon: '🧼', nombre: 'Limpieza profunda', desc: 'Eliminación de suciedad incrustada', precioDelta: 3000 },
                        { id: 'sillon-manchas', icon: '🎯', nombre: 'Eliminación manchas y olores', desc: 'Tratamiento especializado', precioDelta: 5000 }
                    ]
                },
                '2 cuerpos': {
                    precioBase: 15000,
                    labelServicios: 'Selecciona el servicio',
                    servicios: [
                        { id: 'sillon-estandar', icon: '✨', nombre: 'Limpieza estándar', desc: 'Limpieza profunda y cuidadosa', precioDelta: 0 },
                        { id: 'sillon-profunda', icon: '🧼', nombre: 'Limpieza profunda', desc: 'Eliminación de suciedad incrustada', precioDelta: 3000 },
                        { id: 'sillon-manchas', icon: '🎯', nombre: 'Eliminación manchas y olores', desc: 'Tratamiento especializado', precioDelta: 5000 }
                    ]
                },
                '3 cuerpos': {
                    precioBase: 18000,
                    labelServicios: 'Selecciona el servicio',
                    servicios: [
                        { id: 'sillon-estandar', icon: '✨', nombre: 'Limpieza estándar', desc: 'Limpieza profunda y cuidadosa', precioDelta: 0 },
                        { id: 'sillon-profunda', icon: '🧼', nombre: 'Limpieza profunda', desc: 'Eliminación de suciedad incrustada', precioDelta: 3000 },
                        { id: 'sillon-manchas', icon: '🎯', nombre: 'Eliminación manchas y olores', desc: 'Tratamiento especializado', precioDelta: 5000 }
                    ]
                },
                'Seccional / Modular': {
                    precioBase: 22000,
                    labelServicios: 'Selecciona el servicio',
                    servicios: [
                        { id: 'sillon-estandar', icon: '✨', nombre: 'Limpieza estándar', desc: 'Limpieza profunda y cuidadosa', precioDelta: 0 },
                        { id: 'sillon-profunda', icon: '🧼', nombre: 'Limpieza profunda', desc: 'Eliminación de suciedad incrustada', precioDelta: 3000 },
                        { id: 'sillon-manchas', icon: '🎯', nombre: 'Eliminación manchas y olores', desc: 'Tratamiento especializado', precioDelta: 5000 }
                    ]
                },
                'Bergara / Reclinable': {
                    precioBase: 18000,
                    labelServicios: 'Selecciona el servicio',
                    servicios: [
                        { id: 'sillon-estandar', icon: '✨', nombre: 'Limpieza estándar', desc: 'Limpieza profunda y cuidadosa', precioDelta: 0 },
                        { id: 'sillon-profunda', icon: '🧼', nombre: 'Limpieza profunda', desc: 'Eliminación de suciedad incrustada', precioDelta: 3000 },
                        { id: 'sillon-manchas', icon: '🎯', nombre: 'Eliminación manchas y olores', desc: 'Tratamiento especializado', precioDelta: 5000 }
                    ]
                },
                'Otros': {
                    precioBase: 12500,
                    labelServicios: 'Selecciona el servicio',
                    servicios: [
                        { id: 'sillon-estandar', icon: '✨', nombre: 'Limpieza estándar', desc: 'Limpieza profunda y cuidadosa', precioDelta: 0 },
                        { id: 'sillon-profunda', icon: '🧼', nombre: 'Limpieza profunda', desc: 'Eliminación de suciedad incrustada', precioDelta: 3000 },
                        { id: 'sillon-manchas', icon: '🎯', nombre: 'Eliminación manchas y olores', desc: 'Tratamiento especializado', precioDelta: 5000 }
                    ]
                }
            }
        },
        'Colchones': {
            labelTamanio: 'Selecciona el tamaño del colchón',
            tamanios: {
                '1 plaza': {
                    precioBase: 22000,
                    labelServicios: null,
                    servicios: []
                },
                '1.5 plaza': {
                    precioBase: 25000,
                    labelServicios: null,
                    servicios: []
                },
                '2 plazas': {
                    precioBase: 32000,
                    labelServicios: null,
                    servicios: []
                },
                'Queen': {
                    precioBase: 34000,
                    labelServicios: null,
                    servicios: []
                },
                'King': {
                    precioBase: 36000,
                    labelServicios: null,
                    servicios: []
                },
                'Super King': {
                    precioBase: 40000,
                    labelServicios: null,
                    servicios: []
                },
                'Colchón + base / respaldo': {
                    precioBase: 45000,
                    labelServicios: null,
                    servicios: []
                }
            }
        },
        'Alfombras': {
            labelTamanio: 'Selecciona el tipo de alfombra',
            tamanios: {
                'Muro a Muro': {
                    precioBase: 40000,
                    labelServicios: null,
                    servicios: []
                },
                'Decorativa': {
                    precioBase: 25000,
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

    let controller;

    function formatPrecio(valor) {
        return '$' + (valor).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    // ====== FUNCIONES DROPDOWN GENÉRICAS ======
    function abrirDropdown(menu, trigger, backdrop) {
        // 🔥 CIERRE EXCLUSIVO: Cerrar todos los otros dropdowns antes de abrir uno
        if (menu.id !== 'categoriaMenu') {
            cerrarDropdown(categoriaMenu, categoriaTrigger, categoriaBackdrop);
        }
        if (menu.id !== 'tamanioMenu') {
            cerrarDropdown(tamanioMenu, tamanioTrigger, tamanioBackdrop);
        }

        // Posicionar el dropdown fijo en relación al trigger
        const rect = trigger.getBoundingClientRect();
        menu.style.top = (rect.bottom + 8) + 'px';
        menu.style.left = Math.max(8, rect.left) + 'px';
        menu.style.right = 'auto';

        // Ajustar si se sale del viewport
        const menuWidth = Math.min(window.innerWidth * 0.9, 500);
        if (rect.left + menuWidth > window.innerWidth - 8) {
            menu.style.left = 'auto';
            menu.style.right = Math.max(8, window.innerWidth - rect.right) + 'px';
        }

        menu.classList.add('show');
        trigger.classList.add('active');
        backdrop.classList.add('show');
    }

    function cerrarDropdown(menu, trigger, backdrop) {
        menu.classList.remove('show');
        trigger.classList.remove('active');
        backdrop.classList.remove('show');
        menu.style.top = '';
        menu.style.left = '';
        menu.style.right = '';
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

        // Marcar seleccionado visual
        document.querySelectorAll('#categoriaMenu .service-dropdown-item')
            .forEach(it => it.classList.remove('selected'));

        item.classList.add('selected');

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

        // Generar tarjetas
        serviciosCardsContainer.innerHTML = '';
        datosTabla.servicios.forEach(srv => {
            const card = document.createElement('div');
            card.className = 'service-card';
            card.setAttribute('data-id', srv.id);
            card.innerHTML = `
                <input type="radio" name="servicioSeleccion" id="srv-${srv.id}" value="${srv.id}" class="service-radio">
                <label for="srv-${srv.id}" class="service-card-label">
                    <div class="service-card-icon">${srv.icon}</div>
                    <div class="service-card-content">
                        <div class="service-card-title">${srv.nombre}</div>
                        <div class="service-card-desc">${srv.desc}</div>
                    </div>
                </label>
            `;
            const radio = card.querySelector('.service-radio');
            radio.addEventListener('change', () => {
                servicioSeleccionado = srv;
                document.querySelectorAll('.service-card').forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                updateServiceBoxState();
                actualizarPrecio();
            });

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
            const subtotal = precio * cantidad;

            serviciosAgregados.push({
                categoría: categoriaSeleccionada,
                tamanio: tamanioSeleccionado,
                servicio: nombreServicio,
                cantidad: cantidad,
                precioUnit: precio,
                subtotal: subtotal,
                displayName: `${categoriaSeleccionada} - ${tamanioSeleccionado} (${nombreServicio})`
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
                <div class="small">${formatPrecio(s.precioUnit)}</div>
            `;
            
            const right = document.createElement('div');
            right.className = 'd-flex gap-2 align-items-center';
            right.style.flexShrink = '0';
            
            const editBtn = document.createElement('button');
            editBtn.className = 'btn btn-link text-primary p-0';
            editBtn.type = 'button';
            editBtn.innerHTML = '<i class="bi bi-pencil-fill"></i>';
            editBtn.style.fontSize = '1.1rem';
            editBtn.title = 'Editar';
            editBtn.style.cursor = 'pointer';
            editBtn.onclick = (e) => {
                e.preventDefault();
                // Aquí iría la funcionalidad de editar
            };
            
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
            
            right.appendChild(editBtn);
            right.appendChild(delBtn);
            item.appendChild(left);
            item.appendChild(right);
            listaServicios.appendChild(item);
        });
        
        const total = serviciosAgregados.reduce((a, b) => a + (b.subtotal || 0), 0);
        
        // Actualizar precio en el botón
        if (btnCotizar) {
            btnCotizar.innerHTML = `<i class="bi bi-calendar-check me-2"></i>Reservar ahora <span class="float-end">${total ? formatPrecio(total) : '$0'}</span>`;
        }
        
        // Actualizar precio en elemento adicional si existe
        const precioBoton = document.getElementById('precioBoton');
        if (precioBoton) {
            precioBoton.textContent = total ? formatPrecio(total) : '$0';
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
            
            // Calcular precio total
            const total = serviciosAgregados.reduce((a, b) => a + (b.subtotal || 0), 0);
            if (resumenPrecio) resumenPrecio.textContent = formatPrecio(total);
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

    // Submit formulario reserva
    if (formDatos) {
        formDatos.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const datosFinales = {
                nombre: nombreInput.value,
                telefono: telefonoInput.value,
                direccion: direccionInput.value,
                fecha: document.getElementById('fechaInput').value,
                hora: document.getElementById('horaInput').value,
                casaDepto: document.getElementById('casaDeptoInput').value,
                servicios: serviciosAgregados,
                total: serviciosAgregados.reduce((a, b) => a + b.subtotal, 0)
            };
            
            console.log('Reserva enviada:', datosFinales);
            alert('¡Reserva confirmada!\nTe contactaremos pronto para confirmar los detalles.');
            
            // Limpiar todo
            serviciosAgregados = [];
            actualizarListaServicios();
            serviciosAgregadosDiv.classList.remove('show');
            updateServiceBoxState();
            ocultarModal();
            formDatos.reset();
        });
    }

    // ====== SIDEBAR ======
    const sidebar = document.getElementById('sidebar');
    const headerEl = document.querySelector('header.site-header') || document.querySelector('header');
    const menuToggle = document.getElementById('menuToggle');

    function adjustSidebarTop() {
        if (!sidebar) return;
        const headerHeight = headerEl ? Math.ceil(headerEl.getBoundingClientRect().height) : 56;
        sidebar.style.top = headerHeight + 'px';
    }

    function createBackdrop() {
        if (document.getElementById('desktopSidebarBackdrop')) return;
        const b = document.createElement('div');
        b.id = 'desktopSidebarBackdrop';
        b.className = 'desktop-sidebar-backdrop';
        b.addEventListener('click', closeSidebar);
        document.body.appendChild(b);
        void b.offsetWidth;
        b.classList.add('show');
    }

    function removeBackdrop() {
        const b = document.getElementById('desktopSidebarBackdrop');
        if (!b) return;
        b.classList.remove('show');
        b.addEventListener('transitionend', function h() { b.remove(); b.removeEventListener('transitionend', h); });
    }

    function openSidebar() {
        if (!sidebar) return;
        sidebar.classList.remove('d-none', 'hide-desktop');
        void sidebar.offsetWidth;
        sidebar.classList.add('show-desktop');
        createBackdrop();
        document.body.classList.add('sidebar-open');
    }

    function closeSidebar() {
        if (!sidebar) return;
        sidebar.classList.remove('active');
        const b = document.getElementById('desktopSidebarBackdrop');
        if (b) {
            b.classList.remove('show');
            setTimeout(() => b.remove(), 300);
        }
    }

    function toggleSidebar() {
        if (!sidebar) return;
        if (sidebar.classList.contains('active')) {
            closeSidebar();
        } else {
            adjustSidebarTop();
            sidebar.classList.add('active');
            createBackdrop();
        }
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleSidebar();
        });
    }

    // Ajustar posición si cambia el tamaño de la ventana
    window.addEventListener('resize', adjustSidebarTop);


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
