import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import CheckboxGroup from './CheckboxGroup';
import { Props } from './types';

const labelPosition: Array<Props['labelPosition']> = ['left', 'right', 'top', 'bottom'];
const size: Array<Props['size']> = ['XS', 'S', 'M', 'L', 'XL'];

const DemoComponent = () => {
    const [value, setValue] = useState(['grapes']);

    return (
        <CheckboxGroup
            defaultValues={value}
            onChange={setValue}
            options={[{ value: 'apple', label: 'Apple' }, { value: 'orange', label: 'Orange' }, { value: 'grapes', label: 'Grapes' }]}
            disabled={boolean('Disabled', false)}
            showSelectAll={boolean('Show Select All', false)}
            label={text('Label', 'Fruits')}
            size={select('Size', size, 'S')}
            labelPosition={select('Label Position', labelPosition, 'top')}
        />
    );
};

storiesOf('Core', module).add('CheckboxGroup', () => <DemoComponent />);
