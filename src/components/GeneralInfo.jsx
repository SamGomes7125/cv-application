import "../styles/general.css";

function GeneralInfo({ data, setData }) {
  return (
    <section>
      <h2>General Information</h2>

      <input
        placeholder="Name"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />

      <input
        placeholder="Email"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />

      <input
        placeholder="Phone"
        value={data.phone}
        onChange={(e) => setData({ ...data, phone: e.target.value })}
      />
    </section>
  );
}

export default GeneralInfo;
