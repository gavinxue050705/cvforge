import { useState } from "react";
import uniqid from "uniqid";
import sampleData from "../public/sample-data";
import "./styles/App.css";
import Header from "./components/Header";
import Personal from "./components/personal/Personal";
import Resume from "./components/Resume";
import EducationForm from "./components/education/EducationForm";
import ExperienceForm from "./components/experience/ExperienceForm";

function App() {
  const [personal, setPersonal] = useState(sampleData.personal);
  const [education, setEducation] = useState(sampleData.educations);
  const [experience, setExperience] = useState(sampleData.experiences);
  const [displayPersonal, setDisplayPersonal] = useState(false);
  const [displayEducation, setDisplayEducation] = useState(false);
  const [displayExperience, setDisplayExperience] = useState(false);

  // personal change
  const handlePersonalChange = (e) => {
    const { id, value } = e.target;
    setPersonal({ ...personal, [id]: value });
  };

  // education change
  const handleEducationChange = (index) => (e) => {
    const nextEducation = education.map((education, i) => {
      if (i === index) {
        return { ...education, [e.target.id]: e.target.value };
      } else {
        return education;
      }
    });
    setEducation(nextEducation);
  };

  // experience change
  const handleExperienceChange = (index) => (e) => {
    const nextExperience = experience.map((experience, i) => {
      if (i === index) {
        return { ...experience, [e.target.id]: e.target.value };
      } else {
        return experience;
      }
    });
    setExperience(nextExperience);
  };

  // add education section
  const addEducation = (e) => {
    setEducation([...education, newEducation]);
  };
  const newEducation = {
    degree: "",
    school: "",
    location: "",
    startDate: "",
    endDate: "",
  };

  // remove education section
  const removeEducation = (index) => (e) => {
    setEducation((education) => {
      return education.filter((_, i) => index !== i);
    });
  };

  // add education section
  const addExperience = (e) => {
    setExperience([...experience, newExperience]);
  };
  const newExperience = {
    company: "",
    position: "",
    location: "",
    description: "",
    startDate: "",
    endDate: "",
  };

  // remove Experience section
  const removeExperience = (index) => (e) => {
    setExperience((experience) => {
      return experience.filter((_, i) => index !== i);
    });
  };

  // drop down menu
  const onDropPersonal = (e) => {
    const form = document.getElementById("form-personal");
    setDisplayPersonal(!displayPersonal);
    if (displayPersonal === true) {
      form.style.display = "block";
    } else {
      form.style.display = "none";
    }
  };
  const onDropEducation = (e) => {
    const form = document.getElementById("form-education");
    setDisplayEducation(!displayEducation);
    if (displayEducation === true) {
      form.style.display = "block";
    } else {
      form.style.display = "none";
    }
  };
  const onDropExperience = (e) => {
    const form = document.getElementById("form-experience");
    setDisplayExperience(!displayExperience);
    if (displayExperience === true) {
      form.style.display = "block";
    } else {
      form.style.display = "none";
    }
  };

  // layout
  return (
    <div>
      <Header />
      <div className="row">
        <div className="row-form">
          <Personal
            onChange={handlePersonalChange}
            name={personal.name}
            email={personal.email}
            phone={personal.phone}
            address={personal.address}
            onDrop={onDropPersonal}
          />
          <EducationForm
            educations={education}
            onChange={handleEducationChange}
            onAdd={addEducation}
            onRemove={removeEducation}
            onDrop={onDropEducation}
          />
          <ExperienceForm
            experiences={experience}
            onChange={handleExperienceChange}
            onAdd={addExperience}
            onRemove={removeExperience}
            onDrop={onDropExperience}
          />
        </div>
        <div className="row-resume">
          <Resume
            personal={personal}
            experience={experience}
            education={education}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
