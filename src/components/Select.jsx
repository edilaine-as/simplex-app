import "../styles/select.css";

export function Select(){
    return(
        <select name="selectObj" className="h-12 px-3 bg-gray-800 rounded w-ful outline-none text-xs">
            <option value="max">Maximizar</option>
            <option value="min">Minimizar</option>
        </select>
    )
}