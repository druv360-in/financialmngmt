import "./ChurchFundPage.css";

function ChurchFundPage() {
  return (
    <div className="container">
      <div className="header">
        <h2>Church Fund</h2>

        <div className="summary-top">
          0/1 Paid • ₹800.00/₹1000.00
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>SL</th>
            <th>Family</th>
            <th>Due Title</th>
            <th>Due Date</th>
            <th>Amount</th>
            <th>Paid</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>

            <td>
              <div className="family-name">
                Smith Family
              </div>

              <div className="member-name">
                John Smith
              </div>
            </td>

            <td>Annual Church Fund</td>

            <td>31/12/2026</td>

            <td>₹1000.00</td>

            <td className="green">
              ₹800.00
            </td>

            <td>
              <span className="partial">
                Partial
              </span>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="footer-summary">
        <div>
          <p>Total Amount</p>
          <h3>₹1000.00</h3>
        </div>

        <div>
          <p>Total Paid</p>
          <h3 className="green">
            ₹800.00
          </h3>
        </div>

        <div>
          <p>Remaining</p>
          <h3 className="red">
            ₹200.00
          </h3>
        </div>
      </div>
    </div>
  );
}

export default ChurchFundPage;