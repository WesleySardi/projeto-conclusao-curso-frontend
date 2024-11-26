import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ScreenPositionProvider from "../../../context/ScreenPositionProvider";
import ErrorPopup from "../ErrorPopup";
import { ThemeProvider } from "styled-components";
import { waitFor } from "@testing-library/react";
import theme from "../../../globalstyles/theme";
import { act } from "react";

export default theme;

describe("ErrorPopup Component", () => {
  test("Deve renderizar o componente ErrorPopup corretamente", async () => {
    await act(async () => {
      render(
        <ThemeProvider theme={theme}>
          <Router>
            <ScreenPositionProvider>
              <ErrorPopup />
            </ScreenPositionProvider>
          </Router>
        </ThemeProvider>
      );
    });

    await waitFor(() => {
      expect(screen.getByText("Fechar")).toBeInTheDocument();
    });
  });
});
