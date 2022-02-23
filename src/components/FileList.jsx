import FileListItem from "./FileListItem";
import PropTypes from "prop-types";

const FileList = ({ files }) => (
  <table className="file-list">
    {files.map((file) => (
      <FileListItem key={file.id} file={file} />
    ))}
  </table>
);

FileList.propTypes = {
  files: PropTypes.array
};

export default FileList