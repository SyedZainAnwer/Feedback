interface Props {
    title: string
}

const Heading = ({ title }: Props) => {
    return(
        <h1 className="md:text-lg font-bold uppercase text-black flex items-center">{title}</h1>
    )
}

export default Heading;