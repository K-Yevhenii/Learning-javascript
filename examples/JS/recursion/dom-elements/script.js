function getTagsCount(element) {
    let childrenCount = element.children.length;
    for (let i = 0; i < element.children.length; i++) {
        childrenCount += getTagsCount(element.children[i]);

    }

    return childrenCount;
}
console.log(getTagsCount(document));

console.log(document.querySelectorAll('*').length);