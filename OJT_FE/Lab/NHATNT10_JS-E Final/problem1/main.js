let inputEle = document.querySelector(".input");
let submitEle = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");
let containerDiv = document.querySelector(".container");
let arrayOfTasks = [];
let messEmpty = document.querySelector("#messEpmty");

// console.log(inputEle)

if (window.localStorage.getItem("tasks")) {
  arrayOfTasks = JSON.parse(window.localStorage.getItem("tasks"));
}
getTaskFromLocalStorage();

submitEle.onclick = function () {
  if (inputEle.value == "") {
    messEmpty.innerHTML = "Plase add task...";
    messEmpty.style.color = "red";
  } else {
    addTaskToArray(inputEle.value);
    inputEle.value = "";
    messEmpty.style.display = "none";
  }
};

window.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    if (inputEle.value == "") {
        messEmpty.innerHTML = "Plase add task...";
        messEmpty.style.color = "red";
      } else {
        addTaskToArray(inputEle.value);
        inputEle.value = "";
        messEmpty.style.display = "none";
      }
      console.log(event.key);
  }
});

function addTaskToArray(taskText) {
  const task = {
    id: Date.now(),
    title: taskText,
    complated: false,
  };
  arrayOfTasks.push(task);
  // console.log(arrayOfTasks);
  addTaskToPage(arrayOfTasks);

  addTaskToLocalStorage(arrayOfTasks);
}

function addTaskToPage(arrayOfTasks) {
  tasksDiv.innerHTML = "";

  arrayOfTasks.forEach((task) => {
    let div = document.createElement("div");
    div.className = "task";
    if (task.complated) {
      div.className = "task done";
    }
    div.setAttribute("data-id", task.id);
    div.appendChild(document.createTextNode(task.title));
    let span = document.createElement("span");
    span.className = "del";
    span.appendChild(document.createTextNode("X"));
    div.appendChild(span);
    tasksDiv.appendChild(div);
    // console.log(div)
  });
}

function addTaskToLocalStorage(arrayOfTasks) {
  window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}
function getTaskFromLocalStorage() {
  let data = window.localStorage.getItem("tasks");
  if (data) {
    let tasks = JSON.parse(data);
    // console.log(tasks)
    addTaskToPage(tasks);
  }
}

// Click On Task Element
tasksDiv.onclick = (e) => {
  if (e.target.classList.contains("del")) {
    // e.target.parentElement.remove();
    e.target.parentElement.remove();
    deleteTaskFromLocalStorage(e.target.parentElement.getAttribute("data-id"));
  }
  if (e.target.classList.contains("task")) {
    e.target.classList.toggle("done");
    updateStatusInLocalStorage(e.target.getAttribute("data-id"));
  }
};

function deleteTaskFromLocalStorage(taskId) {
  arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
  addTaskToLocalStorage(arrayOfTasks);
}
function updateStatusInLocalStorage(taskId) {
  arrayOfTasks.forEach((task) => {
    if (task.id == taskId)
      task.complated == false
        ? (task.complated = true)
        : (task.complated = false);
  });

  addTaskToLocalStorage(arrayOfTasks);
}
