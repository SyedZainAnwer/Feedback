const CommentCard = ({text}: {text: string}) => {
    return (
        <div className="border border-light_gray p-4 rounded-tr-2xl rounded-b-2xl mb-3 bg-white">
            <p className="text-black">{text}</p>
        </div>
    )
}

export default CommentCard;