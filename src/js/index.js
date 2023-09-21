import "/src/css/style.css";

const refs = {
  taskInputRef: document.querySelector(".js-task-input"),
  taskAddBtnRef: document.querySelector(".js-task-add-btn"),
  taskListRef: document.querySelector(".js-task-list"),
};
let taskId = 0;

refs.taskAddBtnRef.addEventListener("click", handleTaskAddClick);

function handleTaskAddClick() {
  taskId += 1;
  const taskItemMarkup = createTaskItemMarkup(refs.taskInputRef.value, taskId);

  if (!refs.taskInputRef.value) {
    return;
  }

  refs.taskListRef.insertAdjacentHTML("beforeend", taskItemMarkup);
  refs.taskInputRef.value = "";

  if (refs.taskListRef.children.length) {
    const taskRemoveBtns = document.querySelectorAll(".js-remove-btn");

    taskRemoveBtns.forEach((taskRemoveBtn) =>
      taskRemoveBtn.addEventListener("click", handleTaskRemoveClick)
    );
  }
}

function handleTaskRemoveClick(event) {
  const currentTask = event.currentTarget.closest("li");
  const currentId = currentTask.dataset.id;
  console.log(currentId);
}

function createTaskItemMarkup(taskValue, taskId) {
  return `
    <li class="item task-item" data-id="${taskId}">
      <input type="checkbox" name="" id="" />
      ${taskValue}
      <button type="button" class="btn remove-btn js-remove-btn">
        X
      </button>
    </li>`;
}
