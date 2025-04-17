
//   Обробка відправлення форми 
// form.login - form повинна відбуватися відповідно до події submit.
//    Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, 
// що всі поля повинні бути заповнені.
//   Якщо користувач заповнив усі поля і відправив 
// форму, збери значення полів в об'єкт, 
// де ім'я поля буде ім'ям властивості, 
// а значення поля - значенням властивості. 
//   Для доступу до елементів форми використовуй 
// властивість elements.

const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let hasEmptyInputs = false;
    for (let i = 0; i < event.target.elements.length; i++) {
        const element = event.target.elements[i];
        if (element.nodeName === 'INPUT' && !element.value) {
            hasEmptyInputs = true;
            break;
        }
    }
    if (hasEmptyInputs) {
        alert('Заповни форму');

    } else {
        const values = {};
        for (let i = 0; i < event.target.elements.length; i++) {
            const element = event.target.elements[i];
            if (element.nodeName === 'INPUT') {
                values[element.name] = element.value;
            }

        }
        console.log(values);

    }
});
