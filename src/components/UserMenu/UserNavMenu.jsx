import { StyledBox } from 'components/header/Header.styled';
import { ReactComponent as BookIcon } from 'images/svg/icon-book.svg';
import { ReactComponent as HomeIcon } from 'images/svg/icon-home.svg';
import { routes } from 'routes/config';
import { NavIcon, StyledSpanBorder } from './UserMenu.styled';

const { training, library } = routes;

export default function UserNavMenu() {
  return (
    <StyledBox>
      <NavIcon to={library.path}>
        <HomeIcon />
      </NavIcon>
      <NavIcon style={{ marginLeft: '13px' }} to={training.path}>
        <BookIcon />
      </NavIcon>
      <StyledSpanBorder></StyledSpanBorder>
    </StyledBox>
  );
}
