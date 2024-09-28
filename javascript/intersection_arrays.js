function intersection(...arrays){
    if(arrays.length === 0) return [];

    return arrays.reduce((acc, arr) => {
        const set = new Set(arr);
        return acc.filter(x => set.has(x));
    });
}

console.log(intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]));