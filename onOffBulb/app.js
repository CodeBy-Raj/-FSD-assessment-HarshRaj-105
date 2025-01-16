const dialog = document.querySelector('.dialog');
const start = document.querySelector('.start');
const numberInput = document.querySelector('#number');
const submit = document.querySelector('.submit')
const lightContainer = document.querySelector('.light-container');


start.addEventListener('click', ()=>{
    dialog.style.display = 'flex';
    console.log('triggered');
    start.style.display = 'none';
    
})

submit.addEventListener('click',(e)=>{
    lightContainer.innerHTML = '';

    
    const numBulbs = parseInt(numberInput.value);

    if (isNaN(numBulbs) || numBulbs <= 0) {
        alert('Please enter a valid positive number!');
        return;
    }

 
    for (let i = 0; i < numBulbs; i++) {
        
        const bulbWrapper = document.createElement('div');
        bulbWrapper.style.display = 'flex';
        bulbWrapper.style.flexDirection = 'column';
        bulbWrapper.style.alignItems = 'center';
        bulbWrapper.style.margin = '10px';

       
        const bulb = document.createElement('img');
        bulb.src = 'https://pics.clipartpng.com/Light_Bulb_PNG_Clip_Art-2102.png';
        bulb.alt = 'Bulb';
        bulb.style.width = '50px';
        bulb.style.height = '50px';
        bulb.classList.add('bulb');

       
        const toggleButton = document.createElement('button');
        toggleButton.textContent = 'Toggle';
        toggleButton.classList.add('toggle-btn');
        toggleButton.style.marginTop = '5px';

      
        toggleButton.addEventListener('click', () => {
            if (bulb.src.includes('o2y2hTQ.png')) {
               
                bulb.src = 'https://pics.clipartpng.com/midle/Yellow_Light_Bulb_PNG_Clip_Art-2108.png';
            } else {
               
                bulb.src = 'https://pics.clipartpng.com/midle/Yellow_Light_Bulb_PNG_Clip_Art-2108.png'; 
            }
        });

        
        bulbWrapper.appendChild(bulb);
        bulbWrapper.appendChild(toggleButton);

     
        lightContainer.appendChild(bulbWrapper);
    }

    
    dialog.style.display = 'none';
    start.style.display = 'block'; 

})
