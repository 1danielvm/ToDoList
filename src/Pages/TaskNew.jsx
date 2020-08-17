import React from "react";
import {ContenteNewTask} from "../container/ContenteNewTask";

const TaskNew = () => {
  return (
    <React.Fragment>
      <ContenteNewTask/>
    </React.Fragment>
  );
};

export default TaskNew;


import React from 'react';

import './styles/BadgeNew.css'
import header from '../images/platziconf-logo.svg'
import BadgeForm from '../components/BadgeForm'
import Badge from '../components/Badge'
import PageLoading from '../components/PageLoading'
import api from '../api'

class BadgeNew extends React.Component {
  state={
    loading: false,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
  }};

  handleSubmit = async e => {
    e.preventDefault()
    this.setState({
      loading: false,
      error: null
    })
    try {
      await api.badges.create(this.state.form);
      this.setState({loading: false});

      this.props.history.push('/badges');
    } catch (error) {
      this.setState({loading: false,
      error: error})
    }
  }
  handleChange = e => {
    // Mantener los valores y que no se sobrescriban MANERA 1
    // const nextForm = this.state.form
    // nextForm[e.target.name] = e.target.value;
    // this.setState({
      // formn: nextForm,
      // })
      // MANERA 2

      this.setState({
        form: {
          ...this.state.form,
          [e.target.name]: e.target.value,
        }
      });
  };
  render(){
    if (this.state.loading) {
      return <PageLoading/>
    }
    return( 
    <React.Fragment>

      <div className="BadgeNew__hero">
          <img className="BadgeNew__hero-image img-fluid" src={header} alt=""/>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-6">
            <Badge 
            firstName={this.state.form.firstName || 'FIRST_NAME'} 
            lastName={this.state.form.lastName || 'LAST_NAME'} 
            twitter={this.state.form.twitter || 'twitter'} 
            jobTitle={this.state.form.jobTitle || 'JOB_TITLE'} 
            email={this.state.form.email} 
            avatar="https://www.gravatar.com/avatar?d=identicon"/>
          </div>

          <div className="col-6">
              <h1>New Attendant</h1>
            <BadgeForm 
            onChange={this.handleChange} 
            onSubmit={this.handleSubmit}
            formValues={this.state.form}
            error={this.state.error}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
    )
  }
}

export default BadgeNew;