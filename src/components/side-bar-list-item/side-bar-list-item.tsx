import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import { SIDE_MENU } from '../../const/const';

export default function SelectedListItem() {
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
    };

    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <List component="nav" aria-label="main mailbox folders">
                {SIDE_MENU.map((item) => {
                    return (
                        <ListItemButton key={item}
                            selected={selectedIndex === 0}
                            onClick={(event) => handleListItemClick(event, 0)}
                        >
                            <ListItemIcon>
                                <ViewQuiltIcon />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    )
                })}

            </List>
        </Box>
    );
}
