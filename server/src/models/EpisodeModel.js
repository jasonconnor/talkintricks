import mongoose from 'mongoose'

const EpisodeModel = mongoose.Schema({
  title: {
    type: String
  },
  url: {
    type: String
  },
  description: {
    type: String
  },
  author: {
    type: String,
    default: 'Talkin Tricks'
  },
  date: {
    type: Date,
    default: () => new Date()
  }
})

export default mongoose.model('Episode', EpisodeModel)