function menu(){
    const hamburger = document.querySelector('.hamburger'),
        menuList =  document.querySelector('.header__menu'),
        contacts = document.querySelector('.header__contacts');

    hamburger.addEventListener('click', ()=>{
        menuList.classList.toggle('header__menu_active');
        hamburger.classList.toggle('hamburger_close');
    });

    
        menuList.addEventListener('click', (e)=>{
            if(e.target === menuList ){
                menuList.classList.toggle('header__menu_active');
                hamburger.classList.toggle('hamburger_close');
            }
            
        });

    function changeMenuDark(){
        if (window.pageYOffset>170) {
            contacts.classList.add('header__contacts_dark');
        } else {
            contacts.classList.remove('header__contacts_dark');
        }
    }


    window.addEventListener('scroll', changeMenuDark);
    
   
    
}

export default menu;