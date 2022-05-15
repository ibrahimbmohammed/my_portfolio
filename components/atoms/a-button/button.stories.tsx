import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './index';

export default {
    title: 'atom/Button',
    component: Button,
    argTypes: {
        btnType: {
            options: ['primary', 'secondary'],
            control: { type: 'radio' },
        },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    btnType: 'primary',
    label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    btnType: 'secondary',
    label: 'Button',
};
