import { getAllEpisodes } from '../services/EpisodeService.js'

export async function index(request, response) {
  const [episodes, error] = await getAllEpisodes()

  if (error) return response.status(500).json({error: error.message})

  return response.status(200).json(episodes)
}