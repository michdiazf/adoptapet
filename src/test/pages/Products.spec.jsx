import React from "react";
import {render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import Products from "../../pages/Products";

function renderProducts() {
    const rutas = [
        {path: "/products", element: <Products/>},

        {patch: "*", element: <div />},
    ];
    const router = createMemoryRouter(rutas, {initialEntries: ["/products"]});
    return render(<RouterProvider router={router}/>);
}

describe("Products page", () => {
    it("muestra el titulo de la pagina", async () => {
        renderProducts();
        expect(
            await screen.findAllByRole("heading", { name: /producto/i})
        ).toBeTruthy();
    })

    it("renderiza una lista de productos(al menos 1 card con imagen y boton)", async () => {
        renderProducts();

        const imgs = await screen.findAllByRole("img", {name: /.+/i});
        expect(imgs.length).not.toBe(0);

        const detalles = screen.queryAllByRole("button", {name: /ver detalles/i});
        const agregar = screen.queryAllByRole("button", {name: /agregar/i});
        const totalBotones = detalles.length + agregar.length;

        expect(totalBotones).not.toBe(0);
    });

    it('muestra el boton "ATRAS" en la pagina de productos', async () => {
        renderProducts();

        const backButton = await screen.findByRole("button", {name: /atras/i});
        expect(backButton).toBeTruthy();
    });  
});