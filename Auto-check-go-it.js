{

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
    const user = [

        {
            name: "Moore Hensley",
            email: "moorehensley@indexia.com",
            eyeColor: "blue",
            friends: ["Sharron Pace"],
            isActive: false,
            balance: 2811,
            gender: "male"
        },
        {
            name: "Sharlene Bush",
            email: "sharlenebush@tubesys.com",
            eyeColor: "blue",
            friends: ["Briana Decker", "Sharron Pace"],
            isActive: true,
            balance: 3821,
            gender: "female"
        },
        {
            name: "Ross Vazquez",
            email: "rossvazquez@xinware.com",
            eyeColor: "green",
            friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
            isActive: false,
            balance: 3793,
            gender: "male"
        },
        {
            name: "Elma Head",
            email: "elmahead@omatom.com",
            eyeColor: "green",
            friends: ["Goldie Gentry", "Aisha Tran"],
            isActive: true,
            balance: 2278,
            gender: "female"
        },
        {
            name: "Carey Barr",
            email: "careybarr@nurali.com",
            eyeColor: "blue",
            friends: ["Jordan Sampson", "Eddie Strong"],
            isActive: true,
            balance: 3951,
            gender: "male"
        },
        {
            name: "Blackburn Dotson",
            email: "blackburndotson@furnigeer.com",
            eyeColor: "brown",
            friends: ["Jacklyn Lucas", "Linda Chapman"],
            isActive: false,
            balance: 1498,
            gender: "male"
        },
        {
            name: "Sheree Anthony",
            email: "shereeanthony@kog.com",
            eyeColor: "brown",
            friends: ["Goldie Gentry", "Briana Decker"],
            isActive: true,
            balance: 2764,
            gender: "female"
        }
    ]
    const getUsersWithEyeColor = (users, color) => {
        const usersWithEyeColor = users.filter(user =>
            user.eyeColor === color);
        return usersWithEyeColor;
    };
}


{
    const users =
        [
            {
                name: "Moore Hensley",
                email: "moorehensley@indexia.com",
                eyeColor: "blue",
                friends: ["Sharron Pace"],
                isActive: false,
                balance: 2811,
                gender: "male",
                age: 37
            },
            {
                name: "Sharlene Bush",
                email: "sharlenebush@tubesys.com",
                eyeColor: "blue",
                friends: ["Briana Decker", "Sharron Pace"],
                isActive: true,
                balance: 3821,
                gender: "female",
                age: 34
            },
            {
                name: "Ross Vazquez",
                email: "rossvazquez@xinware.com",
                eyeColor: "green",
                friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
                isActive: false,
                balance: 3793,
                gender: "male",
                age: 24
            },
            {
                name: "Elma Head",
                email: "elmahead@omatom.com",
                eyeColor: "green",
                friends: ["Goldie Gentry", "Aisha Tran"],
                isActive: true,
                balance: 2278,
                gender: "female",
                age: 21
            },
            {
                name: "Carey Barr",
                email: "careybarr@nurali.com",
                eyeColor: "blue",
                friends: ["Jordan Sampson", "Eddie Strong"],
                isActive: true,
                balance: 3951,
                gender: "male",
                age: 27
            },
            {
                name: "Blackburn Dotson",
                email: "blackburndotson@furnigeer.com",
                eyeColor: "brown",
                friends: ["Jacklyn Lucas", "Linda Chapman"],
                isActive: false,
                balance: 1498,
                gender: "male",
                age: 38
            },
            {
                name: "Sheree Anthony",
                email: "shereeanthony@kog.com",
                eyeColor: "brown",
                friends: ["Goldie Gentry", "Briana Decker"],
                isActive: true,
                balance: 2764,
                gender: "female",
                age: 39
            }
        ]

    const getUsersWithAge = (users, minAge, maxAge) => {
        const userAgeWithAge = users.filter(user =>
            user.age >= minAge && user.age <= maxAge);
        return userAgeWithAge;

    }
}

