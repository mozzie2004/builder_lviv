function slider(){

    const tabs = document.querySelectorAll('.portfolio__tab'),
        img = document.querySelectorAll('.portfolio__slider-img'),
        portfolioContent = document.querySelectorAll('.portfolio__content'),
        reviewsContent = document.querySelectorAll('.reviews__review'),
        portfolioCircles = document.querySelector('.portfolio__circles'),
        reviewCircles = document.querySelector('.reviews__circles'),
        leftReviewsArrow = document.querySelectorAll('.reviews__arrow')[0],
        rightReviewsArrow = document.querySelectorAll('.reviews__arrow')[1],
        leftPortfolioArrow =(document.querySelectorAll('.portfolio__arrow'))[0],
        rightPortfolioArrow =document.querySelectorAll('.portfolio__arrow')[1];


    const portfolioLength = portfolioContent.length,
        reviewsLength = reviewsContent.length,
        reviewsCircleClass = 'reviews__circle',
        portfolioCircleClass = 'portfolio__circle';


    const sectionReviews = {
        content: reviewsContent,
        circles: reviewCircles,
        leftArrow: leftReviewsArrow,
        rightArrow: rightReviewsArrow,
        length: reviewsLength,
        circleClass: reviewsCircleClass
    };

    const sectionPortfolio = {
        content: portfolioContent,
        circles: portfolioCircles,
        leftArrow: leftPortfolioArrow,
        rightArrow: rightPortfolioArrow,
        tabs,
        img,
        length: portfolioLength,
        circleClass: portfolioCircleClass
    };
    
    function addCircle({circleClass, circles, content}) {
        for(let i = 0; i<content.length; i++){
            const circleDiv = document.createElement('div');
            circleDiv.classList.add(circleClass);
            circles.append(circleDiv);
         }
    }

    addCircle(sectionPortfolio);
    addCircle(sectionReviews);

    sectionPortfolio.circle = document.querySelectorAll('.portfolio__circle');
    sectionReviews.circle = document.querySelectorAll('.reviews__circle');
    sectionPortfolio.circle[0].classList.add('portfolio__circle_active');
    sectionReviews.circle[0].classList.add('reviews__circle_active');
    
    let curentPortfolioSlide = 0;
    let curentReviewsSlide = 0;


    function tabTogle({circle, tabs, content, img, circleClass}, i) {
    
        if(tabs){
            img.forEach(sliderImg=>{
                sliderImg.classList.remove('show');
                sliderImg.classList.add('hide');
            })

            img[i].classList.add('show');
            img[i].classList.remove('hide');

            curentPortfolioSlide = i;
        } else {
            curentReviewsSlide = i;
        }

        content.forEach(cont=>{
            cont.classList.remove('show');
            cont.classList.add('hide');
        })

        circle.forEach(sliderCircle=>{
            sliderCircle.classList.remove(`${circleClass}_active`);
        })

        content[i].classList.add('show');
        content[i].classList.remove('hide');

        circle[i].classList.add(`${circleClass}_active`);


    }

    tabs.forEach((item, i)=>{
        item.addEventListener('click', ()=>{tabTogle(sectionPortfolio, i)})
    });

    sectionPortfolio.circle.forEach((item, i)=>{
        item.addEventListener('click', ()=>{tabTogle(sectionPortfolio, i)})
    });

    sectionReviews.circle.forEach((item, i)=>{
        item.addEventListener('click', ()=>{tabTogle(sectionReviews, i)})
    });

    
    let curentSlide = 0;
    function clickLeft({leftArrow, length, content, img, circle, circleClass}) {
        leftArrow.addEventListener('click', (e)=>{

            if(e.target.classList.contains('reviews__arrow')){
                curentSlide = curentReviewsSlide;
            } else {
                curentSlide = curentPortfolioSlide;
            }
            if(img){

                img[curentSlide].classList.remove('show');
                img[curentSlide].classList.add('hide');
    
            }
            content[curentSlide].classList.remove('show');
            content[curentSlide].classList.add('hide');
    
            circle[curentSlide].classList.remove(`${circleClass}_active`);
            
            if(curentSlide === 0) {
    
                content[length-1].classList.add('show');
                content[length-1].classList.remove('hide');
    
                if(img) {
                    img[length-1].classList.add('show');
                    img[length-1].classList.remove('hide');
                    curentPortfolioSlide = length-1;
                }
    
                circle[length-1].classList.add(`${circleClass}_active`);
                
                curentSlide = length-1;
                curentReviewsSlide = length-1;
                
            } else {
                
                content[curentSlide-1].classList.add('show');
                content[curentSlide-1].classList.remove('hide');

                if(img) {
                    img[curentSlide-1].classList.add('show');
                    img[curentSlide-1].classList.remove('hide');
                    curentPortfolioSlide--;
                }
    
                 circle[curentSlide-1].classList.add(`${circleClass}_active`);
    
                curentSlide--;
                curentReviewsSlide--;
            }  
            
        })
    }
    
    clickLeft(sectionReviews);
    clickLeft(sectionPortfolio);

    function clicRight({rightArrow, length, content, img, circle, circleClass}) {
        rightArrow.addEventListener('click', (e)=>{

            if(e.target.classList.contains('reviews__arrow')){
                curentSlide = curentReviewsSlide;
            } else {
                curentSlide = curentPortfolioSlide;
            }
            if(img){

                img[curentSlide].classList.remove('show');
                img[curentSlide].classList.add('hide');
    
            }
            content[curentSlide].classList.remove('show');
            content[curentSlide].classList.add('hide');
    
            circle[curentSlide].classList.remove(`${circleClass}_active`);

            if(curentSlide === length-1) {
    
                content[0].classList.add('show');
                content[0].classList.remove('hide');
    
                if(img) {
                    img[0].classList.add('show');
                    img[0].classList.remove('hide');
                    curentPortfolioSlide = 0;
                }
    
                circle[0].classList.add(`${circleClass}_active`);
                
                curentSlide = 0;
                curentReviewsSlide = 0;
                
            } else {

                content[curentSlide+1].classList.add('show');
                content[curentSlide+1].classList.remove('hide');

                if(img) {
                    img[curentSlide+1].classList.add('show');
                    img[curentSlide+1].classList.remove('hide');
                    curentPortfolioSlide++;
                }
    
                 circle[curentSlide+1].classList.add(`${circleClass}_active`);
    
                curentSlide++;
                curentReviewsSlide++;
            }  
            
        })
    }

    clicRight(sectionReviews);
    clicRight(sectionPortfolio);
       

}

export default slider;