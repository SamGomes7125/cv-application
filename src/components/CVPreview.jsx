import "../styles/app.css";

function CVPreview({ general, education, experience }) {
  return (
    <div className="preview">
      <h1>{general.name}</h1>
      <p className="subtitle">
        {general.email} | {general.phone}
      </p>

      <h2>Education</h2>
      <ul>
        {education.map((edu, index) => (
          <li key={index}>
            <strong>{edu.school}</strong> — {edu.title} ({edu.date})
          </li>
        ))}
      </ul>

      <h2>Experience</h2>
      {experience.map((exp, index) => (
        <div key={index} className="preview-block">
          <h3>{exp.company}</h3>
          <p>
            {exp.position} ({exp.from} – {exp.to})
          </p>
          <ul>
            {exp.responsibilities.map((res, i) => (
              <li key={i}>{res}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default CVPreview;
