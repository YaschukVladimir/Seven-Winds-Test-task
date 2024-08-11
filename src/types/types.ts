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
    child?: number | null[],
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
}

export type ResponseData = {
    current: EntityType,
    changed: EntityType[]
}