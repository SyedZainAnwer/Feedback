const AuthRightSideBar = () => {
    const initialTexts = ['Academic Programs', 'Faculty', 'Student Services'];
    return (
        <div className="bg-purple h-screen flex flex-col justify-center items-center">
            <div>
                <p className="text-3xl text-yellow">Give Your Valuable</p>
                <p className="text-8xl font-bold text-orange">Feedback</p>
                <div className="flex justify-end">
                        <p className="text-yellow">About THI</p>
                    <div className="dynamic_txt">
                        <ul>
                            {initialTexts.map((text, index) => (
                                <li key={index}><span>{text}</span></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthRightSideBar;
