import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ScreenPositionProvider from "../../../context/ScreenPositionProvider";
import Header from "../Header";
import { ThemeProvider } from "styled-components";
import { waitFor } from "@testing-library/react";
import theme from "../../../globalstyles/theme";

export default theme;

describe("Header Component", () => {
  test("deve renderizar o componente Header corretamente", async () => {
    render(
      <ThemeProvider theme={theme}>
        <Router>
          <ScreenPositionProvider>
            <Header />
          </ScreenPositionProvider>
        </Router>
      </ThemeProvider>
    );

    await waitFor(() => {
      const logoImage = screen.getByRole("img", { name: /logo/i });
      expect(logoImage).toHaveAttribute("src", "../img/logos/logo_zlo_png.png");
    });
  });
});
