import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';

import { NavBar, Footer } from '../../components/Root';
import { LAYOUT_STYLE } from './RootStyles';

const Root = () => {
  return (
    <Box component="main" sx={LAYOUT_STYLE}>
      <NavBar />

      <Outlet />

      <Footer />
    </Box>
  );
};

export default Root;
