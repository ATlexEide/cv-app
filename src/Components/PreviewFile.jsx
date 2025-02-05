import "../styles/PreviewFile.css";
function PreviewFile({ person }) {
  return (
    <article id="file">
      <h2>{`${person.firstName} ${person.lastName}`}</h2>
      <h3>{`${person.email} ${person.phone}`}</h3>
      <div className="border"></div>
    </article>
  );
}
export default PreviewFile;
