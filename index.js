var form = document.getElementById('form');

form.addEventListener('submit',function(e){
    e.preventDefault();
    var input = form.firstElementChild;
    if(validate(input.value)){
        appendLabel(input.value);
        input.value='';
    }
    else{
        alert('label text must be not empty or contains special chars!!')
    }
})

function appendLabel(text){
    var container = document.querySelector('.labels-container');
    var label = document.createElement('span');
    label.classList.add('label');
    label.innerHTML=text;
    label.addEventListener('click',function(e){
        remove(e);
    })
    container.append(label);
}
const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
function validate(text){
    return !(text.length == 0 || specialChars.test(text));
}

function remove(e){
    var element = e.target;
    element.parentNode.removeChild(element);
}