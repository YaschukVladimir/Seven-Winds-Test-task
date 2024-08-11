
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AppsIcon from '@mui/icons-material/Apps';
import ReplyIcon from '@mui/icons-material/Reply';

export default function ButtonAppBar() {
  return (
    <Box >
      <AppBar position="static" 
        color="default"
        enableColorOnDark
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <AppsIcon />
            
          </IconButton>
          <IconButton>
            <ReplyIcon />
          </IconButton>
          <IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Просмотр
            </Typography>
          </IconButton>
          <IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Управление
            </Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
