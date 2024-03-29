function solve(areaFn, volFn, input) {
    const data = JSON.parse(input);
    const result = [];

    for (let fig of data) {
        result.push({
            area: areaFn.call(fig),
            volume: volFn.call(fig)
        });
    }
    return result;
    }