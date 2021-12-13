import './RecycleInstructionsImage.css';
import recycleInstructions from '../../images/recycle-instructions.png';

const RecycleInstructionsImage = () => {
  return (
    <div className="recycling-instructional-image">
      <img
        src={recycleInstructions}
        className="recycle-instructional-img"
        alt="instructional recycling"
      ></img>
    </div>
  );
};

export default RecycleInstructionsImage;
