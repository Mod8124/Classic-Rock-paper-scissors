const Button = ({ value,point, className }) => {
    return (
        <button className={className}>
            {value} <span>{point && point}</span>
        </button>
    )
}

export default Button;