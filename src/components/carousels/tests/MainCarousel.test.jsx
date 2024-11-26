import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ScreenPositionProvider from "../../../context/ScreenPositionProvider";
import MainCarousel from "../MainCarousel";
import { ThemeProvider } from "styled-components";
import { waitFor } from "@testing-library/react";
import theme from "../../../globalstyles/theme";
import { act } from "react";

export default theme;

describe("MainCarousel Component", () => {
  test("Deve renderizar o componente MainCarousel corretamente", async () => {
    await act(async () => {
      render(
        <ThemeProvider theme={theme}>
          <Router>
            <ScreenPositionProvider>
              <MainCarousel />
            </ScreenPositionProvider>
          </Router>
        </ThemeProvider>
      );
    });

    await waitFor(() => {
      const buttons = screen.getAllByText("Confira já!");
      expect(buttons).toHaveLength(3);
    });
  });
});
