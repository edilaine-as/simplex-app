import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot'

export function Text(props){
    const Comp = props.asChild ? Slot : 'span'

    return(
        <Comp className={clsx(
            'text-gray-100 font-sans',
            {
                'text-xs': props.size === 'sm',
                'text-sn': props.size === 'md',
                'text-md': props.size === 'lg',
            }, props.className
            )}>{props.children}</Comp>
    )
}