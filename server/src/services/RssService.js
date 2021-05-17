import rss from 'rss'

import Episode from '../models/EpisodeModel.js'

export default class RssService {
  static generateFeed = () => {
    const options = {
      title: 'Talkin Tricks',
      description: 'A podcast for discussing tricking theory, terminology, and culture',
      feed_url: 'https://talkintricks.com/api/rss',
      site_url: 'https://talkintricks.com',
      language: 'en',
      categories: ['Sports', 'Tricking', 'Martial Arts']
    }

    const feed = new rss(options)
  }
}