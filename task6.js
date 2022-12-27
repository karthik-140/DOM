var ans=document.querySelector('.list-group-item:nth-child(2)');
ans.style.background='green';

var del=document.querySelector('.list-group-item:nth-child(3)');
del.remove();


var col=document.querySelectorAll('.list-group-item');
col[1].style.color='yellow';

var odd=document.querySelectorAll('li:nth-child(odd)');

for(var i=0;i<odd.length;i++){
    odd[i].style.background='#ccc';
}