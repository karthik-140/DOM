var item=document.querySelector('#items');
// console.log(item.parentNode);
// item.parentNode.style.background='#ccc';

// console.log(item.parentElement);
// item.parentElement.style.background='#ccc';

//console.log(item.childNodes);
// console.log(item.firstElementChild);
// item.firstElementChild.textContent='Hello';

// console.log(item.lastElementChild);
// item.lastElementChild.textContent='Changed';

// console.log(item.nextElementSibling);
// console.log(item.previousElementSibling);
// item.previousElementSibling.style.color='green';

var ad=document.createElement('div');
ad.className='text';
ad.id='hello';
ad.setAttribute('title', 'Hello div');

var ap=document.createTextNode('Hello world');
ad.appendChild(ap);

var header=document.querySelector('header .container');
var h1=document.querySelector('header h1');
console.log(ad);
ad.style.fontSize='20px';
header.insertBefore(ad,h1);


var crt=document.createElement('li');
crt.className='list-form-item';
var itm=document.createTextNode('Hello');
crt.appendChild(itm);

console.log(crt);

var ht=document.querySelector('ul');
console.log(document.querySelector('ul'));
console.log(ht.innerHTML);

console.log(crt.innerHTML+ht.innerHTML);

var ans=crt.innerHTML+ht.innerHTML;
console.log(document.getElementById('items'));

var ite=document.getElementById('items');
ite.innerHTML=ans;


