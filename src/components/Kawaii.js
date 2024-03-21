import {Ghost} from 'react-kawaii'

// this styles the section
const contentStyles = {
	position: "relative",
	top: "50%",
	transform: "translateY(-50%)",
	margin: "0 auto",
	textAlign: "center",
};

const Kawaii = ({ mood }) => {
    // leave the props in the tags but fill in their values
	return (
		<section className="section">
            <div style={contentStyles}>
                <Ghost mood={mood} size={240}/>
            </div>
		</section>
	);
}

export default Kawaii;