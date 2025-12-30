import "../styles/education.css";

function Education({ data, setData }) {
  function handleChange(e, index) {
    const updated = [...data];
    updated[index][e.target.name] = e.target.value;
    setData(updated);
  }

  function addEducation() {
    setData([...data, { school: "", title: "", date: "" }]);
  }

  function deleteEducation(index) {
    if (data.length === 1) return;
    setData(data.filter((_, i) => i !== index));
  }

  return (
    <section className="card">
      <h2>Education</h2>

      {data.map((edu, index) => (
        <div key={index} className="edu-item">
          <input
            name="school"
            placeholder="School / University"
            value={edu.school}
            onChange={(e) => handleChange(e, index)}
          />
          <input
            name="title"
            placeholder="Title of Study"
            value={edu.title}
            onChange={(e) => handleChange(e, index)}
          />
          <input
            name="date"
            placeholder="Date of Study"
            value={edu.date}
            onChange={(e) => handleChange(e, index)}
          />

          <button
            className="danger"
            onClick={() => deleteEducation(index)}
          >
            Delete
          </button>
        </div>
      ))}

      <button onClick={addEducation}>+ Add Education</button>
    </section>
  );
}

export default Education;
