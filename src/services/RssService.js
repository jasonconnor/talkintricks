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
        image_url: 'https://talkintricks.com/assets/images/sq_logo.png',
        pubDate: new Date(),
        webMaster: 'talkintricks22@gmail.com (Jason Connor)',
        managingEditor: 'talkintricks22@gmail.com (Frank Vazquez)',
        categories: ['Sports', 'Science', 'Tricking', 'Philosophy'],
        copyright: 'Copyright 2021, Talkin\' Tricks',
        docs: 'https://validator.w3.org/feed/docs/rss2.htm',
        generator: 'https://github.com/dylang/node-rss',
        custom_namespaces: {
          'media': 'http://www.itunes.com/dtds/podcast-1.0.dtd',
          'itunes': 'http://www.itunes.com/dtds/podcast-1.0.dtd',
          'dcterms': 'http://www.itunes.com/dtds/podcast-1.0.dtd',
          'spotify': 'http://www.itunes.com/dtds/podcast-1.0.dtd',
          'psc': 'http://www.itunes.com/dtds/podcast-1.0.dtd',
        },
        custom_elements: [
          {'itunes:author': 'Talkin\' Tricks'},
          {'itunes:explicit': 'yes'},
          {'itunes:complete': 'no'},
          {'itunes:type': 'episodic'},
          {'spotify:limit': '20'},
          {'spotify:countryOfOrigin': 'us gb au'},
          {'itunes:owner': [
            {'itunes:name': 'Talkin\' Tricks'},
            {'itunes:email': 'talkintricks22@gmail.com'}
          ]},
          {'itunes:image': {
            _attr: {
              href: 'https://talkintricks.com/assets/images/sq_logo.png'
            }
          }},
          {'itunes:category': [
            {
              _attr: {
                text: 'Sports'
              }
            },
            {'itunes:category': {
              _attr: {
                text: 'Tricking'
              }
            }},
            {'itunes:category': {
              _attr: {
                text: 'Philosophy'
              }
            }},
            {'itunes:category': {
              _attr: {
                text: 'Science'
              }
            }}
          ]},
        ]
       })

      try {
        const episodes = await EpisodeService.getAllEpisodes()

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

        resolve(feed.xml())
      } catch (error) {
        reject(error.message)
      }
    })
  }
}