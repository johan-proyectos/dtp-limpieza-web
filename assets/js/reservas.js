// Rellena el formulario con datos aleatorios para maquetación
document.addEventListener('DOMContentLoaded', function(){

	// Datos dinámicos por tipo de servicio
	const serviciosData = {
		'Sillones': {
			label: 'Selecciona el tipo de sillón:',
			tipos: ['Tipo L', 'Individual', 'Sillas', 'Recto']
		},
		'Colchones': {
			label: 'Selecciona el tipo de colchón:',
			tipos: ['2 Plazas', 'King', '1 Plaza', 'Plaza y Media', 'Queen', 'Respaldo 1 Plaza', 'Respaldo 2 Plazas', 'Respaldo King', 'Cuna']
		},
		'Alfombras': {
			label: 'Selecciona el tipo de alfombra:',
			tipos: ['Muro a Muro', 'Decorativo']
		},
		'Autos': {
			label: 'Selecciona el tipo de auto:',
			tipos: ['Sedán', 'SUV', 'Pickup', 'Van', 'Minivan']
		}
	};

	// Array para almacenar servicios agregados
	let serviciosAgregados = [];

	// Selecciones del primer formulario
	const servicio = document.getElementById('servicio');
	const tipoSeleccionado = document.getElementById('tipoSeleccionado');
	const labelTipo = document.getElementById('labelTipo');
	const btnAgregar = document.getElementById('btnAgregar');

	// Elementos del modal y datos
    const direccionInput = document.getElementById('direccionInput');
	const modalDatos = document.getElementById('modalDatos');
	const modalOverlay = document.getElementById('modalOverlay');
	const btnCerrarModal = document.getElementById('btnCerrarModal');
	const formDatos = document.getElementById('formDatos');
	const nombreInput = document.getElementById('nombreInput');
	const telefonoInput = document.getElementById('telefonoInput');
	/* =====================================================
   AUTOCOMPLETADO DE DIRECCIÓN (NOMINATIM - REAL)
===================================================== */

const placesResults = document.getElementById('placesResults');
let controller;

if (direccionInput && placesResults) {

    direccionInput.setAttribute('autocomplete', 'off');

    direccionInput.addEventListener('input', async function () {
        const query = direccionInput.value.trim();

        if (query.length < 4) {
            placesResults.style.display = 'none';
            return;
        }

        if (controller) controller.abort();
        controller = new AbortController();

        try {
            const res = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&countrycodes=cl&limit=6&q=${encodeURIComponent(query)}`,
                {
                    signal: controller.signal,
                    headers: { 'Accept-Language': 'es' }
                }
            );

            const data = await res.json();
            placesResults.innerHTML = '';

            if (!data.length) {
                placesResults.style.display = 'none';
                return;
            }

            data.forEach(place => {
                const item = document.createElement('button');
                item.type = 'button';
                item.className = 'list-group-item list-group-item-action text-start';
                item.innerHTML = `
                    <i class="bi bi-geo-alt-fill me-2 text-primary"></i>
                    ${place.display_name}
                `;

                item.addEventListener('click', function () {
                    direccionInput.value = place.display_name;
                    placesResults.style.display = 'none';

                    // Opcional: guardar coordenadas
                    direccionInput.dataset.lat = place.lat;
                    direccionInput.dataset.lon = place.lon;
                });

                placesResults.appendChild(item);
            });

            placesResults.style.display = 'block';

        } catch (err) {
            if (err.name !== 'AbortError') {
                console.error('Error buscando dirección', err);
            }
        }
    });

    document.addEventListener('click', function (e) {
        if (!direccionInput.contains(e.target) && !placesResults.contains(e.target)) {
            placesResults.style.display = 'none';
        }
    });
}

	// Elementos de servicios agregados
	const serviciosAgregadosDiv = document.getElementById('serviciosAgregados');
	const listaServicios = document.getElementById('listaServicios');
	const btnCotizar = document.getElementById('btnCotizar');

	// Función para actualizar dinámicamente el label y opciones del tipo
	function actualizarTipos() {
		const servicioSeleccionado = servicio.value;
		const datos = serviciosData[servicioSeleccionado];
		if (!datos) return;

		// Actualizar label
		labelTipo.textContent = datos.label;

		// Limpiar y agregar nuevas opciones
		tipoSeleccionado.innerHTML = '<option selected disabled>Seleccionar</option>';
		datos.tipos.forEach(function(tipo){
			const option = document.createElement('option');
			option.value = tipo;
			option.textContent = tipo;
			tipoSeleccionado.appendChild(option);
		});
	}

	// Mostrar modal de datos
	function mostrarModal() {
		modalDatos.classList.add('show');
		modalDatos.style.display = 'block';
		modalOverlay.classList.add('show');
		modalOverlay.style.display = 'block';
		document.body.classList.add('modal-open');
	}

	// Ocultar modal de datos
	function ocultarModal() {
		modalDatos.classList.remove('show');
		modalDatos.style.display = 'none';
		modalOverlay.classList.remove('show');
		modalOverlay.style.display = 'none';
		document.body.classList.remove('modal-open');
	}

	// Actualizar lista de servicios agregados
	function actualizarListaServicios() {
		listaServicios.innerHTML = '';
		serviciosAgregados.forEach(function(serv, idx){
			const div = document.createElement('div');
			div.className = 'mb-2 p-2 border rounded';
			div.innerHTML = '<small><strong>' + serv.tipo + '</strong> - ' + serv.servicio + '</small> <button type="button" class="btn btn-sm btn-danger float-end" onclick="eliminarServicio(' + idx + ')">✕</button>';
			listaServicios.appendChild(div);
		});
	}

	// Agregar servicio
	btnAgregar.addEventListener('click', function(){
		if (servicio.value === 'Seleccionar' || tipoSeleccionado.value === 'Selecciona') {
			alert('Por favor selecciona un servicio y un tipo');
			return;
		}
		// Actualizar resumen del modal
		document.getElementById('resumenServicio').textContent = servicio.value;
		document.getElementById('resumenTipo').textContent = tipoSeleccionado.value;
		document.getElementById('resumenTiempo').textContent = '30m';
		document.getElementById('resumenPrecio').textContent = '$12.500';

		// Limpiar campos del formulario
		document.getElementById('nombreInput').value = '';
		document.getElementById('telefonoInput').value = '';
		document.getElementById('direccionInput').value = '';
		document.getElementById('casaDeptoInput').value = '';
		document.getElementById('fechaInput').value = '';
		document.getElementById('horaInput').value = '';

		// Mostrar modal para datos personales
		mostrarModal();
	});

	// Cerrar modal
	btnCerrarModal.addEventListener('click', ocultarModal);
	modalOverlay.addEventListener('click', ocultarModal);

	// Botón cancelar del modal
	const btnCancelarModal = document.getElementById('btnCancelarModal');
	if (btnCancelarModal) {
		btnCancelarModal.addEventListener('click', ocultarModal);
	}

	// Confirmar datos y agregar servicio
	formDatos.addEventListener('submit', function(e){
		e.preventDefault();
		serviciosAgregados.push({
			servicio: servicio.value,
			tipo: tipoSeleccionado.value
		});
		actualizarListaServicios();
		serviciosAgregadosDiv.style.display = 'block';
		ocultarModal();
		formDatos.reset();
		// Resetear selección del servicio
		servicio.selectedIndex = 0;
		actualizarTipos();
	});

	// Función global para eliminar servicio
	window.eliminarServicio = function(idx){
		serviciosAgregados.splice(idx, 1);
		actualizarListaServicios();
		if (serviciosAgregados.length === 0) {
			serviciosAgregadosDiv.style.display = 'none';
		}
	};

	// Botón Cotizar - muestra finalización o envía datos
	btnCotizar.addEventListener('click', function(){
		if (serviciosAgregados.length === 0) {
			alert('Por favor agrega al menos un servicio');
			return;
		}
		const datosFinales = {
			nombre: nombreInput.value,
			telefono: telefonoInput.value,
			direccion: direccionInput.value,
			servicios: serviciosAgregados
		};
		console.log('Cotización final:', datosFinales);
		alert('¡Cotización registrada!\n' + JSON.stringify(datosFinales, null, 2));
	});

	// Escuchar cambios en el servicio
	servicio.addEventListener('change', actualizarTipos);

	const sidebar = document.getElementById('sidebar');
	const main = document.querySelector('main');

	function updateLayoutFromSidebar() {
		if (!main || !sidebar) return;
		if (!sidebar.classList.contains('d-none')) {
			main.classList.add('main-with-sidebar');
		} else {
			main.classList.remove('main-with-sidebar');
		}
	}

	if (menuToggle && sidebar) {
		// initialize: keep sidebar hidden by default on desktop
		// ensure bootstrap offcanvas isn't triggered by this button on desktop
		function syncMenuToggleAttributes() {
			if (window.innerWidth >= 768) {
				menuToggle.removeAttribute('data-bs-toggle');
				menuToggle.removeAttribute('data-bs-target');
				sidebar.classList.add('d-none');
				main.classList.remove('main-with-sidebar');
			} else {
				menuToggle.setAttribute('data-bs-toggle', 'offcanvas');
				menuToggle.setAttribute('data-bs-target', '#sidebarOffcanvas');
			}
		}

		syncMenuToggleAttributes();

		// Utilities to manage a desktop backdrop so the page darkens when sidebar is open
		function createBackdrop() {
			if (document.getElementById('desktopSidebarBackdrop')) return;
			const b = document.createElement('div');
			b.id = 'desktopSidebarBackdrop';
			b.className = 'offcanvas-backdrop desktop';
			b.addEventListener('click', function(){ closeSidebar(); });
			document.body.appendChild(b);
			// force reflow then show
			void b.offsetWidth;
			b.classList.add('show');
			document.body.classList.add('offcanvas-open');
		}

		function removeBackdrop() {
			const b = document.getElementById('desktopSidebarBackdrop');
			if (!b) return;
			b.classList.remove('show');
			// wait for opacity transition then remove
			b.addEventListener('transitionend', function h(){ b.remove(); b.removeEventListener('transitionend', h); });
			document.body.classList.remove('offcanvas-open');
		}

		function closeSidebar() {
			if (!sidebar) return;
			// animate closing
			sidebar.classList.remove('show-desktop');
			sidebar.classList.add('hide-desktop');
			// remove backdrop with fade
			removeBackdrop();
			// after transition end, hide completely
			const onEnd = function(e){
				if (e.propertyName === 'transform') {
					sidebar.classList.add('d-none');
					sidebar.classList.remove('hide-desktop');
					sidebar.removeEventListener('transitionend', onEnd);
					updateLayoutFromSidebar();
				}
			};
			sidebar.addEventListener('transitionend', onEnd);
		}

		function openSidebar() {
			if (!sidebar) return;
			sidebar.classList.remove('d-none', 'hide-desktop');
			// force reflow then add show class to animate in
			void sidebar.offsetWidth;
			sidebar.classList.add('show-desktop');
			updateLayoutFromSidebar();
			createBackdrop();
		}

		menuToggle.addEventListener('click', function(e){
			// Let Bootstrap handle small screens (offcanvas). For desktop, toggle fixed sidebar.
			if (window.innerWidth >= 768) {
				e.preventDefault();
				const isHidden = sidebar.classList.contains('d-none') || sidebar.classList.contains('hide-desktop');
				if (isHidden) {
					openSidebar();
				} else {
					closeSidebar();
				}
			}
		});

		// Keep layout and attributes in sync on resize
		window.addEventListener('resize', function(){
			syncMenuToggleAttributes();
			updateLayoutFromSidebar();
		});

		// ensure correct initial layout
		updateLayoutFromSidebar();

		// Close sidebar when clicking outside (desktop)
		document.addEventListener('click', function(ev){
			if (window.innerWidth >= 768 && sidebar && !sidebar.classList.contains('d-none')) {
				const target = ev.target;
				if (!sidebar.contains(target) && !menuToggle.contains(target)) {
					closeSidebar();
				}
			}
		});

		// Close on Escape key (desktop)
		window.addEventListener('keydown', function(ev){
			if (ev.key === 'Escape' && window.innerWidth >= 768 && sidebar && !sidebar.classList.contains('d-none')) {
				closeSidebar();
			}
		});

		// Cerrar sidebar/offcanvas al hacer clic en un link de navegación
		document.querySelectorAll('#sidebar .nav-link').forEach(link => {
			link.addEventListener('click', function(e) {
				// Desktop: cerrar sidebar
				if (window.innerWidth >= 768 && sidebar && !sidebar.classList.contains('d-none')) {
					closeSidebar();
				}
				// Mobile: asegurar que se limpie el backdrop y la clase offcanvas-open
				const backdrop = document.querySelector('.offcanvas-backdrop.show');
				if (backdrop) {
					backdrop.remove();
				}
				document.body.classList.remove('offcanvas-open');
			});
		});
	}
});
