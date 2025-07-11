// Aggregate total amount by category - {food: 250, transport: 50, entertaiment: 200}

const expenses = [
    { category: "food", amount: 150 },
    { category: "transport", amount: 50 },
    { category: "food", amount: 100 },
    { category: "entertainment", amount: 200 },
];
expenses.reduce((acc, { category, amount }) => {
    if (acc[category]) {
        acc[category] += amount;
    } else {
        acc[category] = amount;
    }
    return acc;
}, {});