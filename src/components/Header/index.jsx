import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { StyledHeader } from "./styles";

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <StyledHeader>
      <div>
        <h1>Ola, {user.name}</h1>
        <p>{user.course_module}</p>
      </div>
    </StyledHeader>
  )
}

export default Header;
