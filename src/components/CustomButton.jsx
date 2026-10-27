const CustomButton = (props) => {
    const {type="primary", text="Button"}=props
    return (
        <>
            <button className={`btn btn-${type}`}>{text}</button>

        </>
    )
}

export default CustomButton