export function InputBox({placeholder,label,onChange}) {
    return <div>
        <div className=" text-sm font-medium text-left py-2  text-justify">{label}</div>
        <input className="w-full px-2 py-1 border rounded-lg border-slate-500 p-1 "  type ="text" placeholder={placeholder} onChange={onChange}></input>
    </div>
} 