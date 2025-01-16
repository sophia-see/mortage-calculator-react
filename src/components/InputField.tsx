import { useFormContext } from "react-hook-form";

export enum InputFieldSide {
    LEFT = "left",
    RIGHT = "right"
}
interface InputFieldProps {
    side: string;
    icon: string;
    label: string;
    type: string;
    name: string;
    isError: boolean;
}
export default function InputField ({side, icon, label, type, name, isError}: InputFieldProps) {
    const {register} = useFormContext();
    const isLeft = side == InputFieldSide.LEFT;

    return (
        <div
            className="
                flex flex-col gap-3 md:flex-1 lg:flex-shrink
                w-full
            "
        >
            <div
                className="
                    text-c-slate-700 text-desktop/preset-4
                "
            >
                {label}
            </div>
            <div
                className={`
                    group
                    flex 
                    border-[1px] ${isError ? "border-c-red" : "border-c-slate-500 hover:border-c-slate-900 "} rounded-[4px]
                    group-focus-within:border-c-lime
                    overflow-hidden
                `}
            >
                <div
                    className={`
                        ${isLeft ? "order-first": "order-last"}
                        ${isError ? "bg-c-red text-white" : "bg-c-slate-100 text-c-slate-700"} text-desktop/preset-3
                        py-[12.5px] px-[16px]
                        group-focus-within:bg-c-lime group-focus-within:text-c-slate-900 
                    `}
                >
                    {icon}
                </div>
                <input 
                    {...register(name)}
                    className="
                        flex-1
                        pl-[16px]
                        min-w-0
                        text-desktop/preset-3
                        outline-none
                    "
                    type={type}
                    step={"any"}
                />
            </div>
            {isError && (
                <div className="text-c-red text-desktop/preset-5">
                    This field is required
                </div>
            )}
        </div>
    )
}