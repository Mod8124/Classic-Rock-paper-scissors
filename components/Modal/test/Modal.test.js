import { render, screen } from "@testing-library/react";
import Modal from '../Modal'

describe('Modal', () => {

    it('test if modal has img ',() => {
        render(
            <Modal normal={false}/>
        )
        
        const container = screen.getByRole('article')
        expect(container).toBeInTheDocument()

    })
})
  