// this styles the section
const contentStyles = {
	position: "relative",
	top: "50%",
	transform: "translateY(-50%)",
	margin: "0 auto",
	textAlign: "center",
};

const Button = ({ fetchData }) => {
    // leave the props in the tags but fill in their values
	return (
		<section className="section">
            <div style={contentStyles}>
                {/* add an onClick prop to the button for handling api call */}
                <input type="button" value="New Gifs" onClick={fetchData}/>
            </div>
		</section>
	);
}

export default Button;