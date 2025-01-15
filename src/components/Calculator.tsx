import InputField, { InputFieldSide } from "./InputField";
import RadioGroup from "./RadioGroup";

const MORTAGE_TYPES = [
    "Repayment",
    "Interest Only"
]

export default function Calculator () {
    return (
        <div
            className="
                py-[32px] px-[24px]
                flex flex-col gap-6
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
                <InputField side={InputFieldSide.LEFT} icon="£" label="Mortgage Amount" type="text"/>
                <InputField side={InputFieldSide.RIGHT} icon="years" label="Mortgage Term" type="number"/>   
                <InputField side={InputFieldSide.RIGHT} icon="%" label="Interest Rate" type="number"/>    
                <RadioGroup label="Mortgage Type" items={MORTAGE_TYPES} name="mortage_type" />          
            </div>


            {/* button */}
            <div
                className="
                    bg-c-lime text-c-slate-900
                    py-[16px]
                    flex gap-3 items-center justify-center
                    rounded-full
                "
            >
                <img src="./assets/images/icon-calculator.svg" alt="calculator icon" />
                <div className="text-desktop/preset-3">
                    Calculate Repayments
                </div>
            </div>
        </div>
    )
}