// import { format } from 'date-fns';
import { todayData } from './dataManipulation';
import createTodoList from './todoFunctions';

const handlerDOM = () => {
  updateDate();
  eventHandlers();
};

const updateDate = () => {
  const todayDate = todayData();
  
  //DELETE LATER - JUST FOR CHECKING INFOS
  const todayParagraph = document.getElementById('date');
  const missingDaysParagraph = document.getElementById('missing-days');
  todayParagraph.textContent = `Today - ${todayDate.todayFormattedDate}`;
  missingDaysParagraph.textContent = `${todayDate.missingDays} missing days.`;
}

const eventHandlers = () => {
  const btnTodoAdd = document.getElementById('btn-add-todo');
  const btnFormTodoSubmit = document.getElementById('btn-submit-todo');
  
  btnTodoAdd.addEventListener('click', buttonAddTodo);
  btnFormTodoSubmit.addEventListener('click', handlerFormSubmit);
}

function buttonAddTodo() {
  const modalForm = document.getElementById('container-modal');
  modalForm.style.display = 'block';
  
  const formInputs = document.getElementById('form-todo-add');
  const btnCancelTodo = document.getElementById('btn-cancel-todo');

  btnCancelTodo.addEventListener('click', (e) => {
    e.preventDefault();
    closeModal()
  })

  window.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') {
      closeModal()
    }
    if(e.key === 'Enter') {
      handlerFormSubmit(e);
    }
  });
};

function closeModal() {
  document.getElementById('container-modal').style.display = 'none';
  cleanFormInfos();
};

function cleanFormInfos() {
  document.getElementById('todo-title').value = '';
  document.getElementById('todo-description').value = '';
  document.getElementById('todo-dueDate').value = '';
  document.getElementById('todo-radio-normal').checked = true;
}

const handlerFormSubmit = (e) => {
  e.preventDefault();
  const title = document.getElementById('todo-title').value;
  const description = document.getElementById('todo-description').value;
  const dueDate = document.getElementById('todo-dueDate').value;
  const priority = document.querySelector('input[name="todo-priority"]:checked').value;

  const todoItem = createTodoList(title, description, dueDate, priority);

  console.log(todoItem);
  closeModal();
};

export default handlerDOM;