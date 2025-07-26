document.getElementById('Add').addEventListener('click',addtask);
document.getElementById('TaskInput').addEventListener('keypress',function(e){
    if(e.key==='enter'){
        addtask();
    }
});

function addtask(){
    const taskinput=document.getElementById('TaskInput')
    const taskvalue=taskinput.Value.trim();


    if(taskvalue){
        const tasklist=document.getElementById('TaskList');
        const li=document.createElement('li')
        li.textContent=taskvalue;


        const deletebutton=document.createElement('button');
        deletebutton.textContent='Delete';
        deletebutton.addEventListener('click',function(){
            tasklist.removeChild(li)
        });


        li.appendChild(deletebutton);
        tasklist.appendChild(li)
        taskinput.value='';
    }
}

deleteallbutton=document.getElementById('DeleteAllButton').addEventListener('click',function(){
    const tasklist=document.getElementById('Tasklist')
    tasklist.innerHTML='';
});


    



