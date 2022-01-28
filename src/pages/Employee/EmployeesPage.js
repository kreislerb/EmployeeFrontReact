import React from 'react';
import './styles/styles.css'
import TextField from '@mui/material/TextField';
import axios from 'axios';
import DataTable from './DataTable/DataTable';

class EmployeesPage extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            dataTable: [],
            input: '',
            showError: false,
            errorMessage: "",
        }
       
    }



    getData(){
        axios.get("http://localhost:8080/api/v1/employees")
        .then(res=> res.data)
        .then(res=>{
            this.setState({dataTable: res["data"]})   
           
            this.setState({showError: false})  
        }).catch(err =>{
            
        });
    }

    getDataById(id){

        var endpoint = ("http://localhost:8080/api/v1/employee/"+id);
        
        axios.get(endpoint)
        .then(res=> res.data)
        .then(res=>{
            
            this.setState({dataTable: [res["data"]]})   
          
            this.setState({showError: false})  
        }).catch(error => {
           
            this.setState({errorMessage: "The id " + this.state.input + " not found"});
            this.setState({showError: true});
        })
    }
    

    updateData(){
        this.getData();
    }


    componentDidMount(){
        this.updateData();
    }

    handleKeyDown = (event) =>{
        var inputText = event.target.value; 

        if(isNaN(inputText)){
            return;
        }

        this.setState({input: inputText})

        if(inputText !== ''){
            this.getDataById(inputText);
        }
        else{
            this.getData();
        }

       
    }
    

    render(){



        return (
            <div>
                <div className='availability-content'>
                    <div className='availability-header'>
                    <TextField  id="outlined-search" label="Insert Employee ID" type="search" onChange={this.handleKeyDown} />
                    </div>
                    <div>
                    { this.state.showError 
                    ? 
                    <p1>{this.state.errorMessage}</p1> 
                    : 
                    <DataTable  data={this.state.dataTable}/>
                    }
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default EmployeesPage;