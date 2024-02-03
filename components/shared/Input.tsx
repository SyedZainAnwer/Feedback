import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

interface Props {
    inputType: HTMLInputTypeAttribute;
    placeholder?: string;
    value?: string | number | string[];
    onChange?: ChangeEventHandler<HTMLInputElement>;
    dataItems?: string[];
    className?: string;
    name?: string;
    title?: string;
}

const Input = ({ inputType, placeholder, value, onChange, dataItems, className, name, title }: Props) => {
    return (
        <div>
            <p className="mb-1">{title}</p>
            <input 
                list={dataItems && 'list'}
                type={inputType}
                className={`${className} border border-light_gray p-2 rounded-sm mb-5`}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                name={name}
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