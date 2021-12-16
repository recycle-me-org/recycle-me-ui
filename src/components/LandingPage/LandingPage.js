import landingPageBackground from '../../assets/landing-page-background.jpg';
import './LandingPage.css';

const LandingPage = () => (
  <>
    <section className="landing-page-container">
      <div className="background-wash">
        <img
          src={landingPageBackground}
          className="landing-page-img"
          alt="recycle icon with wooden background"
        ></img>
      </div>
      <div className="text-container">
        <h1 className="landing-page-h1">
          Because sometimes we need a little help recycling.
        </h1>
        <h2 className="landing-page-h2">Waste less, recycle more.</h2>
      </div>
    </section>
    <div className="landing-page-footer">
      <p className="landing-page-footer__top">Need help?</p>
      <p className="landing-page-footer__bottom">
        Search for a recycling center below.
      </p>
    </div>
  </>
);

export default LandingPage;
