const student = {
    name: 'Ismail Hossen',
    id: 121,
    address: 'Sitakunda, Chittagong',
    isSingle: false,
    friends: ['Ratul', 'Reaz', 'Tushar', 'Sabbir'],
    movies: [{name: 'no. 1',year: 2015}, {name: 'king me', year: 2018}],
    act: function(){
        console.log('Professional Web Developer');
    },
    car: {
        brand: 'tesla',
        price: 50000000,
        made: 2025,
        menufacturer: {
            name: 'tesla',
            ceo: 'Elon Mask',
            country: 'UK'
        }
    }
}
// console.log(student.friends);
console.log(student.act);
student.act();