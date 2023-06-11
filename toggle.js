const toggle = document.querySelector('.toggleLight')
const button = document.querySelector('#search')
const body = document.querySelector('body')

toggle.addEventListener('click',  function() {
    this.classList.toggle('bi-brightness-high');
    if(this.classList.toggle('bi-moon')) {
        body.style.background = 'white';
        body.style.color = '#232931';
        button.style.background = 'white';
        body.style.transition = '2s';
        button.style.transition = '2s';
    } else{
        body.style.backgroundColor = '#232931';
        body.style.color = 'white';
        button.style.background = '#232931';
        body.style.transition = '2s';
        button.style.transition = '2s';
    }
})

