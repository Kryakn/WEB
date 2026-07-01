
let todos = [];

function addTodo() {
  const text = $("#todoInput").val().trim();

  if (text === "") return;

  todos.push({
    text: text,
    done: false
  });

  $("#todoInput").val("");
  renderTodos();
}

function renderTodos() {
  $("#todoList").empty();

  if (todos.length === 0) {
    $("#todoList").html('<div class="empty-msg">No tasks yet.</div>');
    $("#counter").text("");
    return;
  }

  todos.forEach(function (todo, index) {
    const li = $("<li>");

    li.html(`
      <span class="${todo.done ? "done" : ""}" data-index="${index}">
        ${todo.text}
      </span>
      <button class="edit-btn" data-index="${index}">Edit</button>
      <button class="delete-btn" data-index="${index}">Delete</button>
    `);

    $("#todoList").append(li);
  });

  const completed = todos.filter(function (todo) {
    return todo.done;
  }).length;

  $("#counter").text(`${completed} of ${todos.length} completed`);
}

function toggleTodo(index) {
  todos[index].done = !todos[index].done;
  renderTodos();
}

function editTodo(index) {
  const newText = prompt("Edit your task:", todos[index].text);

  if (newText === null) return;

  const cleanText = newText.trim();

  if (cleanText === "") return;

  todos[index].text = cleanText;
  renderTodos();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

// jQuery event listeners — using $(document).on() because
// .edit-btn and .delete-btn are created dynamically on each render,
// so we attach to the parent #todoList which always exists in the DOM
$("#addBtn").on("click", addTodo);

$("#todoInput").on("keydown", function (e) {
  if (e.key === "Enter") {
    addTodo();
  }
});

$(document).on("click", "span[data-index]", function () {
  const index = $(this).data("index");
  toggleTodo(index);
});

$(document).on("click", ".edit-btn", function () {
  const index = $(this).data("index");
  editTodo(index);
});

$(document).on("click", ".delete-btn", function () {
  const index = $(this).data("index");
  deleteTodo(index);
});

renderTodos();