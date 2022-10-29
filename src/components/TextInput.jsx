function TextInputRoot(props) {
    return(
        <div className="flex items-center gap-3 h-12 py-4 px-3 bg-gray-800 rounded w-full">
            {props.children}
        </div>
    )
}

TextInputRoot.displayName = 'TextInput.Root'

function TextInputInput(props) {
    return(
        <input autoComplete="off" className='bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none'
                 {...props}
            />
    )
}

TextInputInput.displayName = 'TextInput.Input'


export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
}