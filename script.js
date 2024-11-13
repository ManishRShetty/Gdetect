const dis = document.querySelector('.display')
const inputName = document.getElementById('inputName');
const culName = document.getElementById('culName')
const gID = document.getElementById('gender')
console.log(ranNum)

function autoRefresh() {
    window.location = window.location.href;
}


function nameLoader(){
    var ranNum = Math.floor((Math.random()*3)+1)
    console.log(inputName.value)
    var ip = inputName.value;
    dis.style="display:block";
    culName.innerText=ip;
    
    document.addEventListener("DOMContentLoaded", function() {
        const catGif = document.querySelector('.catGif');
    
        // Listen for the end of the fadeOut animation
        catGif.addEventListener('animationend', function(event) {
            if (event.animationName === 'fadeOut') {
                catGif.classList.add('hidden'); // Add hidden class to set display: none
            }
        });
    });


    document.addEventListener("DOMContentLoaded", function() {
        // Select the elements
        const elementsToHide = ['#t1', '#t2', '#t3', '.catGif'];
        
        elementsToHide.forEach(selector => {
            const element = document.querySelector(selector);
            
            // Listen for the end of the fadeOut animation
            element.addEventListener('animationend', function(event) {
                if (event.animationName === 'fadeOut') {
                    element.classList.add('hidden'); // Add hidden class to set display: none
                }
            });
        });
    });

    /*switch(ranNum){
        case '1':
            console.log("Hello");
            break;
        case '2':
            console.log("Hi");
            break;
            */
    if(ranNum==1){
        gID.innerText='Men'
    }
    else if(ranNum==2){
        gID.innerText='Women'
    }
    else{
        gID.innerText='Gay'
    }

    
}



