import React, { PureComponent } from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';

import * as clientsActions from '../../../store/clients/actions';
import { getFilteredClientsList, getCurrentViewableClientID } from '../../../store/clients/selector';
import clientShape from '../../../shapes/client';

import './style.scss';

class ClientsListItem extends PureComponent {
  static propTypes = {
    clientsList: PropTypes.arrayOf(clientShape).isRequired,
    setViewableClientById: PropTypes.func.isRequired,
    currentViewableClientID: PropTypes.string,
  };

  static defaultProps = {
    currentViewableClientID: null,
  };

  handleShowClick = ({ target }) => {
    const { setViewableClientById } = this.props;

    setViewableClientById(target.dataset.clientId);
  };

  render() {
    const { clientsList, currentViewableClientID } = this.props;

    return clientsList.map(({ general, job }, i) => {
      const listItemClassName = classNames('ClientsList-item', {
        isActive: i.toString() === currentViewableClientID,
      });

      return (
        <li className={listItemClassName} key={i} data-client-id={i} onClick={this.handleShowClick}>
          <div className="ClientsList-item--container">
            <img src={general.avatar} alt="" />
            <div className="ClientsList-item--info">
              <b> Client Name: </b>
              {general.firstName} {general.lastName} <br />
              <b> Client Post: </b> {job.title}
            </div>
          </div>
        </li>
      );
    });
  }
}

const mapStateToProps = state => ({
  clientsList: getFilteredClientsList(state),
  currentViewableClientID: getCurrentViewableClientID(state),
});

export default connect(
  mapStateToProps,
  clientsActions,
)(ClientsListItem);
