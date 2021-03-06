
import React, { Component } from 'react';
 
export default class AddDocumentComponent extends Component {
    documentData;
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            title: '',
            description: '',
          
        }
    }
 
handleChange= (e)=> {
    this.setState({[e.target.name]:e.target.value});
}
// on form submit...
handleFormSubmit(e) {
    e.preventDefault()
   localStorage.setItem('MatterData',JSON.stringify(this.state));
}
 
// React Life Cycle
componentDidMount() {
    this.documentData = JSON.parse(localStorage.getItem('document'));
 
    if (localStorage.getItem('MatterData')) {
        this.setState({
            title: this.documentData.title,
           description: this.documentData.description,
          
    })
} else {
    this.setState({
        title: '',
        description: '',

    })
}
}
 
render() {
    return (
        <div className="container">
            <form onSubmit={this.handleFormSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" name="title" className="form-control" value={this.state.title} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input type="text" name="description" className="form-control" value={this.state.description} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                  
                   
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
        </div>
    )
}
}
 

