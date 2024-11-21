document.getElementById('academicForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());
    
    console.log('Datos del formulario:', data);
    alert('¡Registro exitoso! Gracias por actualizar tu información académica.');
    this.reset();
});
