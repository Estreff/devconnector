import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class Experience extends Component {
  render() {
    const experience = this.props.experience.map(exp => {
      <tr key={exp._id}>
        <td className="company">{exp.company}</td>
        <td className="title">{exp.title}</td>
        <td className="to">
          {exp.from} - {exp.to}
        </td>
        <td className="company">
          <button className="btn btn-danger">
            <span className="fa fa-trash" />
          </button>
        </td>
      </tr>;
    });
    return (
      <div>
        <h4 className="mb-4">Experience Credentials</h4>
        <table className="table">
          <thead>
            <tr>Company</tr>
            <tr>Title</tr>
            <tr>Years</tr>
            <tr>Actions</tr>
          </thead>
          <tbody>{experience}</tbody>
        </table>
      </div>
    );
  }
}

export default connect(null)(withRouter(Experience));
