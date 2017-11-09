import React from 'react';
import { mount } from 'enzyme';

import { LayoutComponent, COMPANY_NAME } from './Layout';

describe('InvitationPage', () => {
  let layout;

  beforeEach(() => {
    layout = mount(<LayoutComponent className='' ><div /></LayoutComponent>);
  });

  describe('The title Bar', () => {
    const titleBar = 'TitleBarComponent';
    it('Should be defined', () => {
      expect(layout.find(titleBar).length).toBe(1);
    });

    it('Should have COMPANY_NAME as the text prop', () => {
      expect(layout.find(titleBar).text()).toBe(COMPANY_NAME);
    });
  });
});
