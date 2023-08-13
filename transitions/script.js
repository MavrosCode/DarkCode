const tester1 = document.getElementById('tester1')
const tester2 = document.getElementById('tester2')
const tester3 = document.getElementById('tester3')
const tester4 = document.getElementById('tester4')

document.getElementById('locker').addEventListener('click', () =>{
    console.log('Entrou');
    tester1.classList.toggle('active1');
    tester2.classList.toggle('active2');
    tester3.classList.toggle('active3');
    tester4.classList.toggle('active4');
    tester1.removeAttribute('disable')
    tester2.removeAttribute('disable')
    tester3.removeAttribute('disable')
})