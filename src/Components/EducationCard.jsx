import "../styles/PreviewFile.css";
function EducationCard({ school, degree, timeFrom, timeTo, desc }) {
  return (
    <article>
      <div id="heading">
        <span id="date">{`${timeFrom} -> ${timeTo}`}</span>
        <h3 id="school">{school}</h3>
      </div>
      <h4 id="degree">{degree}</h4>
      {desc && (
        <div>
          <h5>Extra info:</h5>
          <p id="desc">{desc}</p>
        </div>
      )}
    </article>
  );
}
export default EducationCard;
