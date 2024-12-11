// const mongoose=require('mongoose');
// const productSchema = new mongoose.Schema({
//     name : String,
//     price : Number,
//     description : String,
//     ratings : Number,
//     images:[{
//         image: String
//     }],
//     category : String,
//     seller :String,
//     stock :Number
// })
// const productModel = mongoose.model('product',productSchema);
// module.exports=productModel;

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    description: String,
    ratings: String,
    images : [
        {
            image: String
        }
    ],
    category: String,
    seller: String,
    stock: String,
    numOfReviews: String,
    createdAt: Date
});

const productModel = mongoose.model('Product', productSchema);

module.exports = productModel;