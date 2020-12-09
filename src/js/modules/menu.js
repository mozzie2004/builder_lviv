function menu(){
    const hamburger = document.querySelector('.hamburger'),
        menuList =  document.querySelector('.header__menu');

    hamburger.addEventListener('click', ()=>{
        menuList.classList.toggle('header__menu_active');
        hamburger.classList.toggle('hamburger_close');
    });

    if (window.matchMedia('(max-width: 768px)').matches){
        menuList.addEventListener('click', (e)=>{
            if(e.target === menuList ){
                menuList.classList.toggle('header__menu_active');
                hamburger.classList.toggle('hamburger_close');
            }
            
        });
    }
    
}

export default menu;