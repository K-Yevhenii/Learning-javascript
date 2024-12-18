function camelize(str) {
    const result = str.split('-')
    for (let i = 1; i < result.length; i++) {
        let capitalizedString = '';
        for (let y = 0; y < result[i].length; y++) {
            if (!y) {
                capitalizedString += result[i][y].toUpperCase()
            } else {
                capitalizedString += result[i][y]
            }
        }
        result[i] = capitalizedString;
    }


    return result.join('')
}
