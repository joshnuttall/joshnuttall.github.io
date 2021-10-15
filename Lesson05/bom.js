const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');


button.addEventListener('click', function () {

    const lineItem = document.createElement('li');
    
    const deleteButton = document.createElement('button');
    
    lineItem.textContent = input.value; 
    deleteButton.textContent = "X";
    lineItem.append(deleteButton);
    list.append(lineItem);
    
    deleteButton.addEventListener('click', function ()
    {
        list.removeChild(lineItem);    
    })
    input.focus();
    input.value = "";
    input.focus();
})

