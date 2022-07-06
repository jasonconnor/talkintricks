import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Header = styled.header`
  align-items: center;
  background: #151515;
  box-shadow: 1px 0 5px 0 rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 60px;
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
`

export const HeaderLink = styled(Link)`
  text-decoration: none;
  color: #dedede;
  font-size: 18px;

  &:hover {
    color: #efefef;
    background: #21172c;
  }
`

export const Logo = styled(HeaderLink)`
  font-size: 24px;
  padding: 16px;
  
`

export const NavLink = styled(HeaderLink)`
  font-size: 18px;
  padding: 20px;
`