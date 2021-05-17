import mongoose from 'mongoose'
export default async function connect(url) {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }

  try {
    await mongoose.connect(url, options)
    console.log('Connected to MongoDB.')
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}