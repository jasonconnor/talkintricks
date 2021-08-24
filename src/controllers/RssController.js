import { createFeed } from '../services/RssService.js'


export async function getFeed(request, response) {
  const [feed, error] = await createFeed()

  if (error) return response.status(500).json({error: error.message})

  return response.status(200).send(feed)
}