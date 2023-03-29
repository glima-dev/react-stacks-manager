import { useContext } from "react";
import { useOutClick } from "../../hooks/useOutClick";
import { TechContext } from "../../providers/TechContext";
import ModalFormCreate from "./ModalFormCreate";
import ModalFormEdit from "./ModalFormEdit";
import { ModalBox, StyledModal } from "./styles";


const TechModal = () => {
    const { selectedTech, setSelectedTech } = useContext(TechContext);
    const modalRef = useOutClick(() => setSelectedTech(null));

    return (
        <StyledModal>
            <ModalBox ref={modalRef}>
                <header>
                    <h3>
                        {
                            typeof (selectedTech) === "boolean"
                                ?
                                "Cadastrar Tecnologia"
                                :
                                "Tecnologia Detalhes"
                        }
                    </h3>
                    <button onClick={() => setSelectedTech(null)}>X</button>
                </header>
                <section>
                    {
                        typeof (selectedTech) === "boolean"
                            ?
                            <ModalFormCreate />
                            :
                            <ModalFormEdit />
                    }
                </section>
            </ModalBox>
        </StyledModal>
    )
}

export default TechModal;