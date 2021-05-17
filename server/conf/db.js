import mongoose from 'mongoose'

<<<<<<< HEAD
const connect = async () => {
  const url = 'mongodb://localhost:27107/talkintricks'

  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
=======
const connect = async (url) => {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
>>>>>>> d6b5381dd84f5ad2261d583de7f77028e73715cc
  }

  try {
    await mongoose.connect(url, options)
    console.log('Connected to MongoDB.')
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

export default connect