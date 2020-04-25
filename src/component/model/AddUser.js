
import React, { Component } from "react";
// import {addStudent} from '../actions/studentActions'
import {addStudent} from '../../actions/studentActions'
import { Modal} from 'reactstrap';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import swal from 'sweetalert';
class AddUser extends Component {
    constructor(props) {
        super(props)
        this.addNewStudent = this.addNewStudent.bind(this);

        this.state = {
            userData: {}
            //this.props.empData
        }
    }

    handleName = e => {
        let expriencedata = this.state.userData;
        expriencedata.name = e.target.value;
        this.setState({
            userData: expriencedata
        })
    }

    handleCountry = e => {
        let expriencedata = this.state.userData;
        expriencedata.country = e.target.value;
        this.setState({
            userData: expriencedata
        })
    }

    handleCity = e => {
        let expriencedata = this.state.userData;
        expriencedata.city = e.target.value;
        this.setState({
            userData: expriencedata
        })
    }

    handleSalary = e => {
        let expriencedata = this.state.userData;
        expriencedata.salary = e.target.value;
        this.setState({
            userData: expriencedata
        })
    }
    addNewStudent()
    {
      this.props.addStudent({
          id:Math.max(...this.props.studentList.map(function(o){return o.id})) + 1,
          name: this.state.userData.name,country: this.state.userData.country,city: this.state.userData.city,salary: this.state.userData.salary});
          this.props.addExprienceaction()
          swal("Success","Added student !!!","success");
    }


    render() {
        return (
            <Modal isOpen={this.props.isAddModel} toggle={this.toggle} className={this.props.className}>
                {console.log("render model")}
                <div className="modal-dialog">

                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" onClick={this.props.addExprienceaction} data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                            <div className="modal_left">
                                <div className="ws_model_main_wrapper">

                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="gc_causes_single_forms">
                                                <input type="text" placeholder="Name" value={this.state.userData.name} onChange={this.handleName} />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="gc_causes_single_forms">
                                                <input type="text" placeholder="City" value={this.state.userData.city} onChange={this.handleCity} />
                                            </div>
                                        </div>


                                    </div>
                                </div>

                            </div>
                            <div className="modal_right">
                                <div className="ws_model_main_wrapper">

                                    <div className="row">

                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="gc_causes_single_forms">
                                                <input type="text" placeholder="Country" value={this.state.userData.country} onChange={this.handleCountry} />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="gc_causes_single_forms">
                                                <input type="text" placeholder="Salary" value={this.state.userData.salary} onChange={this.handleSalary} />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="gc_causes_single_form_btn" onClick={this.addNewStudent}>
                                                <ul>
                                                    <li><a>Add</a></li>
                                                </ul>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Modal>

        )
    }
}
const mapStateToProps = (state) => {
    return {
      studentList : state
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      addStudent:addStudent,
    },dispatch);
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(AddUser);
  