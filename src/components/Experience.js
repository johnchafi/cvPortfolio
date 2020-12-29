import React, { Component } from "react";

export default class Experience extends Component{
  render() {
    return (
      <div id="experience">
        <div className="card">
          <div className="card-content">
            <h6 class="center">
              <strong>EXPERIENCE</strong>
            </h6>
            <div className="row mt-top">
              <div className="col xl4 l4 m6 s12">
                <p className="light-blue darken-4 year_exp white-text">
                  Leonard inc - Intern
                </p>
                <p className="light-blue darken-4 year_exp white-text">
                  &nbsp;
                  <strong>2020</strong>
                </p>
              </div>
              <div className="col xl8 l8 m6 s12">
                <blockquote className="no-pad">
                  <h6 className="no-pad mt-bottom">
                    <strong>Full stack intern</strong>
                  </h6>
                  <p>
                    Bug fix,
                    analyzing customers requests,
                    implementing sql query,
                    developping new functionnalities and implementing
                    new modules.
                    <br></br>
                  </p>
                </blockquote>
              </div>

              <div className="col xl4 l4 m6 s12">
                <p className="light-blue darken-4 year_exp white-text">Faculté des sciences et génie</p>
                <p className="light-blue darken-4 year_exp white-text">Université Laval</p>
                <p className="light-blue darken-4 year_exp white-text">
                  &nbsp;
                  <strong>2019</strong> -<strong>2020</strong>
                </p>
              </div>
              <div className="col xl8 l8 m6 s12">
                <blockquote className="no-pad">
                  <h6 className="no-pad mt-bottom">
                    <strong>Auxiliaire admnistratif en informatique</strong>

                  </h6>
                  <p>
                    Bug fix,
                    developping new modules,
                    Technical support in creating CMS with typo3
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="row mt-top">
              <div className="col xl4 l4 m6 s12">
                <p className="light-blue darken-4 year_exp white-text">
                  JRS
                </p>
                <p className="light-blue darken-4 year_exp white-text">
                  &nbsp;
                  <strong>2013</strong> - &nbsp;
                  <strong>2016</strong>
                </p>
              </div>
              <div className="col xl8 l8 m6 s12">
                <blockquote className="no-pad">
                  <h6 className="no-pad mt-bottom">
                    <strong>Desktop helper</strong>
                  </h6>
                  <p>
                    I took part in teaching microsoft office tools and
                    providing technical support to the students.

                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
