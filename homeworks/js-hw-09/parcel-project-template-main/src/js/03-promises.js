
import Notiflix from 'notiflix';


const [form] = document.getElementsByClassName('form');
const delay = document.querySelector('[name="delay"]');
const step = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="amount"]');

function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
        const shouldResolve = Math.random() > 0.3;
        setTimeout(() => {
            if (shouldResolve) {
                // Fulfill
                resolve({ position, delay });
            } else {
                // Reject
                reject({ position, delay });
            }
        }, delay);
    }).then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);

    })
        .catch(({ position, delay }) => {
            Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        });

}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let promiseDelay = Number(delay.value);
    for (let i = 0; i < Number(amount.value); i++) {
        createPromise(i, promiseDelay);
        promiseDelay += Number(step.value);

    }
});




