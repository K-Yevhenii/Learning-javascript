const orderStatuses = {
    NEW: "new",
    CONFIRMED: "confirmed",
    IN_PROGRESS: "inProgress",
    DELIVERED: "delivered",
    CANCELLED: "cancelled",
};
const orderStatusPriorities = {
    [orderStatuses.NEW]: 0,
    [orderStatuses.CONFIRMED]: 1,
    [orderStatuses.IN_PROGRESS]: 2,
    [orderStatuses.DELIVERED]: 3,
    [orderStatuses.CANCELLED]: 4,
};

const orders = [
    {
        id: 1,
        status: orderStatuses.NEW,
        createdAt: "2024-09-01",
    },
    {
        id: 2,
        status: orderStatuses.CANCELLED,
        createdAt: "2024-08-30",
    },
    {
        id: 3,
        status: orderStatuses.IN_PROGRESS,
        createdAt: "2024-08-31",
    },
    {
        id: 4,
        status: orderStatuses.NEW,
        createdAt: "2024-08-28",
    },
    {
        id: 5,
        status: orderStatuses.DELIVERED,
        createdAt: "2024-09-05",
    },
    {
        id: 6,
        status: orderStatuses.CONFIRMED,
        createdAt: "2024-08-31",
    },
    {
        id: 7,
        status: orderStatuses.CONFIRMED,
        createdAt: "2024-08-22",
    },
    {
        id: 8,
        status: orderStatuses.CANCELLED,
        createdAt: "2024-09-03",
    },
    {
        id: 9,
        status: orderStatuses.IN_PROGRESS,
        createdAt: "2024-07-06",
    },
    {
        id: 10,
        status: orderStatuses.DELIVERED,
        createdAt: "2024-08-12",
    },
];

orders.sort((a, b) => {
    if (a.status === b.status) {
        return Date.parse(a.createdAt) - Date.parse(b.createdAt);
    }
    return orderStatusPriorities[a.status] - orderStatusPriorities[b.status];
});