import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {


    test('getHeroeByIdi debe retornar un heroe por ID', () => {

        const id = 1;
        const hero = getHeroeById(id);
        
        expect( hero ).toEqual(  {id: 1, name: 'Batman', owner: 'DC'})

    });

    test('getHeroeByIdi debe retornar undefined si no existe id', () => {

        const id = 100;
        const hero = getHeroeById(id);
        
        expect( hero ).toBeFalsy();

    });


    test('getHeroeByOwner debe retornar un arreglo con los heroes de DC', () => {

        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        console.log(heroes)
        
        expect( heroes.length ).toBe(3);
        expect( heroes ).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ]);

    });

    test('getHeroeByOwner debe retornar un arreglo con los heroes de marvel', () => {

        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(2);

    })



});