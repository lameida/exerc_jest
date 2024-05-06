import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';

describe('Teste para o componente Post', () => {
    test('Deve adicionar e renderizar dois comentários corretamente', () => {
        render(<Post />);
        const textarea = screen.getByTestId('comment-input');
        const button = screen.getByTestId('comment-button');

      
        fireEvent.change(textarea, { target: { value: 'Primeiro comentário' } });
        fireEvent.click(button);
        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();

        
        fireEvent.change(textarea, { target: { value: 'Segundo comentário' } });
        fireEvent.click(button);
        expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
    });
});
