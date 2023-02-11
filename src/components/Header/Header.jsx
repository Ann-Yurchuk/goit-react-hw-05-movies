import { Link, List, Nav } from './Header.styled';

const headerItems = [
  { to: '/', title: 'Home' },
  { to: '/movies', title: 'Movies' },
];

export const Header = () => {
  return (
    <Nav>
      <List>
        {headerItems.map(headerItem => (
          <li>
            <Link to={headerItem.to}>{headerItem.title}</Link>
          </li>
        ))}
      </List>
    </Nav>
  );
};
