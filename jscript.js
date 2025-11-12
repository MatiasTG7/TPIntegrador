ocument.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formContacto");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const telregex = /^\d{8,15}$/;
    const mensaje = document.getElementById("mensaje").value.trim();
    
    let valid = true;
    const errores = [];
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    document.getElementById('telefonoError').textContent ="";
    
    if(!telefono){
      document.getElementById('telefonoError').textContent = "el telefono es obligatorio";
      valid = false;
    }else if(!telregex.test(telefono)){
      document.getElementById('telefonoError').textContent = 'numero no valido. porfavor asegurarse de escribirlo bien';
      valid = false;
    }
    
    if (nombre === "" || nombre.length > 50)
      errores.push("⚠ El nombre es obligatorio y debe tener menos de 50 caracteres.");
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errores.push("⚠ Correo electrónico inválido.");
      
    if (mensaje === "")
      errores.push("⚠ El mensaje no puede estar vacío.");

    if (errores.length > 0 || !valid) {
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