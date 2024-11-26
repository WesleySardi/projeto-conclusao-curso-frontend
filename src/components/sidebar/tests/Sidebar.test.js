import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ScreenPositionProvider from "../../../context/ScreenPositionProvider";
import Sidebar from "../Sidebar";
import { ThemeProvider } from "styled-components";
import { waitFor } from "@testing-library/react";
import theme from "../../../globalstyles/theme";
import { act } from "react";

export default theme;

describe("Sidebar Component", () => {
  test("Deve renderizar o componente Sidebar corretamente", async () => {
    await act(async () => {
      render(
        <ThemeProvider theme={theme}>
          <Router>
            <ScreenPositionProvider>
              <Sidebar />
            </ScreenPositionProvider>
          </Router>
        </ThemeProvider>
      );
    });

    await waitFor(() => {
      expect(screen.getByText("Home")).toBeInTheDocument();
    });
  });
});
