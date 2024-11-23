import { render, screen } from "@testing-library/react";
import BuyBracelet from "../BuyBracelet";

test("renders BuyBracelet form", () => {
  render(<BuyBracelet />);

  expect(screen.getByLabelText(/nome completo/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/telefone/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/endereço de entrega/i)).toBeInTheDocument();

  const quantidadeInputs = screen.getAllByLabelText(/quantidade/i);
  expect(quantidadeInputs[0]).toBeInTheDocument();
  expect(quantidadeInputs[1]).toBeInTheDocument();

  expect(screen.getByLabelText(/número do cartão/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/data de validade/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/cvv/i)).toBeInTheDocument();
});
