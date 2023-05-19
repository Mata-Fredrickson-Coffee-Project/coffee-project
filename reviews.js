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
    " '4' ",
    " '5' ",
    " '6' ",
    " '7' ",
];
let customerReview = document.querySelector("#customer-reviews");

reviewCycle();

