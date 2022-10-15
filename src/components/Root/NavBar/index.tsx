import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { NAVBAR_STYLE } from './NavBarStyles';

const NavBar = () => {
  return (
    <AppBar position="static" sx={NAVBAR_STYLE}>
      <Toolbar>
        <Typography variant="h5">Hello</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
