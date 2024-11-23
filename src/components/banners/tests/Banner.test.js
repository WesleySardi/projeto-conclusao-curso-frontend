import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Banner from "../Banner";
import theme from "../../../globalstyles/theme";

describe("Banner Component", () => {
  test("deve renderizar o componente Banner corretamente", async () => {
    render(
      <Router>
        <Banner image={theme.images.bannerImg} link={theme.links.banner} />
      </Router>
    );

    await waitFor(() => {
      const logoImage = screen.getByRole("img");
      expect(logoImage).toHaveAttribute("src", theme.images.bannerImg);
    });
  });
});
