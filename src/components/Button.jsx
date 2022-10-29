import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot'

export function Button(props){
    const Comp = props.asChild ? Slot : 'button';

    return(
        <Comp className={clsx(
            'py-4 px-3 bg-blue-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-blue-300 focus:ring-2 ring-white',
            props.className
            )}>{props.children}</Comp>
    )
}