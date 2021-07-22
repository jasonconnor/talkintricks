import RssService from '../services/RssService.js'

export default class RssController {
  static getFeed = async (request, response, next) => {
    const [feed, error] = await RssService.createFeed()

    if (error) {
      return response.status(500).json({error: error.message})
    }

    return response.status(200).send(feed)
  }
}