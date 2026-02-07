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
    const modalOverlay = document.getElementById('modalOverlay');
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

    // ====== PROGRESSIVE DISCLOSURE - Actualizar estado del contenedor ======
    function updateServiceBoxState() {
        const serviceBox = document.getElementById('cotizaForm');
        if (!serviceBox) return;

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

    // Seleccionar categoría
    document.querySelectorAll('#categoriaMenu .service-dropdown-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const cat = item.getAttribute('data-service');
            categoriaSeleccionada = cat;
            tamanioSeleccionado = '';
            servicioSeleccionado = null;

            // Actualizar trigger
            const mainDiv = categoriaTrigger.querySelector('.service-dropdown-main');
            mainDiv.textContent = cat;
            categoriaTrigger.classList.remove('placeholder');

            // Marcar seleccionado
            document.querySelectorAll('#categoriaMenu .service-dropdown-item').forEach(it => it.classList.remove('selected'));
            item.classList.add('selected');

            cerrarDropdown(categoriaMenu, categoriaTrigger, categoriaBackdrop);
            updateServiceBoxState();
            actualizarTamanios();
        });
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

    // ====== ACTUALIZAR TAMAÑOS SEGÚN CATEGORÍA ======
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
            const a = document.createElement('a');
            a.href = '#';
            a.className = 'service-dropdown-item';
            a.setAttribute('data-tamanio', tamanio);
            a.innerHTML = '<div class="service-dropdown-item-text"><div class="service-dropdown-item-main">' + tamanio + '</div></div>';
            a.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                tamanioSeleccionado = tamanio;
                servicioSeleccionado = null;

                // Actualizar trigger
                const triggerMain = tamanioTrigger.querySelector('.service-dropdown-main');
                triggerMain.textContent = tamanio;
                tamanioTrigger.classList.remove('placeholder');

                // Marcar seleccionado
                document.querySelectorAll('#tamanioMenu .service-dropdown-item').forEach(it => it.classList.remove('selected'));
                a.classList.add('selected');

                cerrarDropdown(tamanioMenu, tamanioTrigger, tamanioBackdrop);
                updateServiceBoxState();
                actualizarServicios();
                actualizarPrecio();
            });
            li.appendChild(a);
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
            serviciosAgregadosDiv.style.display = 'block';

            // Reset COMPLETO del formulario
            categoriaSeleccionada = '';
            tamanioSeleccionado = '';
            servicioSeleccionado = null;
            cantidadActual = 1;
            cantidadInput.value = '1';

            // Limpiar triggers
            categoriaTrigger.querySelector('.service-dropdown-main').textContent = 'Selecciona una categoría';
            categoriaTrigger.classList.add('placeholder');
            tamanioTrigger.querySelector('.service-dropdown-main').textContent = 'Selecciona un tipo';
            tamanioTrigger.classList.add('placeholder');

            // Limpiar selecciones visuales
            document.querySelectorAll('#categoriaMenu .service-dropdown-item').forEach(it => it.classList.remove('selected'));
            document.querySelectorAll('#tamanioMenu .service-dropdown-item').forEach(it => it.classList.remove('selected'));
            document.querySelectorAll('.service-card').forEach(c => c.classList.remove('selected'));

            // Limpiar menús
            tamanioMenu.innerHTML = '';
            serviciosCardsContainer.innerHTML = '';
            
            actualizarPrecio();
            updateServiceBoxState();
        });
    }



    // ====== ACTUALIZAR LISTA ======
    function actualizarListaServicios() {
        listaServicios.innerHTML = '';
        serviciosAgregados.forEach((s, idx) => {
            const item = document.createElement('div');
            item.className = 'mb-2 p-2 border rounded d-flex justify-content-between align-items-center';
            const left = document.createElement('div');
            left.innerHTML = '<div><strong>' + s.displayName + ' x ' + s.cantidad + '</strong></div><div class="small text-muted">' + formatPrecio(s.precioUnit) + ' c/u • ' + formatPrecio(s.subtotal) + '</div>';
            const right = document.createElement('div');
            const btnDel = document.createElement('button');
            btnDel.className = 'btn btn-sm btn-danger';
            btnDel.type = 'button';
            btnDel.textContent = '✕';
            btnDel.addEventListener('click', () => {
                serviciosAgregados.splice(idx, 1);
                actualizarListaServicios();
                if (serviciosAgregados.length === 0) serviciosAgregadosDiv.style.display = 'none';
            });
            right.appendChild(btnDel);
            item.appendChild(left);
            item.appendChild(right);
            listaServicios.appendChild(item);
        });
        const total = serviciosAgregados.reduce((a, b) => a + (b.subtotal || 0), 0);
        if (btnCotizar) btnCotizar.textContent = 'Reservar ahora ' + (total ? formatPrecio(total) : '');
        if (typeof reservaFixed !== 'undefined' && reservaFixed) {
            if (serviciosAgregados.length > 0) {
                reservaFixed.classList.remove('d-none');
            } else {
                reservaFixed.classList.add('d-none');
            }
        }
    }

    // ====== MODAL Y RESERVA ======
    function mostrarModal() {
        modalDatos.classList.add('show');
        modalDatos.style.display = 'block';
        modalOverlay.classList.add('show');
        modalOverlay.style.display = 'block';
        document.body.classList.add('modal-open');
    }

    function ocultarModal() {
        modalDatos.classList.remove('show');
        modalDatos.style.display = 'none';
        modalOverlay.classList.remove('show');
        modalOverlay.style.display = 'none';
        document.body.classList.remove('modal-open');
    }

    if (btnCerrarModal) btnCerrarModal.addEventListener('click', ocultarModal);
    if (modalOverlay) modalOverlay.addEventListener('click', ocultarModal);

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
                servicios: serviciosAgregados,
                total: serviciosAgregados.reduce((a, b) => a + b.subtotal, 0)
            };
            console.log('Reserva enviada:', datosFinales);
            alert('¡Reserva confirmada!\n' + JSON.stringify(datosFinales, null, 2));
            serviciosAgregados = [];
            actualizarListaServicios();
            serviciosAgregadosDiv.style.display = 'none';
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
        sidebar.classList.remove('show-desktop');
        sidebar.classList.add('hide-desktop');
        removeBackdrop();
        document.body.classList.remove('sidebar-open');
        const onEnd = function (e) {
            sidebar.classList.add('d-none');
            sidebar.removeEventListener('transitionend', onEnd);
        };
        sidebar.addEventListener('transitionend', onEnd);
    }

    if (menuToggle && sidebar) {
        menuToggle.removeAttribute('data-bs-toggle');
        menuToggle.removeAttribute('data-bs-target');

        menuToggle.addEventListener('click', function (e) {
            if (window.innerWidth >= 768) {
                e.preventDefault();
                const isHidden = sidebar.classList.contains('d-none') || sidebar.classList.contains('hide-desktop');
                if (isHidden) openSidebar(); else closeSidebar();
                return;
            }
            if (typeof bootstrap !== 'undefined') {
                const offcanvasEl = document.getElementById('sidebarOffcanvas');
                if (offcanvasEl) {
                    const off = bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl);
                    off.toggle();
                }
            }
        });

        window.addEventListener('resize', function () { adjustSidebarTop(); });
        adjustSidebarTop();
    }

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
                if (entry.isIntersecting && serviciosAgregados.length > 0) {
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
