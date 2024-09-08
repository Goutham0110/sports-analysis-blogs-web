import NavBar from "./components/nav-bar";
import { Outlet } from "react-router-dom";
import CustomSnackbar from "./components/snackbar";

function App() {
  return (
    <>
      <NavBar />
      <CustomSnackbar />
      <Outlet />
    </>
  );
}

export default App;
