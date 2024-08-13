// import TextSnippetIcon from '@mui/icons-material/TextSnippet';
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// import "./row.scss";
// import { TableRow, TableCell, IconButton, Box, TextField } from '@mui/material';
// import { useEffect, useState } from 'react';
// import { CreateRowData, EntityType } from '../../types/types';
// import { useLazyCreateRowQuery, useLazyDeleteRowQuery, useLazyGetDataQuery } from '../../store/data-api';
// import { EID } from '../../const/const';
// import ChildRow from '../child-row/child-row';
// import UpdateRow from '../update-row/update-row';


// type RowProps = {
//     row: EntityType;
// };

// function Row({ row }: RowProps) {

//     console.log(row, 'row');

//     const [getData] = useLazyGetDataQuery();
//     const [createRow, { data: createdRow, isLoading: isRowCreating, isSuccess: isRowCreated }] = useLazyCreateRowQuery();
//     const [deleteRow, { isSuccess: isRowDeleted }] = useLazyDeleteRowQuery();

//     const [isAddingChild, setIsAddingChild] = useState<boolean>(false);
//     const [newChild, setNewChild] = useState<CreateRowData>({
//         equipmentCosts: 0,
//         estimatedProfit: 0,
//         machineOperatorSalary: 0,
//         mainCosts: 0,
//         materials: 0,
//         mimExploitation: 0,
//         overheads: 0,
//         parentId: row.id,
//         rowName: "string",
//         salary: 0,
//         supportCosts: 0
//     });

//     const handleDeleterow = (rowId: number): void => {
//         deleteRow({ eID: EID, rID: rowId });
//     }

//     const handleAddChild = (rowId: number) => {
//         setIsAddingChild(true);
//         setNewChild((prevChild) => ({
//             ...prevChild,
//             parentId: rowId
//         }))
//     };

//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setNewChild((prevChild) => ({
//             ...prevChild,
//             [name]: value,
//         }));
//     };

//     const handleKeyPress = (e: React.KeyboardEvent) => {
//         if (e.key === 'Enter') {
//             setIsAddingChild(false);
//             createRow({
//                 eID: EID,
//                 body: newChild
//             });
//             console.log(createdRow, 'ssss');
//             // getData(EID);
//             // onAddChild(row.id);
//         }
//     };

//     function renderChildRows (row: EntityType) {
//         if (row.child.length) {
//             row.child.map((childRow, index) => (
//                 <TableRow key={childRow.id}>
//                     <TableCell sx={{ pl: 4, position: 'relative' }}>
//                         <Box
//                             sx={{
//                                 position: 'absolute',
//                                 top: 0,
//                                 left: 8,
//                                 width: '2px',
//                                 height: index === 0 ? '50%' : '100%',
//                                 backgroundColor: 'black',
//                             }}
//                         />
//                         <IconButton onClick={() => handleAddChild(childRow.id)}>
//                             <TextSnippetIcon />
//                         </IconButton>
//                         <IconButton onClick={() => handleDeleterow(childRow.id)}>
//                             <DeleteForeverIcon />
//                         </IconButton>
//                     </TableCell>
//                     <TableCell>{childRow.rowName}</TableCell>
//                     <TableCell>{childRow.salary}</TableCell>
//                     <TableCell>{childRow.equipmentCosts}</TableCell>
//                     <TableCell>{childRow.supportCosts}</TableCell>
//                     <TableCell>{childRow.estimatedProfit}</TableCell>
//                 </TableRow>
//             ))
//         }
//     }

//     useEffect(() => {
//         if (isRowCreated || isRowDeleted) {
//             getData(EID);
//         }
//     }, [isRowCreated, isRowDeleted]);

//     return (
//         <>
//             <TableRow>
//                 <TableCell>
//                     <IconButton onClick={() => handleAddChild(row.id)}>
//                         <TextSnippetIcon />
//                     </IconButton>
//                     <IconButton onClick={() => handleDeleterow(row.id)}>
//                         <DeleteForeverIcon />
//                     </IconButton>
//                 </TableCell>
//                 <TableCell>{row.rowName}</TableCell>
//                 <TableCell>{row.salary}</TableCell>
//                 <TableCell>{row.equipmentCosts}</TableCell>
//                 <TableCell>{row.supportCosts}</TableCell>
//                 <TableCell>{row.estimatedProfit}</TableCell>
//             </TableRow>
//             {row.child.length && row.child.map((childRow, index) => (
//                 <ChildRow childRow={childRow} index={index} handleAddChild={handleAddChild} handleDeleteRow={handleDeleterow}/>
//             ))}

//             {isAddingChild && (
//                 <UpdateRow newChild={newChild} handleInputChange={handleInputChange} handleKeyPress={handleKeyPress}/>
//             )}
//         </>
//     );
// }

// export default Row;


// import TextSnippetIcon from '@mui/icons-material/TextSnippet';
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// import "./row.scss";
// import { TableRow, TableCell, IconButton, Box } from '@mui/material';
// import { useEffect, useState } from 'react';
// import { CreateRowData, EntityType } from '../../types/types';
// import { useLazyCreateRowQuery, useLazyDeleteRowQuery, useLazyGetDataQuery } from '../../store/data-api';
// import { EID } from '../../const/const';
// import UpdateRow from '../update-row/update-row';


// type RowProps = {
//     row: EntityType;
//     depth?: number;
// };

// function Row({ row, depth = 0 }: RowProps) {
//     const [getData] = useLazyGetDataQuery();
//     const [createRow, { isSuccess: isRowCreated }] = useLazyCreateRowQuery();
//     const [deleteRow, { isSuccess: isRowDeleted }] = useLazyDeleteRowQuery();

