import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot'

export function Heading(props){
    const Comp = props.asChild ? Slot : 'h2'

    return(
        <Comp className={clsx(
            'text-gray-100 font-bold font-sans',
            {
                'text-lg': props.size === 'sm',
                'text-xs': props.size === 'md',
                'text-2xl': props.size === 'lg',
            },
            props.className,
            )}>{props.children}</Comp>
    )
}