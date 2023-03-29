import RoutesComponent from "./routes/routes";
import { GlobalStyle } from "./styles/Global";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "./services/api"
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function App() {
  /*   const [loadingLogin, setLoadingLogin] = useState(false);
    const navigate = useNavigate();
    const [user, setUser] = useState(null); */

  /*   async function userLogin(formData) {
      try {
        setLoadingLogin(true);
        const response = await api.post("sessions", formData);
        setUser(response.data.user);
        toast.success("Login bem sucedido!");
        localStorage.setItem("@TOKEN", response.data.token);
        localStorage.setItem("@USER", JSON.stringify(response.data.user));
        navigate("profile");
      } catch (error) {
        toast.error(error.response.data.message);
      } finally {
        setLoadingLogin(false);
      }
    } */


  /*   function userLogout() {
      localStorage.clear();
      setUser(null);
      navigate('/');
    } */

  return (
    <>
      <GlobalStyle />
      <RoutesComponent />

    </>
  );
}

export default App;
