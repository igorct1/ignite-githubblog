import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { LayoutContainer, LayoutContainerWrapper } from "./styles";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <LayoutContainerWrapper>
        <Outlet />
      </LayoutContainerWrapper>
    </LayoutContainer>
  );
}
