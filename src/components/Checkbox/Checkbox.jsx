import "./Checkbox.css";

const Checkbox = ({ checked, onChange }) => {
  return (
    <label className="checkbox-container">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="checkbox-input"
      />
      {checked && (
        <svg
          className="checkbox-checkmark"
          width="19"
          height="14"
          viewBox="0 0 19 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 7.6L7.03451 12.9672C7.05497 12.9854 7.08626 12.9837 7.10470 12.9635L18 1"
            stroke="white"
            stroke-linecap="round"
          />
        </svg>
      )}
    </label>
  );
};

export default Checkbox;