{

    const users =
        [
            {
                name: "Moore Hensley",
                email: "moorehensley@indexia.com",
                eyeColor: "blue",
                friends: ["Sharron Pace"],
                isActive: false,
                balance: 2811,
                gender: "male",
                age: 37
            },
            {
                name: "Sharlene Bush",
                email: "sharlenebush@tubesys.com",
                eyeColor: "blue",
                friends: ["Briana Decker", "Sharron Pace"],
                isActive: true,
                balance: 3821,
                gender: "female",
                age: 34
            },
            {
                name: "Ross Vazquez",
                email: "rossvazquez@xinware.com",
                eyeColor: "green",
                friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
                isActive: false,
                balance: 3793,
                gender: "male",
                age: 24
            },
            {
                name: "Elma Head",
                email: "elmahead@omatom.com",
                eyeColor: "green",
                friends: ["Goldie Gentry", "Aisha Tran"],
                isActive: true,
                balance: 2278,
                gender: "female",
                age: 21
            },
            {
                name: "Carey Barr",
                email: "careybarr@nurali.com",
                eyeColor: "blue",
                friends: ["Jordan Sampson", "Eddie Strong"],
                isActive: true,
                balance: 3951,
                gender: "male",
                age: 27
            },
            {
                name: "Blackburn Dotson",
                email: "blackburndotson@furnigeer.com",
                eyeColor: "brown",
                friends: ["Jacklyn Lucas", "Linda Chapman"],
                isActive: false,
                balance: 1498,
                gender: "male",
                age: 38
            },
            {
                name: "Sheree Anthony",
                email: "shereeanthony@kog.com",
                eyeColor: "brown",
                friends: ["Goldie Gentry", "Briana Decker"],
                isActive: true,
                balance: 2764,
                gender: "female",
                age: 39
            }
        ]
    const getUsersWithFriend = (users, friendName) => {
        const usersWithFriend = users.Filter(user =>
            user.friends.includes(friendName))
        return usersWithFriend
    };
}





{
    const users =
        [
            {
                name: "Moore Hensley",
                email: "moorehensley@indexia.com",
                eyeColor: "blue",
                friends: ["Sharron Pace"],
                isActive: false,
                balance: 2811,
                gender: "male",
                age: 37
            },
            {
                name: "Sharlene Bush",
                email: "sharlenebush@tubesys.com",
                eyeColor: "blue",
                friends: ["Briana Decker", "Sharron Pace"],
                isActive: true,
                balance: 3821,
                gender: "female",
                age: 34
            },
            {
                name: "Ross Vazquez",
                email: "rossvazquez@xinware.com",
                eyeColor: "green",
                friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
                isActive: false,
                balance: 3793,
                gender: "male",
                age: 24
            },
            {
                name: "Elma Head",
                email: "elmahead@omatom.com",
                eyeColor: "green",
                friends: ["Goldie Gentry", "Aisha Tran"],
                isActive: true,
                balance: 2278,
                gender: "female",
                age: 21
            },
            {
                name: "Carey Barr",
                email: "careybarr@nurali.com",
                eyeColor: "blue",
                friends: ["Jordan Sampson", "Eddie Strong"],
                isActive: true,
                balance: 3951,
                gender: "male",
                age: 27
            },
            {
                name: "Blackburn Dotson",
                email: "blackburndotson@furnigeer.com",
                eyeColor: "brown",
                friends: ["Jacklyn Lucas", "Linda Chapman"],
                isActive: false,
                balance: 1498,
                gender: "male",
                age: 38
            },
            {
                name: "Sheree Anthony",
                email: "shereeanthony@kog.com",
                eyeColor: "brown",
                friends: ["Goldie Gentry", "Briana Decker"],
                isActive: true,
                balance: 2764,
                gender: "female",
                age: 39
            }
        ]
    const getFriends = (users) => {
        const friends = users.flatMap(user =>
            user.friends);
        const uniqueFriends = friends.filter((friend, idx, arr) =>
            arr.indexOf(friend) === idx);
        return uniqueFriends;
    };
};






