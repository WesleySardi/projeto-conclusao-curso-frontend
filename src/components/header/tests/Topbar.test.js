import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ScreenPositionProvider from "../../../context/ScreenPositionProvider";
import TopBar from "../TopBar";
import { ThemeProvider } from "styled-components";
import { waitFor } from "@testing-library/react";
import theme from "../../../globalstyles/theme";
import { act } from "react";

export default theme;

describe("TopBar Component", () => {
  test("Deve renderizar o componente TopBar corretamente", async () => {
    await act(async () => {
      render(
        <ThemeProvider theme={theme}>
          <Router>
            <ScreenPositionProvider>
              <TopBar />
            </ScreenPositionProvider>
          </Router>
        </ThemeProvider>
      );
    });

    await waitFor(() => {
      expect(
        screen.getByText("Rua Teste, 999 - Centro | Joinville - SC")
      ).toBeInTheDocument();
    });
  });
});
