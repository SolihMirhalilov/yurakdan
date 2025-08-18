import mongoose from "mongoose"

const connect = async() => {
    try{
       await mongoose.connect(process.env.MONGO_URI , {
                useNewUrlParser: true,
                useUnifiedTopology: true,
       })
       console.log("Сервер работчи и подключон к MONGO ATLAS")
       
    }catch (error){
        console.log("Сервак на MONGO ATLAS не работает" , error.message)
        process.exit(1)
    }

}

export default connect;