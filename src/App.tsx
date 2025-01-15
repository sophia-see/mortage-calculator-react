import { useForm, FormProvider } from "react-hook-form"
import Calculator from "./components/Calculator";
import Result from "./components/Result";

export default function App() {
  const methods = useForm();

  const onSubmit = (data: any) => {

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
            <Result />
          </div>
        </div>
      </form>
    </FormProvider>
  )
}
