import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ScreenPositionProvider from "../../../context/ScreenPositionProvider";
import CardCarousel from "../CardCarousel";
import { ThemeProvider } from "styled-components";
import { waitFor } from "@testing-library/react";
import theme from "../../../globalstyles/theme";

export default theme;

describe("CardCarousel Component", () => {
  test("deve renderizar o componente CardCarousel corretamente", async () => {
    render(
      <ThemeProvider theme={theme}>
        <Router>
          <ScreenPositionProvider>
            <CardCarousel />
          </ScreenPositionProvider>
        </Router>
      </ThemeProvider>
    );

    await waitFor(() => {
      expect(screen.getByText("Destaques do Blog")).toBeInTheDocument();
    });
  });
});
