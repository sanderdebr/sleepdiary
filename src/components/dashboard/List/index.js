import styled from "styled-components";
import Link from "next/link";

import { ListItem } from "./ListItem";
import { ListIcon } from "./ListIcon";

function List({ items = [], pathname, open }) {
  return (
    <StyledList open={open}>
      {items.map((item, i) => (
        <Link href={item.title.toLowerCase()} key={i}>
          <a>
            <ListItem active={item.icon === pathname}>
              <ListIcon active={item.icon === pathname} icon={item.icon} />
              {item.title}
            </ListItem>
          </a>
        </Link>
      ))}
      <Link href="/auth/sign-out">
        <a>
          <Logout open={open}>
            <ListIcon icon="logout" />
            logout
          </Logout>
        </a>
      </Link>
    </StyledList>
  );
}

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  display: ${({ open }) => (open ? "block" : "none")};
  background: ${({ open, theme }) => (open ? theme.palette.bg : "none")};
  right: ${({ open }) => (open ? "10%" : "0")};
  top: ${({ open }) => (open ? "13%" : "0")};
  position: ${({ open }) => (open ? "absolute" : "inherit")};
  border-radius: ${({ theme }) => theme.general.borderRadius}px;
  z-index: 3;
  box-shadow: 10px 10px 96px -44px rgba(0, 0, 0, 0.75);

  @media (min-width: ${({ theme }) => theme.media.desktop}px) {
    display: block;
    box-shadow: none;
  }
`;

const Logout = styled(ListItem)`
  color: ${({ theme }) => theme.palette.primary};
  position: ${({ open }) => (open ? "inherit" : "absolute")};
  bottom: 2rem;
  svg {
    fill: ${({ theme }) => theme.palette.primary};
  }
`;

export default List;
