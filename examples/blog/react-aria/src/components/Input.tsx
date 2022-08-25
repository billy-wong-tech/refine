import React, { RefObject } from "react";
import { useTextField } from "@react-aria/textfield";
import { AriaTextFieldProps } from "react-aria";

export default function Input(props: AriaTextFieldProps) {
    const ref: RefObject<any> = React.useRef();
    const {
        inputProps: { className, ...inputProps },
    } = useTextField(props, ref);

    return (
        <div className="w-full">
            <input
                {...inputProps}
                ref={ref}
                className={`border-2 border-slate-300 hover:border-sky-200 focus:border-sky-400 active:border-sky-400 rounded-md py-1.5 px-2.5 w-full ${className}`}
            />
        </div>
    );
}