import totalizar from "./totalizador.js";
 
 describe("calcular", () => {
   it("deberia calular el precio neto de precio 100 y unidades 500", () => {
     expect(totalizar(1, 5,"")).toEqual(5);
   });
   it("deberia calcular el precio neto de precio 10 y unidades 1000 con un descuento de 3%", () => {
     expect(totalizar(10, 100, "")).toEqual(970);
   });
   it("deberia calcular el precio neto de precio 10 y unidades 300 con un descuento de 5%", () => {
     expect(totalizar(10, 300,"")).toEqual(2850);
   });
   it("deberia calcular el precio neto de precio 10 y unidades 700 con un descuento de 7%", () => {
    expect(totalizar(10, 700,"")).toEqual(6510);
  });
  it("deberia calcular el precio neto de precio 10 y unidades 1000 con un descuento de 10%", () => {
    expect(totalizar(10, 1000,"")).toEqual(9000);
  });
  it("deberia calcular el precio neto de precio 10 y unidades 3000 con un descuento de 15%", () => {
    expect(totalizar(10, 3000,"")).toEqual(25500);
  });
  it("deberia calcular el precio neto de precio 100 y unidades 500 con el impuesto de CA", () => {
    expect(totalizar(100, 500, "CA")).toEqual(54125);
  });
  it("deberia calcular el precio neto de precio 100 y unidades 500 con el impuesto de AL", () => {
    expect(totalizar(100, 500, "AL")).toEqual(52000);
  });

 });