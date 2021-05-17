import StreamService from '../services/StreamService.js'

export default class StreamController {
  static index = async (request, response, next) => {
    const episodes = await StreamService.fetchStreams()
    console.log(episodes)

    return response.status(200).json(episodes)
  }
}