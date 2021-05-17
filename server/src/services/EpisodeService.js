import Episode from '../models/EpisodeModel.js'

export default class EpisodeService {
  static getAllEpisodes = async () => {
    try {
      const episodes = await Episode.find()
    } catch (error) {
      console.log(error)
    }
  }
}