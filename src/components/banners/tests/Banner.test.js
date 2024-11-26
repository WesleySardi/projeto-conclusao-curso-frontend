import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Banner from "../Banner";
import theme from "../../../globalstyles/theme";
import { act } from "react";

describe("Banner Component", () => {
  test("Deve renderizar o componente Banner corretamente", async () => {
    await act(async () => {
      render(
        <Router>
          <Banner image={theme.images.bannerImg} link={theme.links.banner} />
        </Router>
      );
    });

    await waitFor(() => {
      const logoImage = screen.getByRole("img");
      expect(logoImage).toHaveAttribute("src", theme.images.bannerImg);
    });
  });
});
