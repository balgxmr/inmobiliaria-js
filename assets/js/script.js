const propiedadesVenta = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion: "Este apartemento de lujo se encuentra ubicado en una zona exclusiva residencial!",
    ubicacion: "Panamá, Paitilla",
    habitaciones: 4,
    costo: 5000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion: "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "Panamá, Chiriquí",
    habitaciones: 2,
    costo: 1200,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "Panamá, Ciudad del Saber, Edificio 120",
    habitaciones: 10,
    costo: 10000,
    smoke: false,
    pets: true,
  },
];

const propiedadesAlquiler = [
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion: "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo",
    ubicacion: "Panamá, Vía Argentina",
    habitaciones: 2,
    costo: 2000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion: "Este hermoso apartamento ofrece una vista impresionante al mar",
    ubicacion: "Panamá, Gorgona",
    habitaciones: 3,
    costo: 2500,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Condominio moderno en zona residencial",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion: "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "Panamá, Ciudad del Saber, Edificio 338",
    habitaciones: 2,
    costo: 2200,
    smoke: false,
    pets: false,
  },
];

function renderizarCards(container, propiedades) {
  if (!container) return; // Asegura que el contenedor exista. De otro modo no se cargarían las propiedades.

  container.innerHTML = "";

  for (let propiedad of propiedades) {
    container.innerHTML += `
      <div class="col-md-4 mb-4">
          <div class="card">
              <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}" />
              <div class="card-body">
                  <h5 class="card-title">${propiedad.nombre}</h5>
                  <p class="card-text">${propiedad.descripcion}</p>
                  <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                  <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones</p>
                  <p><i class="fas fa-dollar-sign"></i> Precio: <strong>$${propiedad.costo}</strong></p>
                  
                  <!-- Fumar sí o no -->
                  <p class="${propiedad.smoke ? "text-success" : "text-danger"}"> <!-- Uso de ternary operator. -->
                    <i class="fas ${propiedad.smoke ? "fa-smoking" : "fa-smoking-ban"}"></i> 
                    ${propiedad.smoke ? "Permitido fumar" : "No se permite fumar!"}
                  </p>

                  <!-- Mascotas sí o no -->
                  <p class="${propiedad.pets ? "text-success" : "text-danger"}"> <!-- Uso de ternary operator. -->
                    <i class="fas ${propiedad.pets ? "fa-paw" : "fa-ban"}"></i> 
                    ${propiedad.pets ? "Mascotas permitidas" : "No se permiten mascotas!"}
                  </p>
              </div>
          </div>
      </div>
      `;
  }
}

const contenedorVenta = document.querySelector("#venta .row");
const contenedorAlquiler = document.querySelector("#alquiler .row");

renderizarCards(contenedorVenta, propiedadesVenta);
renderizarCards(contenedorAlquiler, propiedadesAlquiler);
