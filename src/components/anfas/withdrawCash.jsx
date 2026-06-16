import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function WithdrawCash({ availableBalance = 6379.5, onWithdraw, onCancel }) {
  const navigate = useNavigate();

  const [amount, setAmount] = useState("");
  const [purpose, setPurpose] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
      newErrors.amount = "Amount is required and must be greater than 0";
    } else if (parseFloat(amount) > availableBalance) {
      newErrors.amount = "Amount exceeds available bank balance";
    }
    if (!purpose.trim()) {
      newErrors.purpose = "Purpose/Description is required";
    }
    return newErrors;
  };

  const handleWithdraw = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
    if (onWithdraw) {
      onWithdraw({ amount: parseFloat(amount), purpose });
    }
  };

    const handleCancel = () => {
      if (onCancel) {
        onCancel();
      } else {
        navigate(-1);
      }
    };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        {/* Header */}
        <div style={styles.header}>
          <h2 style={styles.title}>Withdraw Cash from Bank</h2>
          <button style={styles.closeBtn} onClick={handleCancel} aria-label="Close">
            ×
          </button>
        </div>

        {/* Available Balance */}
        <div style={styles.balanceSection}>
          <p style={styles.balanceLabel}>Available Bank Balance</p>
          <p style={styles.balanceAmount}>₹{availableBalance.toFixed(2)}</p>
        </div>

        {/* Amount Field */}
        <div style={styles.fieldGroup}>
          <label style={styles.label}>
            Amount to Withdraw <span style={styles.mandatory}>*</span>
          </label>
          <div style={styles.inputWrapper}>
           <input
            type="number"
            value={amount}
            onChange={(e) => {
                setAmount(e.target.value);
                setErrors((prev) => ({ ...prev, amount: "" }));
            }}
            placeholder="0.00"
            style={{
                ...styles.input,
                border: errors.amount
                ? "3px solid #e53e3e"
                : "3px solid #cbd5e0",
            }}
            onFocus={(e) => {
                e.target.style.border = "4px solid #9ca3af";
            }}
            onBlur={(e) => {
                e.target.style.border = errors.amount
                ? "3px solid #e53e3e"
                : "3px solid #cbd5e0";
            }}
            min="0"
            step="0.01"
            />
            <span style={styles.inputIcon}>₹</span>
          </div>
          {errors.amount && <p style={styles.errorMsg}>{errors.amount}</p>}
        </div>

        {/* Purpose Field */}
        <div style={styles.fieldGroup}>
          <label style={styles.label}>
            Purpose/Description <span style={styles.mandatory}>*</span>
          </label>
        <textarea
        value={purpose}
        onChange={(e) => {
            setPurpose(e.target.value);
            setErrors((prev) => ({ ...prev, purpose: "" }));
        }}
        placeholder="Reason for withdrawal..."
        rows={3}
        style={{
            ...styles.textarea,
            border: errors.purpose
            ? "3px solid #e53e3e"
            : "3px solid #cbd5e0",
        }}
        onFocus={(e) => {
            e.target.style.border = "4px solid #9ca3af";
        }}
        onBlur={(e) => {
            e.target.style.border = errors.purpose
            ? "3px solid #e53e3e"
            : "3px solid #cbd5e0";
        }}
        />
          {errors.purpose && <p style={styles.errorMsg}>{errors.purpose}</p>}
        </div>

        {/* Success Message */}
        {submitted && (
          <p style={styles.successMsg}>
            ✅ ₹{amount} withdrawal recorded successfully!
          </p>
        )}

        {/* Action Buttons */}
        <div style={styles.actions}>
          <button style={styles.withdrawBtn} onClick={handleWithdraw}>
            Withdraw Cash
          </button>
          <button style={styles.cancelBtn} onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.45)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    fontFamily: "'Segoe UI', sans-serif",
  },
 modal: {
  backgroundColor: "#ffffff",
  borderRadius: "14px",
  padding: "clamp(16px, 3vw, 24px)",
  width: "90%",
  maxWidth: "520px",
  boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
  position: "relative",
  
},
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
  },
  title: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#111827",
    margin: 0,
  },
  closeBtn: {
    background: "none",
    border: "none",
    fontSize: "22px",
    cursor: "pointer",
    color: "#666",
    lineHeight: 1,
    padding: "0 4px",
  },
  balanceSection: {
    marginBottom: "20px",
    padding: "8px 10px",
    backgroundColor: "#f3f4f6",
    borderRadius: "6px",
    
  },
  balanceLabel: {
    fontSize: "12px",
    color: "#667085",
    margin: "0 0 4px 0",
  },
  balanceAmount: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#1a202c",
    margin: 0,
  },
  fieldGroup: {
    marginBottom: "18px",
  },
  label: {
    display: "block",
    fontSize: "13px",
    fontWeight: "600",
    color: "#111827",
    marginBottom: "6px",
  },
  mandatory: {
    color: "#e53e3e",
    marginLeft: "2px",
  },
  inputWrapper: {
    position: "relative",
  },
  input: {
    width: "100%",
    padding: "5px 48px 5px 12px",
    border: ".1px solid #bfc5cf",
    borderRadius: "12px",
    fontSize: "16px",
    color: "#2d3748",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
    backgroundColor:"#f3f4f6"
  },
  inputIcon: {
    position: "absolute",
    right: "16px",
    top: "50%",
    transform: "translateY(-50%)",
    color: "#8a94a6",
    fontSize: "14px",
    pointerEvents: "none",
  },
  textarea: {
    width: "100%",
    padding: "10px 12px",
    border: ".1px solid #fdfeff",
    borderRadius: "12px",
    fontSize: "14px",
    color: "#2d3748",
    outline: "none",
    resize: "vertical",
    boxSizing: "border-box",
    fontFamily: "inherit",
    transition: "border-color 0.2s",
    backgroundColor:"#f3f4f6"
  },
  errorMsg: {
    color: "#e53e3e",
    fontSize: "12px",
    marginTop: "4px",
    margin: "4px 0 0 0",
  },
  successMsg: {
    color: "#276749",
    backgroundColor: "#f0fff4",
    border: "1px solid #9ae6b4",
    borderRadius: "6px",
    padding: "10px 14px",
    fontSize: "13px",
    marginBottom: "14px",
  },
  actions: {
    display: "flex",
    justifyContent: "space-between", // Pushes the cancel button to the far right
    alignItems: "center",
    gap: "12px",                     // Keeps a neat gap between them
    marginTop: "16px",               // Matches the spacing in your image
    width: "100%",
  },
  withdrawBtn: {
    flex: "1",                       // Forces the withdraw button to grow and fill the empty space
    padding: "12px",
    backgroundColor: "#1a202c",
    color: "#ffffff",
    border: "none",
    borderRadius: "10px",
    fontSize: "12px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background 0.2s",
  },
  cancelBtn: {
    padding: "12px 24px",            // Clean horizontal padding to keep it structured
    backgroundColor: "#ffffff",
    color: "#2d3748",
    border: "1px solid #cbd5e0",
    borderRadius: "10px",
    fontSize: "12px",
    fontWeight: "700",
    cursor: "pointer",
    transition: "background 0.2s",
    whiteSpace: "nowrap",            // Prevents the word "Cancel" from wrapping to a new line
  }}
  
