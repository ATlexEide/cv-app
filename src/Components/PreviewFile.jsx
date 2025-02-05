import "../styles/PreviewFile.css";
function PreviewFile({ person }) {
  return (
    <article id="file">
      <h2>{`${person.firstName} ${person.lastName}`}</h2>
      <span>{`${person.email} ${person.phone}`}</span>
      <span></span>
    </article>
  );
}
export default PreviewFile;
