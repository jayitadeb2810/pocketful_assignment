import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"

function App() {
  return (
    <div className="App text-black">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="*"
            element={<div>404 Not Found</div>}
          />
        </Routes>
      </Router>{" "}
    </div>
  )
}

export default App
