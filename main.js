let enterTask = document.querySelector('.input');
let submit = document.querySelector('.add');
let tasks = document.querySelector('.tasks');

enterTask.onfocus = function() {
  enterTask.value = ''
}
if (window.localStorage.tasks){
  tasks.innerHTML = window.localStorage.tasks;
}

submit.addEventListener('click' , function() {
  if (window.localStorage.tasks == undefined){
    window.localStorage.tasks = '';
  }
  if (enterTask.value){
    let getTask = enterTask.value;
    console.log(getTask)
    window.localStorage.tasks += `
    <div class="item">
    <div class="itemTask">${getTask}</div>
    <div class="delete">Delete</div>
  </div>`
  tasks.innerHTML = window.localStorage.tasks;
  }
  else {
    tasks.innerHTML = 'Please Enter Task'
  }
})

tasks.addEventListener('click' , function(eo) {
  if (eo.target.classList.contains('delete')){
    eo.target.parentElement.remove();
    window.localStorage.tasks = tasks.innerHTML;
  }
})