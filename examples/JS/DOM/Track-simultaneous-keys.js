// function runOnKeys(fn, ...keys) { }

// runOnKeys(() => alert('Hello'), 'KeyQ'); // keys -> ['KeyQ']
// runOnKeys(() => alert('Hello'), 'KeyQ', 'KeyW'); // keys -> ['KeyQ', 'KeyW']
// runOnKeys(() => alert('Hello'), 'KeyQ', 'KeyW', 'KeyE'); // keys -> ['KeyQ', 'KeyW', 'KeyE']

// 1. Оголосити функцію runOnKeys, яка приймає функцію fn та кілька клавіш зібрані у 
// масив за допомогою rest - ...keys.
// 2. Створити масив з настиснутих клавіш.
// 3. Створити обробник події keydown, який додасть клавішу у масив з натиснутих клавіш.
// 4. Створити обробник події keyup, який:
//   4.1. Порівнює масив з натиснутими клавішами з масивом keys - 
// перевіряє чи співпадає довжини масивів та перевіряє чи однакові елементи у циклі for.
//   4.2. Якщо масиви однакові, викличе fn.
//   4.3. Видалить підняту клавішу з масиву натиснутих клавіш.


function runOnKeys(fn, ...keys) {
    let keyPress = [];

    document.addEventListener('keydown', event => {
        keyPress.push(event.code);
    });

    document.addEventListener('keyup', event => {
        if (keys.length === keyPress.length) {
            let hasMach = true;

            for (let i = 0; i < keys.length; i++) {
                if (keyPress[i] !== keys[i]) {
                    hasMach = false;
                    break;
                }

            }
            if (hasMach) {
                fn();
            }

        }
        keyPress = keyPress.filter((key) => {
            return key === event.code;

        });
    });

}
runOnKeys();
