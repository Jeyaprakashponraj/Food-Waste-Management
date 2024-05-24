import React from "react";
import Image1 from "../Images/food.jpeg";
import Image2 from "../Images/visionFood.jpeg";

export default function About() {
  return (
    <div>
      <div className="about">
        <div className="AboutCon"></div>
        <h1 className="org">
          About our
          <br /> Organization
        </h1>
      </div>
      <div>
        <div className=" container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 my-auto">
              <h1 className="text-center our">Our Mission</h1>
              <p className="missionp">
                Our mission is to combat food insecurity by providing nutritious
                food to individuals and families in need. We aim to alleviate
                hunger by organizing community food drives and partnering with
                local businesses to collect surplus food. Through our network of
                volunteers, we ensure the efficient distribution of food to
                those who need it most. We strive to create a supportive
                environment where everyone has access to healthy meals. Our
                efforts focus on reducing food waste and promoting
                sustainability.
              </p>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 ">
              <img src={Image1} alt="" className="mission" />
            </div>
          </div>
        </div>

        <div className=" container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 ">
              <img src={Image2} alt="" className="mission" />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-5 my-auto">
              <h1 className="text-center our">Our Vision</h1>
              <p className="visionp">
                Our vision is a world where no one goes hungry and everyone has
                access to nutritious food. We envision communities coming
                together to support one another through generous food donations.
                We see a future where food banks and pantries are well-stocked
                and able to meet the needs of all individuals. Our goal is to
                eliminate food waste by efficiently redirecting surplus food to
                those in need.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
