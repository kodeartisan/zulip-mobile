import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import StylesProvider from '../boot/StylesProvider';
import store from '../boot/store';

export const rendererWithStore = WrappedComponent =>
  renderer.create(<Provider store={store}>{WrappedComponent}</Provider>);

export const rendererWithStyle = WrappedComponent =>
  renderer.create(<StylesProvider>{WrappedComponent}</StylesProvider>);

export const rendererWithStoreAndStyle = WrappedComponent =>
  renderer.create(
    <Provider store={store}>
      <StylesProvider>{WrappedComponent}</StylesProvider>
    </Provider>,
  );
