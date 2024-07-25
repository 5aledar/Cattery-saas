// const cron = require('node-cron');
// const Supply = require('../models/supplyModel');
// const Cat = require('../models/catModel')
// const mongoose = require('mongoose')
// let cats = [];
// // mongoose.connect('mongodb://localhost:27017/Cattery_saas')
// // Find all documents in the CatSupply collection
// let rate = 0
// Cat.find()
//     .then(documents => {
//         cats = documents;
//         console.log('CatSupply array:', cats);
//         cats.map((cat) => {
//             if (cat.age < 1) {
//                 rate += 0.05
//             } else if (cat.age > 1 && cat.age < 7) {
//                 console.log(cat.age);
//                 rate += 0.12
//             } else if (cat.age > 8) {
//                 rate += 0.09
//             }
//         })
//     })

// const calcRate = () => {

//     for (let i = 0; i < cats.length; i++) {

//         if (cats[i].age < 1) {
//             rate += 0.05
//         } else if (cats[i].age > 1 && cats[i].age < 7) {
//             // console.log(cats[i].age);
//             rate += 0.12
//         } else if (cats[i].age > 8) {
//             rate += 0.09
//         }
//         console.log(rate);
//     }

//     return rate
// }
// console.log(calcRate());

// // cron.schedule('*/1 * * * *', () => {

// //     console.log(`ola`)

// // });