{

    const users =
        [
            {
                name: "Moore Hensley",
                email: "moorehensley@indexia.com",
                eyeColor: "blue",
                friends: ["Sharron Pace"],
                isActive: false,
                balance: 2811,
                gender: "male",
                age: 37
            },
            {
                name: "Sharlene Bush",
                email: "sharlenebush@tubesys.com",
                eyeColor: "blue",
                friends: ["Briana Decker", "Sharron Pace"],
                isActive: true,
                balance: 3821,
                gender: "female",
                age: 34
            },
            {
                name: "Ross Vazquez",
                email: "rossvazquez@xinware.com",
                eyeColor: "green",
                friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
                isActive: false,
                balance: 3793,
                gender: "male",
                age: 24
            },
            {
                name: "Elma Head",
                email: "elmahead@omatom.com",
                eyeColor: "green",
                friends: ["Goldie Gentry", "Aisha Tran"],
                isActive: true,
                balance: 2278,
                gender: "female",
                age: 21
            },
            {
                name: "Carey Barr",
                email: "careybarr@nurali.com",
                eyeColor: "blue",
                friends: ["Jordan Sampson", "Eddie Strong"],
                isActive: true,
                balance: 3951,
                gender: "male",
                age: 27
            },
            {
                name: "Blackburn Dotson",
                email: "blackburndotson@furnigeer.com",
                eyeColor: "brown",
                friends: ["Jacklyn Lucas", "Linda Chapman"],
                isActive: false,
                balance: 1498,
                gender: "male",
                age: 38
            },
            {
                name: "Sheree Anthony",
                email: "shereeanthony@kog.com",
                eyeColor: "brown",
                friends: ["Goldie Gentry", "Briana Decker"],
                isActive: true,
                balance: 2764,
                gender: "female",
                age: 39
            }
        ]
    const getActiveUsers = (users) => {
        const activeUsers = users.filter(user =>
            user.isActive === true);
        return activeUsers;
    };
}




{
    const users =
        [
            {
                name: "Moore Hensley",
                email: "moorehensley@indexia.com",
                eyeColor: "blue",
                friends: ["Sharron Pace"],
                isActive: false,
                balance: 2811,
                gender: "male",
                age: 37
            },
            {
                name: "Sharlene Bush",
                email: "sharlenebush@tubesys.com",
                eyeColor: "blue",
                friends: ["Briana Decker", "Sharron Pace"],
                isActive: true,
                balance: 3821,
                gender: "female",
                age: 34
            },
            {
                name: "Ross Vazquez",
                email: "rossvazquez@xinware.com",
                eyeColor: "green",
                friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
                isActive: false,
                balance: 3793,
                gender: "male",
                age: 24
            },
            {
                name: "Elma Head",
                email: "elmahead@omatom.com",
                eyeColor: "green",
                friends: ["Goldie Gentry", "Aisha Tran"],
                isActive: true,
                balance: 2278,
                gender: "female",
                age: 21
            },
            {
                name: "Carey Barr",
                email: "careybarr@nurali.com",
                eyeColor: "blue",
                friends: ["Jordan Sampson", "Eddie Strong"],
                isActive: true,
                balance: 3951,
                gender: "male",
                age: 27
            },
            {
                name: "Blackburn Dotson",
                email: "blackburndotson@furnigeer.com",
                eyeColor: "brown",
                friends: ["Jacklyn Lucas", "Linda Chapman"],
                isActive: false,
                balance: 1498,
                gender: "male",
                age: 38
            },
            {
                name: "Sheree Anthony",
                email: "shereeanthony@kog.com",
                eyeColor: "brown",
                friends: ["Goldie Gentry", "Briana Decker"],
                isActive: true,
                balance: 2764,
                gender: "female",
                age: 39
            }
        ]
    const getInactiveUsers = (users) => {
        const inactiveUsers = users.filter(user =>
            user.isActive === false);
        return inactiveUsers;
    };

}




