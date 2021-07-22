import feed from '../feed.js'

import EpisodeService from './EpisodeService.js'

export default class RssService {
  static createFeed = async () => {
    try {
      const [episodes, error] = await EpisodeService.getAllEpisodes()

      if (error) {
        console.error(error.message)
        throw new Error('Overwrite!')
      }

      episodes.forEach((episode) => {
        feed.item({
          title: episode.title,
          link: 'https://talkintricks.com/stream',
          description: episode.description,
          date: episode.date,
          author: 'talkintricks22@gmail.com',
          enclosure: {
            url: episode.url,
            type: 'audio/mpeg'
          },
          custom_elements: [
            {'itunes:duration': episode.duration},
            {'content:encoded': episode.description},
          ]
        })
      })

      const xml = feed.xml()

      return [xml, null]
    } catch (error) {
      return [null, error]
    }
  }
}