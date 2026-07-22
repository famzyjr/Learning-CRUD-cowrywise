const Form  = document.getElementById('form');
let textInput  = document.getElementById('textInput');
let msg = document.getElementById('msg');
let dateInput = document.getElementById('dateInput');
let textarea = document.getElementById('textarea');
let tasks = document.getElementById('tasks');
Form.addEventListener('submit',(e)=>{
 e.preventDefault();
 console.log(TodoError())
})

let TodoError = ()=>{
let EmptyTextField  = 'Task cannot be blank';

if(textInput.value === ''){
  msg.innerText = `${EmptyTextField}`;
  console.log(msg);
  
}else{
acceptData()
textInput.value = '';
dateInput.value = '';
textarea.value = '';
}
}

let data = {};

const acceptData=()=>{
  data['Todo'] = textInput.value;
  data['date'] = dateInput.value;
  data['Description'] = textarea.value;
  console.log(data)
}

