import rss from 'rss'

import EpisodeService from './EpisodeService.js'

export default class RssService {
  static createFeed = () => {
     return new Promise(async (resolve, reject) => {
       const feed = new rss({
        title: 'Talkin\' Tricks',
        description: 'Welcome to Talkin\' Tricks! The Tricking Podcast where Jason and Frank discuss the intricacies of Trick Theory, explore the philosophy of tricking, and just generally ask interestingly pointless questions!',
        site_url: 'https://talkintricks.com',
        feed_url: 'https://api.talkintricks.com/rss',
        // image_irl: TODO: /path/to/logo.png,
        pubDate: new Date(),
        webMaster: 'talkintricks22@gmail.com (Jason Connor)',
        managingEditor: 'talkintricks22@gmail.com (Frank Vazquez)',
        categories: ['Sports', 'Science', 'Tricking', 'Philosophy'],
        copyright: 'Copyright 2021, Talkin\' Tricks',
        docs: 'https://validator.w3.org/feed/docs/rss2.htm',
        generator: 'https://github.com/dylang/node-rss',
       })

      try {
        const episodes = await EpisodeService.getAllEpisodes()

        episodes.forEach((episode) => {
          feed.item({
            title: episode.title,
            link: 'https://talkintricks.com/stream',
            description: 'episode desc',
            date: episode.date,
            author: 'talkintricks22@gmail.com',
            enclosure: {
              url: episode.url,
              type: 'audio/mpeg'
            }
          })
        })

        resolve(feed.xml())
      } catch (error) {
        console.log(error)
        reject(error.message)
      }
    })
  }
}