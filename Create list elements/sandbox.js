const list = document.querySelector('#book-list ul');

//delete books
list.addEventListener('click',function(e){
    if(e.target.className=='delete'){
        const li = e.target.parentElement;
        li.parentElement.removeChild(li); 
        // li.parentElement is list so replace with it
        //list.removeChild(li)
    }
});

// add book-list
const addForm = document.forms['add-book'];
addForm.addEventListener('submit',function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    
    // create elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    // add content
    deleteBtn.textContent = 'delete';
    bookName.textContent = value;

    // append to document
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
});