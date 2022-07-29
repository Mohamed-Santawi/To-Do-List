const input = document.getElementById("input"),
  btn = document.getElementById("btn"),
  can = document.querySelector(".can-icon"),
  taskContainer = document.getElementById("task-container"),
  form = document.querySelector(".form");

form.addEventListener("submit", (eo) => {
  input.onfocus = function () {
    if (input.value != "") {
      input.value = "";
    }
  };
  eo.preventDefault();
  const div = `
      <div class="task">
          <span class="icon-star icon">
          </span>
          <p class="para-text">${input.value}</p>
          <div class="icon-parent">
            <span class="icon-reload icon">
            </span>
            <span class="icon-trash icon">
            </span>
            <span class="icon-pencil icon">
            </span>
          </div>
      </div>
    `;
  taskContainer.innerHTML += div;
  input.value = "";
  const task = document.querySelectorAll(".task");
  taskContainer.addEventListener("click", (eo) => {
    switch (eo.target.className) {
      case "icon-trash icon":
        eo.target.parentElement.parentElement.remove();
        break;
      case "icon-pencil icon":
        eo.target.parentElement.parentElement.children[1].classList.add("line");
        eo.target.parentElement.children[0].classList.add("reload-opacity");
        eo.target.parentElement.children[0].addEventListener("click", (e) => {
          eo.target.parentElement.parentElement.children[1].classList.remove(
            "line"
          );
          eo.target.parentElement.children[0].classList.remove(
            "reload-opacity"
          );
        });
        break;
      case "icon-star icon":
        eo.target.classList.add("star-orange");
        taskContainer.prepend(eo.target.parentElement);
        break;
      case "icon-star icon star-orange":
        eo.target.classList.remove("star-orange");
        break;
      default:
        break;
    }
  });
});

/*
  // const childs = [];
  // for (let i = 0; i < task.children.length; i++) childs.push(task.children[i]);
*/
