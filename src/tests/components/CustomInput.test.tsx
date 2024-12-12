import { render, screen } from '@/utils/test-utils';
import CustomInput from '@/components/UI/CustomInput';

describe('CustomInput', () => {
  it('рендерится с правильным плэйсхолдером', () => {
    render(
      <CustomInput placeholderText="Enter text" value="" onChange={() => {}} />
    );

    const input = screen.getByPlaceholderText('Enter text');
    expect(input).toBeInTheDocument();
  });
});
