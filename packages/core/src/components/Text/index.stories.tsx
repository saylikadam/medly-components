import { FontSizes, FontWeights } from '@medly-components/theme';
import { boolean, color, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Text from './Text';

const sizeOptions: FontSizes[] = ['S1', 'M1', 'M2', 'M3', 'L1', 'L2', 'L3', 'L4'];
const weightOptions: FontWeights[] = ['Light', 'Normal', 'Strong'];

storiesOf('Core', module).add('Text', () => (
    <Text
        fullWidth={boolean('Full Width', false)}
        uppercase={boolean('Upper Case', false)}
        lineThrough={boolean('Line through', false)}
        textColor={color('Color', '#012040')}
        textSize={select('Text Size', sizeOptions, 'L1')}
        textWeight={select('Text Weight', weightOptions, 'Normal')}
    >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    </Text>
));
