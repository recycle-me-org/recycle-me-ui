import './LandingPage.css'
import landingPageBackground from '../../images/landing-page-background.jpg'

const LandingPage = () => {
  return (
    <section className='landing-page-container'>
      <div className='background-wash'>
        <img
          src={ landingPageBackground }
          className='landing-page-img'
          alt='recycle icon with wooden background'
        >
         </img>
      </div>
      <div className='text-container'>
        <h1 className='landing-page-h1'>Because sometimes we need a little help recycling.</h1>
        <h2 className='landing-page-h2'>Bin less, recycle more.</h2>
      </div>
    </section>
  );
};

export default LandingPage;
