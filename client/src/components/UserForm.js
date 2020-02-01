import React, { Component } from 'react';
import '../App.css';
import PersonalDetails from './PersonalDetails';
import Experience from './Experience';
import Project from './Project';
import Education from './Education';
import Success from './Success';
import Extras from './Extras';

class UserForm extends Component {
	state = {
		step: 1,
		name: '',
		email: '',
		phone: '',
		linkedin: '',
		github: '',
		skills: '',

		exp1_org: '',
		exp1_pos: '',
		exp1_desc: '',
		exp1_dur: '',

		exp2_org: '',
		exp2_pos: '',
		exp2_desc: '',
		exp2_dur: '',

		proj1_title: '',
		proj1_link: '',
		proj1_desc: '',

		proj2_title: '',
		proj2_link: '',
		proj2_desc: '',

		edu1_school: '',
		edu1_year: '',
		edu1_qualification: '',
		edu1_desc: '',

		edu2_school: '',
		edu2_year: '',
		edu2_qualification: '',
		edu2_desc: '',

		extra_1: '',
		extra_2: '',
		extra_3: '',
		extra_4: '',
		extra_5: '',

		status: 0
	};

	// Proceed to next step
	nextStep = () => {
		const { step } = this.state;
		this.setState({
			step: step + 1
		});
	};

	// Go back to prev step
	prevStep = () => {
		const { step } = this.state;
		this.setState({
			step: step - 1
		});
	};

	submitted = () => {
		const { status } = this.state;
		this.setState({
			status: status + 1
		});
	};

	handleChange = ({ target: { value, name } }) =>
		this.setState({ [name]: value });

	render() {
		const { step } = this.state;

		switch (step) {
			case 1:
				return (
					<div className="App pt-5 mt-5">
						<div className="container col-lg-8 mx-auto text-center">
							<PersonalDetails
								values={this.state}
								nextStep={this.nextStep}
								handleChange={this.handleChange}
							/>
						</div>
						<br />
					</div>
				);

			case 2:
				return (
					<div className="App pt-5 mt-5">
						<div className="container col-lg-8 mx-auto text-center">
							<Experience
								values={this.state}
								prevStep={this.prevStep}
								nextStep={this.nextStep}
								handleChange={this.handleChange}
							/>
						</div>
						<br />
					</div>
				);

			case 3:
				return (
					<div className="App pt-5 mt-5">
						<div className="container col-lg-8 mx-auto text-center">
							<Project
								values={this.state}
								prevStep={this.prevStep}
								nextStep={this.nextStep}
								handleChange={this.handleChange}
							/>
						</div>
						<br />
					</div>
				);

			case 4:
				return (
					<div className="App pt-5 mt-5">
						<div className="container col-lg-8 mx-auto text-center">
							<Education
								values={this.state}
								prevStep={this.prevStep}
								nextStep={this.nextStep}
								handleChange={this.handleChange}
							/>
						</div>
						<br />
					</div>
				);

			case 5:
				return (
					<div className="App pt-5 mt-5">
						<div className="container col-lg-8 mx-auto text-center">
							<Extras
								values={this.state}
								prevStep={this.prevStep}
								nextStep={this.nextStep}
								submitted={this.submitted}
								handleChange={this.handleChange}
							/>
						</div>
						<br />
					</div>
				);

			case 6:
				return (
					<div className="App pt-5 mt-5">
						<div className="container col-lg-8 mx-auto text-center">
							<Success />
						</div>
						<br />
					</div>
				);
		}
	}
}

export default UserForm;
