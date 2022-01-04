const Buttom = (props) => {
    return(
        <>
            <button 
                type="button" 
                class="btn btn-primary"
                onClick={props.onClick}
            >
                {props.name}
            </button>
        </>
    )

}

export default Buttom;