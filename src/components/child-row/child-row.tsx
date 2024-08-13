import { TableRow, TableCell, Box, IconButton } from "@mui/material";
import { EntityType } from "../../types/types";
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

type ChildRowProps = {
    childRow: EntityType;
    handleDeleteRow: (id: number) => void;
    handleAddChild: (id: number) => void;
    index: number;
};

function ChildRow({ childRow, handleAddChild, handleDeleteRow, index }: ChildRowProps): React.JSX.Element {
    return (
        <TableRow key={childRow.id}>
                    <TableCell sx={{ pl: 4, position: 'relative' }}>
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 8,
                                width: '2px',
                                height: index === 0 ? '50%' : '100%',
                                backgroundColor: 'black',
                            }}
                        />
                        <IconButton onClick={() => handleAddChild(childRow.id)}>
                            <TextSnippetIcon />
                        </IconButton>
                        <IconButton onClick={() => handleDeleteRow(childRow.id)}>
                            <DeleteForeverIcon />
                        </IconButton>
                    </TableCell>
                    <TableCell>{childRow.rowName}</TableCell>
                    <TableCell>{childRow.salary}</TableCell>
                    <TableCell>{childRow.equipmentCosts}</TableCell>
                    <TableCell>{childRow.supportCosts}</TableCell>
                    <TableCell>{childRow.estimatedProfit}</TableCell>
                </TableRow>
    )
}

export default ChildRow;
