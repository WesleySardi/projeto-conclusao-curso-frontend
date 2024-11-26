import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ScreenPositionProvider from "../../../context/ScreenPositionProvider";
import BuyBracelet from "../BuyBracelet";
import { ThemeProvider } from "styled-components";
import { waitFor } from "@testing-library/react";
import theme from "../../../globalstyles/theme";
import { act } from "react";

describe("BuyBracelet Component", () => {
  test("Deve renderizar o componente BuyBracelet corretamente", async () => {
    await act(async () => {
      render(
        <ThemeProvider theme={theme}>
          <Router>
            <ScreenPositionProvider>
              <BuyBracelet />
            </ScreenPositionProvider>
          </Router>
        </ThemeProvider>
      );
    });

    await waitFor(() => {
      expect(screen.getByText("Informações de Pagamento")).toBeInTheDocument();
    });
  });
});
