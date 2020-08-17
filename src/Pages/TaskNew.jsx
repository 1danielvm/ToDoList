import React from "react";
import PageLoading from '../components/PageLoading'
import TaskForm from "../components/TaskForm";
import { SectionEdit } from "../components/SectionEdit";
import api from '../api'

class TaskNew extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      taskTitle: '',
      taskDescription: '',
      timeTask: 0
  }};

  handleSubmit = async e => {
    e.preventDefault()
    this.setState({
      loading: false,
      error: null
    })
    try {
      await api.tasks.create(this.state.form);
      this.setState({ loading: false });

      this.props.history.push('/tasks');
    } catch (error) {
      this.setState({
        loading: false,
        error: error
      })
    }
  }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    });
  };
  render() {
    if (this.state.loading) {
      return <PageLoading />
    }
    return (
      <>
        <SectionEdit />
        <div className='Section__content'>
          <TaskForm
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            formValues={this.state.form}
            error={this.state.error}
            />
        </div>
      </>
    )}
};

export default TaskNew;
