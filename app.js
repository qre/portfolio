const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageToPage(){
    //on Btn click active class:
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //Active class
    // allSections.addEventListener('click', (e) =>{
    //     console.log(e.target);
    // })
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
           //Remove selected from other btns
            sectBtns.forEach ((btn) =>{
                btn.classList.remove('active')
           })
           e.target.classList.add('active')

           //Hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active')
           })

           const element = document.getElementById(id);
           element.classList.add('active');
        }    
    })
}

PageToPage();