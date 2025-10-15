import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Image from '../../../components/atoms/Image';

describe('Image atomo', () => {
    afterEach(() => cleanup());

    it('renderiza la imagen con el src y alt correctos', () => {
        render(<Image src="test.jpg" alt="imagen de prueba" className="img-test"/>)

        const image = screen.getByAltText('imagen de prueba');
        expect(image).toBeTruthy();
        expect(image.getAttribute('src')).toBe('test.jpg')
        expect(image.classList.contains('img-test')).toBeTrue();
    });

    it('renderiza sin clase si no se pasa className', () => {
        render(<Image src="test2.jpg" alt="sin clase"/>);
        const image = screen.getByAltText('sin clase');
        
        expect(image.getAttribute('class')).toBeNull();
        expect(image.getAttribute('src')).toBe('test2.jpg');
    });

});