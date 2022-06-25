import { render, screen } from "@testing-library/react";
import Options from '../Options'

describe('ModalInput', () => {

    it('test if modalInput has button  ',() => {
        render(
            <Options normal={false}/>
        )
        const container = screen.getByRole('article')
        expect(container).toBeInTheDocument()

    })
})