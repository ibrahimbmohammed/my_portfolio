import { ComponentStory, ComponentMeta } from '@storybook/react';

import CallToActionBackdrop from './index';

export default {
    title: 'molecules/Navbar',
    component: CallToActionBackdrop,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CallToActionBackdrop>;

const Template: ComponentStory<typeof CallToActionBackdrop> = (args) => (
    <CallToActionBackdrop {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
    className: 'text-gray-500',
};
