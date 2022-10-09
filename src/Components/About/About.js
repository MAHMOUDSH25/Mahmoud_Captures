import "./About.scss";
import homeImage from "../../assets/GalleryImages/homeImage.jpg";
import LOGOM from "../../assets/images/LOGOM.png";

function About() {
  return (
    <>
      <div class="px-4 py-5 my-5 text-center">
        <img className="HeroImage" src={homeImage} />
        <h1 class="display-5 fw-bold">
          ABOUT <img className="About-logo-img" src={LOGOM} />E
        </h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">
            Hi I am
            <strong>
              <em>Mahmoud AlShawish</em>
            </strong>
            Freelance photographer.
            <br />
            I am a Portrait and StreetLife photographer based in the UAE.
            <br />
            <br />
            <strong>I shoot with the Sony A6600</strong>
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
