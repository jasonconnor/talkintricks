import EpisodeService from '../services/EpisodeService.js'

export default class EpisodeController {
  static index = async (request, response, next) => {
    try {
      const episodes = await EpisodeService.getAllEpisodes()
      return response.status(200).json(episodes)
    } catch (error) {
      return response.status(500).json({error: error})
    }
  }
}