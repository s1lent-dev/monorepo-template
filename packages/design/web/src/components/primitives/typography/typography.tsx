import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@nexync/ui-web/lib/utils';
import type { VariantProps } from 'class-variance-authority';

const typographyVariants = cva(
    'font-sans leading-normal tracking-normal text-gray-900 dark:text-gray-100',
    {
        variants: {
            variant: {
                h1: 'text-4xl font-bold',
                h2: 'text-3xl font-semibold',
                h3: 'text-2xl font-medium',
                h4: 'text-xl font-normal',
                p: 'text-base font-normal',
                body: 'text-base font-normal',
                small: 'text-sm font-normal',
                caption: 'text-xs font-light',
                blockquote: 'mt-6 border-l-2 pl-6 italic',
                inlineCode:
                    'rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
                lead: 'text-xl text-muted-foreground',
                large: 'text-lg font-semibold',
                muted: 'text-sm text-muted-foreground',
            },
            color: {
                primary: 'text-primary-600 dark:text-primary-400',
                secondary: 'text-secondary-600 dark:text-secondary-400',
                muted: 'text-gray-500 dark:text-gray-400',
            },
        },
        defaultVariants: {
            variant: 'body',
            color: 'primary',
        },
    },
);

type TypographyProps = React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement> &
    VariantProps<typeof typographyVariants> & {
        as?: React.ElementType;
    };

const Typography: React.FC<TypographyProps> = ({
    as: Component = 'p',
    variant,
    color,
    className,
    ...props
}) => {
    return (
        <Component className={cn(typographyVariants({ variant, color, className }))} {...props} />
    );
};

export { Typography, typographyVariants };
