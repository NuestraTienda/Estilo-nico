const categorias = [
  { nombre: "Vestidos", genero: "mujer", imagen: "https://i.ibb.co/t7VWDtq/vestidos-mujeres.png" },
  { nombre: "Remeras", genero: "mujer", imagen: "https://i.ibb.co/KxXNXCXZ/remeras-mujeres.png" },
  { nombre: "Pantalones", genero: "mujer", imagen: "https://i.ibb.co/kgyQxrfV/pantalones-mujeres.png" },
  { nombre: "Conjuntos", genero: "mujer", imagen: "https://i.ibb.co/9CFF0Tb/conjuntos-mujeres.png" },
  { nombre: "Buzos/Camperas", genero: "hombre", imagen: "https://i.ibb.co/d8Ns538/buzo-camperas-de-hombre.png" },
  { nombre: "Remeras", genero: "hombre", imagen: "https://i.ibb.co/Fbdmxrnh/remeras-hombres.png" },
  { nombre: "Pantalones", genero: "hombre", imagen: "https://i.ibb.co/bk3t3bZ/pantalones-homrbes.png" },
  { nombre: "Conjuntos", genero: "hombre", imagen: "https://i.ibb.co/GQpNbDJP/conjunto-hombre.png" }
];

const productos = [
  // === MUJER ===
  {
    nombre: "Vestido midi floral",
    genero: "mujer",
    categoria: "Vestidos",
    precio: 65000,
    talles: ["S", "M", "L"],
    colores: ["verde"],
    imagen: "https://via.placeholder.com/400x500?text=Vestido+Midi",
    descripcion: "Falda midi, tirante fino, tejido elástico",
    disponible: true
  },
  {
    nombre: "Pantalón wide leg",
    genero: "mujer",
    categoria: "Pantalones",
    precio: 42000,
    talles: ["S", "M", "L", "XL"],
    colores: ["negro", "beige"],
    imagen: "https://via.placeholder.com/400x500?text=Pantalon+Wide",
    descripcion: "Cintura alta, pierna ancha, tela sastre",
    disponible: true
  },
  {
    nombre: "Remera oversize",
    genero: "mujer",
    categoria: "Remeras",
    precio: 18000,
    talles: ["S", "M", "L"],
    colores: ["blanco", "negro"],
    imagen: "https://via.placeholder.com/400x500?text=Remera+Oversize",
    descripcion: "Algodón 100%, corte holgado",
    disponible: true
  },
  {
    nombre: "Falda + top bordó",
    genero: "mujer",
    categoria: "Conjuntos",
    precio: 55000,
    talles: ["S", "M", "L"],
    colores: ["bordó"],
    imagen: "https://via.placeholder.com/400x500?text=Conjunto+Top",
    descripcion: "Falda midi + top sin mangas, ideal para salir",
    disponible: true
  },
  // === HOMBRE ===
  {
    nombre: "Buzo capuchón",
    genero: "hombre",
    categoria: "Buzos/Camperas",
    precio: 52000,
    talles: ["S", "M", "L", "XL"],
    colores: ["negro", "gris"],
    imagen: "https://via.placeholder.com/400x500?text=Buzo+Hombre",
    descripcion: "Felpa interior, capucha ajustable, bolsillo canguro",
    disponible: true
  },
  {
    nombre: "Remera baggy",
    genero: "hombre",
    categoria: "Remeras",
    precio: 20000,
    talles: ["S", "M", "L", "XL"],
    colores: ["blanco", "negro"],
    imagen: "https://via.placeholder.com/400x500?text=Remera+Baggy",
    descripcion: "Corte baggy, algodón pesado, cuello reforzado",
    disponible: true
  },
  {
    nombre: "Pantalón cargo",
    genero: "hombre",
    categoria: "Pantalones",
    precio: 48000,
    talles: ["S", "M", "L", "XL"],
    colores: ["verde", "negro"],
    imagen: "https://via.placeholder.com/400x500?text=Pantalon+Cargo",
    descripcion: "Corte recto, 6 bolsillos, tela ripstop",
    disponible: true
  },
  {
    nombre: "Conjunto falda + top",
    genero: "hombre",
    categoria: "Conjuntos",
    precio: 55000,
    talles: ["S", "M", "L"],
    colores: ["negro"],
    imagen: "https://via.placeholder.com/400x500?text=Conjunto+Hombre",
    descripcion: "Dos piezas, corte moderno",
    disponible: true
  }
];   
