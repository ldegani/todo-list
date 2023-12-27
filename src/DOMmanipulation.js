// import { format } from 'date-fns';
import { todayData } from './dataManipulation';
import { todoList } from './todoFunctions';

const handlerDOM = () => {
  const todayDate = todayData();

  const todayParagraph = document.getElementById('date');
  const missingDaysParagraph = document.getElementById('missing-days');

  todayParagraph.textContent = `Today - ${todayDate.todayFormattedDate}`;
  missingDaysParagraph.textContent = `${todayDate.missingDays} missing days.`;

  const btnTodoAdd = document.getElementById('btn-add-todo');
  
  btnTodoAdd.addEventListener('click', () => {
    buttonAddTodo();
  })
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

  formInputs.addEventListener('click', (e) => {
    if(e.target === modalForm) {
      closeModal()
    }
  });
}

function closeModal() {
  document.getElementById('container-modal').style.display = 'none';
}

export default handlerDOM;