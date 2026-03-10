import "./App.css";

export default function App() {
  const student = {
    name: "Arun Kumar",
    regNo: "24CS1001",
    dept: "CSE",
    year: "II Year",
    email: "arun.kumar@klu.edu.in",
    cgpa: "8.6",
  };

  return (
    <div className="page">
      <h1 className="title">Student Information (External CSS)</h1>

      <div className="card">
        <div className="badge">ACTIVE</div>

        <h2 className="name">{student.name}</h2>
        <p className="sub">Reg No: <b>{student.regNo}</b></p>

        <div className="grid">
          <div className="box">
            <p className="label">Department</p>
            <p className="value">{student.dept}</p>
          </div>
          <div className="box">
            <p className="label">Year</p>
            <p className="value">{student.year}</p>
          </div>
          <div className="box">
            <p className="label">Email</p>
            <p className="value">{student.email}</p>
          </div>
          <div className="box">
            <p className="label">CGPA</p>
            <p className="value">{student.cgpa}</p>
          </div>
        </div>

        <button className="btn">Send Message</button>
      </div>
    </div>
  );
}
