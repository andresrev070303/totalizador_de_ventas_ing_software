import totalizar from "./totalizador.js";
 
describe("calcular", () => {
  it("deberia calular el precio neto de precio 100 y unidades 500", () => {
    expect(totalizar(1, 5,"", " ", "", 0, "")).toEqual(5);
  });
  it("deberia calcular el precio neto de precio 10 y unidades 1000 con un descuento de 3%", () => {
    expect(totalizar(10, 100, "", "", "", 0, "")).toEqual(970);
  });
  it("deberia calcular el precio neto de precio 10 y unidades 300 con un descuento de 5%", () => {
    expect(totalizar(10, 300,"", "","", 0, "")).toEqual(2850);
  });
  it("deberia calcular el precio neto de precio 10 y unidades 700 con un descuento de 7%", () => {
    expect(totalizar(10, 700,"", "", "", 0, "")).toEqual(6510);
  });
  it("deberia calcular el precio neto de precio 10 y unidades 1000 con un descuento de 10%", () => {
    expect(totalizar(10, 1000,"", "", "", 0, "")).toEqual(9000);
  });
  it("deberia calcular el precio neto de precio 10 y unidades 3000 con un descuento de 15%", () => {
    expect(totalizar(10, 3500,"", "", "", 0, "")).toEqual(29750);
  });
  it("deberia calcular el precio neto de precio 100 y unidades 500 con el impuesto de CA", () => {
    expect(totalizar(100, 500, "CA", "", "", 0, "")).toEqual(46625);
  });
  it("deberia calcular el precio neto de precio 100 y unidades 500 con el impuesto de AL", () => {
    expect(totalizar(100, 500, "AL", "", "", 0, "")).toEqual(44500);
  });
  it("deberia calcular el precio neto de precio 100 y unidades 500 con el impuesto de TX", () => {
    expect(totalizar(100, 500, "TX", "", "", 0, "")).toEqual(45625);
  });
  it("deberia calcular el precio neto de precio 100 y unidades 500 con el impuesto de NV", () => {
    expect(totalizar(100, 500, "NV", "", "", 0, "")).toEqual(46500);
  });
  it("deberia calcular el precio neto de precio 100 y unidades 500 con el impuesto de UT", () => {
    expect(totalizar(100, 500, "UT", "", "", 0, "")).toEqual(45825);
  });
  it("deberia calcular el precio neto con descuento y impuesto de varios que es 0%", () => {
    expect(totalizar(10, 200, "", "Varios" , "", 0, "")).toEqual(1940);
  });
  it("deberia calcular el precio neto con descuento y impuesto de alimentos que es 2%", () => {
    expect(totalizar(10, 200, "", "Alimentos", "", 0, "")).toEqual(1900);
  });
  it("deberia calcular el precio neto con impuesto de bebidas alcoholicas que es 7%", () => {
    expect(totalizar(10, 200, "", "Bebidas alcoholicas" , "", 0, "")).toEqual(2080);
  });
  it("deberia calcular el precio neto con descuento de material de escritorio que es 1.5%", () => {
    expect(totalizar(10, 200, "", "Material de escritorio", "", 0, "")).toEqual(1910);
  });
  it("deberia calcular el precio neto con impuesto de muebles que es 3%", () => {
    expect(totalizar(10, 200, "", "Muebles", "",0, "" )).toEqual(2000);
  });
  it("deberia calcular el precio neto con descuento y impuesto de electronicos que es 1% y 4%", () => {
    expect(totalizar(10, 200, "", "Electronicos", "",0, "" )).toEqual(2000);
  });
  it("deberia calcular el precio neto con impuesto de varios que es 2%", () => {
    expect(totalizar(10, 200, "", "Vestimenta" , "",0, "")).toEqual(1980);
  });
 });