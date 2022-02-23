import Time from "./Time";
import FileName from "./FileName";
import CommitMessage from "./CommitMessage";
import PropTypes from "prop-types";

const FileListItem = ({ file }) => (
  <tr className="file-list-item" key={file.id}>
   <td className="file-name"><FileName file={file} /></td> 
   <td className="commit-message"><CommitMessage commit={file.latestCommit} /></td> 
    <td className="age">
      <Time time={file.updated_at}/>
    </td>
  </tr>
);

FileListItem.propTypes = {
  file: PropTypes.object.isRequired
};

export default FileListItem