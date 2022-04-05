
$(document).ready(function (){
    $('.slider').slick({
            arrows: false,
            dots: true,
            adaptiveHeight: true,
    });

});



const animItems = document.querySelectorAll('._anim-items');

if(animItems.length > 0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(){
        for(let index = 0; index < animItems.length; index++){
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if(animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('_active');
            }
            else{

            }
        }
    }

    function offset(el){
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top : rect.top + scrollTop, left : rect.left + scrollLeft}

    }

    setTimeout(() =>{
        animOnScroll();
    },100);

}


document.querySelectorAll('.accordion').forEach((el) =>{
    el.addEventListener('click', () =>{

        let accordionContent = el.nextElementSibling;

        if (accordionContent.style.maxHeight){
            document.querySelectorAll('.accordionContent').forEach((el) =>{
                el.style.maxHeight = null;
                el.style.marginTop = null;
            })
            document.querySelectorAll('.accordion').forEach((el) =>{
            el.classList.remove('active')
            })


        }
        else{
            document.querySelectorAll('.accordionContent').forEach((el) =>{
                el.style.maxHeight = null;
                el.style.marginTop = null;
            })

            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
            accordionContent.style.marginTop = 20 + 'px'
            document.querySelectorAll('.accordion').forEach((el) =>{
            el.classList.remove('active')
            })
            el.classList.add('active')


        }
    })
})