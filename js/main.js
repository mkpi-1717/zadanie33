let a = document.getElementById('opis');
let b = document.querySelector('button');

console.log(b);


b.onclick = function(){
    a.textContent = 'dowolny text';
}

