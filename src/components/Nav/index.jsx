import { useContext } from "react";
import logo from "../../assets/Logo.svg";
import { UserContext } from "../../providers/UserContext";
import { StyledButton } from "../../styles/Buttons";
import { StyledNav } from "./styles";

const Nav = () => {

    const { userLogout } = useContext(UserContext);
    return (
        <StyledNav>
            <div>
                <img src={logo} alt="logo" />
                <StyledButton
                    type="button"
                    buttonSize="medium"
                    buttonStyle="grayDefault"
                    onClick={userLogout}>Sair</StyledButton>
            </div>
        </StyledNav>
    )
}

export default Nav;




