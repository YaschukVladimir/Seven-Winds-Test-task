import { useEffect } from "react";
import { useGetDataQuery, useGetEIdQuery, useLazyCreateRowQuery, useLazyGetDataQuery } from "../../store/data-api";
import ButtonAppBar from "../header/header";
import Main from "../main/main";
import SideBar from "../side-bar/side-bar";
import "./App.scss";


function App(): React.JSX.Element {

  const { data: eID, isSuccess } = useGetEIdQuery('');
  const [getdata, { data: rowsData }] = useLazyGetDataQuery();
  const [createRow, { data: createdRow }] = useLazyCreateRowQuery();

  const EID = 137952;

  useEffect(() => {
    if (isSuccess) {
      getdata(EID);
    }
  }, [isSuccess]);


  console.log(eID, 'ID');
  console.log(rowsData, 'data');


  return (
    <>
      <ButtonAppBar />
      <div className="app__wrapper">
        <SideBar />
        <Main />
        <button onClick={() => {
          createRow({
          eID: eID.id, body: {
            "equipmentCosts": 0,
            "estimatedProfit": 0,
            "machineOperatorSalary": 0,
            "mainCosts": 0,
            "materials": 0,
            "mimExploitation": 0,
            "overheads": 0,
            "parentId": null,
            "rowName": "string",
            "salary": 0,
            "supportCosts": 0
          }
        });
        console.log(createdRow, 'ssss');
      }
      }> Create Row</button>
      </div>

    </>
  )
}

export default App
