import React, { useReducer } from "react";

const initialState = [
  { id: 1, name: "Ravi", status: "" },
  { id: 2, name: "Sita", status: "" },
  { id: 3, name: "Arjun", status: "" }
];

function reducer(state, action) {
  switch (action.type) {
    case "MARK_PRESENT":
      return state.map((student) =>
        student.id === action.id ? { ...student, status: "Present" } : student
      );

    case "MARK_ABSENT":
      return state.map((student) =>
        student.id === action.id ? { ...student, status: "Absent" } : student
      );

    default:
      return state;
  }
}

export default function AttendanceApp() {
  const [students, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ padding: 20 }}>
      <h2>Attendance App (useReducer)</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Mark</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.name}</td>

              <td>
                <button
                  onClick={() => dispatch({ type: "MARK_PRESENT", id: s.id })}
                >
                  Present
                </button>

                <button
                  onClick={() => dispatch({ type: "MARK_ABSENT", id: s.id })}
                  style={{ marginLeft: "10px" }}
                >
                  Absent
                </button>
              </td>

              <td>{s.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}