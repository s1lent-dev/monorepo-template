import { Button } from './button';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import '../../../styles/globals.css';

const meta: Meta<typeof Button> = {
    title: 'Components/Primitives/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
        },
        size: {
            control: 'select',
            options: ['default', 'sm', 'lg', 'icon'],
        },
        children: {
            control: 'text',
        },
    },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        children: 'Click Me',
        variant: 'default',
        size: 'default',
    },
};

export const Destructive: Story = {
    args: {
        children: 'Delete',
        variant: 'destructive',
        size: 'default',
    },
};

export const Outline: Story = {
    args: {
        children: 'Outline',
        variant: 'outline',
        size: 'default',
    },
};

export const Small: Story = {
    args: {
        children: 'Small Button',
        size: 'sm',
    },
};

export const Large: Story = {
    args: {
        children: 'Large Button',
        size: 'lg',
    },
};

export const Icon: Story = {
    args: {
        children: '🔍',
        size: 'icon',
        'aria-label': 'Search',
    },
};
