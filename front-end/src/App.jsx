import { ColorModeContext, useMode} from "./themes.jsx"
import { CssBaseline, ThemeProvider } from "@mui/material"
import topBar from "./layout/topBar.jsx"

function App() {
  const [theme, colorMode] = useMode()
 return ( 
    <ColorModeContext.Provider value={colorMode}>
     <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
             <topBar />
          </main>
        </div>
     </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
