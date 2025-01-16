export default function Result () {
    return (
        <div
            className="
                bg-c-slate-900
                h-full
                py-[32px] px-[24px]
                flex flex-col gap-6
            "
        >
            <div
                className="
                    flex flex-col gap-4
                "
            >
                <div
                    className="
                        text-white text-desktop/preset-2
                    "
                >
                    Your results
                </div>
                <div
                    className="
                        text-c-slate-300 text-desktop/preset-4
                    "
                >
                    Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.
                </div>
            </div>
            <div
                className="
                    bg-c-dark-slate
                    py-[24px] px-[16px]
                    flex flex-col gap-4
                    rounded-[8px] border-t-[4px] border-t-c-lime
                "
            >
                <div
                    className="
                        flex flex-col gap-2
                    "   
                >
                    <div
                        className="text-c-slate-300 text-desktop/preset-4"
                    >
                        Your monthly repayments
                    </div>
                    <div
                        className="text-c-lime text-mobile/preset-1"
                    >
                        £1,797.74
                    </div>
                </div>
                <div
                    className="
                        border-b-[1px] border-c-light-slate
                    "
                >
                </div>
                <div
                    className="
                        flex flex-col gap-2
                    "   
                >
                    <div
                        className="text-c-slate-300 text-desktop/preset-4"
                    >
                        Total you'll repay over the term
                    </div>
                    <div
                        className="text-white text-desktop/preset-2"
                    >
                        £539,322.94
                    </div>
                </div>
            </div>
        </div>
    )
}