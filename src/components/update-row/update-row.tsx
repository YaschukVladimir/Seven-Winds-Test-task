import { TableRow, TableCell, Box, TextField } from "@mui/material";
import { CreateRowData } from "../../types/types";
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { useState } from "react";
import { EID } from "../../const/const";
import { useLazyCreateRowQuery, useLazyGetDataQuery, useLazyUpdateRowQuery } from "../../store/data-api";

type UpdateRowProps = {
    setIsAddingChild?: (bool: boolean) => void;
    setIsUpdatingRow?: (bool: boolean) => void;
    rowId: number;
}

function UpdateRow({ rowId, setIsAddingChild, setIsUpdatingRow }: UpdateRowProps): React.JSX.Element {
    const [getData, {isLoading}] = useLazyGetDataQuery();
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
        parentId: rowId,
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
        if (setIsAddingChild !== undefined) {
            if (e.key === 'Enter') {
                createRow({
                    eID: EID,
                    body: newChild
                }).unwrap()
                    .then(() => {
                        getData(EID);
                        setIsAddingChild(false);
                    }) 
            }
        }
        if (setIsUpdatingRow !== undefined) {
            if (e.key === 'Enter') {
                updateRow({
                    eID: EID,
                    rID: rowId,
                    body: newChild
                }).unwrap()
                    .then(() => {
                        getData(EID);
                        setIsUpdatingRow(false);
                    })
                
            }
        }
        
    };

    return (
        <TableRow>
            <TableCell sx={{ pl: 4 }}>
                <Box sx={{ position: 'relative' }}>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 8,
                            width: '2px',
                            height: '50%',
                            backgroundColor: 'black',
                        }}
                    />
                    <TextSnippetIcon />
                </Box>
            </TableCell>
            <TableCell>
                <TextField
                    name="rowName"
                    value={newChild.rowName}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                    placeholder="Введите название"
                    size="small"
                />
            </TableCell>
            <TableCell>
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
            <TableCell>
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
            <TableCell>
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
            <TableCell>
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
