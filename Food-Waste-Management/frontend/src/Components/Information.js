import React from "react";
import Image1 from "../Images/meal.jpeg";
import Hunger from "../Images/bag.png";
import Donate from "../Images/heart.png";
import Volunteer from "../Images/hand.png";

export default function Information() {
  return (
    <div>
      <div className="info">
        <div className="infor"></div>
        <h1 className="info1">
          Information our
          <br /> Organization
        </h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <img src={Image1} alt="" className="mission" />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-5 my-auto">
            <h1 className="meal">50,000 Meals a Day</h1>
            <p className="visionp">
              "Our organization is dedicated to combating food insecurity by
              providing nutritious meals to those in need. We organize community
              food drives and partner with local businesses to collect surplus
              food"{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="container con">
        <div className="row information">
          <div className="col-12 col-sm-12 col-md-12 col-lg-4">
            <img src={Hunger} alt="" />
            <h4 className="pt-3">Hunger Relief</h4>
            <p className="quotes">
              "There is no exercise better
              <br /> for the heart than reaching down <br /> and lifting people
              up."
              <br />
              <b>— John Holmes </b>
            </p>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-4 ">
            <img className="don" src={Donate} alt="" />
            <h4 className="pt-3">Donate</h4>
            <p className="quotes">
              "The best way to find
              <br /> yourself is to lose yourself in <br />
              the service of others." <br />
              <b>— Mahatma Gandhi</b>
            </p>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-4">
            <img src={Volunteer} alt="" />
            <h4 className="pt-3">Volunteer</h4>
            <p className="quotes">
              "The smallest act of <br />
              kindness is worth more than the <br /> grandest intention."
              <br /> — Oscar Wilde<b></b>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
