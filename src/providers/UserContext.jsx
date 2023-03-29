import { createContext, useEffect, useState } from "react"
import { api } from "../services/api";
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [loadingLogin, setLoadingLogin] = useState(false);
    const [loadingRegister, setLoadingRegister] = useState(false);
    const [globalLoading, setGlobalLoading] = useState(true);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    async function registerUser(formData) {
        try {
            setLoadingRegister(true);
            await api.post("users", formData);
            toast.success("Cadastro bem sucedido!");
            navigate("/");
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            setLoadingRegister(false);
        }
    }

    useEffect(() => {
        async function loadUser() {
            const token = localStorage.getItem("@TOKEN");

            if (!token) {
                setGlobalLoading(false);
                return;
            }
            try {
                api.defaults.headers.common.authorization = `Bearer ${token}`;
                const { data } = await api.get("profile");
                setUser(data);
                navigate("profile");
            } catch (error) {
                console.error(error);
                localStorage.clear();
            } finally {
                setGlobalLoading(false);
            }
        }

        loadUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function userLogin(formData) {
        try {
            setLoadingLogin(true);
            const response = await api.post("sessions", formData);
            setUser(response.data.user);
            toast.success("Login bem sucedido!");

            localStorage.setItem("@TOKEN", response.data.token);
            localStorage.setItem("@USERID", JSON.stringify(response.data.user));

            api.defaults.headers.common.authorization = `Bearer ${response.data.token}`;
            const toNavigate = location.state?.from?.pathname || "profile";
            navigate(toNavigate, { replace: true });
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            setLoadingLogin(false);
        }
    }

    function userLogout() {
        localStorage.clear();
        setUser(null);
        navigate("/");
    }

    return <UserContext.Provider
        value={
            {
                userLogout,
                userLogin,
                user,
                loadingLogin,
                loadingRegister,
                registerUser,
                globalLoading,
                setGlobalLoading,
                setUser
            }}>
        {children}
    </UserContext.Provider>;
};