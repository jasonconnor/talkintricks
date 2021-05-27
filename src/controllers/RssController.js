import RssService from '../services/RssService.js'

export default class RssController {
  static getFeed = async (request, response, next) => {
    try {
      const feed = await RssService.createFeed()
      return response.status(200).send(feed)
    } catch (error) {
      console.log(error)
      return response.status(500).json({error: error.message})
    }
  }
}