import React from 'react';
import { mount } from 'enzyme';

import { TitleBarComponent } from './TitleBar';

describe('InvitationPage', () => {
  let titleBar;
  const testProps = {
    text: 'test text',
    className: 'classname',
  };

  beforeEach(() => {
    titleBar = mount(<TitleBarComponent { ...testProps } />);
  });

  it('Should render the text prop', () => {
    expect(titleBar.text()).toBe(testProps.text);
  });

  it('should have a class name', () => {
    expect(titleBar.is(`.${ testProps.className }`));
  });
});
