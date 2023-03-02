const formularioUI = document.querySelector('#formulario');
const botonUI = document.querySelector('#boton');
const empresaUI = document.getElementById('empresas');
let arrayEmpresas = [];

const CrearEmpresa = (id, nombre, nit, fecha, direccion) => {
	let empresa = {
		id: id,
		nombre: nombre,
		nit: nit,
		fecha: fecha,
		direccion: direccion,
	};

	arrayEmpresas.push(empresa);

	return empresa;
};

const GuardarDB = () => {
	localStorage.setItem('empresas', JSON.stringify(arrayEmpresas));

	LeerDB();
};

const LeerDB = () => {
	empresaUI.innerHTML = '';
	arrayEmpresas = JSON.parse(localStorage.getItem('empresas'));
	if ((arrayEmpresas === null)) {
		arrayEmpresas = [];
	} else {
		arrayEmpresas.forEach(element => {
			empresaUI.innerHTML += `
				<div class="card m-2" style="width: 18rem">
				<div class="card-body">
					<h6 class="card-subtitle mb-2 text-muted">${element.id}</h6>
					<h5 class="card-title">${element.nombre}</h5>
					<h6 class="card-subtitle mb-2 text-muted">${element.nit}</h6>
					<h6 class="card-subtitle mb-2 text-muted">${element.fecha}</h6>
					<h6 class="card-subtitle mb-2 text-muted">${element.direccion}</h6>
					<span class="float-end">
						<i class="bi bi-pencil-square"></i>
						<i class="bi bi-trash2"></i>
					</span>
				</div>
			</div>`;
		});
	}
};

formularioUI.addEventListener("submit", (e) => {
	e.preventDefault();

	let id = document.querySelector('#id').value;
	let nombre = document.querySelector('#nombre').value;
	let nit = document.querySelector('#nit').value;
	let fecha = document.querySelector('#fecha').value;
	let direccion = document.querySelector('#direccion').value;

	CrearEmpresa(id, nombre, nit, fecha, direccion);
	GuardarDB();

	formularioUI.reset();
});

document.addEventListener('DOMContentLoaded', LeerDB);
