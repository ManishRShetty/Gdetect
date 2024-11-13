const dis = document.querySelector('.display');
const inputName = document.getElementById('inputName');
const culName = document.getElementById('culName');
const gID = document.getElementById('gender');

function autoRefresh() {
    window.location = window.location.href;
}

function nameLoader() {
    if (inputName.value === 'Manish'||inputName.value === 'manish'||inputName.value === 'Nishan'||inputName.value === 'Nishan'||inputName.value === 'Allen'||inputName.value === 'allen') {
        console.log("Nice Try");
        var ranNum = Math.floor((Math.random() * 3) + 1);
        console.log(inputName.value);
        var ip = inputName.value;
        dis.style = "display:block";
        culName.innerText = ip;
        gID.innerText = 'Men';
        return; // Return early if the input is "Manish"
    } else if(inputName.value === 'Ajay'||inputName.value === 'ajay'){
        var ranNum = Math.floor((Math.random() * 3) + 1);
        console.log(inputName.value);
        var ip = inputName.value;
        dis.style = "display:block";
        culName.innerText = ip;
        gID.innerText = 'Gay';
    }

    else{
        var ranNum = Math.floor((Math.random() * 3) + 1);
        console.log(inputName.value);
        var ip = inputName.value;
        dis.style = "display:block";
        culName.innerText = ip;
        if (ranNum == 1) {
            gID.innerText = 'Men';
        } else if (ranNum == 2) {
            gID.innerText = 'Women';
        } else {
            gID.innerText = 'Gay';
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const catGif = document.querySelector('.catGif');

    // Listen for the end of the fadeOut animation
    catGif.addEventListener('animationend', function (event) {
        if (event.animationName === 'fadeOut') {
            catGif.classList.add('hidden'); // Add hidden class to set display: none
        }
    });
});

// Select the elements
document.addEventListener("DOMContentLoaded", function () {
    const elementsToHide = ['#t1', '#t2', '#t3', '.catGif'];

    elementsToHide.forEach(selector => {
        const element = document.querySelector(selector);

        // Listen for the end of the fadeOut animation
        element.addEventListener('animationend', function (event) {
            if (event.animationName === 'fadeOut') {
                element.classList.add('hidden'); // Add hidden class to set display: none
            }
        });
    });
});
