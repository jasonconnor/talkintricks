export default class EpisodeController {
  static index = (request, response, next) => {
    return response.status(200).json({ok: true})
  }
}