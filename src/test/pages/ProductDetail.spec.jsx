import React from "react";
import { render, screen } from "@testing-library/react";
import { Profiler } from "react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import ProductDetail from "../../pages/ProductDetail";
import * as ReactRouterDom from "react-router-dom";

//Mock de useParams
const mockUseParams = jasmine.createSpy("useParams");

const mockProduct = [
  {
    id: '1',
    name: "Producto 1",
    description: "Descripcion producto 1",
    price: 10000,
    image:
      "https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Venusaur.png",
  },
];

//Mock del modulo Product.js
beforeEach(() => {
  delete require.cache[require.resolve("../../data/Products.js")];
  require.cache[require.resolve("../../data/Products.js")] = {
    exports: { default: mockProduct },
  };
});

afterEach(() => {
  delete require.cache[require.resolve("../../data/Products.js")];
});

const MockRouter = ({ initialEntry, element }) => {
  const router = createMemoryRouter(
    [
        {path: "/products/:id", element}
    ],
    {initialEntries: [initialEntry]}
  );
  return <RouterProvider router={router} />;
};

describe("ProductDetail Page", () => {
  let renderSpy;

  beforeEach(() => {
    renderSpy = jasmine.createSpy("onRender");
    mockUseParams.and.returnValue({ id: "1" });
    console.log("mockUseParams devuelve: ", mockUseParams());
  });

  it("Muestra mensaje de error cuando el producto no existe", () => {
    render(
        <Profiler id="ProductDetail" onRender={renderSpy}>
            <MockRouter initialEntry="/products/999" element={<ProductDetail />} />
        </Profiler>
    );
    console.log(screen.debug());
    expect(screen.getByText("Producto no encontrado")).toBeTruthy();
  });

  it("Mide el tiempo de renderizado del componente", () => {
    render(
      <Profiler id="ProductDetail" onRender={renderSpy}>
        <MockRouter initialEntry="/products/1" element={<ProductDetail />} />
      </Profiler>
    );
    console.log(screen.debug);
    expect(renderSpy);
    const call = renderSpy.calls.mostRecent();
    const actualDuration = call.args[3];
    console.log(
      "Tiempo de renderizado de ProductDetail: ",
      actualDuration,
      "ms"
    );
    expect(actualDuration).toBeLessThan(100);
  });

  it("muestra el detalle cuando el id es valido (nombre, imagen, precio)", async () => {
    render(
      <MockRouter initialEntry="/products/1" element={<ProductDetail />} />  
    );

    expect(
        await screen.findByRole("heading", { level: 2, name: /hills.*canine.* metabolic\s*\+\s*mobility/i})
    ).toBeTruthy();
    const nfCLP = (n) => 
      new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0}).format(n);
    
    expect(
      await screen.findByRole("heading", { level: 4, name: nfCLP(169990)})
    ).toBeTruthy();
  });

});
