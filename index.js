const counters = document.querySelectorAll('.counter');

counters.forEach((counter)=>{
    counter.innerText = 0;

    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
    
        const inc = target / 100;
    
        if (count < target) {
        counter.innerText = count + inc;
        setTimeout(updateCount, 1);
        }
    }
    
    updateCount();
})



$(allInView);
$(window).scroll(allInView);


function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function allInView() {

    if (isScrolledIntoView($(".page1"))) $(".page1").css("backgroundColor", "red");
    else $(".page1").css("backgroundColor", "grey");

}