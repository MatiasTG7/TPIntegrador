let imagenes = [
  "img/samsung.jpg",
  "img/apple.jpg",
  "img/xiaomi.jpg"
];
let indice = 0;

function mostrarImagen() {
  const img = document.getElementById("carrousel");
  if (img) img.src = imagenes[indice];
}

function siguiente() {
  indice = (indice + 1) % imagenes.length;
  mostrarImagen();
}

function anterior() {
  indice = (indice - 1 + imagenes.length) % imagenes.length;
  mostrarImagen();
}

setInterval(siguiente, 4000);

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formContacto");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const telregex = /^\d{8,15}$/;
    const mensaje = document.getElementById("mensaje").value.trim();
    
    const errores = [];
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    document.getElementById('telefonoError').textContent ="";
    if(!telefono){
      document.getElementById('telefonoError').textContent = "el telefono es obligatorio";
      valid = false;
    }else if(!telregex.test(telefono)){
      document.getElementById('telefonoError') = 'numero no valido. porfavor asegurarse de escribirlo bien';
      valid = false;
    }
    if (nombre === "" || nombre.length > 50)
      errores.push("⚠ El nombre es obligatorio y debe tener menos de 50 caracteres.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errores.push("⚠ Correo electrónico inválido.");
    if (!/^\d{10}$/.test(telefono))
      errores.push("⚠ El teléfono debe tener 10 dígitos.");
    if (mensaje === "")
      errores.push("⚠ El mensaje no puede estar vacío.");

    if (errores.length > 0) {
      errores.forEach(err => {
        const p = document.createElement("p");
        p.style.color = "red";
        p.textContent = err;
        resultado.appendChild(p);
      });
    } else {
      const p = document.createElement("p");
      p.style.color = "green";
      p.textContent = `✅ Datos enviados correctamente:
      Nombre: ${nombre}, Email: ${email}, Teléfono: ${telefono}`;
      resultado.appendChild(p);
      form.reset();
    }
  });
});