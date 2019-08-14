import React from 'react';
import Main from '../layouts/Main'
import Helmet from 'react-helmet'
import '../static/css/resume_style.scss';


const Resume:React.FC = () => (
  <Main>
    <Helmet title="Resume" />
    <article className="post" id="resume">
		<section className="top">
			<div className="uppercase name">
				Michael Ross
			</div>
			<div className="uppercase role">Full Stack Software Engineer</div>
			<div>
				<ul className="contact">
					<li><a href="mailto:michael4725@gmail.com">michael4725@gmail.com</a></li>
					<li><a href="tel:2023520365">(202) 352-0365</a></li>
				</ul>
			</div>
		</section>

		<section className="middle">
			<div id="work">
				<div className="header">Professional Experience</div>
				<div className="content">
					<div className="job">Capital One, Senior Software Engineer<span className="year">[01-2018] - Present</span></div>
					<ul className="custom-bullet">
						<li>Designed and delivered the Retail Bank's Address Book. This system listens and stores account information for the contacts that customers pay in order to build out a custom contact list for customers across all payment rails i.e. Zhelle, Wire Transfers, Billpay, etc..</li>
						<li>Pioneered use of choreographer design pattern to decouple rails by designing an event driven architecture</li>
						<li>Led discussions as a devops SME to consolidate deployments of dockerized applications to a shared ECS cluster across 14 agile teams</li>
						<li>Led effort to publish fraudulent external account linking attempts to a kafka cluster for both fraud/operations analysis and real time fraud decisioning for customers attempting ACH transfers. This has led to saving 800k/year in fraud losses</li>
						<li>Designed and developed a stateless ecosystem of microservices that enabled Capital One Retail locations to print debit cards at the time of account opening</li>
						<li>Conduct interviews for potential candidates at the Senior/Principle Software Developer level.</li>
					</ul>

					<div className="job">Capital One, Associate Software Developer<span className="year">[07-2016] - [01-2018]</span></div>
					<ul className="custom-bullet">
						<li>Singlehandedly designed and developed a CICD pipeline for Retail Bank's Digital Debit Card offering. This pipeline included push button deployments of an ECS cluster, dockerized applications with blue/green 0 downtime deployments, new relic apm monitoring, and filebeat log forwarding to a centrailzed ELK stack.</li>
						<li>Led comprehensive effort to update Capital One's ATM system of record from an excel spreadsheet to a RESTful ecosystem of serverless AWS Lambda Functions backed by a Postgresql DB.</li>
					</ul>

					<div className="job">IBM, Mobile Development Intern<span className="year">[05-2015] - [08-2015]</span></div>
					<ul className="custom-bullet">
					</ul>
					<div className="job">Energage, Web Development Intern<span className="year">[05-2014] - [08-2014]</span></div>
					<ul className="custom-bullet">
					</ul>
				</div>
			</div> 

			<div id="work">
				<div className="header">Volunteering Experience</div>
				<div className="content">
					<div className="job">Capital One CODERS<span className="year">[03-2017] - Present</span></div>
					<ul className="custom-bullet">
						<li>Capital One sponsored program to introduce middle school students to technology and foster a focus in software engineering.</li>
					</ul>
				</div>
			</div>

			<div id="skills">
				<div className="header">Skills</div>
				<div className="content">
					<ul className="skills-list">
						<li>AWS</li>
						<li>Java</li>
						<li>Spring Boot</li>
						<li>Devops</li>
						<li>ECS</li>
						<li>Kafka</li>
						<li>Jenkins</li>
						<li>REST</li>
						<li>Aurora RDS</li>
						<li>Cucumber Testing</li>
						<li>Docker</li>
						<li>GCP</li>
						<li>CQRS</li>
						<li>Microservices</li>
						<li>Bash Scripting</li>
						<li>Git</li>
					</ul>
				</div>
			</div>

			<div className="split-pane">
				<div id="education">
					<div className="header">Education</div>
					<div className="content">
						<div className="img-with-text">
							<div id="psu" className="img-round border"></div>
							<ul><span className="job">The Pennsylvania State University</span>
								<li>[08-2012] - [05-2016]</li>
                                <li>B.S. Computer Science</li>
								<li>Minor: Mathematics</li>
								<li>Major GPA: 3.77/4.0</li>
								<li>Cum GPA: 3.57/4.0</li>
							</ul>
						</div>
					</div>
				</div>
				<div id="education">
					<div className="header">Certifications</div>
					<div className="content">
						<div className="img-with-text">
							<div id="aws" className="img-square border"></div>
							<ul className="padding-top: 10px;">
								<li>AWS Certified Solutions Architect - Associate</li>
								<li>AWS Certified Developer - Associate</li>
							</ul>

						</div>
					</div>
				</div>
			</div>

			<footer></footer>

		</section>



    </article>
  </Main>
);

export default Resume;