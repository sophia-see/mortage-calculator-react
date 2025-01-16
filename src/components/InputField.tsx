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
}
export default function InputField ({side, icon, label, type, name}: InputFieldProps) {
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
                className="
                    flex 
                    border-[1px] border-c-slate-500 rounded-[4px]
                    overflow-hidden
                "
            >
                <div
                    className={`
                        ${isLeft ? "order-first": "order-last"}
                        bg-c-slate-100 text-c-slate-700 text-desktop/preset-3
                        py-[12.5px] px-[16px]
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
                    "
                    type={type}
                    step={"any"}
                />
            </div>
        </div>
    )
}