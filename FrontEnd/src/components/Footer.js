import React from "react";
import "../css/Footer.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import PhoneIcon from "@material-ui/icons/Phone";

function Footer() {
  return (
    <div className="footer">
      <div className="contact">
        <h3>Contact Us</h3>
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <a href="https://instagram.com/fitness_with_naveen?igshid=YmMyMTA2M2Y=">
                <div className="street">
                  <InstagramIcon fontSize="large" />
                </div>
              </a>
            </div>
            <div class="col-sm">
              <a href="https://www.facebook.com/Personal.Trainer.Meal.Plan.Naveen">
                <div className="phone">
                  <FacebookIcon fontSize="large" />
                </div>
              </a>
            </div>
            <div class="col-sm">
              <a href="tel:+94766876602">
                <div className="mail">
                  <PhoneIcon fontSize="large" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>© Copyright Fitness With Naveen. All Right Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
