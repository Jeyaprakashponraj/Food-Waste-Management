import React from "react";

export default function Home() {
  return (
    <div>
      <div className="background">
        <div className="content ">
          <div className="content1">
            <h5 className="hunger">Help With</h5>
            <h5 className="hunger">
              Hunger <span>By</span>
            </h5>
            <h5 className="donate">
              {" "}
              Donating <span>Today!</span>{" "}
            </h5>
          </div>
        </div>
      </div>
      <div>
        <h3 className="change">
          Make A Real Change
          <br /> In Someone’s <span>Life</span>{" "}
        </h3>
        <div className="container life">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <p>
                Food donation significantly impacts individuals and communities
                by addressing food insecurity and promoting better health.
                Donating non-perishable items, fresh produce, prepared meals,
                and financial contributions can provide vital support.
                Organizing food drives, volunteering at food banks, partnering
                with businesses, and raising awareness are effective ways to get
                involved.{" "}
              </p>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <p>
                Successful programs like Feeding America and Meals on Wheels
                highlight the power of coordinated efforts. Despite challenges
                like food waste and logistics, improved coordination, a focus on
                nutrition, and supportive policies can enhance food donation
                initiatives. Your contributions can make a real difference in
                ensuring access to nutritious food for those in need.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row ">
          <div className="col-md-3 count">
            <h1>10k</h1>
            <h6>Volunteer hours served in 2023.</h6>
          </div>
          <div className="col-md-3 counts">
            <h1>90</h1>
            <h6>All profits towards hunger relief</h6>
          </div>
          <div className="col-md-3 counts">
            <h1>100k</h1>
            <h6>lbs of food distributed in 2023</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
