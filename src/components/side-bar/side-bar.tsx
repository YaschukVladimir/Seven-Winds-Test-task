import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SelectedListItem from '../side-bar-list-item/side-bar-list-item';
import "./side-bar.scss";
import { Box, Typography, IconButton, List } from '@mui/material';

function SideBar(): React.JSX.Element {
    return (
        <Box
            component="section"
            sx={{
                
                bgcolor: 'background.paper',
                display: 'flex',
                flexDirection: 'column',
                padding: 2,
                boxShadow: 1,
                height: '100vh',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 2,
                }}
            >
                <Box>
                    <Typography variant="h6" component="span">
                        Название проекта
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Аббревиатура
                    </Typography>
                </Box>
                <IconButton size="small">
                    <ExpandMoreIcon />
                </IconButton>
            </Box>

            <List component="nav">
                <SelectedListItem />
            </List>
        </Box>
    );
}

export default SideBar;