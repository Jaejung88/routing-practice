const PrettyPage = (props) => {
    return(
        <div style={{color:props.txtColor, backgroundColor:props.bgColor}}>
            The word is: {props.word}
        </div>
    );
}

export default PrettyPage;