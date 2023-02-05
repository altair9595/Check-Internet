let teitel = document.querySelector('.teitel');
let ul = document.querySelector('ul');
let reload = document.querySelector('.reload')

window.onload = function() {

    if(window.navigator.online){
        online()
    }else{
        offline()
    }
}

 window.addEventListener("online", function(){
    online();
});
window.addEventListener("offline", function(){
    offline();
});
reload.onclick =function(){
    window.location.reload();
}

function online(){
    teitel.innerHTML= 'Online Now';
    teitel.style.color = 'green';
    ul.classList.add('hide');
    reload.classList.add('hide');
}


function offline(){
    teitel.innerHTML= 'Offline Now';
    teitel.style.color = '#666';
    ul.classList.remove('hide');
    reload.classList.remove('hide');
}


















