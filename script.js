let displayFirstName = document.getElementById('firstname');

displayFirstName.addEventListener('keydown', (e) => {
    let display = document.querySelector('#display-firstname');
    display.innerHTML = displayFirstName.value;
});

let displayAge = document.getElementById('age');
displayAge.addEventListener('keyup', (e) => {
    let display = document.getElementById('a-hard-truth');
    if(displayAge.value >= 18)
    {
        display.style.visibility = 'visible';
    }
    else
    {
        let display = document.querySelector('#a-hard-truth');
        display.style.visibility = 'hidden';
    }
});
