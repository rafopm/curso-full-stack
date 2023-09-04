const form = document.getElementById('agregarForm');
const tareasLista = document.getElementById('tareasLista');
const eliminarCompletadas = document.getElementById('eliminarCompletadas');

form.addEventListener('submit', function (event){
    event.preventDefault();

    const nuevaTarea = document.getElementById('tarea').value;

    const nuevaTareaLi = document.createElement('li')
    nuevaTareaLi.innerText= nuevaTarea;

    nuevaTareaLi.addEventListener('click', function(){
        nuevaTareaLi.classList.toggle('completada');
        this.style.textDecoration = 'line-through';
        this.style.color = 'red';
    })

    tareasLista.appendChild(nuevaTareaLi);

    document.getElementById('tarea').value = ' ';

    eliminarCompletadas.addEventListener('click', function(){
        const tareasCompletadas = document.querySelectorAll('.completada')
    
        tareasCompletadas.forEach(function(tareaCompletada){
            tareaCompletada.remove();
        });
    });

})

