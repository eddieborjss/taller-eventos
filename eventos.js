document.addEventListener("DOMContentLoaded", function() {
    const div = document.getElementById("div");
    div.addEventListener('click', function() {
        event.stopPropagation()
        alert('Hola! Soy el div');
    });
});