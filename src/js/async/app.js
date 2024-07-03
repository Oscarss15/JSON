async function mostrarCursos() {
  fetch("/src/js/async/data.json")
    .then((response) => response.json())
    .then((data) => {
      data.results.forEach((item) => {
        console.log(item.title);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
}

mostrarCursos();

async function mostrarCursosTabla() {
  try {
    const response = await fetch("/src/js/async/data.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    const tablaCursos = document.getElementById("tabla-cursos");

    data.results.forEach((item, index) => {
      const row = document.createElement("tr");

      const titleCell = document.createElement("td");
      titleCell.textContent = item.title;
      row.appendChild(titleCell);

      const priorityCell = document.createElement("td");
      priorityCell.textContent = item.priority;
      row.appendChild(priorityCell);

      const isDoneCell = document.createElement("td");
      isDoneCell.textContent = item.isDone ? "Completado" : "Pendiente";
      row.appendChild(isDoneCell);

      tablaCursos.appendChild(row);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

mostrarCursosTabla();
