
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { TableRow, TableCell, IconButton, Box } from '@mui/material';
import { useEffect } from 'react';
import { EntityType } from '../../types/types';
import { useLazyDeleteRowQuery, useLazyGetDataQuery } from '../../store/data-api';
import { EID } from '../../const/const';
import UpdateRow from '../update-row/update-row';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { deleteRowFromState, setActiveRowId, setIsAddingRow, setIsUpdatingRow } from '../../store/app-slice';
import { RenderLine } from '../render-line/render-line';


type RowProps = {
    row: EntityType;
    level: number;
    index?: number;
};

function Row({ row, level, index }: RowProps) {
    const dispatch = useAppDispatch();
    const isAddingRow = useAppSelector((state) => state.appSlice.isAddingRow);
    const isUpdatingRow = useAppSelector((state) => state.appSlice.isUpdatingRow);
    const activeRowId = useAppSelector((state) => state.appSlice.activeRowId);
    const [getData, { data }] = useLazyGetDataQuery();
    const [deleteRow, { isSuccess: isRowDeleted }] = useLazyDeleteRowQuery();

    const handleDeleterow = (rowId: number): void => {
        deleteRow({ eID: EID, rID: rowId })
            .unwrap()
                .then(() => dispatch(deleteRowFromState(rowId)))
    }

    const handleAddChild = (rowId: number) => {
        if (isAddingRow || isUpdatingRow) {
            return;
        }
        dispatch(setIsAddingRow(true));
        dispatch(setActiveRowId(rowId));
    };

    const handleDoubleClick = (id: number): void => {
        if (isAddingRow) {
            return;
        }
        dispatch(setIsUpdatingRow(true));
        dispatch(setActiveRowId(id));
    }

    useEffect(() => {
        if (isRowDeleted) {
            getData(EID);
        }
    }, [isRowDeleted, data]);


    return (
        <>
            {isUpdatingRow && activeRowId === row.id ?
                <UpdateRow rowId={row.id}/> :
                <TableRow onDoubleClick={() => handleDoubleClick(row.id)}>
                    <TableCell sx={{
                            width: '240px',
                            pl: level * 4,
                            position: 'relative',
                            '&:hover .delete-icon': {
                                opacity: 1,
                                transform: 'translateX(0)',
                            },
                            '&:hover .icons-wrapper': {
                                bgcolor: 'lightGrey',
                            },
                            '& .icons-wrapper': {
                                position: 'relative',
                                '&::before': {
                                    content: index === 0 ? 'none' : '""',
                                    position: 'absolute',
                                    right: '82%',
                                    top: '50%',
                                    width: '24px',
                                    height: '1px', 
                                    bgcolor: 'grey',
                                    transform: 'translateY(-50%)', 
                                },
                                '&::after': {
                                    content: index === 0 ? 'none' : '""',
                                    position: 'absolute',
                                    right: 'calc(80% + 23px)', 
                                    top: '-16px',
                                    width: '1px', 
                                    height: `calc(100% + 32px)`,
                                    bgcolor: 'grey',
                                    transform: 'translateY(-50%)',
                                },
                            },
                        }}>
                        {level > 1 ? <RenderLine level={level} childLength={row.child.length} /> : ''}   
                        <Box className="icons-wrapper" sx={{
                            display: 'flex',
                            position: 'relative',
                            alignItems: 'center',
                            width: '72px',
                            height: '36px',
                            borderRadius: '4px'
                        }}>
                            <IconButton onClick={() => handleAddChild(row.id)} sx={{
                                    backgroundColor: 'transparent',
                                    boxShadow: 'none',
                                    zIndex: 10,
                                    '&:hover': {
                                        backgroundColor: 'transparent',
                                        boxShadow: 'none',
                                        transform: 'none',
                                    }}}>
                                <TextSnippetIcon />
                            </IconButton>
                            <IconButton className="delete-icon"
                                onClick={() => handleDeleterow(row.id)}
                                sx={{
                                    color: 'red',
                                    opacity: 0,
                                    position: 'absolute',
                                    left: 'calc(16px + 16px)',
                                    transition: 'opacity 0.3s ease, transform 0.3s ease',
                                    transform: 'translateX(-16px)',
                                    backgroundColor: 'transparent',
                                    boxShadow: 'none',
                                    '&:hover': {
                                        backgroundColor: 'transparent',
                                        boxShadow: 'none',
                                        transform: 'none',
                                    }
                                }}>
                                <DeleteForeverIcon sx={{}}/>
                            </IconButton>
                        </Box>
                    </TableCell>
                    <TableCell>{row.rowName}</TableCell>
                    <TableCell>{row.salary}</TableCell>
                    <TableCell>{row.equipmentCosts}</TableCell>
                    <TableCell>{row.supportCosts}</TableCell>
                    <TableCell>{row.estimatedProfit}</TableCell>
                </TableRow>}
                {row.child.length > 0 && row.child.map((childRow, index) => {
                return (
                    <Row key={childRow.id} row={childRow} level={level + 1} index={index + 1}/>
                )
            })}
        </>
    );
}

export default Row;
