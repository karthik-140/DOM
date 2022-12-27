var col=document.querySelectorAll('.list-group-item');
col[1].style.color='green';

var odd=document.querySelectorAll('li:nth-child(odd)');

for(var i=0;i<odd.length;i++){
    odd[i].style.background='#ccc';
}

var even=document.querySelectorAll('li:nth-child(even)');
  for(var i=0;i<even.length;i++){
    even[i].style.background='pink';
  }