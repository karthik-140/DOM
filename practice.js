var form=document.getElementById('addForm');
var item=document.getElementById('items');

form.addEventListener('submit', additem);
function additem(e){
    e.preventDefault();
    
    var additem=document.getElementById('item').value;

    var cret=document.createElement('li');
    cret.className='list-group-item';
    cret.appendChild(document.createTextNode(additem));

    var addbutton=document.createElement('button');
    addbutton.className='btn btn-danger btn-sm float-right delete';
    addbutton.appendChild(document.createTextNode('X'));
    cret.appendChild(addbutton);

    var addedit=document.createElement('button');
    addedit.className='btn btn-success btn-sm float-right Edit mr-3';
    addedit.appendChild(document.createTextNode('Edit'));
    cret.appendChild(addedit);
    item.appendChild(cret);
}

item.addEventListener('click',remove)
function remove(e){
    e.preventDefault();
    if(e.target.classList.contains('delete')){
        if(confirm('Confirm to delete')){
            var del=e.target.parentElement;
            item.removeChild(del);
        }
    }
}