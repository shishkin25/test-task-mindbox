import { Provider } from 'react-redux';

import { render } from '@/utils/test-utils';
import { store } from '@/store';
import Todos from '@/components/Todos';

describe('CustomButton', () => {
  it('отображение текста нет тудушек при пустом массиве в состоянии', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Todos />
      </Provider>
    );

    expect(getByText('Нет тудушек')).toBeInTheDocument();
  });
});
