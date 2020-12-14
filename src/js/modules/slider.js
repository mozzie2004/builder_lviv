function slider(){
    const tabs = document.querySelectorAll('.portfolio__tab'),
        content = document.querySelectorAll('.portfolio__content'),
        img = document.querySelectorAll('.portfolio__slider-img'),
        circles = document.querySelector('.portfolio__circles'),
        reviewCircles = document.querySelector('.reviews__circles'),
        reviews = document.querySelectorAll('.reviews__review');

    function addCircle(className, parent, content) {
        for(let i = 0; i<content.length; i++){
            const circle = document.createElement('div');
            circle.classList.add(className);
            parent.append(circle);
         }
    }

    addCircle('portfolio__circle', circles, img);
    addCircle('reviews__circle', reviewCircles, reviews);


    const circle = document.querySelectorAll('.portfolio__circle'),
        reviewCircle = document.querySelectorAll('.reviews__circle');
    reviewCircle[0].classList.add('reviews__circle_active');
    circle[0].classList.add('portfolio__circle_active');

    let activeSlide = 0;
    let reviewAcyiveSlide = 0;

    function tabTogle(triger) {

        triger.forEach((item, i)=>{
            item.addEventListener('click', ()=>{
                content.forEach(cont=>{
                    cont.classList.remove('show');
                    cont.classList.add('hide');
                })
    
                img.forEach(sliderImg=>{
                    sliderImg.classList.remove('show');
                    sliderImg.classList.add('hide');
                })
    
                circle.forEach(sliderCircle=>{
                    sliderCircle.classList.remove('portfolio__circle_active');
                })
    
                content[i].classList.add('show');
                content[i].classList.remove('hide');
    
                img[i].classList.add('show');
                img[i].classList.remove('hide');
    
                circle[i].classList.add('portfolio__circle_active');
                activeSlide = i;
            })
        })

    }

    tabTogle(tabs);
    tabTogle(circle);
    changeActive(reviewCircle, reviews, 'reviews');

    function changeActive(triger, sliderContent, selectorActive) {

        triger.forEach((item, i)=>{
            item.addEventListener('click', ()=>{
                triger.forEach(sliderCircle=>{
                    sliderCircle.classList.remove(`${selectorActive}__circle_active`);
                })
                sliderContent.forEach(rew=>{
                    rew.classList.remove('show');
                    rew.classList.add('hide');
                })
                triger[i].classList.add(`${selectorActive}__circle_active`);
                sliderContent[i].classList.add('show');
                sliderContent[i].classList.remove('hide');
            })
            
        })

    }
   
    

    const arrow = document.querySelectorAll('.portfolio__arrow'),
        leftArrow = arrow[0],
        rightArrow = arrow[1];

    function removeActive(){

        content[activeSlide].classList.remove('show');
        content[activeSlide].classList.add('hide');

        img[activeSlide].classList.remove('show');
        img[activeSlide].classList.add('hide');

        circle[activeSlide].classList.remove('portfolio__circle_active');
    }  

    leftArrow.addEventListener('click', ()=>{

        removeActive();
        
        if(activeSlide === 0) {

            content[content.length-1].classList.add('show');
            content[content.length-1].classList.remove('hide');

            img[content.length-1].classList.add('show');
            img[content.length-1].classList.remove('hide');

            circle[content.length-1].classList.add('portfolio__circle_active');
            activeSlide = content.length-1;
        } else {
            content[activeSlide-1].classList.add('show');
            content[activeSlide-1].classList.remove('hide');

            img[activeSlide-1].classList.add('show');
            img[activeSlide-1].classList.remove('hide');

            
            circle[activeSlide-1].classList.add('portfolio__circle_active');

            activeSlide--;
        }  
        
    })

    rightArrow.addEventListener('click', ()=>{

        removeActive();
        
        if(activeSlide === content.length-1) {

            content[0].classList.add('show');
            content[0].classList.remove('hide');

            img[0].classList.add('show');
            img[0].classList.remove('hide');

            circle[0].classList.add('portfolio__circle_active');
            activeSlide = 0;
        } else {
            content[activeSlide+1].classList.add('show');
            content[activeSlide+1].classList.remove('hide');

            img[activeSlide+1].classList.add('show');
            img[activeSlide+1].classList.remove('hide');

            
            circle[activeSlide+1].classList.add('portfolio__circle_active');

            activeSlide++;
        }
         
    })

}

export default slider;