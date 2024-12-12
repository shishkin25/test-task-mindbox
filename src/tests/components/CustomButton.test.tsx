import { render, screen, fireEvent } from '@/utils/test-utils';
import CustomButton from '@/components/UI/CustomButton';

describe('CustomButton', () => {
  it('рендерится с правильным текстом', () => {
    render(<CustomButton text="Click me" onClick={() => {}} />);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  it('проверка количества вызовов функции при клике', () => {
    const onClickMock = vi.fn();
    render(<CustomButton text="Click me" onClick={onClickMock} />);
    const button = screen.getByRole('button', { name: /click me/i });

    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
