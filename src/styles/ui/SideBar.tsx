import styled from "styled-components";
import Logo from "./Logo";
import MainNavigation from "./MainNavigation";

const StyledSideBar = styled.aside`
  background-color: var(--color-grey-50);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-200);
  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const SideBar = () => {
  return (
    <StyledSideBar>
      <Logo />
      <MainNavigation />
    </StyledSideBar>
  );
};

export default SideBar;