{
    const books = [
        {
            title: 'The Last Kingdom',
            author: 'Bernard Cornwell',
            rating: 8.38,
        },
        {
            title: 'Beside Still Waters',
            author: 'Robert Sheckley',
            rating: 8.51,
        },
        {
            title: 'The Dream of a Ridiculous Man',
            author: 'Fyodor Dostoevsky',
            rating: 7.75,
        },
        { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
    ];
    const BOOK_TITLE = 'The Dream of a Ridiculous Man';
    const AUTHOR = 'Robert Sheckley';

    const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
    const bookByAuthor = books.find(book => book.author === AUTHOR);
}

const users =
    [
        {
            name: "Moore Hensley",
            email: "moorehensley@indexia.com",
            eyeColor: "blue",
            friends: ["Sharron Pace"],
            isActive: false,
            balance: 2811,
            gender: "male"
        },
        {
            name: "Sharlene Bush",
            email: "sharlenebush@tubesys.com",
            eyeColor: "blue",
            friends: ["Briana Decker", "Sharron Pace"],
            isActive: true,
            balance: 3821,
            gender: "female"
        },
        {
            name: "Ross Vazquez",
            email: "rossvazquez@xinware.com",
            eyeColor: "green",
            friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
            isActive: false,
            balance: 3793,
            gender: "male"
        },
        {
            name: "Elma Head",
            email: "elmahead@omatom.com",
            eyeColor: "green",
            friends: ["Goldie Gentry", "Aisha Tran"],
            isActive: true,
            balance: 2278,
            gender: "female"
        },
        {
            name: "Carey Barr",
            email: "careybarr@nurali.com",
            eyeColor: "blue",
            friends: ["Jordan Sampson", "Eddie Strong"],
            isActive: true,
            balance: 3951,
            gender: "male"
        },
        {
            name: "Blackburn Dotson",
            email: "blackburndotson@furnigeer.com",
            eyeColor: "brown",
            friends: ["Jacklyn Lucas", "Linda Chapman"],
            isActive: false,
            balance: 1498,
            gender: "male"
        },
        {
            name: "Sheree Anthony",
            email: "shereeanthony@kog.com",
            eyeColor: "brown",
            friends: ["Goldie Gentry", "Briana Decker"],
            isActive: true,
            balance: 2764,
            gender: "female"
        }
    ]
{
    const getUserWithEmail = (users, email) => {
        const userWithEmail = users.find(user =>
            user.email === email)
        return userWithEmail
    };
}





{
    const firstArray = [26, 94, 36, 18];
    const secondArray = [17, 61, 23];
    const thirdArray = [17, 26, 94, 61, 36, 23, 18];

    const eachElementInFirstIsEven = firstArray.every(number => number % 2 === 0);
    const eachElementInFirstIsOdd = firstArray.every(number => number % 2 >= 1);

    const eachElementInSecondIsEven = secondArray.every(number => number % 2 === 0);
    const eachElementInSecondIsOdd = secondArray.every(number => number % 2 >= 1);

    const eachElementInThirdIsEven = thirdArray.every(number => number % 2 === 0);
    const eachElementInThirdIsOdd = thirdArray.every(number => number % 2 >= 1);
}





{
    const isEveryUserActive = (users) => {
        const userActive = users.every(user =>
            user.isActive === true);
        return userActive;
    };
}

{
    const players = {
        mango: 1270,
        poly: 468,
        ajax: 710,
        kiwi: 244
    };
    const playtimes = Object.values(players); // [1270, 468, 710, 244]
    const totalPlayTime = playtimes.reduce((acc, element) => {
        acc += element;
        return acc;
    }, 0);


    const averagePlayTime = totalPlayTime / playtimes.length;
}


{
    const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
    const authors = [
        "Tanith Lee",
        "Bernard Cornwell",
        "Robert Sheckley",
        "Fyodor Dostoevsky",
    ];
    // Change code below this line

    const ascendingReleaseDates = releaseDates.sort((a, b) => a - b);

    const alphabeticalAuthors = authors;

}

{
    const bookShelf = {
        books: ["The last kingdom", "The guardian of dreams"],
        getBooks() {
            return "Returning all books";
        },
        addBook(bookName) {
            return `Adding book ${bookName}`;
        },
        updateBook(oldName, newName) {
            return `Updating book ${oldName} to ${newName}`;
        },
        removeBook(bookName) {
            return `Deleting book ${bookName}`;
        }
    };
    bookShelf.updateBook("Sands of dune", "Dune")
}

{
    const atTheOldToad = {
        potions: ["Speed potion", "Dragon breath", "Stone skin"],
        getPotions() {
            return this.potions
        }
    };
    atTheOldToad.getPotions()
}


{
    const atTheOldToad = {
        potions: ["Speed potion", "Dragon breath", "Stone skin"],
        addPotion(potionName) {
            this.potions.push(potionName);
            return this.potions;
        },
    };
    atTheOldToad.addPotion("Power potion")
}


{
    const atTheOldToad = {
        potions: ["Speed potion", "Dragon breath", "Stone skin"],
        removePotion(potionName) {
            const potionIndex = this.potions.indexOf(potionName);
            this.potions.splice(potionIndex, 1);
        },
    };
}

{
    const atTheOldToad = {
        potions: ["Speed potion", "Dragon breath", "Stone skin"],
        updatePotionName(oldName, newName) {

        },
    };

}


{
    const parent = {
        name: "Stacey",
        surname: "Moore",
        age: 54,
        heritage: "Irish",
    };

    const child = Object.create(parent);
    child.name = "Jason";
    child.age = 27;
}


{
    const ancestor = {
        name: "Paul",
        age: 83,
        surname: "Dawson",
        heritage: "Irish",
    };
    // Change code below this line

    const parent = Object.create(ancestor);
    parent.name = "Stacey";
    parent.surname = "Moore";
    parent.age = 54;

    const child = Object.create(parent);
    child.name = "Jason";
    child.age = 27;
}

{
    class Car {
        constructor({ brand, model, price }) {
            this.brand = brand;
            this.model = model;
            this.price = price;
        }
    }
    new Car("Audi", "Q3", 36000);
}

{
    class Car {
        constructor({ brand, model, price }) {
            this.brand = brand;
            this.model = model;
            this.price = price;
        }
        getPrice() {
            return this.price;
        }
        changePrice(newPrice) {
            return this.price = newPrice;
        }
    }

}


{
    class Storage {
        constructor(items) {
            this.items = items;
        }
        getItems() {
            return this.items;
        }
        addItem(newItem) {
            return this.items.push(newItem);
        }
        removeItem(itemToRemove) {
            const itemIndex = this.items.findIndex(item => item === itemToRemove);
            return this.items.splice(itemIndex, 1);
        }
    }

    const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
    console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
    storage.addItem("Droid");
    console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
    storage.removeItem("Prolonger");
    console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
}

{

    class StringBuilder {
        constructor(initialValue) {
            this.value = value;
        }
        getValue() {
            return this.value;
        }
        padEnd(str) {
            this.value += str;
        }
        padStart(str) {
            return str += this.value
        }
        padBoth(str) {
            this.value = str + this.value + str;
        }
    }

    const builder = new StringBuilder(".");
    console.log(builder.getValue()); // "."
    builder.padStart("^");
    console.log(builder.getValue()); // "^."
    builder.padEnd("^");
    console.log(builder.getValue()); // "^.^"
    builder.padBoth("=");
    console.log(builder.getValue()); // "=^.^="
}



{
    class Car {
        #brand;
        constructor({ brand, modal, price }) {
            this.#brand = brand;
            this.modal = modal;
            this.price = price;
        }
        getBrand() {
            return this.#brand
        }
        changeBrand(newBrand) {
            this.#brand = newBrand;
        }
    }
    Car.getBrand()
}





{
    class Storage {
        #items;

        constructor(items) {
            this.#items = items;
        }

        getItems() {
            return this.#items;
        }

        addItem(newItem) {
            this.#items.push(newItem);
        }

        removeItem(itemToRemove) {
            this.#items = this.#items.filter(item =>
                item !== itemToRemove);
        }
    }

    const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
    console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
    storage.addItem("Droid");
    console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
    storage.removeItem("Prolonger");
    console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]

}



