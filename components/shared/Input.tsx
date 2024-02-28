import Image from "next/image";
import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";
import submitIcon from '@/public/assets/submit.svg'
import emojiIcon from '@/public/assets/emoji.svg'

interface Props {
    inputType: HTMLInputTypeAttribute;
    placeholder?: string;
    value?: string | number | string[];
    onChange?: ChangeEventHandler<HTMLInputElement>;
    dataItems?: string[];
    className?: string;
    name?: string;
    title?: string;
    isComment?: boolean;
    onCommentSubmit?: React.MouseEventHandler<HTMLImageElement>
}

const Input = ({
    inputType,
    placeholder,
    value,
    onChange,
    dataItems,
    className,
    name,
    title,
    isComment,
    onCommentSubmit
}: Props) => {
    return (
        <div>
            <p className="mb-1">{title}</p>
            <div className={`${isComment ? "border border-light_gray mt-3 rounded-xl bg-white" : ""}`}>
                <input
                    list={dataItems && 'list'}
                    type={inputType}
                    className={`${className} ${isComment ? "border-none outline-none" : "border border-light_gray"} `}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    name={name}
                />
                {isComment && (
                    <div className="flex justify-end px-4 mb-3">
                        <Image 
                            src={emojiIcon} 
                            alt="emojiIcon" 
                            width={20} 
                            height={20} 
                            className="mr-2 cursor-pointer" 
                        />
                        <Image 
                            src={submitIcon} 
                            alt="submitIcon" 
                            width={20} 
                            height={20} 
                            className="cursor-pointer"
                            onClick={onCommentSubmit}
                        />
                    </div>
                )}
            </div>
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