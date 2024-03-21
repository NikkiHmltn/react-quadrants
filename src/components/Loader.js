import { FadeLoader } from "react-spinners";

// This is set up for you, no need to touch it
const Loader = ({ styles = {} }) => {
	return <FadeLoader color="rgb(175, 175, 175)" css={styles} />;
}

export default Loader;