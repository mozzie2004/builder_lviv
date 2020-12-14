function modal(){
    const buttons = document.querySelectorAll('button[data-modal="consultation"]'),
        header = document.querySelector('header'),
        scroll = calcScroll();


    function openModal(trigger, popupId){
        trigger.forEach((item, i)=>{
            item.addEventListener('click', (e)=>{
                e.preventDefault();
                document.querySelector(popupId).classList.remove('popup_hidden');
                document.body.style.marginRight = `${scroll}px`;
                header.style.width = 'calc(100% - 16px)';
                document.body.style.overflow = 'hidden';
            })
        });
    }

    openModal(buttons, '#consultation');

    const btnClose = document.querySelectorAll('.popup__close');
    const overlay = document.querySelectorAll('.popup');
   
    btnClose.forEach(item=>{
        item.addEventListener('click', ()=>{
            overlay.forEach(modal=>{
                modal.classList.add('popup_hidden');
            });
            document.body.style.overflow = '';
            header.style.width = '100%';
            document.body.style.marginRight = `0px`;
        })
    })

    overlay.forEach(item=>{
        item.addEventListener('click', (e)=>{
            if (e.target.classList.contains('popup')){
                item.classList.add('popup_hidden');
                header.style.width = '100%';
                document.body.style.marginRight = `0px`;
                document.body.style.overflow = '';
            }
        })
    });


}

function calcScroll() {
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
}


export default modal;