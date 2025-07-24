import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";


function currVitae() {
  return (
    <div>
      <MDBCard>
        <MDBCardBody>
          <h1 style ={{fontWeight: "bold", textAlign: "center"}}>Alexander Egerev</h1>
          <p style ={{textAlign: "center"}}> Computing and Informatics Specialist </p>
        </MDBCardBody>
      </MDBCard>

      <MDBCard>
        <MDBListGroup flush>
          <MDBListGroupItem>
            <div>
              <span style={{ fontWeight: "bold", fontSize: "24px" }}>
                 EXPERIENCE 
              </span>
              <br />
              <h2> Glenair Stock MERN Project (working title), Swedesboro, NJ — IT Contractor/Web Developer </h2>
              <h3>March 2024 - July 2024</h3>
            <ul>
                <li>Helped build an e-commerce website that is almost the same as <a href="https://jrhelec.com/"> JRH Electronics e-commerce website</a>, but dedicated solely to the Glenair Stock. </li>
                <li>Utilized MongoDB to obtain data, such as name, series number, etc.</li>
                <li>Utilized React to create the front-end of the page.</li>
                <li>Utilized CSS to style the website.</li>
            </ul> 
              <br />
              <h2> JRH Electronics, Swedesboro, NJ — IT Contractor </h2>
              <h3>September 2021 - June 2024</h3>
                 <p> Started as an intern; after a six-month period, was hired as a contractor.</p>
            <ul>
                <li>Built e-commerce jrhelec.com e-commerce website based on WordPress, PHP, JavaScript, and 
                    MySQL, which generated millions of dollars in revenue. </li>
                <li>Created Python APIs for getting data from vendors and pushing gathered data to the website.</li>
                <li>Participated in a data extraction process from the company's SAP system for the website.</li>
                <li>Wrote Excel VBA functions for exchanging data and creating files for uploading to the website.</li>
                <li>Uploading new materials to the website and updating existing materials with live data.</li>
            </ul> 
        
        <br />

                <h2> eDataRun, Cherry Hill, NJ </h2>
                <h3>June 2016 - August 2020 </h3>
                <ul>
                    <li>Assisted with developing an Android, Java-based, secured texting app in Google Play. </li>   
                </ul>
        <br />

            </div>
          </MDBListGroupItem>
{/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
          <MDBListGroupItem>
            {" "}
            <div>
              <span style={{ fontWeight: "bold", fontSize: "24px" }}>
                EDUCATION 
              </span>
              {" "}
        <br />
                <h2> Massachusets Institute of Technology, in collaboration with xPRO and Emeritus — 
                   The MERN Stack Boot Camp certification </h2>
                <h4>May 2024 - Present</h4>
        <br />

                <h2> University of Pennsylvania, College of Liberal and Professional Studies (LPS) — 
                    Coding Boot Camp certification </h2>
                <h4>September 2023 - March 2024</h4>
        <br />

                <h2> Rowan University, Glassboro, NJ — B.A. in Computing and Informatics </h2>
                <h3> Concentration in Mobile Development;  minor in Spanish </h3>
                <h4> September 2020 - May 2023 </h4>
                <h5> GPA: 3.97 </h5> 
        <br />

               <h2> Camden County College, Blackwood, NJ — 
                     </h2>
               <h3> Associate in Applied Science - Computer Information Systems </h3>
               <h4> September 2016 - June 2020 </h4>
               <h5> GPA: 3.79 </h5> 
        <br />
            </div>
          </MDBListGroupItem>
{/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
          <MDBListGroupItem>
            {" "}
            <div>
              <span style={{ fontWeight: "bold", fontSize: "24px" }}>
              SKILLS 
              </span>{" "}
        <br />

        <ul>
            <li> Knowledge of business, programming, and application software for a business/organizational IT 
                environment</li>
            <li>Analysis and  design of information systems and database solutions </li>
            <li>Applying state-of-the-art programming techniques and application software to solve 
                business/organizational information systems issues </li>
        </ul>
        <br />
            </div>
          </MDBListGroupItem>
{/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
          <MDBListGroupItem>
            {" "}
            <div>
              <span style={{ fontWeight: "bold", fontSize: "24px" }}>
              PROGRAMMING LANGUAGES
              </span>{" "}
              <br />
              Java  <br />
              C++ <br />
              HTML5 <br />
              CSS3  <br />
              JavaScript  <br />
              Command Line <br />
              jQuery  <br />
              Node.js server code <br />
              MySQL  <br />
              React  <br />
              Github  <br />
              Progressive Web Applications <br />
              MERN <br />
            </div>
          </MDBListGroupItem>
        </MDBListGroup>
      </MDBCard>

      <a href = "https://github.com/aegerev/my-portfolio/blob/main/src/assets/Egerev_Alexander_Resume2024.docx.pdf">
            VIEW FULL RESUME </a>
    </div>

    
  );
}

export default currVitae;
