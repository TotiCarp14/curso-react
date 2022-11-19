import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";


describe('Pruebas en <FirstApp/>', () => {

    // test('Debe hacer match con el snapshot', () => {

    //     const title = 'Hola'
    //     const { container } = render( <FirstApp title={ title } /> );

    //     expect( container ).toMatchSnapshot();

    // });

    test('Debe mostrar el titulo en un h1', () => { 

        const title = 'Hola, mi nombre es Matías.'
        const { container, getByText, getByTestId } = render( <FirstApp title={ title } /> );
        expect(getByText(title)).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain( title );
        expect( getByTestId('test-title').innerHTML).toContain(title);
     });

     test('debe de mostrar el subtitulo enviado por props', () => {
        const title = 'Hola, mi nombre es Matías.'
        const subTitle = 'Soy un subtitulo';
        const { getAllByText } = render( <FirstApp title={ title } subTitle={subTitle} /> );
        
        
        
        expect(getAllByText(subTitle).length).toBe(1);
           
    
    });

});