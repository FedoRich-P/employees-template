function likes(names) {
    let string;
    switch (names.length) {
        case 0:
            string = 'no one';
            break;
        case 1:
            string = names.join(', ')
            break;
        case 2:
            string = names.join(' and ')
            break;
        case 3:
            string = `${names[0]}, ${names[1]} and ${names[2]}`
            break;
        default:
            string = `${names[0]}, ${names[1]} and ${names.length - 2} others`
    }

    return string + (names.length <= 1 ? ' likes this' : ' like this');
}

console.log(likes([])) //, 'no one likes this');
console.log(likes(['Peter'])) //, 'Peter likes this');
console.log(likes(['Jacob', 'Alex'])) //, 'Jacob and Alex like this');
console.log(likes(['Max', 'John', 'Mark'])) //, 'Max, John and Mark like this');
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])) //, 'Alex, Jacob and 2 others like this')