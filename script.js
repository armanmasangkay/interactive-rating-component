const rating = document.querySelector('ul');
const submitButton = document.querySelector('button');
const ratingCard = document.querySelector('[data-rating]');
const thankYouCard = document.querySelector('[data-thank-you]');
const ratingSelectedSpan = document.querySelector('.selected span');
const body = document.querySelector('body');
const errorElement = document.getElementById("error");

let selectedRating = 0;

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        setTimeout(() => {
            ratingCard.classList.add('show');
        }, 1000); 
    }
};

rating.addEventListener('click', (e) => {
    e.target.classList.toggle("active");
    selectedRating = parseInt(e.target.innerHTML);
    rating.childNodes.forEach((element) => {
        if(! element.isEqualNode(e.target) && element.tagName === 'LI') {
            element.classList.remove("active");
        }
    })
});

submitButton.addEventListener('click', (e) => {

    if(selectedRating === 0 || isNaN(selectedRating)) {
        errorElement.classList.remove('hide');
        setTimeout(() => {
            errorElement.classList.add('hide');
        },3000)
        return;
    }

    ratingCard.classList.remove('show');
    ratingCard.classList.add('hide');
    
    thankYouCard.classList.remove('hide');
    setTimeout(()=>{
        thankYouCard.classList.add('show');
    },500);
    
    ratingSelectedSpan.innerHTML = selectedRating;
});