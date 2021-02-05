const findDuplicates = (a, b) => {
    let result = new Set();
    let set = new Set();

    if(a.length === 0 && b.length)
    return []

    a.forEach(( rule , index ) => {
        set.add(rule) // (O(n)) 
    })

    b.forEach(( rule , index ) => {
        if(set.has(rule)){ 
            result.add(rule) // (O(n)) 
        }
    })

    return [...result];
}

export default findDuplicates