import React from "react";
import {ContentTask} from "../container/ContentTask";
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import Loader from '../components/Loader';
import api from '../api'

class TaskHome extends React.Component{
  state = {
    loading: true,
    error : null,
    data: undefined
  };

  componentDidMount (){
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({loading: true, error: null})
    try {
      const data = await api.tasks.list();
      this.setState({loading:false, data: data});
    } catch (error) {
      this.setState({loading:false, error: error});
    }
  }
  
  render(){
  if(this.state.loading === true && !this.state.data){
    return <PageLoading />;
  }
  if(this.state.error){
    return <PageError error={this.state.error}/>;
  }
  return (
    <>
      <ContentTask 
        tasks={this.state.data}
        onDeleteTask={this.handleDeleteTask} 
      />
      {this.state.loading && <Loader/>}
    </>
  );
  }
};

export default TaskHome;
