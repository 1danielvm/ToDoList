import React from 'react'
import api from '../api'
import {SectionDetail} from "../components/SectionDetail";
import CardDetails from "../components/CardDetails";
import PageError from '../components/PageError'
import PageLoading from '../components/PageLoading'


class ContentTaskDetails extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined, 
    modalIsOpen: false
  }

  componentDidMount(){
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null})
    try {
      const data = await api.tasks.read(
        this.props.match.params.taskId
      )
      this.setState({loading: false, data: data})
    } catch (error) {
      this.setState({loading: false, error: error})
    }
  }

  handleDeleteTask = async e => {
    this.setState({ loading: true, error: null})

    try {
      await api.tasks.remove(
        this.props.match.params.taskId
        );
      this.setState({ loading: false});

      this.props.history.push('/tasks');
    } catch (error) {
      this.setState({loading: false, error: error})
    }
  }

  render(){
    if(this.state.loading){
      return <PageLoading/>
    }
    if(this.state.error){
      return <PageError error={this.state.error}/>
    }

    return (
      <>
        <SectionDetail />
        <div className='Section__content'>
          <CardDetails 
          onDeleteTask={this.handleDeleteTask} 
          task={this.state.data}/>
        </div>
      </>
    )
  }
}

export default ContentTaskDetails;