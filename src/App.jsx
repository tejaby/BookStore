import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import NavBar from "./components/navBar/navBar";
import { StoreContextProvider } from "./context/store";

function App() {
  return (
    <StoreContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes />
      </BrowserRouter>
    </StoreContextProvider>
  );
}

export default App;