{
    class Car {
        #brand;
        #model;
        #price;

        constructor(brand, model, price) {
            this.#brand = brand;
            this.#model = model;
            this.#price = price;
        }

        get brand() {
            return this.#brand
        }

        set brand(newBrand) {
            this.#brand = newBrand;
        }

        get model() {
            return this.#model
        }

        set model(newModel) {
            this.#model = newModel;
        }
        get price() {
            return this.#price;
        }
        set price(newPrice) {
            this.#price = newPrice;
        }
    }
    Car.price();
}

{
    class Car {
        static MAX_PRICE = 50000;
        #price;
        constructor({ price }) {
            this.#price = price;
        }
        get price() {
            return this.#price;
        }
        set price(NewPrice) {
            if (NewPrice <= 50000)
                this.#price = NewPrice;
        }
    }
    const audi = new Car({ price: 35000 });
    console.log(audi.price); // 35000

    audi.price = 49000;
    console.log(audi.price); // 49000

    audi.price = 51000;
    console.log(audi.price); // 49000

}



{
    //     Выделить число
    //     важность: 4
    // Есть стоимость в виде строки "$120".То есть сначала идёт знак валюты, а затем – число.

    // Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

    //         Например:

    //     alert(extractCurrencyValue('$120') === 120); // true

    function extractCurrencyValue(str) {
        const correctValue = str.slice(1)
        const number = Number(correctValue);
        return number;
    }
    extractCurrencyValue('$120')
}


{
    //     Сумма свойств объекта
    //     важность: 5
    // Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

    // Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с 
    // помощью метода Object.values и цикла for..of.

    // Если объект salaries пуст, то результат должен быть 0.

    //     Например:

    let salaries = {
        "John": 100,
        "Pete": 300,
        "Mary": 250
    };

    let sumSalaries = 0;
    for (const salary of Object.values(salaries)) {
        sumSalaries += salary;
    }

}


{

    let calculator = {
        read() {
            this.a = Number(prompt())
            this.b = Number(prompt())

        },
        sum() {
            return this.a + this.b;

        },
        mul() {
            return this.a * this.b;
        },
    };
}
