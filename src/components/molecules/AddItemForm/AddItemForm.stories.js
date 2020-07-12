import React from 'react';
import { storiesOf } from '@storybook/react';
import AddItemForm from './AddItemForm';

storiesOf('Add Item Form', module).add('Primary', () => <AddItemForm itemType="Post" />);
