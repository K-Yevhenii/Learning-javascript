function checkForSpam(message) {
    message = message.toLowerCase()

    return (
        // Checks that any value is truthy and stops check immediately as soon as it found truthy value
        message.includes("spam") || message.includes("sale")
    );

    // Checks that all values are truthy but stops check immediately as soon as it found falsy value
    // message.includes("spam") && message.includes("sale")


    // Priority of logical operators

    // foo || !bar && baz
    // 1. Checks !bar because logical NOT has the biggest priority
    // 2. Checks && because logical AND has the second priority
    // 3. Checks || because logical OR has the lowest priority

    // Double negation - converts to boolean

    // !(foo || bar) && baz
    // !!(!bar || foo || baz)
}