//     const [isAddingChild, setIsAddingChild] = useState<boolean>(false);
//     const [newChild, setNewChild] = useState<CreateRowData>({
//         equipmentCosts: 0,
//         estimatedProfit: 0,
//         machineOperatorSalary: 0,
//         mainCosts: 0,
//         materials: 0,
//         mimExploitation: 0,
//         overheads: 0,
//         parentId: row.id,
//         rowName: "string",
//         salary: 0,
//         supportCosts: 0
//     });

//     const handleDeleterow = (rowId: number): void => {
//         deleteRow({ eID: EID, rID: rowId });
//     };

//     const handleAddChild = (rowId: number) => {
//         setIsAddingChild(true);
//         setNewChild((prevChild) => ({
//             ...prevChild,
//             parentId: rowId
//         }));
//     };

//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setNewChild((prevChild) => ({
//             ...prevChild,
//             [name]: value,
//         }));
//     };

//     const handleKeyPress = (e: React.KeyboardEvent) => {
//         if (e.key === 'Enter') {
//             setIsAddingChild(false);
//             createRow({
//                 eID: EID,
//                 body: newChild
//             });
//         }
//     };

//     useEffect(() => {
//         if (isRowCreated || isRowDeleted) {
//             getData(EID);
//         }
//     }, [isRowCreated, isRowDeleted]);

//     return (
//         <>
//             <TableRow>
//                 <TableCell sx={{ pl: depth * 2 + 1 }}>
//                     <IconButton onClick={() => handleAddChild(row.id)}>
//                         <TextSnippetIcon />
//                     </IconButton>
//                     <IconButton onClick={() => handleDeleterow(row.id)}>
//                         <DeleteForeverIcon />
//                     </IconButton>
//                 </TableCell>
//                 <TableCell>{row.rowName}</TableCell>
//                 <TableCell>{row.salary}</TableCell>
//                 <TableCell>{row.equipmentCosts}</TableCell>
//                 <TableCell>{row.supportCosts}</TableCell>
//                 <TableCell>{row.estimatedProfit}</TableCell>
//             </TableRow>

//             {row.child.length > 0 && row.child.map((childRow, index) => (
//                 <Row key={childRow.id} row={childRow} depth={depth + 1} />
//             ))}

//             {isAddingChild && (
//                 <UpdateRow newChild={newChild} handleInputChange={handleInputChange} handleKeyPress={handleKeyPress} />
//             )}
//         </>
//     );
// }

// export default Row;

import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { TableRow, TableCell, IconButton, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { CreateRowData, EntityType } from '../../types/types';
import { useLazyCreateRowQuery, useLazyDeleteRowQuery, useLazyGetDataQuery } from '../../store/data-api';
import { EID } from '../../const/const';
import UpdateRow from '../update-row/update-row';

type RowProps = {
    row: EntityType;
    level: number; // добавлен уровень вложенности
};

function Row({ row, level }: RowProps) {
    const [getData, { data, isLoading }] = useLazyGetDataQuery();
    //   const [createRow, { isSuccess: isRowCreated }] = useLazyCreateRowQuery();
    const [deleteRow, { isSuccess: isRowDeleted }] = useLazyDeleteRowQuery();
    const [isUpdatingRow, setIsUpdatingRow] = useState<boolean>(false);

    const [isAddingChild, setIsAddingChild] = useState<boolean>(false);
    //   const [newChild, setNewChild] = useState<CreateRowData>({
    //     equipmentCosts: 0,
    //     estimatedProfit: 0,
    //     machineOperatorSalary: 0,
    //     mainCosts: 0,
    //     materials: 0,
    //     mimExploitation: 0,
    //     overheads: 0,
    //     parentId: row.id,
    //     rowName: "",
    //     salary: 0,
    //     supportCosts: 0
    //   });

    const handleDeleterow = (rowId: number): void => {
        deleteRow({ eID: EID, rID: rowId });
    }

    const handleAddChild = (rowId: number) => {
        setIsAddingChild(true);
        // setNewChild((prevChild) => ({
        //   ...prevChild,
        //   parentId: rowId
        // }));
    };

    useEffect(() => {
        if (isRowDeleted) {
            getData(EID);
        }
    }, [isRowDeleted, data]);

    return (

        <>
            {isUpdatingRow ? <UpdateRow setIsUpdatingRow={setIsUpdatingRow} rowId={row.id} /> :
                <TableRow onDoubleClick={() => setIsUpdatingRow(true)}>
                    <TableCell sx={{ pl: level * 4 }}> {/* Добавлен отступ */}
                        <IconButton onClick={() => handleAddChild(row.id)}>
                            <TextSnippetIcon />
                        </IconButton>
                        <IconButton onClick={() => handleDeleterow(row.id)}>
                            <DeleteForeverIcon />
                        </IconButton>
                    </TableCell>
                    <TableCell>{row.rowName}</TableCell>
                    <TableCell>{row.salary}</TableCell>
                    <TableCell>{row.equipmentCosts}</TableCell>
                    <TableCell>{row.supportCosts}</TableCell>
                    <TableCell>{row.estimatedProfit}</TableCell>
                </TableRow>}

            {row.child.length > 0 && row.child.map((childRow) => (
                <Row key={childRow.id} row={childRow} level={level + 1} />
            ))}
            {isAddingChild && (
                <TableRow>
                    <TableCell sx={{ pl: (level + 1) * 4 }}> {/* Добавлен отступ */}
                        <TextSnippetIcon />
                    </TableCell>
                    <TableCell colSpan={5}>
                        <UpdateRow
                            setIsAddingChild={setIsAddingChild}
                            rowId={row.id}
                        />
                    </TableCell>
                </TableRow>
            )}
        </>
    );
}

export default Row;
