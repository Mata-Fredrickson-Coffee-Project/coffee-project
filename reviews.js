"use strict";

function reviewCycle() {
    customerReview.innerHTML = customerReviews[0];
    let count = 0;
    let max = customerReviews.length - 1;
    let interval = 4000;
    let reviewInterval = setInterval(function () {
        if (count >= max) {
            clearInterval(reviewInterval);
        } else count++;
        customerReview.innerHTML = customerReviews[count];
    }, interval);
}

let customerReviews = [
    '"Best Beans Ever... Period!" -BeanHound345',
    " 'My one stop shop for all my bean needs!' -Peggy J. ",
    " 'You wont find better Beans!' -Donald T.  ",
    " 'So many selections to choose from. -Destiny C.' ",
    " 'Great customer service. -Cathy L.'",
    " 'I just love the owners! Always friendly. -Joanna B.' ",
    " 'Love me some Beans, Beans, Beans!! -BeautyQueen03' ",
    " 'Exceptional beans to brew and delightful coffee to drink! -Alex J.' ",
];
let customerReview = document.querySelector("#customer-reviews");

reviewCycle();

