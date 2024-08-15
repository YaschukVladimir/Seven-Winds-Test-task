import { NameSpace } from "../const/const";
import { store } from "../store";

export type EID = {
    id: number;
    rowName: string;
};

export type CreateRowData = {
    equipmentCosts: number,
    estimatedProfit: number,
    machineOperatorSalary: number,
    mainCosts: number,
    materials: number,
    mimExploitation: number,
    overheads: number,
    parentId: number | null,
    rowName: string,
    salary: number,
    supportCosts: number
  }

export type EntityType = {
    id: number,
    rowName: string,
    total: number,
    salary: number,
    mimExploitation: number,
    machineOperatorSalary: number,
    materials: number,
    mainCosts: number,
    supportCosts: number,
    equipmentCosts: number,
    overheads: number,
    estimatedProfit: number
    child: EntityType[]
};

export const slice = {
    app: NameSpace.appSlice
};

export type ResponseData = {
    current: EntityType,
    changed: EntityType[]
};

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type PayloadForStore = {
    rowId: number;
    res: ResponseData;
}
