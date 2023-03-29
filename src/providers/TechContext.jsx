import { createContext, useContext, useEffect, useState } from "react"
import { api } from "../services/api";
import { toast } from "react-toastify";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
    const { setUser } = useContext(UserContext);
    const [selectedTech, setSelectedTech] = useState(null);
    const [techLoading, setTechLoading] = useState(false);
    const [techLoadingDelete, setTechLoadingDelete] = useState(false);
    const [techControl, setTechControl] = useState();

    useEffect(() => {
        async function loadUser() {
            const token = localStorage.getItem("@TOKEN");
            if (!token) {
                return;
            }
            try {
                const response = await api.get("profile", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (response.statusText === "OK") {
                    setUser(response.data);
                }
            } catch (error) {
                console.error(error);
            }
        };
        loadUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [techControl]);

    const createTech = async (data) => {
        const token = localStorage.getItem("@TOKEN");
        try {
            setTechLoading(true);
            const response = await api.post("users/techs", data,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            if (response.statusText === "Created") {
                toast.success("Tech adicionada sucesso!");
                setTechControl(response.data);
            }
            setSelectedTech(null);
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            setTechLoading(false);
        }
    }

    const deleteTech = async (id) => {
        const token = localStorage.getItem("@TOKEN");
        try {
            setTechLoadingDelete(true);
            const response = await api.delete(`users/techs/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast.success("Tech removida com sucesso!");
            setTechControl(response.data);
            setSelectedTech(null);
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            setTechLoadingDelete(false);
        }
    }

    const editTech = async (id, data) => {
        const token = localStorage.getItem("@TOKEN");
        try {
            setTechLoading(true);
            const response = await api.put(`users/techs/${id}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast.success("Tech atualizada com sucesso!");
            setTechControl(response.data);
            setSelectedTech(null);
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            setTechLoading(false);
        }
    }

    return <TechContext.Provider
        value={
            {
                selectedTech,
                setSelectedTech,
                createTech,
                deleteTech,
                editTech,
                techLoading,
                techLoadingDelete
            }}>
        {children}
    </TechContext.Provider>;
};