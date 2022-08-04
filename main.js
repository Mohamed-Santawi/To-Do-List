const input = document.getElementById("input"),
  btn = document.getElementById("btn"),
  can = document.querySelector(".can-icon"),
  taskContainer = document.getElementById("task-container"),
  form = document.querySelector(".form");
let count = 1;
form.addEventListener("submit", (eo) => {
  input.onfocus = function () {
    if (input.value != "") {
      input.value = "";
    }
  };
  eo.preventDefault();
  const div = `
      <li class="task">
          <span class="icon count">
          ${count}
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
      </li>
    `;
  count++;
  taskContainer.innerHTML += div;
  input.value = "";
  const task = document.querySelectorAll(".task");
  console.log(task.length);
  let len = count;
  taskContainer.addEventListener("click", (eo) => {
    switch (eo.target.className) {
      case "icon-trash icon":
        eo.target.parentElement.parentElement.remove();
        for (let i = 0; i < task.length; i++) {
          if (
            eo.target.parentElement.parentElement.children[0].innerHTML == i
          ) {
            while (i <= task.length) {
              task[i].children[0].innerHTML -= 1;
              i++;
            }
          }
        }
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

/*
        let li = document.getElementsByClassName("icon count")[0];

const input = document.getElementById("input"),
  btn = document.getElementById("btn"),
  can = document.querySelector(".can-icon"),
  taskContainer = document.getElementById("task-container"),
  form = document.querySelector(".form");
let count = 1;
form.addEventListener("submit", (eo) => {
  input.onfocus = function () {
    if (input.value != "") {
      input.value = "";
    }
  };
  eo.preventDefault();
  const div = `
      <div class="task">
          <span class="icon count">
          ${count}
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
  count++;
  taskContainer.innerHTML += div;
  input.value = "";
  const task = document.querySelectorAll(".task");
  taskContainer.addEventListener("click", (eo) => {
    switch (eo.target.className) {
      case "icon-trash icon":
        eo.target.parentElement.parentElement.remove();
        task.forEach((item) => {
          item.children[0].innerText -= 1;
        });
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

     // console.log(eo.parentElement.parentElement.children[0].innerHTML);
        // console.log(li.innerHTML);
        // console.log(li.nextSibling);
        // task.forEach((item, index) => {
        //   if (index === 0) return;
        //   // else if (index == task.length - 1) return;
        //   else item.children[0].innerText -= 1;
        // });

     // if (eo.target.parentElement.parentElement.children[0].innerHTML == 1) {
        //   let i = 1;
        //   while (i < task.length) {
        //     task[i].children[0].innerHTML -= 1;
        //     i++;
        //   }
        // } else if (
        //   eo.target.parentElement.parentElement.children[0].innerHTML == 2
        // ) {
        //   let i = 2;
        //   while (i < task.length) {
        //     task[i].children[0].innerHTML -= 1;
        //     i++;
        //   }
        // } else if (
        //   eo.target.parentElement.parentElement.children[0].innerHTML == 3
        // ) {
        //   let i = 3;
        //   while (i < task.length) {
        //     task[i].children[0].innerHTML -= 1;
        //     i++;
        //   }
        // } else if (
        //   eo.target.parentElement.parentElement.children[0].innerHTML == 4
        // ) {
        //   let i = 4;
        //   while (i < task.length) {
        //     task[i].children[0].innerHTML -= 1;
        //     i++;
        //   }
        // } else if (
        //   eo.target.parentElement.parentElement.children[0].innerHTML == 5
        // ) {
        //   let i = 5;
        //   while (i < task.length) {
        //     task[i].children[0].innerHTML -= 1;
        //     i++;
        //   }
        // } else if (
        //   eo.target.parentElement.parentElement.children[0].innerHTML == 6
        // ) {
        //   let i = 6;
        //   while (i < task.length) {
        //     task[i].children[0].innerHTML -= 1;
        //     i++;
        //   }
        // } else if (
        //   eo.target.parentElement.parentElement.children[0].innerHTML == 7
        // ) {
        //   let i = 7;
        //   while (i < task.length) {
        //     task[i].children[0].innerHTML -= 1;
        //     i++;
        //   }
        // } else if (
        //   eo.target.parentElement.parentElement.children[0].innerHTML == 8
        // ) {
        //   let i = 8;
        //   while (i < task.length) {
        //     task[i].children[0].innerHTML -= 1;
        //     i++;
        //   }
        // }

            let last = document.querySelector(".task:last-child");
        let i = 1;
        task.forEach((item) => {
          if (item == last) {
            last.addEventListener("click", (e) => {
              eo.target.parentElement.parentElement.remove();
            });
          }
          item[i].children[0].innerHTML -= 1;
          i++;
        });

*/
