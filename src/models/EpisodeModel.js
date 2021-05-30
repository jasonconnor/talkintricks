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
  duration: {
    type: String,
    default: '00:00'
  },
  date: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('Episode', EpisodeModel)