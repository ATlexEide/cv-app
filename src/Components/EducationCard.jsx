import "../styles/PreviewFile.css";
function EducationCard({ school, degree, timeFrom, timeTo }) {
  return (
    <article>
      <div id="heading">
        <span id="date">{`${timeFrom} -> ${timeTo}`}</span>
        <h3 id="school">{school}</h3>
      </div>

      <h4 id="degree">{degree}</h4>
      <p></p>
    </article>
  );
}
export default EducationCard;
