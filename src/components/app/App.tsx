import { useEffect } from "react";
import { useLazyGetDataQuery } from "../../store/data-api";
import ButtonAppBar from "../header/header";
import SideBar from "../side-bar/side-bar";
import { EID } from "../../const/const";
import { ThemeProvider, createTheme, CssBaseline, Box } from "@mui/material";
import CollapsibleTable from "../table/table";


const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App(): React.JSX.Element {

  const [getdata, { data: rowsData }] = useLazyGetDataQuery();

  useEffect(() => {
    getdata(EID);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ButtonAppBar />
      <Box sx={{display: "grid", padding: 0, gridTemplateColumns: '1fr 4fr'}}>
        <SideBar />
        <CollapsibleTable />
      </Box>
    </ThemeProvider>
  )
}

export default App
