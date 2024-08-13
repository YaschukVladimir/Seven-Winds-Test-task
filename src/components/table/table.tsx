import { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { EntityType } from '../../types/types';
import { generateRandomSixDigitNumber } from '../../utils/utils';
import Row from '../row/row';
import { useGetDataQuery, useLazyCreateRowQuery, useLazyGetDataQuery } from '../../store/data-api';
import { EID } from '../../const/const';



export default function NestedTable() {

// const {data, isLoading, isSuccess} = useGetDataQuery(EID);
const [getData, {data, isLoading, isSuccess}] = useLazyGetDataQuery();
const [createRow, { data: createdRow }] = useLazyCreateRowQuery();

useEffect(() => {
  
    getData(EID);
  
}, [data, isSuccess])

  // const [data, setData] = useState<EntityType[]>([
  //   {
  //     id: 104060,
  //     rowName: 'string',
  //     total: 0,
  //     salary: 0,
  //     mimExploitation: 0,
  //     machineOperatorSalary: 0,
  //     materials: 0,
  //     mainCosts: 0,
  //     supportCosts: 0,
  //     equipmentCosts: 0,
  //     overheads: 0,
  //     estimatedProfit: 0,
  //     child: [],
  //   },
  //   {
  //     id: 104061,
  //     rowName: 'string',
  //     total: 0,
  //     salary: 0,
  //     mimExploitation: 0,
  //     machineOperatorSalary: 0,
  //     materials: 0,
  //     mainCosts: 0,
  //     supportCosts: 0,
  //     equipmentCosts: 0,
  //     overheads: 0,
  //     estimatedProfit: 0,
  //     child: [],
  //   },
  //   {
  //     id: 104062,
  //     rowName: 'string',
  //     total: 1,
  //     salary: 6666,
  //     mimExploitation: 0,
  //     machineOperatorSalary: 0,
  //     materials: 4444,
  //     mainCosts: 33333,
  //     supportCosts: 0,
  //     equipmentCosts: 22222,
  //     overheads: 0,
  //     estimatedProfit: 0,
  //     child: [
  //       {
  //         id: 104199,
  //         rowName: 'string',
  //         total: 0,
  //         salary: 6666,
  //         mimExploitation: 0,
  //         machineOperatorSalary: 0,
  //         materials: 4444,
  //         mainCosts: 33333,
  //         supportCosts: 0,
  //         equipmentCosts: 22222,
  //         overheads: 0,
  //         estimatedProfit: 0,
  //         child: [],
  //       },
  //     ],
  //   },
  // ]);

  const handleAddChild = (parentId: number) => {
    // setData((prevData) =>
    //   prevData.map((row) =>
    //     row.id === parentId
    //       ? {
    //         ...row,
    //         child: [
    //           ...row.child,
    //           {
    //             id: generateRandomSixDigitNumber(),
    //             rowName: '',
    //             salary: 0,
    //             equipmentCosts: 0,
    //             supportCosts: 0,
    //             estimatedProfit: 0,
    //             mimExploitation: 0,
    //             machineOperatorSalary: 0,
    //             materials: 0,
    //             total: 0,
    //             mainCosts: 0,
    //             overheads: 0,
    //             child: [],

    //           },
    //         ],
    //       }
    //       : row
    //   )
    // );
  };

  return (
    <TableContainer component={Paper}>
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
          {isSuccess && data?.map((row) => (
            <Row key={row.id} row={row} level={1}/>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
