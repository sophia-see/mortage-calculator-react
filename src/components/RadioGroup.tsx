import { useFormContext } from "react-hook-form";

interface RadioGroupProps {
    label: string;
    name: string;
    items: string[];
    isError: boolean;
}

export default function RadioGroup ({label, name, items, isError}: RadioGroupProps) {
    const { register, watch, setValue } = useFormContext();
    const selectedValue = watch(name); 

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
                const id = item.toLowerCase().replace(" ", "_");
                const isSelected = selectedValue == item;

                return (
                    <div
                        className={`
                            py-[12.5px] px-[16px]
                            border-[1px] rounded-[4px] ${isSelected ? `border-c-lime bg-c-lime-15` : ` border-c-slate-500`}
                            cursor-pointer
                            flex gap-4 items-center
                        `}
                        key={item}
                        onClick={() => {
                            setValue(name, item)
                        }}
                    >   
                        <input 
                            {...register(name)} 
                            type="radio" 
                            name={name} 
                            value={item} 
                            id={id}
                            className={`
                                appearance-none 
                                cursor-pointer
                                w-5 h-5 
                                rounded-full 
                                border-[1.5px] border-c-slate-700 
                                bg-transparent
                                relative
                                ${isSelected 
                                    ? `
                                    checked:border-c-lime
                                    checked:after:content-[''] 
                                    checked:after:w-2.5 after:h-2.5
                                    checked:after:bg-c-lime 
                                    checked:after:rounded-full 
                                    checked:after:absolute 
                                    checked:after:top-1/2
                                    checked:after:left-1/2
                                    checked:after:-translate-x-1/2
                                    checked:after:-translate-y-1/2
                                    ` 
                                    : ""
                                }

                            `}
                        />
                        <label
                            className="
                                text-c-slate-900 text-desktop/preset-3
                                cursor-pointer
                            "
                            htmlFor={id}
                        >
                            {item}
                        </label>
                    </div>
                )
            })}
            {isError && (
                <div className="text-c-red text-desktop/preset-5">
                    This field is required
                </div>
            )}
        </div>
    )
}