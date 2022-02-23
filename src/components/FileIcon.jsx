import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { faFileLines } from "@fortawesome/free-regular-svg-icons"
import PropTypes from "prop-types";

const FileIcon = ({ icon }) => (
  <span className="file-icon">
    {icon === "folder" ?
      <FontAwesomeIcon
        icon={faFolder}
        style={{ color: '#508fca' }}
      /> :
      <FontAwesomeIcon
        icon={faFileLines}

      />}
  </span>
);

FileIcon.propTypes = {
  icon: PropTypes.string.isRequired
}

export default FileIcon