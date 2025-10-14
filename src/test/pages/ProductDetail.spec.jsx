<<<<<<< HEAD
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
=======
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Profiler } from 'react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import ProductDetail from '../../pages/ProductDetail';

//Mock de useParams
const mockUseParams = jasmine.createSpy('useParams');

const mockProduct = [
    {
        id: 1,
        name: 'Producto 1',
        description: 'Descripcion producto 1',
        price: 10000,
        image: 'https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Venusaur.png'
    }
>>>>>>> e907cd7 (Modificaciones Carrito)
];

//Mock del modulo Product.js
beforeEach(() => {
<<<<<<< HEAD
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

    expect(
        await screen.findByRole("img", {name: /hills.*canine.* metabolic\s*\+\s*mobility/i})
    ).toBeTruthy();

    expect(
        await screen.findByText(/\$?\s*169990\b/)
    ).toBeTruthy();
  });

});
=======
    delete require.cache[require.resolve('../../data/Products.js')];
    require.cache[require.resolve('../../data/Products.js')] = {
        exports: { default: mockProduct}
    };
});

afterEach(() => {
    delete require.cache[require.resolve('../../data/Products.js')];
});

const MockRouter = ({ children, params }) => {
    mockUseParams.and.returnValue(params);
    const router = createMemoryRouter(
        [{ path: '*', element: children }],
        { initialEntries: ['/products/:id'] }
    );
    return <RouterProvider router={router}/>
};

describe('ProductDetail Page', () => {
    let renderSpy;

    beforeEach(() => {
        renderSpy = jasmine.createSpy('onRender');
        mockUseParams.and.returnValue({ id: '1' });
        console.log('mockUseParams devuelve: ', mockUseParams());
    });

    it('Muestra mensaje de error cuando el producto no existe', () => {
        mockUseParams.and.returnValue({ id:'999' });
        render(
            <Profiler id="ProductDetail" onRender={renderSpy}>
                <MockRouter params={{ id: '999'}}>
                    <ProductDetail/>
                </MockRouter>
            </Profiler>
        );
        console.log(screen.debug());
        expect(screen.getByText('Producto no encontrado')).toBeTruthy();
    });

    it('Mide el tiempo de renderizado del componente', () => {
        render(
            <Profiler id="ProductDetail" onRender={renderSpy}>
                <MockRouter params={{ id: '1' }}>
                    <ProductDetail/>
                </MockRouter>
            </Profiler>
        );
        console.log(screen.debug);
        expect(renderSpy);
        const call =renderSpy.calls.mostRecent();
        const actualDuration = call.args[3];
        console.log('Tiempo de renderizado de ProductDetail: ', actualDuration, 'ms');
        expect(actualDuration).toBeLessThan(100);
    });
});
>>>>>>> e907cd7 (Modificaciones Carrito)
