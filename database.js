const mongoose=  require('mongoose');
const connectDatabase = async()=>{
    const client = await mongoose.connect('mongodb+srv://vinniiee:qwertyuiop@zippy.93zjxtw.mongodb.net/?retryWrites=true&w=majority');
}
connectDatabase();

const citySchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        state:{
            type:String
        },
        country:{
            type:String,
            required: true
        },
        lat:{
            type:String,
            required:true
        },
        lon:{
            type: String,
            required: true
        }
});
const City =  mongoose.model('City',citySchema);
module.exports = City;  




// const newCity = new City({name:"dewdew",state:"dwdewdwe",country:"dewdedw",lat:"edewdedew",lon:"dewdewdwedw"});