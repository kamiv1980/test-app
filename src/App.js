import './App.css';
import {Proforma} from "./components/Proforma";
import {createTheme, ThemeProvider} from "@mui/material/styles";


const lightTheme = createTheme({
    palette: { mode: 'light' } ,
});

function App() {
  return (
      <ThemeProvider theme={lightTheme}>
          <div className="App">
          <header className="App-header">
            <h1>Form</h1>
            <Proforma/>
          </header>
        </div>
      </ThemeProvider>
  );
}

export default App;
