
const Columns = (props) => {
    return (
        <div className="column">
        <div className="circle">
        {props.child}
        </div>
        <h5>{props.name}</h5>
      </div>
    )
}
export default Columns;