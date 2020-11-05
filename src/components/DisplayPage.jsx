const DisplayPage = (props) => {
    return(
        <div>
            {
            isNaN(props.input) ? 
            <div>
                The word is: {props.input} 
            </div> :
            <div>
                The number is: {props.input}
            </div>
            }
        </div>
    );
}

export default DisplayPage;