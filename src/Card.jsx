import PropTypes from 'prop-types';

function Card(props){
    return (
        <div className="card">
            <img src={props.img} alt="project preview"/>
            <h1>{props.projectName}</h1>
            <p>{props.projectDesc}</p>
        </div>
    );
}
Card.propTypes = {
    img: PropTypes.string,
    projectName: PropTypes.string,
    projectDesc: PropTypes.string
}
Card.defaultProps = {
    img: "https://placehold.co/200",
    projectName: "Project Name",
    projectDesc: "Project Description"
}
export default Card