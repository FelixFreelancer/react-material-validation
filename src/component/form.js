import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {
    Button, MenuItem, Checkbox, FormControlLabel,
    Paper
} from '@material-ui/core';
import {ValidatorForm, TextValidator, SelectValidator} from 'react-material-ui-form-validator';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '97%',
        marginBottom: '20px'
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 375,
    },
    paper: {
        maxWidth: '490px',
        padding: '20px'
    },
    root: {
        color: '#3F51B5',
        '&$checked': {
            color: '#3F51B5',
        },
    },
    checked: {},
    submit: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        marginTop: ' 30px'
    }

});

const getValidateYear = () => {
    let current_year = new Date();
    current_year = current_year.getFullYear()
    return current_year-18;

}

class DatePickers extends React.Component {
    

    componentDidMount() {
        // custom rule will have name 'isPasswordMatch'
        ValidatorForm.addValidationRule('isPhoneNumberLength', (value) => {
            const {formData} = this.state;
            if (formData.number.length > 10) {
                return false;
            }
            return true;
        });
        ValidatorForm.addValidationRule('isValidateAge', (value) => {
            let input_value = value.split("-", 1)
            input_value = parseInt(input_value[0])
            if (input_value > getValidateYear())  {
                return false;
            }
            return true;
        })
    }

    state = {
        formData: {
            socialSecurity: '',
            firstName: '',
            middleName: '',
            lastName: '',
            streetAddress: '',
            city: '',
            state: '',
            zipCode: '',
            birthday: '',
            another_mail: '',
            mailing_address: '',
            mailing_city: '',
            mailing_state: '',
            mailing_zip: '',
            residential_status: '',
            monthly_rent: '',
            years_residence: '',
            contact_email: '',
            home_phone: '',
            mobile_phone: '',
            work_phone: '',
            employer_name: '',
            employer_city: '',
            employer_years: '',
            monthly_gross: '',
            nearest_name: '',
            nearest_city: '',
            nearest_state: '',
            nearest_phone_number: '',
        },
        primary_state_options: [{
            value: 10,
            label: 'Ten'
        }, {
            value: 20,
            label: 'Twenty'
        }, {
            value: 30,
            label: 'Thrity'
        },],
        mailing_state_options: [{
            value: 40,
            label: 'Fourty'
        }, {
            value: 50,
            label: 'Fifty'
        }, {
            value: 60,
            label: 'Sixty'
        },],
        residential_status_options: [{
            value: 70,
            label: 'Seventy'
        }, {
            value: 80,
            label: 'Eighty'
        }, {
            value: 90,
            label: 'Ninety'
        },],
        nearest_state_options: [{
            value: 100,
            label: 'Hundred'
        }, {
            value: 110,
            label: 'Hundred Ten'
        }, {
            value: 120,
            label: 'Hundred Twenty'
        },],
        submitted: false,
    }



    handleChange = (event) => {
        const {formData} = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({formData});
    }
    handleChangeBirthday = (event, date) => {

        const {formData} = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({formData});

    }
    handleSubmit = () => {
        window.alert(JSON.stringify(this.state.formData, null, 2))
    }

