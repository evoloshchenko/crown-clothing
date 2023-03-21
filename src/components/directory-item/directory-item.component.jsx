import "./directory-item.styles.scss";
import { useNavigate } from "react-router-dom";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  const navigate = useNavigate();

  const goToCategory = () => {
    navigate(`/shop/${title}`);
  };

  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="directory-item-body">
        <h2 onClick={goToCategory}>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
