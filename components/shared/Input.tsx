import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

interface Props {
    inputType: HTMLInputTypeAttribute;
    placeholder?: string;
    value?: string | number | string[];
    onChange?: ChangeEventHandler<HTMLInputElement>;
    dataItems?: string[];
    className?: string;
}

const Input = ({ inputType, placeholder, value, onChange, dataItems, className }: Props) => {
    return (
        <div>
            <input 
                list={dataItems && 'list'}
                type={inputType}
                className={`${className} border border-light_gray p-2 rounded-sm mb-5`}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {dataItems && (
                dataItems.map((item, index) => (
                    <datalist id="list" key={index}>
                        <option value={item} className="cursor-pointer px-4">{item}</option>
                    </datalist>
                ))
            )}
        </div>
    )
}

export default Input;