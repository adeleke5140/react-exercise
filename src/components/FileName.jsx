import FileIcon from "./FileIcon"
import PropTypes from "prop-types";

const FileName = ({ file }) => (
  <>
    <span> <FileIcon icon={file.type} />{file.name}</span>
  </>
)

FileName.propTypes = {
  file: PropTypes.object.isRequired
}

export default FileName