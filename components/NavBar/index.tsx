import React from 'react';
import Link from 'next/link';

import {
  Menu,
  Button,
  Link as Anchor,
  Flex,
  MenuItem
} from '@chakra-ui/react';

const NavBar: React.FC = () => {
  return (
    <Flex >
      <Menu id='r34r34'>
        <Button>
          <MenuItem>
            <Link href='/Feed' ><Anchor>Feed</Anchor></Link>
          </MenuItem>
        </Button>
        <Button>
          <MenuItem>
            <Link href='/Profile' ><Anchor>Profile</Anchor></Link>
          </MenuItem>
        </Button>
      </Menu>
    </Flex>
  );
}

export default NavBar;