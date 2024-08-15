import { useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

import Row from '../row/row';
import { useLazyGetDataQuery } from '../../store/data-api';
import { EID } from '../../const/const';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setData, setIsAddingRow } from '../../store/app-slice';
import UpdateRow from '../update-row/update-row';

export default function NestedTable() {

const dispatch = useAppDispatch();
const [getData, {data, isLoading, isSuccess}] = useLazyGetDataQuery();

useEffect(() => {
  
    getData(EID);
    dispatch(setData(data));
  
}, [isSuccess]);

const rowData = useAppSelector((state) => state.appSlice.data);
const isAddingRow = useAppSelector((state) => state.appSlice.isAddingRow);
const activeRowId = useAppSelector((state) => state.appSlice.activeRowId);

useEffect(() => {
  if (isSuccess) {
    if (rowData?.length === 0) {
      dispatch(setIsAddingRow(true));
    }
  }
}, [rowData?.length, isSuccess]);

  return (
    <TableContainer component={Paper} >
      <Table aria-label="nested table">
        <TableHead>
          <TableRow>
            <TableCell>Уровень</TableCell>
            <TableCell>Наименование работ</TableCell>
            <TableCell>Основная ЗП</TableCell>
            <TableCell>Оборудование</TableCell>
            <TableCell>Накладные расходы</TableCell>
            <TableCell>Сметная прибыль</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading && <div>Loading...</div>}
          {isSuccess && rowData?.map((row, index) => (<Row key={row.id} row={row} level={1} index={index} />))}
          {isSuccess && rowData?.length === 0 ? <UpdateRow rowId={0}/> : ''}
          {(isAddingRow && rowData?.length > 0) && (
                <TableRow>
                    <TableCell colSpan={5}>
                        <UpdateRow
                            rowId={activeRowId}
                        />
                    </TableCell>
                </TableRow>
            )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
