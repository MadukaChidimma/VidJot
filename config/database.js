if(process.env.NODE_ENV === 'production'){
module.exports ={mongoURI: 'mongodb+srv://Hephzy:Hephzy@cluster0-rtkd2.mongodb.net/test?retryWrites=true&w=majority'}
} else {
module.exports = {mongoURI: 'mongodb://localhost:27017/vidjot-dev'}
}
