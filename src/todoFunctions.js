import { format, parseISO } from "date-fns";
import { todayData } from './dataManipulation'
import { closeModal } from "./DOMmanipulation";

export const createTodoList = (title, description, dueDate, priority) => {

  return { 
    title,
    description,
    dueDate,
    priority,
   }
};

export const handlerFormSubmit = (e) => {
  
  e.preventDefault();
  const title = document.getElementById('todo-title').value;
  const description = document.getElementById('todo-description').value;
  const dueDate = document.getElementById('todo-dueDate').value;
  const priority = document.querySelector('input[name="todo-priority"]:checked').value;
  
  if(!userDateValidation(dueDate)) return;
  
  const todoItem = createTodoList(title, description, dueDate, priority);
  
  console.log(todoItem);
  closeModal();
};

function userDateValidation(userDate){
  const dateData = todayData();
  const dueDateFormatted = format(parseISO(userDate), 'dd / MM / yyyy');
  
  if(dateData.todayFormattedDate > dueDateFormatted) {
    if(confirm('This task is already late, is this correct?')) return true;
  } else if(dateData.todayFormattedDate === dueDateFormatted) {
    if(confirm('This task is schedule for today, is this correct?')) return true;
  }
  return false;
};