// import { format } from 'date-fns';
import { todayData } from './dataManipulation';
import { handlerFormSubmit } from './todoFunctions';

const handlerDOM = () => {
  updateDate();
  eventHandlers();
};

const updateDate = () => {
  const todayDate = todayData();
  
  //DELETE LATER - JUST FOR CHECKING INFOS
  const todayParagraph = document.getElementById('date');
  const missingDaysParagraph = document.getElementById('missing-days');
  todayParagraph.textContent = `Today is ${todayDate.todayFormattedDate}`;
  missingDaysParagraph.textContent = `${todayDate.missingDays} missing days.`;
}

const eventHandlers = () => {
  const btnTodoAdd = document.getElementById('btn-add-todo');
  const btnFormTodoSubmit = document.getElementById('form-todo-add');
  
  btnTodoAdd.addEventListener('click', buttonAddTodo);
  btnFormTodoSubmit.addEventListener('submit', (e) => {
    handlerFormSubmit(e);
  });
}

function buttonAddTodo() {
  const modalForm = document.getElementById('container-modal');
  modalForm.style.display = 'block';
  
  // const formInputs = document.getElementById('form-todo-add');
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

export function closeModal() {
  document.getElementById('container-modal').style.display = 'none';
  resetFormInfos();
};

function resetFormInfos() {
  document.getElementById('todo-title').value = '';
  document.getElementById('todo-description').value = '';
  document.getElementById('todo-dueDate').value = '';
  document.getElementById('todo-radio-normal').checked = true;
}

export default handlerDOM;