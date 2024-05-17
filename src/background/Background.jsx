import styles from "./Background.module.css";
import PropTypes from 'prop-types';

function Background(props) {
    const params = {
        backgroundImage: props.image
    };
    return (
        <>  
            <div className={styles.background} style={params}>
            </div>
        </>
    );
}

Background.propTypes = {
    image: PropTypes.string
};

export default Background;