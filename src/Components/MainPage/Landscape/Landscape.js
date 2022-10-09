import "./Landscape.scss";
///////////////////////////////////
import mercedes from "../../../assets/GalleryImages/mercedes.jpg";
import landscapeGuitar from "../../../assets/GalleryImages/landscapeGuitar.jpg";
import expo from "../../../assets/GalleryImages/expo.jpg";
import khalifa from "../../../assets/GalleryImages/khalifa.jpg";
import circle from "../../../assets/GalleryImages/circle.jpg";
import malahe from "../../../assets/GalleryImages/malahe.jpg";
import whiteguitar from "../../../assets/GalleryImages/whiteguitar.jpg";
import triamph from "../../../assets/GalleryImages/triamph.jpg";
import triamphbike from "../../../assets/GalleryImages/triamphbike.jpg";
import rudge from "../../../assets/GalleryImages/rudge.jpg";
// import triamph from "../../../assets/GalleryImages/triamph.jpg"
// import triamph from "../../../assets/GalleryImages/triamph.jpg"
// import triamph from "../../../assets/GalleryImages/triamph.jpg"

function Landscape() {
  return (
    <div class="container">
      <div className="d-flex row justify-content-md-center align-items-center">
        <div className="col d-flex justify-content-md-center">
          <img className="img1" src={landscapeGuitar} />
        </div>
        <div className="col d-flex justify-content-md-start">
          <img className="img2" src={expo} />
        </div>
        <div className="col col-sm-1 d-flex justify-content-md-center">
          <img className="img3" src={khalifa} />
        </div>
        <div className="col d-flex justify-content-md-end">
          <img className="img4" src={circle} />
        </div>
        <div className="col d-flex justify-content-md-start">
          <img className="img5" src={malahe} />
        </div>
        <div className="col d-flex justify-content-md-end">
          <img className="img6" src={whiteguitar} />
        </div>
        <div className="col d-flex justify-content-md-start">
          <img className="img7" src={triamph} />
        </div>
        <div className="col col-sm-1 d-flex justify-content-md-center">
          <img className="img8" src={rudge} />
        </div>
        <div className="col d-flex justify-content-md-end">
          <img className="img9" src={triamphbike} />
        </div>
      </div>
    </div>
  );
}

export default Landscape;
