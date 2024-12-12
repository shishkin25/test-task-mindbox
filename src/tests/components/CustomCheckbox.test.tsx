import { render, fireEvent } from '@/utils/test-utils';
import CustomCheckbox from '@/components/UI/CustomCheckbox';
import styles from '@/components/UI/CustomCheckbox/CustomCheckbox.module.scss';

describe('CustomInput', () => {
  it('проверка что рендерится иконка для checked = true', () => {
    const { container } = render(
      <CustomCheckbox checked={true} onChange={() => {}} />
    );
    const icon = container.querySelector('svg');
    expect(icon).toHaveClass(styles.arrow);
  });

  it('проверка что рендерится иконка для checked = false', () => {
    const { container } = render(
      <CustomCheckbox checked={false} onChange={() => {}} />
    );
    const icon = container.querySelector('svg');
    expect(icon).toHaveClass(styles.noArrow);
  });

  it('toggle состояния когда нажат checkbox', () => {
    const onChangeMock = vi.fn();
    const { getByRole } = render(
      <CustomCheckbox checked={false} onChange={onChangeMock} />
    );
    const checkbox = getByRole('checkbox');

    fireEvent.click(checkbox);
    expect(onChangeMock).toHaveBeenCalledTimes(1);

    fireEvent.click(checkbox);
    expect(onChangeMock).toHaveBeenCalledTimes(2);
  });

  it('вызов onChange когда checkbox нажат', () => {
    const onChangeMock = vi.fn();
    const { getByRole } = render(
      <CustomCheckbox checked={false} onChange={onChangeMock} />
    );
    const checkbox = getByRole('checkbox');

    fireEvent.click(checkbox);

    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });

  it('вызов onChange при нажатии Enter', () => {
    const onChangeMock = vi.fn();
    const { getByRole } = render(
      <CustomCheckbox checked={false} onChange={onChangeMock} />
    );
    const checkbox = getByRole('checkbox');

    fireEvent.keyDown(checkbox, { key: 'Enter', code: 'Enter', charCode: 13 });
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });
});
