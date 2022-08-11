const numbers = [45, 65, 23, 98, 19];
// for(let i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }
for(const number of numbers){
    // console.log(number);
}
const products = [
    {id: 1, name: 'walton Phone', price: 19000},
    {id: 2, name: 'Iwalton phone', price: 19000},
    {id: 3, name: 'Mac Book air', price: 19000},
    {id: 4, name: 'Levenovo c34', price: 19000},
    {id: 5, name: 'Samphony v75', price: 19000},
    {id: 6, name: 'Dell insprion laptop', price: 19000},
    {id: 7, name: 'Nokia phone', price: 19000},
    {id: 8, name: 'Black berry', price: 19000},
    {id: 9, name: 'Realme narzo 20 phone', price: 19000},
    {id: 10, name: 'Walton Monitor LapTop', price: 19000},
]
// for(const product of products){
//     console.log(product);
// }
function matchedProudcts(products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }

    }
    return matched;
}
const result = matchedProudcts(products, 'laptop');
console.log(result);