import { useFormContext } from "react-hook-form";
import InputField, { InputFieldSide } from "./InputField";
import RadioGroup from "./RadioGroup";

const MORTAGE_TYPES = [
    "Repayment",
    "Interest Only"
]

export default function Calculator () {
    const { reset } = useFormContext();
    return (
        <div
            className="
                h-auto lg:max-w-[504px]
                py-[32px] px-[24px] md:p-[40px]
                flex flex-col gap-6 md:gap-10
            "
        >
            {/* header */}
            <div
                className="
                    flex flex-col gap-2
                "
            >
                <div
                    className="
                        text-c-slate-900 text-desktop/preset-2
                    "
                >
                    Mortgage Calculator
                </div>
                <div
                    className="
                        text-c-slate-700 text-desktop/preset-4 underline
                    "
                    onClick={reset}
                >
                    Clear All
                </div>
            </div>
            {/* fields */}
            <div
                className="
                    flex flex-col gap-6
                "
            >
                <InputField side={InputFieldSide.LEFT} icon="£" label="Mortgage Amount" type="number" name="amount"/>
                <div
                    className="
                        flex flex-col gap-6 md:flex-row lg:grid lg:grid-cols-2
                        w-full
                    "                    
                >
                    <InputField side={InputFieldSide.RIGHT} icon="years" label="Mortgage Term" type="number" name="years"/>   
                    <InputField side={InputFieldSide.RIGHT} icon="%" label="Interest Rate" type="number" name="interest"/>    
                </div>
                <RadioGroup label="Mortgage Type" items={MORTAGE_TYPES} name="mortage_type" />          
            </div>


            {/* button */}
            <button
                className="
                    bg-c-lime text-c-slate-900
                    py-[16px]
                    flex gap-3 items-center justify-center
                    rounded-full
                "
                type="submit"
            >
                <img src="./assets/images/icon-calculator.svg" alt="calculator icon" />
                <div className="text-desktop/preset-3">
                    Calculate Repayments
                </div>
            </button>
        </div>
    )
}