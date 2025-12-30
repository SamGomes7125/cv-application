import "../styles/experience.css";

function Experience({ data, setData }) {
  function handleChange(e, index) {
    const updated = [...data];
    updated[index][e.target.name] = e.target.value;
    setData(updated);
  }

  function handleResponsibilities(e, index) {
    const updated = [...data];
    updated[index].responsibilities = e.target.value
      .split(",")
      .map((r) => r.trim());
    setData(updated);
  }

  function addExperience() {
    setData([
      ...data,
      {
        company: "",
        position: "",
        responsibilities: [],
        from: "",
        to: "",
      },
    ]);
  }

  function deleteExperience(index) {
    if (data.length === 1) return;
    setData(data.filter((_, i) => i !== index));
  }

  return (
    <section className="card">
      <h2>Experience</h2>

      {data.map((exp, index) => (
        <div key={index} className="exp-item">
          <input
            name="company"
            placeholder="Company Name"
            value={exp.company}
            onChange={(e) => handleChange(e, index)}
          />
          <input
            name="position"
            placeholder="Position Title"
            value={exp.position}
            onChange={(e) => handleChange(e, index)}
          />
          <input
            placeholder="Responsibilities (comma separated)"
            onChange={(e) => handleResponsibilities(e, index)}
          />
          <input
            name="from"
            placeholder="From"
            value={exp.from}
            onChange={(e) => handleChange(e, index)}
          />
          <input
            name="to"
            placeholder="To"
            value={exp.to}
            onChange={(e) => handleChange(e, index)}
          />

          <button
            className="danger"
            onClick={() => deleteExperience(index)}
          >
            Delete
          </button>
        </div>
      ))}

      <button onClick={addExperience}>+ Add Experience</button>
    </section>
  );
}

export default Experience;
