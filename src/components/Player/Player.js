import { useState, useEffect } from 'react'

import fetchEpisodes from '../../services/fetchEpisodes'

export default function Player() {
  const [episodes, setEpisodes] = useState()

  const [loading, setLoading] = useState(true)
  const [playing, setPlaying] = useState(false)

  const togglePlay = () => {
    playing
      ? setPlaying(false)
      : setPlaying(true)
  }

  // Fetch Episodes
  useEffect(() => {
    console.log('initial render')
    fetchEpisodes().then((data) => {
      setEpisodes(data)
      setLoading(false)
    })
  }, [])

  return (
    <>


      <button onClick={() => togglePlay()}>{playing ? 'pause' : 'play'}</button>

      {/* Load Episode List */}
      <>
        { loading
          ? 'loading...'
          : episodes.map((episode) => (<li>{episode.title}</li>))
        }
      </>
    </>
  )
}