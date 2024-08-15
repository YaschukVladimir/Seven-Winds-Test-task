import { TableRow, TableCell, Box, TextField } from "@mui/material";
import { CreateRowData } from "../../types/types";
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { useState } from "react";
import { EID } from "../../const/const";
import { useLazyCreateRowQuery, useLazyUpdateRowQuery } from "../../store/data-api";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { addRow, changeRow, setIsAddingRow, setIsUpdatingRow } from "../../store/app-slice";

type UpdateRowProps = {
    rowId: number;
}

function UpdateRow({ rowId }: UpdateRowProps): React.JSX.Element {

    const dispatch = useAppDispatch();
    const isUpdatingRow = useAppSelector((state) => state.appSlice.isUpdatingRow);
    const isAddingRow = useAppSelector((state) => state.appSlice.isAddingRow);

    const [createRow] = useLazyCreateRowQuery();
    const [updateRow] = useLazyUpdateRowQuery();

    const [newChild, setNewChild] = useState<CreateRowData>({
        equipmentCosts: 0,
        estimatedProfit: 0,
        machineOperatorSalary: 0,
        mainCosts: 0,
        materials: 0,
        mimExploitation: 0,
        overheads: 0,
        parentId: rowId === 0 ? null : rowId,
        rowName: "",
        salary: 0,
        supportCosts: 0
    });


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewChild((prevChild) => ({
            ...prevChild,
            [name]: value,
        }));
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (isAddingRow) {
            if (e.key === 'Enter') {
                createRow({
                    eID: EID,
                    body: newChild
                }).unwrap()
                    .then((res) => {
                        const payload = {
                            res,
                            rowId: rowId
                        };
                        dispatch(addRow(payload));
                        dispatch(setIsAddingRow(false));
                    }) 
            }
        }
        if (isUpdatingRow) {
            if (e.key === 'Enter') {
                updateRow({
                    eID: EID,
                    rID: rowId,
                    body: newChild
                }).unwrap()
                    .then((res) => {
                        const payload = {
                            res,
                            rowId: rowId
                        };
                        dispatch(changeRow(payload));
                        dispatch(setIsUpdatingRow(false));
                    })
                
            }
        }
        
    };

    return (
        <TableRow >
            <TableCell sx={{ pl: 4, borderBottom: 'none' }}>
                <Box sx={{ position: 'relative'}}>
                    <TextSnippetIcon />
                </Box>
            </TableCell>
            <TableCell sx={{borderBottom: 'none'}}>
                <TextField
                    name="rowName"
                    value={newChild.rowName}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                    placeholder="Введите название"
                    size="small"
                />
            </TableCell>
            <TableCell sx={{borderBottom: 'none'}}>
                <TextField
                    name="salary"
                    type="number"
                    value={newChild.salary}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                    placeholder="0"
                    size="small"
                />
            </TableCell>
            <TableCell sx={{borderBottom: 'none'}}>
                <TextField
                    name="equipmentCosts"
                    type="number"
                    value={newChild.equipmentCosts}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                    placeholder="0"
                    size="small"
                />
            </TableCell>
            <TableCell sx={{borderBottom: 'none'}}>
                <TextField
                    name="supportCosts"
                    type="number"
                    value={newChild.supportCosts}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                    placeholder="0"
                    size="small"
                />
            </TableCell>
            <TableCell sx={{borderBottom: 'none'}}>
                <TextField
                    name="estimatedProfit"
                    type="number"
                    value={newChild.estimatedProfit}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                    placeholder="0"
                    size="small"
                />
            </TableCell>
        </TableRow>
    )
}

export default UpdateRow;
