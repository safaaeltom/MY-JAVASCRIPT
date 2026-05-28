var btns = document.querySelectorAll('#book-list .delete');

Array.from(btns).forEach(btn=>{
    btn.addEventListener('click',function(e){

        const li =e.target.parentElement;
        li.parentNode.removeChild(li) // remove li from the parent (li parentNode)
    });
});