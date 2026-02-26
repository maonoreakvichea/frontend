
export default function Scores({ courseName, courseResult }) {
  return (
    <div className="course-scores">
      <h2>{courseName}</h2>
      <table>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {courseResult.map((res, idx) => (
            <tr key={idx}>
              <td>{res.firstName}</td>
              <td>{res.lastName}</td>
              <td className={res.score < 50 ? "warning" : ""}>{res.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}