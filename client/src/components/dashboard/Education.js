import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { deleteEducation } from '../../actions/profileActions';

class Education extends Component {
  onDeleteClick = id => {
    this.props.deleteEducation(id);
  };

  render() {
    const education = this.props.education.map(edu => (
      <tr key={edu._id}>
        <td className="company">{edu.school}</td>
        <td className="degree">{edu.degree}</td>
        <td className="fieldofstudy">{edu.fieldofstudy}</td>
        <td className="to">
          <Moment format="YYYY/MM/DD">{edu.from}</Moment> -
          {edu.to === null ? (
            ' Current'
          ) : (
            <Moment format="YYYY/MM/DD">{edu.to}</Moment>
          )}
        </td>
        <td className="action text-center  d-none">
          <button
            type="button"
            onClick={this.onDeleteClick.bind(edu._id)}
            className="btn btn-danger mr-3"
          >
            <span className="fa fa-trash mr-2" />
            Delete
          </button>
        </td>
      </tr>
    ));
    return (
      <div>
        <h4 className="mb-4">Education Credentials</h4>
        <table className="table table-responsive">
          <thead>
            <tr>
              <th>School</th>
              <th>Degree</th>
              <th>Field of Study</th>
              <th>Years</th>
              <th className="text-center d-none">Actions</th>
            </tr>
          </thead>
          <tbody>{education}</tbody>
        </table>
      </div>
    );
  }
}

Education.propTypes = {
  deleteEducation: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteEducation }
)(Education);
