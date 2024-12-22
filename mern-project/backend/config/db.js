import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_RUI, {
            useUnifieldTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1); // process code 1 means exit with failure, 0 means succsss
    }
};