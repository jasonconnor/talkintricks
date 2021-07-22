import EpisodeService from '../services/EpisodeService.js'

export default class EpisodeController {
  static index = async (request, response, next) => {
    const [episodes, error] = await EpisodeService.getAllEpisodes()

    if (error) {
      return response.status(500).json({error: error.message})
    }

    return response.status(200).json(episodes)
  }
}