import { StyledProfileDash } from "./styles";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import DashMainContent from "./DashMainContent";
import { TechProvider } from "../../providers/TechContext";

const ProfileDash = () => {

    return (
        <TechProvider>
            <StyledProfileDash>
                <Nav />
                <Header />
                <DashMainContent />
            </StyledProfileDash>
        </TechProvider>
    )
}

export default ProfileDash;

