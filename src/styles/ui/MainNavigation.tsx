import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { TbLayoutDashboard } from "react-icons/tb";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BsPersonFillUp } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-200);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

const MainNavigation = () => {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard">
            <TbLayoutDashboard />
            <span>Dashboard</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/items">
            <MdProductionQuantityLimits />
            <span>Items</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/suppliers">
            <BsPersonFillUp />
            <span>Suppliers</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/customers">
            <FaPeopleGroup />
            <span>Customers</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/settings">
            <IoSettingsSharp />
            <span>Settings</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
};

export default MainNavigation;
