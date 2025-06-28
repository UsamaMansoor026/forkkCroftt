import { useNavigate } from "react-router-dom";

const BackButton = ({ className = "" }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <button
      onClick={handleBack}
      className={`bg-primary-text/20 text-white px-6 py-1.5 rounded-md hover:shadow-2xs hover:shadow-primary-text transition duration-200 cursor-pointer ${className}`}
    >
      <i className="fa-solid fa-arrow-left"></i>
    </button>
  );
};

export default BackButton;
