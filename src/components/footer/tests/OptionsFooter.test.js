import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ScreenPositionProvider from "../../../context/ScreenPositionProvider";
import OptionsFooter from "../OptionsFooter";
import { ThemeProvider } from "styled-components";
import { waitFor } from "@testing-library/react";
import theme from "../../../globalstyles/theme";

export default theme;

describe("OptionsFooter Component", () => {
  test("deve renderizar o componente OptionsFooter corretamente", async () => {
    render(
      <ThemeProvider theme={theme}>
        <Router>
          <ScreenPositionProvider>
            <OptionsFooter />
          </ScreenPositionProvider>
        </Router>
      </ThemeProvider>
    );

    await waitFor(() => {
      expect(screen.getByText("Links úteis")).toBeInTheDocument();
      expect(screen.getAllByText("Fale conosco")).toHaveLength(2);
      expect(screen.getByText("Entrar em contato")).toBeInTheDocument();
      expect(screen.getByText("Zlo Trackband")).toBeInTheDocument();
      expect(screen.getByText("Quem somos")).toBeInTheDocument();
      expect(screen.getByText("Trabalhe conosco")).toBeInTheDocument();
      expect(screen.getByText("Nossa cultura")).toBeInTheDocument();
      expect(screen.getByText("Blog")).toBeInTheDocument();
      expect(screen.getByText("Pulseira impermeável")).toBeInTheDocument();
      expect(screen.getByText("Localização em tempo real")).toBeInTheDocument();
      expect(screen.getByText("Registro de dependentes")).toBeInTheDocument();
      expect(screen.getByText("Pulseira impermeável")).toBeInTheDocument();
    });
  });
});
