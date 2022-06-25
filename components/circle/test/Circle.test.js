import { render, screen, fireEvent } from "@testing-library/react";
import Circle from '../Circle'

describe('Cicle', () => {
    it('test if circle has image',() => {
        render(<Circle img="/icon-paper.svg"/>)
        const img = screen.getByRole('img');
        expect(img).toBeInTheDocument()
    })
  })
  