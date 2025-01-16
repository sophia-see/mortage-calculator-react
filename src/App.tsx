import { useForm, FormProvider } from "react-hook-form"
import Calculator from "./components/Calculator";
import Result from "./components/Result";
import React from "react";

interface CalculatorType {
  principal: number;
  annualInterestRate: number;
  loanTermYears: number;
}

export default function App() {
  const methods = useForm();
  const [monthly, setMonthly] = React.useState<null | number>(null);
  const [yearly, setYearly] = React.useState<null | number>(null);

  function calculateRepaymentMortgage({principal, annualInterestRate, loanTermYears}: CalculatorType) {
    // Convert annual interest rate to monthly interest rate
    const monthlyInterestRate = annualInterestRate / 12 / 100;
  
    // Calculate total number of payments (months)
    const totalPayments = loanTermYears * 12;
  
    // Formula for monthly repayment
    const monthlyRepayment =
      (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments)) /
      (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);
  
    // Total repayment amount
    const totalRepayment = monthlyRepayment * totalPayments;
  
    return {
      monthly: monthlyRepayment,
      total: totalRepayment,
    };
  }
  
  function calculateInterestOnlyMortgage({principal, annualInterestRate, loanTermYears}: CalculatorType) {
    // Convert annual interest rate to monthly interest rate
    const monthlyInterestRate = annualInterestRate / 12 / 100;
  
    // Monthly interest-only payment
    const monthlyInterestPayment = principal * monthlyInterestRate;
  
    // Total interest-only payments (ignores principal)
    const totalInterestPayment = monthlyInterestPayment * loanTermYears * 12;
  
    return {
      monthly: monthlyInterestPayment,
      total: totalInterestPayment, // Total only covers interest for the term
    };
  }

  const onSubmit = (data: any) => {
    let { monthly, total } = calculateRepaymentMortgage({principal:data.amount, annualInterestRate: data.interest, loanTermYears: data.years});
    
    if (data.mortage_type == "Interest Only") {
      let interestOnly = calculateInterestOnlyMortgage({principal:data.amount, annualInterestRate: data.interest, loanTermYears: data.years});
      monthly = interestOnly.monthly;
      total = interestOnly.total;
    }

    setMonthly(monthly);
    setYearly(total);
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div
          className="
            bg-c-slate-100
            font-sans
            h-auto min-h-screen w-screen
          "
        >
          <div
            className="
              bg-white
              h-auto min-h-screen w-full
              flex flex-col gap-0
            "
          >
            {/* calculator */}
            <Calculator />
            {/* result */}
            <Result monthly={monthly} yearly={yearly}/>
          </div>
        </div>
      </form>
    </FormProvider>
  )
}
