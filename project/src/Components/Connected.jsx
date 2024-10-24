import React from "react";

const Connected = (props) => {
    return (
      <div className="connected-container">
        <h1 className="connected-header">You are Connected to Metamask</h1>
        <p className="connected-account">Metamask Account: {props.account}</p>
        <p className="connected-account">
          Remaining Time: {props.remainingTime}
        </p>
        {props.showButton ? (
          <p className="connected-account">You have already voted</p>
        ) : (
          <div>
            <input
              type="number"
              placeholder="Entern Candidate Index"
              value={props.number}
              onChange={props.handleNumberChange}
            ></input>
            <br />
            <button className="login-button" onClick={props.voteFunction}>
              Vote
            </button>
          </div>
        )}

        <table
          id="myTable"
          className="candidates-table"
          style={{ borderCollapse: "collapse" }}
        >
          <thead>
            <tr style={{ backgroundColor: "#ccd6cc", color: "black" }}>
              <th
                style={{
                  padding: "10px",
                  border: "1px solid #ddd",
                  textAlign: "left",
                }}
              >
                Index
              </th>
              <th
                style={{
                  padding: "10px",
                  border: "1px solid #ddd",
                  textAlign: "left",
                }}
              >
                Candidate Name
              </th>
              <th
                style={{
                  padding: "10px",
                  border: "1px solid #ddd",
                  textAlign: "left",
                }}
              >
                Candidate Votes
              </th>
            </tr>
          </thead>
          <tbody>
            {props.candidates.map((candidate, index) => (
              <tr
                key={index}
                style={{
                  backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#9aed7b",
                }}
              >
                <td
                  style={{
                    padding: "10px",
                    border: "1px solid #ddd",
                    textAlign: "left",
                  }}
                >
                  {candidate.index}
                </td>
                <td
                  style={{
                    padding: "10px",
                    border: "1px solid #ddd",
                    textAlign: "left",
                  }}
                >
                  {candidate.name}
                </td>
                <td
                  style={{
                    padding: "10px",
                    border: "1px solid #ddd",
                    textAlign: "left",
                  }}
                >
                  {candidate.voteCount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default Connected;
