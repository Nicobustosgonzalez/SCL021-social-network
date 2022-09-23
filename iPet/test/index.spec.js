// importamos la funcion que vamos a testear
import { router } from '../src/router/router.js';

describe('router imprime los elementos de la pagina', () => {
  it('debería ser una función', () => {
    expect(typeof router).toBe('function');
  });
});
it('Deberia imprimir los elementos de la pagina', () => {
  const resultado = router('#/register');
  expect(resultado['elemento.innerHTML'].router).toBe('route');
});
