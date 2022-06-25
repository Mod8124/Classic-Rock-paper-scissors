import { render, screen, fireEvent } from "@testing-library/react";
import ButtonDefault from '../Button.style';

describe('button', () => {
    it('test if the button is in the document',() => {
        render(<ButtonDefault value="hola"/>)
        const span = screen.getByRole('button')
        expect(span).toBeInTheDocument()
    })
  })
  