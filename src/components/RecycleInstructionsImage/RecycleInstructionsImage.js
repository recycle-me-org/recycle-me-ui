import './RecycleInstructionsImage.css';
import recycleTutorial from '../../images/tutorial.png';

const RecycleInstructionsImage = () => {
  return (
    <div className="recycling-instructional-image">
      <img
        src={recycleTutorial}
        className="recycle-instructional-img"
        alt="instructional recycling image"
      ></img>
    </div>
  );
};

export default RecycleInstructionsImage;
