import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyle";
import Button from "./styles/ui/Button";
import Title from "./styles/ui/Title";
import SearchBox from "./styles/ui/SearchBox";
import Row from "./styles/ui/Row";
import Column from "./styles/ui/Column";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Settings from "./pages/Settings";
import Suppliers from "./pages/Suppliers";
import Items from "./pages/Items";
import AppLayout from "./styles/ui/AppLayout";

//You can use GlobalStyle variables to design a component, if it is declared as a styled component.

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="settings" element={<Settings />} />
            <Route path="suppliers" element={<Suppliers />} />
            <Route path="customers" element={<Customers />} />
            <Route path="items" element={<Items />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
