import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import FormContent from '../FormContent.vue';

describe('FormContent', () => {
  it('renders properly', () => {
    const wrapper = mount(FormContent);
    expect(wrapper.find('#form').exists()).toBe(true);
  });
});
