import React from "react";
import {render , screen} from "@testing-library/react";
import { RouterProvider, createBrowserRouter, createMemoryRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Products from "../pages/Products.jsx";
import ProductDetail from "../pages/ProductDetail.jsx";


function renderWithRouter(initialPath) {
    const rutas = [
        { path: "/", element: <Home />},
        { path: "/products", element: <Products />},
        { path: "/products/:id", element: <ProductDetail />},
        { path: "*", element: <h1>Producto no encontrado</h1> },
    ];

    const router = createMemoryRouter(rutas, {initialEntries: [initialPath]});

    return render(<RouterProvider router ={router} />);
}

describe("App Router", () => {
    it('muestra Home al entra a "/', async () => {
    renderWithRouter("/");
    expect(await screen.findByRole('heading', {name: /categorias/i})).toBeTruthy();
    });

    it('muestra Products al entrar a "/products"', async() =>{
        renderWithRouter("/products");
        expect(await screen.findByRole('heading',{name: /productos/i})).toBeTruthy();
    });

    it("muestra 404 en rutas inexistentes", async () =>{
        renderWithRouter("/ruta-que-no-existe");
        expect(await screen.findByRole('heading',{name: /producto no encontrado/i})).toBeTruthy();
    });
});