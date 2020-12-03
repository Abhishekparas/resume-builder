import React from "react";
import "./skin4.css";

const Skin4 = (props) => {
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
      <div className="skin-heading">
        <div className="big-heading">
          <h1>
            {fName} {lName}
          </h1>
        </div>
        <div className="small-heading">
          <small>
            24 {street}, {city}, {state}, {country} {pincode} (H) {phone}{" "}
            {Email}
          </small>
        </div>
      </div>
      <div className="professional-summary-skin">
        <div className="head-summary">PROFESSIONAL SUMMARY</div>
        <div className="summary">{professionalSummary}</div>
      </div>

      <div className="skills">
        <div className="head-summary">SKILLS</div>
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
      </div>

      <div className="experience">
        <div className="head-summary">EXPERIENCE</div>
        <div className="all-positions">
          <div className="first-position">
            <p className="special">{profession}</p>
            <p className="special">Verizon Wireless | San Francisco, CA</p>
            <ul>
              <li>
                Directed recruitment/training/staff development initiatives.
              </li>
              <li>
                Successfully increased employee retention with a positive work
                environment.<div className="date">August 2011-Current</div>
              </li>
              <li>
                Administered daily operations to ensure policies were adhered to
                by sales staff.
              </li>
              <li>
                Cultivated strong business relationships with customers to drive
                business.
              </li>
            </ul>
          </div>
          <div className="second-position">
            <p className="special">{profession}</p>
            <p className="special">Verizon Wireless | San Francisco, CA</p>
            <ul>
              <li>
                Directed recruitment/training/staff development initiatives.
              </li>
              <li>
                Successfully increased employee retention with a positive work
                environment.<div className="date">August 2011-Current</div>
              </li>
              <li>
                Administered daily operations to ensure policies were adhered to
                by sales staff.
              </li>
              <li>
                Cultivated strong business relationships with customers to drive
                business.
              </li>
            </ul>
          </div>
          <div className="third-position">
            <p className="special">{profession}</p>
            <p className="special">Verizon Wireless | San Francisco, CA</p>
            <ul>
              <li>
                Directed recruitment/training/staff development initiatives.
              </li>
              <div className="li-content">
                <li>
                  Successfully increased employee retention with a positive work
                  environment.<div className="date">August 2011-Current</div>
                </li>
              </div>

              <li>
                Administered daily operations to ensure policies were adhered to
                by sales staff.
              </li>
              <li>
                Cultivated strong business relationships with customers to drive
                business.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="education-skin">
        <div className="head-summary">EDUCATION</div>
        <div className="details">
          <div className="degree">
            Bachelor Of Technology: {degree}
  <div className="date-education"> {graduationMonth} {graduationYear}</div>
          </div>
          <div className="place">
            {collegeName}, {eduCity}, {eduState}
          </div>
        </div>
        <div className="details">
          <div className="degree">
            Bachelor Of Technology: {degree}
            <div className="date-education">{graduationMonth} {graduationYear}</div>
          </div>
          <div className="place">
            {collegeName}, {eduCity}, {eduState}
          </div>
        </div>
        <div className="details">
          <div className="degree">
            Bachelor Of Technology: {degree}
            <div className="date-education">{graduationMonth} {graduationYear}</div>
          </div>
          <div className="place">
            {collegeName}, {eduCity}, {eduState}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skin4;
