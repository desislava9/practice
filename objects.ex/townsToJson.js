function townsToJson(arr) {
 console.log(arr[0].split("|").map(x=> x.trim()).filter(x=>!!x))
}
townsToJson(['|Town|Latitude | Longitude |',

'| Sofia | 42.696552 | 23.32601 |',

'| Beijing | 39.913818 | 116.363625 |']);