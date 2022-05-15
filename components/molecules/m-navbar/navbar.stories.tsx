import { ComponentStory, ComponentMeta } from '@storybook/react';

import Navbar from './index';

export default {
    title: 'molecules/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = () => <Navbar />;

export const Primary = Template.bind({});

Primary.args = {
    className: 'text-gray-500',
};
