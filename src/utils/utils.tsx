
import { EntityType } from "../types/types";

export function generateRandomSixDigitNumber() {
    return Math.floor(100000 + Math.random() * 900000);
  };

export function addChildToParent(objects: EntityType[], parentId: number, newObj: EntityType): void {
  if (objects.length === 0) {
    objects.push({...newObj, child:[]});
  }
  function findAndAddChild(objArray: EntityType[], newObj: EntityType): boolean {
      for (let obj of objArray) {
          if (obj.id === parentId) {
              obj.child.push({...newObj, child:[]});
              return true;
          }
          if (findAndAddChild(obj.child, newObj)) {
              return true;
          }
      }
      return false;
  }

  findAndAddChild(objects, newObj);
};

export function findAndUpdateRowById(objects: EntityType[], rowId: number, updatedObj: EntityType): boolean {
  for (let i = 0; i < objects.length; i++) {
      if (objects[i].id === rowId) {
          objects[i] = {...objects[i], ...updatedObj};
          return true;
      }
      if (findAndUpdateRowById(objects[i].child, rowId, updatedObj)) {
          return true;
      }
  }
  return false; 
};

export function findAndDeleteRow(objects: EntityType[], rowId: number) {

  for (let i = 0; i < objects.length; i++) {
    if (objects[i].id === rowId) {
      objects.splice(i, 1);
      return true;
    }
    if (findAndDeleteRow(objects[i].child, rowId)) {
      return true;
    }
  }
  return false;
}

