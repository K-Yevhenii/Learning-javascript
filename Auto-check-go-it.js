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
    const [useuserWithBiggestVisitsCount] = entryWithBiggestVisitsCount;
    console.log(useuserWithBiggestVisitsCount);

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
        "Mary": 250
    };

    function topSalary(salaries) {
        const salariesEntries = Object.entries(salaries);
        if (salariesEntries.length === 0) {
            return null;
        }
        let biggestSalaryEntry = null;
        for (let i = 0; i < salariesEntries.length; i++) {
            const [name, salary] = salariesEntries[1];

            if (!biggestSalaryEntry || biggestSalaryEntry[1] < salary) {
                biggestSalaryEntry = salary;
            }


        }

    }
    topSalary(salaries)
}