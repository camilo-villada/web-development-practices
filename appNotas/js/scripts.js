const form = document.getElementById("formTareas");
const input = document.getElementById("tareaInput");
const lista = document.getElementById("listaTareas");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const texto = input.value.trim();
    if (texto === "") return;

    // li
    const li = document.createElement("li");
    li.classList.add("tarea");

    // label
    const label = document.createElement("label");
    label.classList.add("tarea-info");

    // checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // texto
    const span = document.createElement("span");
    span.textContent = texto;

    // botón eliminar 
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.classList.add("eliminar");
    btnEliminar.type = "button"; // importante para que no envíe el form

    //FUNCION ELIMINAR

    btnEliminar.addEventListener("click", () =>{
        li.remove();
    })

    // estructura
    label.appendChild(checkbox);
    label.appendChild(span);

    li.appendChild(label);
    li.appendChild(btnEliminar);

    lista.appendChild(li);

    input.value = "";
});
