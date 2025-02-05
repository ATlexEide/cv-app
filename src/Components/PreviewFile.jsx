import "../styles/PreviewFile.css";
function PreviewFile({ person }) {
  return (
    <article id="file">
      <h2>{`${person.firstName} ${person.lastName}`}</h2>
      <div id="contact-info">
        <span id="email">{`Email: ${person.email}`}</span>
        <span id="phonenumber">{`Tlf: ${person.phone}`}</span>
      </div>
      <div className="border"></div>
    </article>
  );
}
export default PreviewFile;
