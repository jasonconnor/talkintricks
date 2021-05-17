import RssService from '../services/RssService.js'

export default class RssController {
  static getFeed = () => {

  }
  
  static getJsonFeed = async (request, response, next) => {
    try {
      const feed = await RssService.createFeed()
      return response.status(200).json(feed.json1())
    } catch (error) {
      return response.status(500).json(error)
    }
  }
}