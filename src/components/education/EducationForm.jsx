import ButtonAdd from "../ButtonAdd";
import Education from "./Education";

function EducationForm({ educations, onChange, onAdd, onRemove, onDrop }) {
  return (
    <div className="container">
      <h2 onClick={onDrop} className="section-header">
        Education
      </h2>
      <div id="form-education">
        {educations.map((education, i) => (
          <Education
            index={i}
            onChange={onChange}
            degree={education.degree}
            school={education.school}
            location={education.location}
            startDate={education.startDate}
            endDate={education.endDate}
            onRemove={onRemove}
          />
        ))}
        <ButtonAdd onAdd={onAdd} section="Education" />
      </div>
    </div>
  );
}

export default EducationForm;
