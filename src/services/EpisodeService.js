import Episode from '../models/EpisodeModel.js'

export default class EpisodeService {
  static getAllEpisodes = async () => {
    try {
      const episodes = await Episode.find().sort({date: -1})
      return [episodes, null]
    } catch (error) {
      return [null, error]
    }
  }
}