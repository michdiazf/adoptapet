import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Text from '../../../components/atoms/Text';

describe('Text atomo', () => {
    afterEach(() => cleanup());

    it('renderiza <p> por defecto y muestra los children', () => {
        render(<Text>Hola mundo</Text>);
        const text = screen.getByText('Hola mundo');

        expect(text).toBeTruthy();
        expect(text.tagName).toBe('P');
        expect(text.getAttribute('class')).toBeNull();
    });

    it('usa el variant pasado y aplica className', () => {
        render(<Text variant="h2" className="titulo">Titulo</Text>);
        const text = screen.getByText('Titulo');

        expect(text.tagName).toBe('H2');
        expect(text.classList.contains('titulo')).toBeTrue();
    });

    it('acepta otras etiquetas como <span>', () => {
        render(<Text variant="span">Etiqueta span</Text>);
        const text = screen.getByText('Etiqueta span');

        expect(text.tagName).toBe('SPAN');
    })
})