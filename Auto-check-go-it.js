{
    // -----------------
    const keys = [];
    const values = [];
    const advert = {
        service: "apt",
    };
    const apartment = Object.create(advert);
    apartment.descr = "Spacious apartment in the city center";
    apartment.rating = 4;
    apartment.price = 2153;

    for (const key in apartment) {
        // Change code below this line
        if (apartment.hasOwnProperty(key)) {
            keys.push(key);
            values.push(apartment[key]);
        }
    }
    // -----------------------
}


{
    function countProps(object) {
        let propCount = 0;
        for (const key in object)
            if (object.hasOwnProperty(key)) {
                propCount += 1;
            }

        return propCount;
    }
    countProps({ name: "Mango", age: 2 })
}


{
    const visits = [
        {
            id: 1,
            name: 'Sam',
            date: '2025-01-02',
        },
        {
            id: 2,
            name: 'John',
            date: '2024-11-30',
        },
        {
            id: 3,
            name: 'Lea',
            date: '2025-01-01',
        },
        {
            id: 4,
            name: 'Sam',
            date: '2025-01-04',
        },
        {
            id: 5,
            name: 'Lea',
            date: '2025-01-07',
        },
        {
            id: 6,
            name: 'Mark',
            date: '2024-12-25',
        },
        {
            id: 7,
            name: 'Sam',
            date: '2024-01-13'
        }
    ];
    const usersVisits = {};
    const userNameVisit = [];
    for (const element of visits) {
        const { name } = element;
        if (usersVisits[name]) {
            usersVisits[name] += 1;
        } else {
            usersVisits[name] = 1;
        }
    }
    console.log(usersVisits);

    const visitsEntries = Object.entries(usersVisits);
    let result = [];
    let entryWithBiggestVisitsCount = null;
    for (let i = 0; i < visitsEntries.length; i++) {
        const [name, visitsCount] = visitsEntries[i];
        if (visitsCount > 1) {
            result = [...result, name];
        }
        if (!entryWithBiggestVisitsCount || entryWithBiggestVisitsCount[1] < visitsCount) {
            entryWithBiggestVisitsCount = visitsEntries[i];
        }

    }
    const [userWithBiggestVisitsCount] = entryWithBiggestVisitsCount;
    console.log(userWithBiggestVisitsCount);

    console.log(result);


}


{
    let user = {
        name: "John",
        years: 30
    };
    const { name, years: age, isAdmin = false } = user;

}

// -------------------------------------------------------------------------
{
    let salaries = {
        "John": 100,
        "Pete": 300,
        "Mary": 500,
    };

    function topSalary(salaries) {
        const salariesEntries = Object.entries(salaries);
        if (salariesEntries.length === 0) {
            return null;
        }
        let biggestSalaryEntry = null;
        for (let i = 0; i < salariesEntries.length; i++) {
            const [, salary] = salariesEntries[i];

            if (!biggestSalaryEntry || biggestSalaryEntry[1] < salary) {
                biggestSalaryEntry = salariesEntries[i];
            }
        }
        const name = biggestSalaryEntry[0];
        // const [name] = biggestSalaryEntry;
        return name;
    }
    console.log(topSalary(salaries));

}
// -------------------------------------------------------------------------------


{

    let salaries = {
        "John": 100,
        "Pete": 300,
        "Mary": 200,
    };

    function topSalary(salaries) {
        let biggestSalary = 0;
        if (Object.values(salaries).length === 0) {
            return false;
        }
        const userSalaries = Object.values(salaries);
        for (const salary of userSalaries) {
            if (salary > biggestSalary) {
                biggestSalary = salary;
            }
        }
    }
    topSalary(salaries)

}




{

    function countTotalSalary(salaries) {
        let totalSalary = 0;
        if (Object.values(salaries).length === 0) {
            return null;
        }
        const userSalaries = Object.values(salaries)
        for (const salary of userSalaries) {
            totalSalary += salary;
        }
        return totalSalary;
    }

    countTotalSalary({ mango: 100, poly: 150, alfred: 80 })

}


{
    const colors = [
        { hex: "#f44336", rgb: "244,67,54" },
        { hex: "#2196f3", rgb: "33,150,243" },
        { hex: "#4caf50", rgb: "76,175,80" },
        { hex: "#ffeb3b", rgb: "255,235,59" },
    ];


    const hexColors = [];
    const rgbColors = [];

    for (const color of colors) {
        hexColors.push(color.hex)
        rgbColors.push(color.rgb)
    }
}






