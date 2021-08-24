import feed from '../feed.js'

import { getAllEpisodes } from './EpisodeService.js'

export async function createFeed() {
  try {
    const [episodes, error] = await getAllEpisodes()

    if (error) throw new Error('Encountered an error retrieving episodes.')

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