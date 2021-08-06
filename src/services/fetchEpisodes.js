export default async function fetchEpisodes() {
  try {
    const epsiodes = await import('../episodes.json')
    return epsiodes.default
  } catch(error) {
    throw new Error('Failed to load episodes')
  }
}