// console.log(document.getElementById('header-title').parentNode);

// var aa=document.createElement('div');
// aa.className='item';
// aa.id='1';
// aa.setAttribute('title','item');

// var bb=document.createTextNode('Title');

// aa.appendChild(bb);
// console.log(aa);

// var a=document.querySelector('.container');
// var b=document.querySelector('h1');
// console.log(b);
// aa.style.fontSize='30px';
// a.insertBefore(aa,b);

// var abc=document.getElementById('items');

// var c=document.createElement('li');
// c.className='item';
// c.id='item 5';
// var d=document.createTextNode('Books');
// c.appendChild(d);
// console.log(c);
// var e=document.querySelector('#items');
// var f=document.querySelector('.list-group-item');

// e.insertBefore(c,f);

var ans=document.createElement('li');
ans.className='item';
ans.id='book';
ans.setAttribute('title','items');
var dem=document.createTextNode('Item 5');
ans.appendChild(dem);
console.log(ans);

var test=document.querySelector('#items').appendChild(ans);
console.log(test);
test.setAttribute('class','form-control');
test.style.fontSize='20px';
test.style.padding='10px';