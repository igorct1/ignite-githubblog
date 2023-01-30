import { HeaderContainer, HeaderContent } from "./styles";
import logo from "../../assets/logo.png";
import bg from "../../assets/header-bg.png";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />
      </HeaderContent>
    </HeaderContainer>
  );
}
