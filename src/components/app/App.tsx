import { useEffect } from "react";
import { useGetDataQuery, useGetEIdQuery, useLazyCreateRowQuery, useLazyGetDataQuery } from "../../store/data-api";
import ButtonAppBar from "../header/header";
import Main from "../main/main";
import SideBar from "../side-bar/side-bar";
import "./App.scss";
import { EID } from "../../const/const";


function App(): React.JSX.Element {

  // const { data: eID, isSuccess } = useGetEIdQuery('');
  const [getdata, { data: rowsData }] = useLazyGetDataQuery();
  const [createRow, { data: createdRow }] = useLazyCreateRowQuery();


  useEffect(() => {
      getdata(EID);
  }, []);

  console.log(rowsData, 'data');


  return (
    <>
      <ButtonAppBar />
      <div className="app__wrapper">
        <SideBar />
        <Main />
      </div>

    </>
  )
}

export default App
