import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons'

import { Modal } from '../Modal'

import { 
  EpisodeListItem, 
  EpisodeListItemTitle,
  EpisodeListItemOptions,
  EpisodesList, 
  SmallControlIcon 
} from '../../styles/PlayerStyles'


export function PlayerList(props) {
  return (
    <Modal
      closeModal={props.closeModal}
    >
      <EpisodesList>
        {props.episodes.map((episode, key) => (
          <EpisodeListItem
            id={key}
            onClick = {() => props.selectEpisode(key)}
          >
            <EpisodeListItemTitle>{episode.title}</EpisodeListItemTitle>
            <EpisodeListItemOptions>
              {episode.duration}

              <SmallControlIcon
                icon={
                  props.playing && key === props.currentEpisode
                    ? faPause
                    : faPlay
                }
              />
            </EpisodeListItemOptions>
            </EpisodeListItem>
        ))}
      </EpisodesList>
    </Modal>
  )
}