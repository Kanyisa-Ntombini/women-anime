/*let fname = document.getElementsByTagName('p');
console.log(fname[2]);

let liTags = document.getElementsByTagName('li');
console.log(liTags[3]);*/

const btnInstr = document.querySelector('#btnInstr');

function testingFunc() {
    let newInstr = document.createElement('li');
    newInstr.id = 'li-style';
    newInstr.innerHTML = 'Enjoy!';
    
    let parent = document.querySelector('#parent');
    
    parent.appendChild(newInstr);
}

btnInstr.addEventListener('click', testingFunc);