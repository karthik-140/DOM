var form=document.getElementById('addForm');
var itemlist=document.getElementById('items');

form.addEventListener('submit', additem);

function additem(e){
e.preventDefault();
var newitem=document.getElementById('item').value;

var list=document.createElement('li');
list.className='list-group-item';
list.appendChild(document.createTextNode(newitem));


var delbtn=document.createElement('button');
delbtn.className='btn btn-danger btn-sm float-right delete';
delbtn.appendChild(document.createTextNode('X'));
list.appendChild(delbtn);
//itemlist.appendChild(list);

var edit=document.createElement('button');
edit.className='btn btn-warning btn-sm float-right mr-2 edit';
edit.appendChild(document.createTextNode('Edit'));
list.appendChild(edit);
itemlist.appendChild(list);

}

itemlist.addEventListener('click', removeitem)
function removeitem(e){
    if(e.target.classList.contains('delete')){
    if(confirm('confirm to delete')){
        var del=e.target.parentElement;
        itemlist.removeChild(del);
    }
    }
}

