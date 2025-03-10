import totalizar from "./totalizador.js";
 
 describe("calcular", () => {
   it("deberia calular el precio neto de precio 100 y unidades 500", () => {
     expect(totalizar(1, 5)).toEqual(5);
   });
 });