    render() {
        const {classes} = this.props
        const {formData, submitted} = this.state;
        return (
            <ValidatorForm className={classes.paper}
                           ref="form"
                           onSubmit={this.handleSubmit}
            >
                <h2>Primary Applicant</h2>
                <Paper elevation={6} className={classes.paper}>
                    <TextValidator className={classes.textField}
                                   name="socialSecurity"
                                   label="Social Security*"
                                   onChange={this.handleChange}
                                   value={formData.socialSecurity}
                                   validators={['required']}
                                   errorMessages={['this field is required']}
                    />
                    <br/>
                    <TextValidator className={classes.textField}
                                   name="firstName"
                                   label="First Name*"
                                   onChange={this.handleChange}
                                   value={formData.firstName}
                                   validators={['required']}
                                   errorMessages={['this field is required']}
                    />
                    <br/>
                    <TextValidator className={classes.textField}
                                   name="middleName"
                                   label="Middle Name"
                                   onChange={this.handleChange}
                                   value={formData.middleName}
                    />
                    <br/>
                    <TextValidator className={classes.textField}
                                   name="lastName"
                                   label="Last Name*"
                                   onChange={this.handleChange}
                                   value={formData.lastName}
                                   validators={['required']}
                                   errorMessages={['this field is required']}
                    />
                    <br/>
                    <TextValidator className={classes.textField}
                                   name="streetAddress"
                                   label="Present Street Address (Not P.O. Box)*"
                                   onChange={this.handleChange}
                                   value={formData.streetAddress}
                                   validators={['required']}
                                   errorMessages={['this field is required']}
                    />
                    <br/>
                    <TextValidator className={classes.textField}
                                   name="city"
                                   label="City*"
                                   onChange={this.handleChange}
                                   value={formData.city}
                                   validators={['required']}
                                   errorMessages={['this field is required']}
                    />
                    <br/>
                    <SelectValidator
                        className={classes.textField}
                        name={"state"}
                        label={"State*"}
                        validators={['required']}
                        errorMessages={['this field is required']}
                        value={formData.state}
                        onChange={this.handleChange}

                    >
                        {this.state.primary_state_options.map((option, index) => {
                            return (
                                <MenuItem key={index} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            )
                        })
                        }
                    </SelectValidator>
                    <br/>
                    <TextValidator className={classes.textField}
                                   name="zipCode"
                                   label="Zip*"
                                   type={"number"}
                                   onChange={this.handleChange}
                                   value={formData.zipCode}
                                   validators={['required']}
                                   errorMessages={['this field is required']}
                    />
                    <br/>
                    <TextValidator className={classes.textField}
                                   type={"date"}
                                   name="birthday"
                                   label="Date of Birth*"
                                   InputLabelProps={{
                                       shrink: true,
                                   }}
                                   onChange={this.handleChange}
                                   value={formData.birthday}
                                   validators={['required', 'isValidateAge']}
                                   errorMessages={['this field is required', 'You must be over 18 ages.']}
                    />
                    <br/>
                </Paper>

                {/***********************************************************/}
                {/*                 mailing information                     */}
                {/***********************************************************/}
                <h2>Mailing Information</h2>
                <Paper elevation={6} className={classes.paper}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name={"another_mail"}
                                // checked={formData.another_mail}
                                onChange={this.handleChange}
                                value={formData.another_mail}
                                classes={{
                                    root: classes.root,
                                    checked: classes.checked,
                                }}
                            />
                        }
                        label="Mailing address is different from primary account address"
                    />
                    <br/>
                    <TextValidator
                        className={classes.textField}
                        name="mailing_address"
                        label="Mailing Address*"
                        onChange={this.handleChange}
                        value={formData.mailing_address}
                        validators={['required', 'isEmail']}
                        errorMessages={['this field is required', 'email is not valid']}
                    />
                    <br/>
                    <TextValidator className={classes.textField}
                                   name="mailing_city"
                                   label="Mailing Address City*"
                                   onChange={this.handleChange}
                                   value={formData.mailing_city}
                                   validators={['required']}
                                   errorMessages={['this field is required']}
                    />
                    <br/>
                    <SelectValidator className={classes.textField}
                                     name={"mailing_state"}
                                     label={"Mailing Address State*"}
                                     validators={['required']}
                                     errorMessages={['this field is required']}
                                     value={formData.mailing_state}
                                     onChange={this.handleChange}

                    >
                        {this.state.mailing_state_options.map((option, index) => {
                            return (
                                <MenuItem key={index} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            )
                        })
                        }
                    </SelectValidator>
                    <br/>
                    <TextValidator className={classes.textField}
                                   name="mailing_zip"
                                   label="Mailing Address ZIP*"
                                   onChange={this.handleChange}
                                   value={formData.mailing_zip}
                                   type={"number"}
                                   validators={['required']}
                                   errorMessages={['this field is required']}
                    />
                    <br/>
                </Paper>

                {/***********************************************************/}
                {/*                 contact information                     */}
                {/***********************************************************/}
                <h2>Contact Information</h2>
                <Paper elevation={6} className={classes.paper}>
                    <SelectValidator className={classes.textField}
                                     name={"residential_status"}
                                     label={"Residential Status*"}
                                     validators={['required']}
                                     errorMessages={['this field is required']}
                                     value={formData.residential_status}
                                     onChange={this.handleChange}
                    >
                        {this.state.residential_status_options.map((option, index) => {
                            return (
                                <MenuItem key={index} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            )
                        })
                        }
                    </SelectValidator>
                    <br/>
                    <TextValidator className={classes.textField}
                                   name="monthly_rent"
                                   label="Monthly Housing/Rent Payment*"
                                   onChange={this.handleChange}
                                   value={formData.monthly_rent}
                                   type={"number"}
                                   validators={['required']}
                                   errorMessages={['this field is required']}
                    />
                    <br/>
                    <TextValidator className={classes.textField}
                                   name="years_residence"
                                   label="Monthly Housing/Rent Payment*"
                                   onChange={this.handleChange}
                                   value={formData.years_residence}
                                   type={"number"}
                                   validators={['required']}
                                   errorMessages={['this field is required']}
                    />
                    <br/>
                    <TextValidator className={classes.textField}
                                   name="contact_email"
                                   label="Email Address*"
                                   onChange={this.handleChange}
                                   value={formData.contact_email}
                                   validators={['required', 'isEmail']}
                                   errorMessages={['this field is required', 'email is not valid']}
                    />
                    <br/>
                    <TextValidator className={classes.textField}
                                   name="home_phone"
                                   label="Home Phone*"
                                   onChange={this.handleChange}
                                   value={formData.home_phone}
                                   type={"number"}
                                   validators={['required']}
                                   errorMessages={['this field is required']}
                    />
                    <br/>
                    <TextValidator className={classes.textField}
                                   name="mobile_phone"
                                   label="Mobile Phone"
                                   onChange={this.handleChange}
                                   value={formData.mobile_phone}
                                   type={"number"}
                    />
                    <br/>
                    <TextValidator className={classes.textField}
                                   name="work_phone"
                                   label="Work Phone*"
                                   onChange={this.handleChange}
                                   value={formData.work_phone}
                                   type={"number"}
                                   validators={['required']}
                                   errorMessages={['this field is required']}
                    />
                    <br/>
                </Paper>

                {/***********************************************************/}
                {/*                 Employer information                     */}
                {/***********************************************************/}
                <h2>Employer Information</h2>
                <Paper className={classes.paper} elevation={6}>
                    <TextValidator className={classes.textField}
                                   name="employer_name"
                                   label="Current Employer's Name*"
                                   onChange={this.handleChange}
                                   value={formData.employer_name}
                                   validators={['required']}
                                   errorMessages={['this field is required']}
                    />
                    <br/>
                    <TextValidator className={classes.textField}
                                   name="employer_city"
                                   label="Current Employer's City*"
                                   onChange={this.handleChange}
                                   value={formData.employer_city}
                                   validators={['required']}
                                   errorMessages={['this field is required']}
                    />
                    <br/>
                    <TextValidator className={classes.textField}
                                   name="employer_years"
                                   label="Years at Employment"
                                   onChange={this.handleChange}
                                   value={formData.employer_years}
                                   type={"number"}
                                   validators={['required']}
                                   errorMessages={['this field is required']}
                    />
                    <br/>
                    <TextValidator className={classes.textField}
                                   name="monthly_gross"
                                   label="Monthly Gross*"
                                   onChange={this.handleChange}
                                   value={formData.monthly_gross}
                                   type={"number"}
                                   validators={['required']}
                                   errorMessages={['this field is required']}
                    />
                    <br/>
                </Paper>

                {/***********************************************************/}
                {/*                 Nearest Relative information            */}
                {/***********************************************************/}
                <h2>Nearest Relative Information</h2>
                <Paper className={classes.paper} elevation={6}>
                    <TextValidator className={classes.textField}
                                   name="nearest_name"
                                   label="Nearest Relative's Name*"
                                   onChange={this.handleChange}
                                   value={formData.nearest_name}
                                   validators={['required']}
                                   errorMessages={['this field is required']}
                    />
                    <br/>
                    <TextValidator className={classes.textField}
                                   name="nearest_city"
                                   label="Nearest Relative's City*"
                                   onChange={this.handleChange}
                                   value={formData.nearest_city}
                                   validators={['required']}
                                   errorMessages={['this field is required']}
                    />
                    <br/>
                    <SelectValidator className={classes.textField}
                                     name={"nearest_state"}
                                     label={"Nearest Relative's State*"}
                                     onChange={this.handleChange}
                                     value={formData.nearest_state}
                                     validators={['required']}
                                     errorMessages={['this field is required']}
                    >
                        {this.state.nearest_state_options.map((option, index) => {
                            return (
                                <MenuItem key={index} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            )
                        })
                        }
                    </SelectValidator>
                    <br/>
                    <TextValidator className={classes.textField}
                                   name="nearest_phone_number"
                                   label="Nearest Relative's Phone Number"
                                   onChange={this.handleChange}
                                   value={formData.nearest_phone_number}
                                   type={"number"}
                                   validators={['required']}
                                   errorMessages={['this field is required']}
                    />
                    <br/>

                </Paper>
                <div className={classes.submit}>
                    <Button
                        style={{padding: '10px', fontSize: '19px'}}
                        fullWidth={true}
                        color="primary"
                        variant="contained"
                        type="submit"
                        disabled={submitted}
                    >
                        Submit
                    </Button>
                </div>
            </ValidatorForm>
        );
    }


}

DatePickers.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatePickers);