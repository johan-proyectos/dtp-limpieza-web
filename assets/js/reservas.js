// Rellena el formulario con datos aleatorios para maquetación
document.addEventListener('DOMContentLoaded', function () {

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

	// Asegurar que el select de tipos y su label estén ocultos hasta seleccionar un servicio
	if (tipoSeleccionado && labelTipo) {
		tipoSeleccionado.style.display = 'none';
		labelTipo.style.display = 'none';
		tipoSeleccionado.disabled = true;
	}

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
		// Si no hay servicio válido, ocultar label y select
		if (!datos) {
			labelTipo.style.display = 'none';
			tipoSeleccionado.style.display = 'none';
			tipoSeleccionado.innerHTML = '<option selected disabled>Seleccionar</option>';
			tipoSeleccionado.disabled = true;
			return;
		}

		// Habilitar y mostrar select y label
		labelTipo.style.display = 'block';
		labelTipo.textContent = datos.label;
		tipoSeleccionado.style.display = 'block';
		tipoSeleccionado.disabled = false;

		// Limpiar y agregar nuevas opciones
		tipoSeleccionado.innerHTML = '<option selected disabled>Seleccionar</option>';
		datos.tipos.forEach(function (tipo) {
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
		serviciosAgregados.forEach(function (serv, idx) {
			const div = document.createElement('div');
			div.className = 'mb-2 p-2 border rounded';
			div.innerHTML = '<small><strong>' + serv.tipo + '</strong> - ' + serv.servicio + '</small> <button type="button" class="btn btn-sm btn-danger float-end" onclick="eliminarServicio(' + idx + ')">✕</button>';
			listaServicios.appendChild(div);
		});
	}

	// Agregar servicio
	btnAgregar.addEventListener('click', function () {
		if (servicio.value === 'Seleccionar' || tipoSeleccionado.value === 'Seleccionar') {
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
	formDatos.addEventListener('submit', function (e) {
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
	window.eliminarServicio = function (idx) {
		serviciosAgregados.splice(idx, 1);
		actualizarListaServicios();
		if (serviciosAgregados.length === 0) {
			serviciosAgregadosDiv.style.display = 'none';
		}
	};

	// Botón Cotizar - muestra finalización o envía datos
	btnCotizar.addEventListener('click', function () {
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
	const headerEl = document.querySelector('header.site-header') || document.querySelector('header');
	// Asegurarse de obtener el botón del menú (puede ser null en casos raros)
	const menuToggle = document.getElementById('menuToggle');

	function updateLayoutFromSidebar() {
		// No aplicar margin-left para que el sidebar no mueva el contenido
		// El sidebar ya está con position: fixed, así que puede estar por encima
		if (!main || !sidebar) return;
	}

	// Ajusta el `top` del sidebar para que no quede oculto bajo el header
	function adjustSidebarTop() {
		if (!sidebar) return;
		const headerHeight = headerEl ? Math.ceil(headerEl.getBoundingClientRect().height) : 56;
		sidebar.style.top = headerHeight + 'px';
	}

	if (menuToggle && sidebar) {
		// initialize: keep sidebar hidden by default on desktop
		// ensure bootstrap offcanvas isn't triggered by this button on desktop
		function syncMenuToggleAttributes() {
			// Always remove bootstrap data attributes to avoid bootstrap auto-handling
			menuToggle.removeAttribute('data-bs-toggle');
			menuToggle.removeAttribute('data-bs-target');
			if (window.innerWidth >= 768) {
				// On desktop, keep the fixed sidebar hidden by default; show when user opens it
				// ensure sidebar inline top is correct
				adjustSidebarTop();
			}
		}

		syncMenuToggleAttributes();

		// Utilities to manage a desktop backdrop so the page darkens when sidebar is open
		function createBackdrop() {
			if (document.getElementById('desktopSidebarBackdrop')) return;

			const b = document.createElement('div');
			b.id = 'desktopSidebarBackdrop';
			b.className = 'desktop-sidebar-backdrop';

			b.addEventListener('click', closeSidebar);

			document.body.appendChild(b);

			// forzar reflow para animación
			void b.offsetWidth;
			b.classList.add('show');
		}


		function removeBackdrop() {
			const b = document.getElementById('desktopSidebarBackdrop');
			if (!b) return;

			b.classList.remove('show');
			b.addEventListener(
				'transitionend',
				function h() {
					b.remove();
					b.removeEventListener('transitionend', h);
				}
			);
		}


		function closeSidebar() {
			if (!sidebar) return;
			// animate closing
			sidebar.classList.remove('show-desktop');
			sidebar.classList.add('hide-desktop');
			// remove backdrop with fade
			removeBackdrop();
			// reenable page scroll
			document.body.classList.remove('sidebar-open');
			// after transition end, hide completely
			const onEnd = function (e) {
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
			// prevent page scroll while sidebar is open
			document.body.classList.add('sidebar-open');
		}

		// Prevent rapid double-open race on mobile offcanvas
		let offcanvasAnimating = false;

		menuToggle.addEventListener('click', function (e) {
			// Desktop: toggle fixed sidebar
			if (window.innerWidth >= 768) {
				e.preventDefault();
				const isHidden = sidebar.classList.contains('d-none') || sidebar.classList.contains('hide-desktop');
				if (isHidden) {
					openSidebar();
				} else {
					closeSidebar();
				}
				return;
			}

			// Mobile: handle offcanvas via JS with an animation guard
			if (offcanvasAnimating) return;
			offcanvasAnimating = true;
			try {
				if (typeof bootstrap !== 'undefined') {
					const offcanvasEl = document.getElementById('sidebarOffcanvas');
					if (offcanvasEl) {
						const offcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl);
						offcanvas.toggle();
						// reset flag after shown/hidden
						offcanvasEl.addEventListener('shown.bs.offcanvas', function onceShown() { offcanvasAnimating = false; offcanvasEl.removeEventListener('shown.bs.offcanvas', onceShown); }, { once: true });
						offcanvasEl.addEventListener('hidden.bs.offcanvas', function onceHidden() { offcanvasAnimating = false; offcanvasEl.removeEventListener('hidden.bs.offcanvas', onceHidden); }, { once: true });
					} else {
						offcanvasAnimating = false;
					}
				} else {
					offcanvasAnimating = false;
				}
			} catch (err) {
				offcanvasAnimating = false;
			}
		});

		// Keep layout and attributes in sync on resize
		window.addEventListener('resize', function () {
			syncMenuToggleAttributes();
			updateLayoutFromSidebar();
			adjustSidebarTop();
		});

		// ensure correct initial layout
		updateLayoutFromSidebar();
		adjustSidebarTop();

		// Close sidebar when clicking outside (desktop)
		document.addEventListener('click', function (ev) {
			if (window.innerWidth >= 768 && sidebar && !sidebar.classList.contains('d-none')) {
				const target = ev.target;
				if (!sidebar.contains(target) && !menuToggle.contains(target)) {
					closeSidebar();
				}
			}
		});

		// Close on Escape key (desktop)
		window.addEventListener('keydown', function (ev) {
			if (ev.key === 'Escape' && window.innerWidth >= 768 && sidebar && !sidebar.classList.contains('d-none')) {
				closeSidebar();
			}
		});

		// Manejo manual de cierre para enlaces que usan la clase .nav-scroll
		// Solo en mobile — dejar que Bootstrap maneje la limpieza de backdrops
		document.querySelectorAll('.nav-scroll').forEach(link => {
			link.addEventListener('click', function () {
				// Desktop: cerrar sidebar
				if (window.innerWidth >= 768) {
					closeSidebar();
					return;
				}

				// Mobile: cerrar offcanvas
				if (typeof bootstrap !== 'undefined') {
					const offcanvasEl = document.getElementById('sidebarOffcanvas');
					if (offcanvasEl) {
						const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl) || new bootstrap.Offcanvas(offcanvasEl);
						offcanvas.hide();
					}
				}
			});
		});
	}
});