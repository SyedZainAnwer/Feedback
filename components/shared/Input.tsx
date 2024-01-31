import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

interface Props {
    inputType: HTMLInputTypeAttribute;
    placeholder: string;
    value?: string | number | string[];
    onChange?: ChangeEventHandler<HTMLInputElement>
}

const Input = ({ inputType, placeholder, value, onChange }: Props) => {
    return (
        <div>
            <input 
                type={inputType}
                className="border border-light_gray p-2 rounded-md"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default Input;