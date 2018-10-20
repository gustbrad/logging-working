import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DropdownList from "./Form/DropdownList";
import city_names from "./Arrays/Cities";
import state_names from "./Arrays/States";


const SignUpFormMusician = ({
  onSubmit,
  onChange,
  errors,
  user,
}) => (
  <Card className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Sign Up</h2>

      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <TextField
          floatingLabelText="First Name"
          name="firstName"
          errorText={errors.firstName}
          onChange={onChange}
          value={user.firstName}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Last Name"
          name="lastName"
          errorText={errors.lastName}
          onChange={onChange}
          value={user.lastName}
        />
      </div>

            	<div className="form-group col-md-2">
							<label htmlFor="location">City: </label><br></br>
							<DropdownList data={city_names} id="city-names"
              name="city"
              onChange={onChange}
              value={user.city}
              
              />
						</div>
						<div className="form-group col-md-2">
							<label htmlFor="location">State	: </label><br></br>
							<DropdownList data={state_names} id="state-names"
              value={user.state}
              />
				</div>

      <div className="field-line">
        <TextField
          floatingLabelText="Instrument"
          name="instrument"
          errorText={errors.instrument}
          onChange={onChange}
          value={user.instrument}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Experience"
          name="experience"
          errorText={errors.experience}
          onChange={onChange}
          value={user.experience}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Email"
          name="email"
          errorText={errors.email}
          onChange={onChange}
          value={user.email}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Password"
          type="password"
          name="password"
          onChange={onChange}
          errorText={errors.password}
          value={user.password}
        />
      </div>

      
      <div className="field-line">
        <TextField
          floatingLabelText="Youtube video link(https://youtu.be/A71aqufiNtQ)"
          name="videoLink"
          errorText={errors.videoLink}
          onChange={onChange}
          value={user.videoLink}
        />
      </div>

      <div className="button-line">
        <RaisedButton type="submit" label="Create New Account" primary />
      </div>

      <CardText>Already have an account? <Link to={'/login'}>Log in</Link></CardText>
    </form>
  </Card>
);

SignUpFormMusician.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUpFormMusician;
