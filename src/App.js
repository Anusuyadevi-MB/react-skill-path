import React, { useState } from 'react';
import { roleDetails } from './environment';

const MyApp = () => {
  const [activeTab, setActiveTab] = useState('learningJourney');
  const [activeRole, setActiveRole] = useState('Developer-Apps(AWS)'); // Default active role


  // Function to handle role click
  const handleRoleClick = (role) => {
    setActiveRole(role);
    setActiveTab('roles'); // Switch to Roles tab
  };

  return (
    <div className="container-fluid">
      <div className="tab-content">
        <div className="tab-2 bg-white sticky-top mb-5">
          {/* Tab Navigation */}
          <ul className="nav ul-tab nav-pills justify-content-center sticky-top" role="tablist">
            <li className="nav-item mr-3">
              <a
                className={`nav-link nav-journey ${activeTab === 'learningJourney' ? 'active' : ''}`}
                onClick={() => setActiveTab('learningJourney')}
              >
                Learning Journey
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link nav-journey ${activeTab === 'roles' ? 'active' : ''}`}
                onClick={() => setActiveTab('roles')}
              >
                Roles
              </a>
            </li>
          </ul>
        </div>

        {/* Tab Content */}
        <div className="container-fluid">
          <div className="tab-content">
            {activeTab === 'learningJourney' && (
              <div className="tab-pane fade show active" role="tabpanel" aria-labelledby="pills-home-tab">
                {/* Learning Journey Content */}
                <section id="" className="text-center">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="row">
                          <div className="col-lg-3">
                            <div className="skill-header">Proficiency</div>
                            <div className="prof-expert"><strong>Expert</strong></div>
                            <div className="prof-intermediate"><strong>Intermediate</strong></div>
                            <div className="prof-beginner"><strong>Beginner</strong></div>
                          </div>
                          {/* List of roles */}
                          <div className="col-lg-3">
                            <div className="skill-header">Apps Roles</div>
                            <div className="apps-role prof-expert roles">
                              <ul>
                                <li onClick={() => handleRoleClick('AWS-DevOps-Expert-Apps')}>
                                  AWS DevOps Expert - Apps (AWS)
                                </li>
                                <li onClick={() => handleRoleClick('AWS-Solution-Architect-Apps')}>
                                  AWS Solution Architect - Apps (AWS)
                                </li>
                              </ul>
                            </div>
                            <div className="apps-role prof-intermediate roles">
                              <ul>
                                <li onClick={() => handleRoleClick('Cloud-Full-Stack-Developer-Apps')}>
                                  Cloud Full Stack Developer - Apps (AWS)
                                </li>
                              </ul>
                            </div>
                            <div className="apps-role prof-beginner roles">
                              <ul>
                                <li onClick={() => handleRoleClick('Developer-Apps(AWS)')}>
                                  Developer - Apps (AWS)
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="skill-header">Infra Roles</div>
                            <div className="apps-role prof-expert roles">
                              <ul>
                                <li onClick={() => handleRoleClick('AWS-DevOps-Expert')}>
                                AWS DevOps Expert
                                </li>
                                <li onClick={() => handleRoleClick('AWS-Solution-Architect-Infra')}>
                                AWS Solution Architect - Infra (AWS)
                                </li>
                              </ul>
                            </div>
                            <div className="apps-role prof-intermediate roles">
                              <ul>
                                <li onClick={() => handleRoleClick('AWS-Cloud-SysOps-Lead')}>
                                AWS Cloud SysOps Lead
                                </li>
                                <li onClick={() => handleRoleClick('AWS-DevOps-Analyst')}>
                                AWS DevOps Analyst
                                </li>
                                <li onClick={() => handleRoleClick('AWS-Cloud-Architect')}>
                                AWS Cloud Architect
                                </li>
                              </ul>
                            </div>
                            <div className="apps-role prof-beginner roles">
                              <ul>
                                <li onClick={() => handleRoleClick('AWS-Cloud-Engineer')}>
                                AWS Cloud Engineer
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="skill-header">Apps Roles</div>
                            <div className="apps-role prof-expert roles">
                              <ul>
                                <li onClick={() => handleRoleClick('Cloud-Data-Scientist')}>
                                Cloud Data Scientist/Expert- Apps (AWS)
                                </li>
                                <li onClick={() => handleRoleClick('AWS-Data-Solution-Architect')}>
                                AWS Data Solution Architect
                                </li>
                              </ul>
                            </div>
                            <div className="apps-role prof-intermediate roles">
                              <ul>
                                <li onClick={() => handleRoleClick('Senior-Data-Engineer')}>
                                Senior Data Engineer / Data Engineering Lead
                                </li>
                              </ul>
                            </div>
                            <div className="apps-role prof-beginner roles">
                              <ul>
                                <li onClick={() => handleRoleClick('Data-Engineer')}>
                                Data Engineer
                                </li>
                              </ul>
                            </div>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'roles' && (
              <div className="tab-pane fade show active" role="tabpanel" aria-labelledby="pills-home-tab">
                <div class="row">
                <div class="col-md-4">
                <div class="nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
                <h5 class="mb-0">
          Apps Roles 
        </h5>
                  <a
                    className={`nav-link ${activeRole === 'AWS-DevOps-Expert-Apps' ? 'active' : ''}`}
                    onClick={() => handleRoleClick('AWS-DevOps-Expert-Apps')}
                  >
                    AWS DevOps Expert-Apps
                  </a>
                  <a
                    className={`nav-link ${activeRole === 'AWS-Solution-Architect-Apps' ? 'active' : ''}`}
                    onClick={() => handleRoleClick('AWS-Solution-Architect-Apps')}
                  >
                    AWS Solution Architect-Apps
                  </a>
                  <a
                    className={`nav-link ${activeRole === 'Cloud-Full-Stack-Developer-Apps' ? 'active' : ''}`}
                    onClick={() => handleRoleClick('Cloud-Full-Stack-Developer-Apps')}
                  >
                    Cloud Full Stack Developer-Apps(AWS)
                  </a>
                  <a
                    className={`nav-link ${activeRole === 'Developer-Apps(AWS)' ? 'active' : ''}`}
                    onClick={() => handleRoleClick('Developer-Apps(AWS)')}
                  >
                    Developer-Apps(AWS)
                  </a>
                </div>
                <div className="nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
                <h5 class="mb-0">
          Infra Roles 
        </h5>
                  <a
                    className={`nav-link ${activeRole === 'AWS-DevOps-Expert' ? 'active' : ''}`}
                    onClick={() => handleRoleClick('AWS-DevOps-Expert')}
                  >
                    AWS DevOps Expert
                  </a>
                  <a
                    className={`nav-link ${activeRole === 'AWS-Solution-Architect-Infra' ? 'active' : ''}`}
                    onClick={() => handleRoleClick('AWS-Solution-Architect-Infra')}
                  >
                    AWS Solution Architect - Infra
                  </a>
                  <a
                    className={`nav-link ${activeRole === 'AWS-Cloud-SysOps-Lead' ? 'active' : ''}`}
                    onClick={() => handleRoleClick('AWS-Cloud-SysOps-Lead')}
                  >
                    AWS Cloud SysOps Lead
                  </a>
                  <a
                    className={`nav-link ${activeRole === 'AWS-DevOps-Analyst' ? 'active' : ''}`}
                    onClick={() => handleRoleClick('AWS-DevOps-Analyst')}
                  >
                    AWS DevOps Analyst
                  </a>
                  <a
                    className={`nav-link ${activeRole === 'AWS-Cloud-Architect' ? 'active' : ''}`}
                    onClick={() => handleRoleClick('AWS-Cloud-Architect')}
                  >
                    AWS Cloud Architect
                  </a>
                  <a
                    className={`nav-link ${activeRole === 'AWS-Cloud-Engineer' ? 'active' : ''}`}
                    onClick={() => handleRoleClick('AWS-Cloud-Engineer')}
                  >
                   AWS Cloud Engineer
                  </a>
                </div>
                <div className="nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
                <h5 class="mb-0">
          Data Roles 
        </h5>
                  <a
                    className={`nav-link ${activeRole === 'AWS-Data-Solution-Architect' ? 'active' : ''}`}
                    onClick={() => handleRoleClick('AWS-Data-Solution-Architect')}
                  >
                    AWS Data Solution Architect
                  </a>
                  <a
                    className={`nav-link ${activeRole === 'Cloud-Data-Scientist' ? 'active' : ''}`}
                    onClick={() => handleRoleClick('Cloud-Data-Scientist')}
                  >
                    Cloud Data Scientist/Expert- Apps (AWS)
                  </a>
                  <a
                    className={`nav-link ${activeRole === 'Senior-Data-Engineer' ? 'active' : ''}`}
                    onClick={() => handleRoleClick('Senior-Data-Engineer')}
                  >
                    AWS Data Solution Architect
                  </a>
                  <a
                    className={`nav-link ${activeRole === 'Data-Engineer' ? 'active' : ''}`}
                    onClick={() => handleRoleClick('Data-Engineer')}
                  >
                    Data Engineer
                  </a>
                </div>
                </div>
                <div class="col-md-8 pt-5">
                <div class="tab-content">
                <div className="tab-pane fade show active" id={`v-pills-${activeRole.toLowerCase().replace(/ /g, '-')}`} role="tabpanel" aria-labelledby={`v-pills-${activeRole.toLowerCase().replace(/ /g, '-')}-tab`}>
                  <div className="card-body">
                    <div className="tab-table table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <td className="table-td"><b>Proficiency</b></td>
                            <td className="table-td">{roleDetails[activeRole].proficiency}</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><b>Course Duration:</b></td>
                            <td>{roleDetails[activeRole].courseDuration}</td>
                          </tr>
                          <tr>
                            <td><b>Experience:</b></td>
                            <td>
                              <ol>
                                {roleDetails[activeRole].experience.map((exp, index) => (
                                  <li key={index}>{exp}</li>
                                ))}
                              </ol>
                            </td>
                          </tr>
                          <tr>
                            <td><b>Employee Grade</b></td>
                            <td>{roleDetails[activeRole].employeeGrade}</td>
                          </tr>
                          <tr>
                            <td><b>Professional Certification:</b></td>
                            <td>{roleDetails[activeRole].professionalCertification}</td>
                          </tr>
                          <tr>
                            <td><b>Internal Certification:</b><br />(Capgemini Standard Certification)</td>
                            <td>{roleDetails[activeRole].internalCertification}</td>
                          </tr>
                          <tr>
                            <td><b>What will you learn?</b><br />(Mandatory skills)</td>
                            <td>
                              <ol>
                                {roleDetails[activeRole].mandatorySkills.map((skill, index) => (
                                  <li key={index}>{skill}</li>
                                ))}
                              </ol>
                            </td>
                          </tr>
                          <tr>
                            <td><b>What will you learn?</b><br />(Good to Have Skills)</td>
                            <td>
                              <ol>
                                {roleDetails[activeRole].goodToHaveSkills.map((skill, index) => (
                                  <li key={index}>{skill}</li>
                                ))}
                              </ol>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <a href={roleDetails[activeRole].downloadLink}>
                        <div className="btn tech-btn bg-primary text-white ml-3 mb-3">Express Interest</div>
                      </a>
                    </div>
                    <div className="col-md-6 pr-5">
                      <div className="skill-header-inner pb-2"><b>Skill Framework Artefacts</b></div>
                      <table className="table pr-3">
                        <thead>
                          <tr>
                            <th scope="col">File Name</th>
                            <th scope="col">Download</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <i className="float-left fas fa-file-pdf" style={{ color: 'red' }}></i>
                              <small>
                                <b>
                                  <a href={roleDetails[activeRole].downloadLink} target="_blank">
                                    {roleDetails[activeRole].downloadText}
                                  </a>
                                </b>
                              </small>
                            </td>
                            <td>
                              <a href={roleDetails[activeRole].downloadLink} target="_blank">
                                <i className="text-primary fas fa-download"></i>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                </div>
                </div>
              </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyApp;
