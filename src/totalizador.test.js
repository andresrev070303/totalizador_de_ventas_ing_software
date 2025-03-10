import totalizar from "./totalizador.js";
import calcularDescuentoPorCantidad from "./totalizador.js";
 
 describe("calcular", () => {
   it("deberia calular el precio neto de precio 100 y unidades 500", () => {
     expect(totalizar(1, 5)).toEqual(5);
   });
   it("deberia calcular el precio neto de precio 10 y unidades 1000 con un descuento de 3%", () => {
     expect(totalizar(10, 100)).toEqual(970);
   });
   it("deberia calcular el precio neto de precio 10 y unidades 300 con un descuento de 5%", () => {
    expect(totalizar(10, 300)).toEqual(2850);
  });
 });