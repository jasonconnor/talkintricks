import { DescriptionDate, DescriptionText, DetailsContainer } from '../../styles/PlayerStyles'

export function PlayerDetails({description, date}) {
  return (
    <DetailsContainer>
      <DescriptionText>{description}</DescriptionText>

      <DescriptionDate>{date}</DescriptionDate>
    </DetailsContainer>
  )
}