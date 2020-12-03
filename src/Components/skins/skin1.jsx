import React from "react";
import "./skin1.css";

const Skin1 = (props) => {
  let {
    fName,
    lName,
    professionalSummary,
    Email,
    phone,
    profession,
    street,
    city,
    state,
    country,
    pincode,
  } = props.contact;
  let {
    collegeName,
    degree,
    cgpa,
    eduCity,
    eduState,
    graduationMonth,
    graduationYear,
  } = props.education;
  return (
    <div className="whole-content">
      <div className="heading-skin1">
        <div className="name-heading-skin1">
          <h1>
            {fName} {lName}
          </h1>
        </div>
        <div className="address-heading-skin1">
          <small>
            {Email} | {phone} | {phone} {street}, {city} {state},{country}{" "}
            {pincode}
          </small>
        </div>
      </div>
      <div className="professional-summary-skin1">
        <div className="professional-summary-heading-skin1">
          PROFESSIONAL SUMMARY
        </div>
        <hr />
        <div className="professional-summary-skin1-content">
          {professionalSummary}
        </div>
      </div>
      <div className="skills-skin1">
        <div className="skills-heading-skin1">SKILLS</div>
        <hr />
        <div className="skills-list">
          <ul>
            <div className="all-list">
              <div className="first-list">
                <li>Executive team leadership</li>
                <li>Inventory report generation</li>
                <li>Client/Vendor relations</li>
                <li>Market analysis</li>
              </div>
              <div className="second-list">
                <li>Sales Management</li>
                <li>Staff training</li>
                <li>Customer relations</li>
                <li>Process improvements</li>
              </div>
              <div className="third-list">
                <li>Sales Management</li>
                <li>Staff training</li>
                <li>Customer relations</li>
                <li>Process improvements</li>
              </div>
            </div>
          </ul>
        </div>
        <div className="experience-skin1">
          <div className="experience-heading-skin1">EXPERIENCE</div>
          <hr />
          <div className="all-positions">
            <div className="first-position">
              <p className="special">{profession}</p>
              <p className="special">
                Verizon Wireless |{" "}
                <div className="date-experience">August 2011-Current</div>
              </p>
              <ul>
                <li>
                  Directed recruitment/training/staff development initiatives.
                </li>
                <li>
                  Successfully increased employee retention with a positive work
                  environment.
                </li>
                <li>
                  Administered daily operations to ensure policies were adhered
                  to by sales staff.
                </li>
                <li>
                  Cultivated strong business relationships with customers to
                  drive business.
                </li>
              </ul>
            </div>
            <div className="second-position">
              <p className="special">{profession}</p>
              <p className="special">
                Verizon Wireless |{" "}
                <div className="date-experience">August 2011-Current</div>
              </p>
              <ul>
                <li>
                  Directed recruitment/training/staff development initiatives.
                </li>
                <li>
                  Successfully increased employee retention with a positive work
                  environment.
                </li>
                <li>
                  Administered daily operations to ensure policies were adhered
                  to by sales staff.
                </li>
                <li>
                  Cultivated strong business relationships with customers to
                  drive business.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="education-skin1">
        <div className="education-heading-skin1">EDUCATION</div>
        <hr />
        <div className="details-skin1">
          <div className="degree">
            Bachelor Of Technology: {degree}
            <div className="date-education-skin1">
              {graduationMonth} {graduationYear}
            </div>
          </div>
          <div className="place">
            {eduCity}, {eduState}, {country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skin1;
