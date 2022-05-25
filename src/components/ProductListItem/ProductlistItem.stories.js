import React from 'react';
import ProductListItem from './ProductListItem';
import { action } from '@storybook/addon-actions';

export default {
  title: 'ProductListItem',
  component: ProductListItem,
};

const Template = (args) => <ProductListItem {...args} />;
export const Default = Template.bind({});
Default.args = {
  name: 'Standard',
  price: '2.50',
  imageUrl: 'https://source.unsplash.com/tNALoIZhqVM/200x100/',
  onAddToCart: action('Add to cart clicked'),
};
