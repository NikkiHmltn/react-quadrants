// import Loader component
import Loader from "./Loader";

// this styles the section
const contentStyles = {
	position: "relative",
	top: "50%",
	transform: "translateY(-50%)",
	margin: "0 auto",
	textAlign: "center",
};

const Section = ({ apiData }) => {
    // if theres no api data or the array is empty, conditionally render the Loader component or data content
		// <Loader styles={contentStyles} />;
    const image = apiData ? <img alt="" src={apiData} /> : <Loader styles={contentStyles} />

    // leave the props in the tags but fill in their values
	return (
		<section className="section">
            <div style={contentStyles}>
                {image}
            </div>
		</section>
	);
}

export default Section;
