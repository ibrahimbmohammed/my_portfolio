import { ComponentStory, ComponentMeta } from '@storybook/react';

import ButtonWithBackDrop from './index';

export default {
    title: 'molecules/ButtonWithBackdrop',
    component: ButtonWithBackDrop,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ButtonWithBackDrop>;

const Template: ComponentStory<typeof ButtonWithBackDrop> = (args) => (
    <ButtonWithBackDrop {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
    className: 'text-gray-500',
};
