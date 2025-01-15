interface RadioGroupProps {
    label: string;
    name: string;
    items: string[];
}

export default function RadioGroup ({label, name, items}: RadioGroupProps) {
    return (
        <div
            className="
                flex flex-col gap-3
            "
        >
            <div
                className="
                    text-c-slate-700 text-desktop/preset-4
                "
            >
                {label}
            </div>
            {items.map(item => {
                return (
                    <div
                        className="
                            py-[12.5px] px-[16px]
                            border-[1px] border-c-slate-500 rounded-[4px]
                            flex gap-4 items-center
                        "
                    >
                        <input type="radio" name={name} value={item}/>
                        <div
                            className="
                                text-c-slate-900 text-desktop/preset-3
                            "
                        >
                            {item}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}