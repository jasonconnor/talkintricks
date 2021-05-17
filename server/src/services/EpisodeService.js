import Episode from '../models/EpisodeModel.js'

export default class EpisodeService {
  static getAllEpisodes = () => {
    return new Promise((resolve, reject) => {
      try {
        const episodes = Episode.find()
        resolve(episodes)
      } catch (error) {
        console.log(error)
        reject(error)
      }
    })
  }
}