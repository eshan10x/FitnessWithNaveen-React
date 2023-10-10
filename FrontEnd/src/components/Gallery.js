import React from "react";
import Navbar from "./Navbar";
import "../css/Gallery.css";
import image1 from "../img/6.png";
import image2 from "../img/2.png";
import image3 from "../img/8.png";
import image4 from "../img/PERSONALTRANING.png";
import image5 from "../img/4.png";
import image6 from "../img/5.png";
import image7 from "../img/3.png";
import image8 from "../img/2.png";
import image9 from "../img/1.png";
import video1 from "../video/gymmotivation.mp4";
import video2 from "../video/JANITHMALLI NEW1.mp4";
import video3 from "../video/pasinew.mp4";
import video4 from "../video/rumesh new.mp4";
import video5 from "../video/safika new.mp4";
// import video6 from "../video/sasi final.mp4";
import vidimg1 from "../img/vid1Cover.png";
import vidimg2 from "../img/vid2Cover.png";
import vidimg3 from "../img/vid3Cover.png";
import vidimg4 from "../img/vid4Cover.png";
import vidimg5 from "../img/vid5Cover.png";
// import vidimg6 from "../img/vid6Cover.png";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Embed } from "semantic-ui-react";
import ScrollButton from "./ScrollButton";

function Gallery() {
  return (
    <div className="gallery">
      <div className="gallery__header">
        <Navbar />
        <h1>Gallery</h1>
      </div>

      <div className="gallery__navigation">
        <div class="row">
          <div class="col">
            <Card sx={{ maxWidth: 500, borderRadius: 5 }}>
              <CardMedia
                component="img"
                height="550"
                image={image1}
                alt="green iguana"
              />
            </Card>
          </div>
          <div class="col">
            <Card sx={{ maxWidth: 500, borderRadius: 5 }}>
              <CardMedia
                component="img"
                height="550"
                image={image2}
                alt="green iguana"
              />
            </Card>
          </div>
          <div class="col">
            <Card sx={{ maxWidth: 500, borderRadius: 5 }}>
              <CardMedia
                component="img"
                height="550"
                image={image3}
                alt="green iguana"
              />
            </Card>
          </div>
          <div class="col">
            <Card sx={{ maxWidth: 500, borderRadius: 5 }}>
              <CardMedia
                component="img"
                height="550"
                image={image4}
                alt="green iguana"
              />
            </Card>
          </div>
          <div class="col">
            <Card sx={{ maxWidth: 500, borderRadius: 5 }}>
              <CardMedia
                component="img"
                height="550"
                image={image5}
                alt="green iguana"
              />
            </Card>
          </div>
          <div class="col">
            <Card sx={{ maxWidth: 500, borderRadius: 5 }}>
              <CardMedia
                component="img"
                height="550"
                image={image6}
                alt="green iguana"
              />
            </Card>
          </div>
          <div class="col">
            <Card sx={{ maxWidth: 500, borderRadius: 5 }}>
              <CardMedia
                component="img"
                height="550"
                image={image7}
                alt="green iguana"
              />
            </Card>
          </div>
          <div class="col">
            <Card sx={{ maxWidth: 500, borderRadius: 5 }}>
              <CardMedia
                component="img"
                height="550"
                image={image8}
                alt="green iguana"
              />
            </Card>
          </div>
          <div class="col">
            <Card sx={{ maxWidth: 500, borderRadius: 5 }}>
              <CardMedia
                component="img"
                height="550"
                image={image9}
                alt="green iguana"
              />
            </Card>
          </div>
        </div>
        {/* <div className="videobox1">
          <div className="mainvideo">
            <Embed icon="play" placeholder={vidimg1} url={video1} />
          </div>
        </div> */}
        <div className="videobox">
          <div className="vidbox2">
            <Embed icon="play" placeholder={vidimg1} url={video1} />
          </div>
          <div className="vidbox2">
            <Embed icon="play" placeholder={vidimg5} url={video5} />
          </div>
          <div className="vidbox2">
            <Embed icon="play" placeholder={vidimg2} url={video2} />
          </div>
          <div className="vidbox2">
            <Embed icon="play" placeholder={vidimg3} url={video3} />
          </div>
          <div className="vidbox2">
            <Embed icon="play" placeholder={vidimg4} url={video4} />
          </div>
          {/* <div className="vidbox2">
            <Embed icon="play" placeholder={vidimg6} url={video6} />
          </div> */}
        </div>
      </div>
      <ScrollButton />
    </div>
  );
}

export default Gallery;