{
    const products = [
        { name: "Radar", price: 1300, quantity: 4 },
        { name: "Scanner", price: 2700, quantity: 3 },
        { name: "Droid", price: 400, quantity: 7 },
        { name: "Grip", price: 1200, quantity: 9 },
    ];

    function getAllPropValues(propName) {
        const propValues = [];

        for (const product of products) {
            if (product[propName] !== undefined) {
                propValues.push(product[propName]);
            }
        }


        return propValues;
    }
    getAllPropValues("name")
}


{
    function findMatches(...args) {
        const matches = [];
        const [first, ...rest] = args;
        const args1 = [...first, ...rest];
        for (const arg of args1) {
            if (arg == args1.includes(arg)) {
                matches.push(arg)
            }
        }

        return matches;
    }
    findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)
}

{
    const students = [
        { name: "Манго", courses: ["математика", "фізика"] },
        { name: "Полі", courses: ["інформатика", "математика"] },
        { name: "Ківі", courses: ["фізика", "біологія"] },
    ];

    const allCourses = students.flatMap(student => student.courses);
    // ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];

    const uniqueCourses = allCourses.filter(
        (course, index, array) => array.indexOf(course) === index
    );
}


{
    function calculateTotalPrice(orderedItems) {
        let totalPrice = 0;
        orderedItems.forEach((item) => { totalPrice += item });
        return totalPrice;
    }
    calculateTotalPrice([12, 85, 37, 4])
}


{
    function filterArray(numbers, value) {
        const filteredNumbers = [];

        numbers.forEach((item) => {
            if (item > value) { filteredNumbers.push(item) }
        });

        return filteredNumbers;
    }
    filterArray([1, 2, 3, 4, 5], 3)

}


{
    function getCommonElements(firstArray, secondArray) {
        const commonElements = [];

        firstArray.forEach((element) => {
            if (secondArray.includes(element))
                commonElements.push(element);
        });
        return commonElements;
    }
    getCommonElements([1, 2, 3], [2, 4]);

}


{
    const calculateTotalPrice = (quantity, pricePerItem) =>
        quantity * pricePerItem;

    calculateTotalPrice(5, 100);
}



{
    let totalPrice = 0;

    const calculateTotalPrice = (orderedItems) => {
        orderedItems.forEach((item) => {
            totalPrice += item;
        });
    };

    calculateTotalPrice([12, 85, 37, 4]);
}



{
    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 28 };

    let users = [vasya, petya, masha];




    const names = users.map(({ name }) => name)
    console.log(names);

}


{
    const vasya = { name: "Вася", surname: "Пупкин", id: 1 };
    const petya = { name: "Петя", surname: "Иванов", id: 2 };
    const masha = { name: "Маша", surname: "Петрова", id: 3 };

    const users = [vasya, petya, masha];

    const usersMapped = users.map(({ name, surname, id }) => ({ id, fullName: `${name} ${surname}` }))
    console.log(usersMapped);

}


{
    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 29 };

    let arr = [vasya, petya, masha];

    const getAverageAge = (arr) => {
        const sum = arr.reduce((acc, { age }) => acc + age, 0)
        return sum / arr.length;
    }; // (25 + 30 + 29) / 3 = 28

}


{
    let users = [
        { id: 'john', name: "John Smith", age: 20 },
        { id: 'ann', name: "Ann Smith", age: 24 },
        { id: 'pete', name: "Pete Peterson", age: 31 },
    ];

    const groupById = (users) => users.reduce((acc, user) => ({ ...acc, [user.id]: user }), {})
    let usersById = groupById(users);
}

{
    const getCommonElements = (firstArray, secondArray) => {
        const commonElements = [];

        firstArray.forEach((element) => {
            if (secondArray.includes(element)) {
                commonElements.push(element);
            }
        });
        return commonElements;
    }
    getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])

}

{
    const planets = ["Earth", "Mars", "Venus", "Jupiter"];
    const planetsLengths = planets.map(planet => planet.length)
}


{
    const books = [
        {
            title: "The Last Kingdom",
            author: "Bernard Cornwell",
            rating: 8.38,
        },
        {
            title: "Beside Still Waters",
            author: "Robert Sheckley",
            rating: 8.51,
        },
        {
            title: "The Dream of a Ridiculous Man",
            author: "Fyodor Dostoevsky",
            rating: 7.75,
        },
        { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
        { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
    ];

    const titles = books.map(book => book.name);
    console.log(titles);


}


{
    const ask = (question, yes, no) => {
        if (confirm(question)) yes()
        else no();
    }

    ask(
        "Вы согласны?",
        () => alert("Вы согласились."),
        () => alert("Вы отменили выполнение."),
    );

}