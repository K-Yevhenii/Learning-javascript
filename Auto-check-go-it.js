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

    const products = [
        { name: "Radar", price: 1300, quantity: 4 },
        { name: "Scanner", price: 2700, quantity: 3 },
        { name: "Droid", price: 400, quantity: 7 },
        { name: "Grip", price: 1200, quantity: 9 },
    ];

    function calculateTotalPrice(productName) {

        for (const product of products) {



        }
        return sumProduct;
    }
    calculateTotalPrice("Radar")
}