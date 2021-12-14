import './RecycleInstructionsImage.css';
import recycleInstructions from '../../images/recycle-instructions.png';

const RecycleInstructionsImage = () => {
  return (
    <img
      src={recycleInstructions}
      className="recycle-instructional-img"
      alt="instructional recycling image"
    ></img>
  );
};

export default RecycleInstructionsImage;
