import { BrowserRouter } from "react-router-dom"
import MainRoute from "./routes/MainRoute"
import { ThemeProvider } from "./theme/ThemeProvider"

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <MainRoute />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
