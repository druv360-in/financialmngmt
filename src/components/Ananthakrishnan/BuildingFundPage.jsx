import "./BuildingFundPage.css";

function BuildingFundPage() {
  return (
    <div className="container">
      <div className="header">
        <h2>Building Fund</h2>

        <div className="summary-top">
          0/1 Paid • ₹0.00/₹500.00
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
                Johnson Family
              </div>

              <div className="member-name">
                Robert Johnson
              </div>
            </td>

            <td>Building Fund Contribution</td>

            <td>30/8/2026</td>

            <td>₹500.00</td>

            <td className="green">
              ₹0.00
            </td>

            <td>
              <span className="unpaid">
                Unpaid
              </span>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="footer-summary">
        <div>
          <p>Total Amount</p>
          <h3>₹500.00</h3>
        </div>

        <div>
          <p>Total Paid</p>
          <h3 className="green">₹0.00</h3>
        </div>

        <div>
          <p>Remaining</p>
          <h3 className="red">₹500.00</h3>
        </div>
      </div>
    </div>
  );
}

export default BuildingFundPage;