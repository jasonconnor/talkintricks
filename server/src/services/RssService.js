import { Feed } from 'feed'

import Episode from '../models/EpisodeModel.js'

export default class RssService {
  static createFeed = () => {
    return new Promise(async (resolve, reject) => {
      const feed = new Feed({
        title: 'Talkin Tricks',
        description: 'desc',
        id: 'https://talkintricks.com',
        link: 'https://talkintricks.com/rss',
        language: 'en',
        copyright: 'All rights reserved 2021 Talkin Tricks',
        updated: () => new Date(),
        feedLinks: {
          json: 'https://talkintricks.com/rss/json',
          atom: 'https://talkintricks.com/rss/atom'
        },
        author: {
          name: 'Talkin Tricks',
          link: 'https://talkintricks.com'
        }
      })

      feed.addCategory('Sports')
      feed.addCategory('Tricking')

      try {
        const episodes = await Episode.find().sort({date: -1})

        episodes.forEach((episode) => {
          feed.addItem({
            title: episode.title,
            description: 'episode desc',
            date: episode.date,
            author: [
              {
                name: 'Frank Vazquez',
              },
              {
                name: 'Jason Connor'
              }
            ],
            contributor: [
              {
                name: 'Steven French'
              },
              {
                name: 'Alex Hunter'
              },
              {
                name: 'Third Contributor'
              }
            ]
          })
        })

        resolve(feed)
      } catch (error) {
        console.log(error)
        reject(error)
      }
    })
  }
}