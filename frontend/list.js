document.getElementById('Add').addEventListener('click',AddTask);
document.getElementById('TaskInput').addEventListener('keypress',function(e){
    if(e.key==='Enter'){
        AddTask();
    }
})


function AddTask(){
    const taskinput=document.getElementById('TaskInput');
    const taskvalue=taskinput.value.trim();

    if(taskvalue){
        const tasklist=document.getElementById('TaskList');
        const li=document.createElement('li')
        li.textContent=taskvalue
        


        const deletebutton=document.createElement('button');
        deletebutton.textContent='delete'
        deletebutton.addEventListener('click',function(){
            tasklist.removeChild(li)
        });

        li.appendChild(deletebutton)
        tasklist.appendChild(li);
        taskinput.value='';

    }
    
}

const deleteallbutton=document.getElementById('DeleteAllButton').addEventListener('click',function(){
    const tasklist=document.getElementById('TaskList')
    tasklist.innerHTML='';
})