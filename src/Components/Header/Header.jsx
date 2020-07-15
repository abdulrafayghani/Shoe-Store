import React from 'react';
import { AppBar, Toolbar, makeStyles, Button, Box } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    // alignItems: 'center'
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const Header = () => {
  const classes = useStyles();

  const navigate = useNavigate();

  return (
    <div >
      <AppBar  color="transparent" position='static'>
        <Toolbar>
          <Box minWidth='100%' display='flex' justifyContent='center'>
          <Box  >
            <Button onClick={() => navigate('/')}>Home</Button>
            <Button onClick={() => navigate('/products')}>Products</Button>
          </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};
