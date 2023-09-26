// Esperar a que el DOM esté completamente cargado
console.log("Script ejecutándose...");

document.addEventListener('load', function () {
    // Crear el campo de texto
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.id = 'search-input';
    searchInput.placeholder = 'Escribe aquí para buscar';
	//insertAdjacentHTML()
    // Insertar el contenedor del buscador antes de la lista
    const ulElement = document.querySelector("ul#example");
    ulElement.parentNode.insertBefore(searchInput, ulElement);
/*
    // Función para filtrar elementos de la lista
    function buscarElementos() {
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById('search-input');
        filter = input.value.toUpperCase();
        ul = document.getElementById('example');
        li = ul.getElementsByTagName('li');

        for (i = 0; i < li.length; i++) {
            a = li[i];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = '';
            } else {
                li[i].style.display = 'none';
            }
        }
    */

    // Agregar un evento de escucha al campo de texto
    searchInput.addEventListener('input', buscarElementos);
});
