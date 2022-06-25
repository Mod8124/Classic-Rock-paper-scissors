import mongoose from "mongoose";

const connect = async () => {
    try {
        const response = await mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true})
        if(response) {
         console.log(`base de datos on : ${response.connection.name}`)
        }
    } catch (err) {
        console.log(err)
    }
}

export default connect;