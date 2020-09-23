 
import React from 'react';

const Resume = () => (
    <div>
        <h3>Resume</h3>
        <a href='./download.txt' download>Click to download Resume</a>
        {/*Page Content*/}
        <div class="container-fluid p-0">
            {/* About*/}
            <section class="resume-section" id="about">
                <div class="resume-section-content">
                    <h1 class="mb-0">
                        <span class="text-primary">CHRIS HUSSEY</span>
                    </h1>
                    <div class="subheading mb-5">
                        4763 Athens Dr · West Jordan, UT 84088 · (801) 529-6249 ·
                        <a href="mailto:name@email.com">kekaneone@gmail.com</a>
                    </div>
                    <p class="lead mb-5">I am fresh full stack programer.</p>
                    <div class="social-icons">
                        <a class="social-icon" href="#"><i class="fab fa-linkedin-in"></i></a>
                        <a class="social-icon" href="#"><i class="fab fa-github"></i></a>
                        <a class="social-icon" href="#"><i class="fab fa-twitter"></i></a>
                        <a class="social-icon" href="#"><i class="fab fa-facebook-f"></i></a>
                    </div>
                </div>
            </section>
            <hr class="m-0" />
            {/* Experience*/}
            <section class="resume-section" id="experience">
                <div class="resume-section-content">
                    <h2 class="mb-5">Experience</h2>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Executive Director.</h3>
                            <div class="subheading mb-3">Ensign Peak Services</div>
                            <p>Oversee all aspects of all programs of EPS. Works closely with clinical consultant is a team leader of all staff.
Makes final decisions on hiring and firing of employees and contractors. Works with state contract administrators, case workers, and auditors.
Reports to board of directors, Maintains and improves quality of services to clients. Recruiting and training of foster parents and all staff. Marketing and website development and maintenance. Schedule and lead staff meetings. Oversees treatment of clients. Coach and advise trackers and family consultants. Ensure compliance with all contract requirements by all staff members. 
.</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">Sep 2011 - Present</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Quality Assurance Officer</h3>
                            <div class="subheading mb-3">Musicians Friend</div>
                            <p>To assure the quality of services for all customers, I monitor calls for sales and services for three sister companies: Guitar Center, Music 123, and Woodwind and Brasswind.  Monitor the inbound calls of sales and customer service reps; take inbound  “overflow” calls for both sales and customer services reps, take “help line” calls for all reps when they need more information about products or services for their customers,  and “take over” calls for all reps when irate customers want to talk to a supervisor.    In the course of the QA position I also respond to inbound customer inquiries and complaints and record orders using standard scripts and procedures, inform customers about products available and assess customer needs, provide advice regarding products and accessories, and accurately handle credit card orders and confidential information.
.</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">November 2001 - August 2011</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Car Man</h3>
                            <div class="subheading mb-3">Progress Rail Services Corporation</div>
                            <p>PAs a crew member, responsible for inspection and maintenance of work site vehicles and tools; inspection, maintenance, and repair of rail cars; inspection  and service of locomotives; terminal one air brake test, rear locomotive communication, rail car side bearing adjustment (SBA), blue light flag protection in rail yard.  Skills: Certified Flat Welder, Forklift Operation, Torch Cutting.  This is a representation of all job duties.  I will elaborate in a personal interview.
.</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">August 2006 - December 2008</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Executive Director</h3>
                            <div class="subheading mb-3">My T-shirt and Design</div>
                            <p>Designed t-shirt graphics for local band using Photoshop, then screen printed them, and marketed them to the public.  Did all duties necessary for the business, including bookkeeping, delivery of product and inventory. 
.</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">September 2006 - December 2008</span></div>
                    </div>
                </div>
            </section>
            <hr class="m-0" />
            {/* Education*/}
            <section class="resume-section" id="education">
                <div class="resume-section-content">
                    <h2 class="mb-5">Education</h2>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">University of Utah</h3>
                            <div class="subheading mb-3">Coding Cirtificate</div>
                            <div>Computer Science - Web Development</div>
                            <p>GPA: 3.23</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">August 2006 - May 2010</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Garnger High School</h3>
                            <div class="subheading mb-3">Video Technology Program/Diploma</div>
                            <p>GPA: 3.56</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">August 1997 - May 2000</span></div>
                    </div>
                </div>
            </section>
            <hr class="m-0" />
            {/* Skills*/}
            <section class="resume-section" id="skills">
                <div class="resume-section-content">
                    <h2 class="mb-5">Skills</h2>
                    <div class="subheading mb-3">Programming Languages & Tools</div>
                    <ul class="list-inline dev-icons">
                        <li class="list-inline-item"><i class="fab fa-html5"></i></li>
                        <li class="list-inline-item"><i class="fab fa-css3-alt"></i></li>
                        <li class="list-inline-item"><i class="fab fa-js-square"></i></li>
                        <li class="list-inline-item"><i class="fab fa-angular"></i></li>
                        <li class="list-inline-item"><i class="fab fa-react"></i></li>
                        <li class="list-inline-item"><i class="fab fa-node-js"></i></li>
                        <li class="list-inline-item"><i class="fab fa-sass"></i></li>
                        <li class="list-inline-item"><i class="fab fa-less"></i></li>
                        <li class="list-inline-item"><i class="fab fa-wordpress"></i></li>
                        <li class="list-inline-item"><i class="fab fa-gulp"></i></li>
                        <li class="list-inline-item"><i class="fab fa-grunt"></i></li>
                        <li class="list-inline-item"><i class="fab fa-npm"></i></li>
                    </ul>
                    <div class="subheading mb-3">Workflow</div>
                    <ul class="fa-ul mb-0">
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            Mobile-First, Responsive Design
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            Cross Browser Testing & Debugging
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            Cross Functional Teams
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            Agile Development 
                        </li>
                    </ul>
                </div>
            </section>
            <hr class="m-0" />
            {/* Interests*/}
            <section class="resume-section" id="interests">
                <div class="resume-section-content">
                    <h2 class="mb-5">Interests</h2>
                    <p>Apart from being a business owner, I enjoy most of my time being outdoors. I play several musical instruments and enjoy recording and producing music with my free time and among friends.</p>
                    <p class="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring producer, and I spend a large amount of my free time exploring the latest technology in recording and production.</p>
                </div>
            </section>
            <hr class="m-0" />
            {/* Awards*/}
            <section class="resume-section" id="awards">
                <div class="resume-section-content">
                    <h2 class="mb-5">Awards & Certifications</h2>
                    <ul class="fa-ul mb-0">
                        <li>
                            <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                            U or U Boot camp cirtificate
                        </li>

                    </ul>
                </div>
            </section>
        </div>
    </div> 
);

export default Resume; 