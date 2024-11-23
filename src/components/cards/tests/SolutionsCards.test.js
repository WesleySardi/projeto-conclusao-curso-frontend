import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ScreenPositionProvider from "../../../context/ScreenPositionProvider";
import SolutionsCards from "../SolutionsCards";
import { ThemeProvider } from "styled-components";
import { waitFor } from "@testing-library/react";
import theme from "../../../globalstyles/theme";

export default theme;

describe("SolutionsCards Component", () => {
  test("o botão de enviar deve sempre ser renderizado", async () => {
    render(
      <ThemeProvider theme={theme}>
        <Router>
          <ScreenPositionProvider>
            <SolutionsCards />
          </ScreenPositionProvider>
        </Router>
      </ThemeProvider>
    );

    await waitFor(() => {
      expect(screen.getByText("Como podemos te ajudar?")).toBeInTheDocument();
    });
  });
});
