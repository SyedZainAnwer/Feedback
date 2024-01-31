interface Props {
    className: string;
}

const HeadingIndicator = ({ className }: Props) => {
    return <div className={`${className} bg-gradient-vertical w-1 mr-2 rounded`}></div>
}

export default HeadingIndicator;