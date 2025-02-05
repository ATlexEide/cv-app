import "../styles/PreviewFile.css";
function EducationCard({ school, degree, timeFrom, timeTo }) {
  return (
    <article>
      <h3 id="school">{school}</h3>
      <h4 id="degree">{degree}</h4>
      <p>
        {timeFrom} to {timeTo}
      </p>
    </article>
  );
}
export default EducationCard;
