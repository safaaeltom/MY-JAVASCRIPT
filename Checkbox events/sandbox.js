const li =document.querySelector('#book-list ul');

// delete books
// list.addEventListener('click', function(e){

// add books
// const addForm = document.forms['add-book'];
// addForm.addEventListener('submit', function(e)

const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
    if(hideBox.checked){
        li.style.display = "none";
    } else{
        li.style.display = "block";
    }
})


