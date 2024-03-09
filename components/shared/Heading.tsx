interface Props {
    title: string;
    className?: string
}

const Heading = ({ title, className }: Props) => {
    return(
        <h1 className={`${className} md:text-lg font-bold uppercase text-black flex items-center font-inria_sans`}>{title}</h1>
    )
}

export default Heading;