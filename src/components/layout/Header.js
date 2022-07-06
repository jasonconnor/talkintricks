import * as S from '../../styles/HeaderStyles'

export function Header() {
  return (
    <S.Header>
      <S.Logo to='/'>Talkin Tricks</S.Logo>
      
      <S.Nav>
        <S.NavLink to='/'>Home</S.NavLink>
        <S.NavLink to='/stream'>Stream</S.NavLink>
        <S.NavLink to='/shop'>Shop</S.NavLink>
      </S.Nav>
    </S.Header>
  )
}