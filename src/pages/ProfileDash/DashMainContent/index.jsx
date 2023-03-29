import { StyledButton } from "../../../styles/Buttons";
import { StyledMainHeader } from "./styles";
import { StyledMainContent } from "./styles";
import DashTechList from "./DashTechList";
import DashTechCard from "./DashTechCard";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";
import TechModal from "../../../components/TechModal";
import { TechContext } from "../../../providers/TechContext";

const DashMainContent = () => {
    const { user } = useContext(UserContext);
    const { selectedTech, setSelectedTech } = useContext(TechContext);

    return (
        <StyledMainContent>
            <StyledMainHeader>
                <h2>Tecnologias</h2>
                <StyledButton
                    type="button"
                    buttonSize="small"
                    buttonStyle="grayDefault"
                    onClick={() => setSelectedTech(true)} />
            </StyledMainHeader>
            <DashTechList>
                {user.techs.map((tech) =>
                    <DashTechCard
                        key={tech.id}
                        status={tech.status}
                        title={tech.title}
                        onSelect={() => setSelectedTech(tech)} />
                )}
            </DashTechList>
            {!!selectedTech && <TechModal />}
        </StyledMainContent>
    )
}

export default DashMainContent;

