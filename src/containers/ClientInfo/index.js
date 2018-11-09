import React from 'react';
import { branch, renderNothing, compose } from 'recompose';
import { connect } from 'react-redux';

import clientShape from '../../shapes/client';
import { getCurrentViewableClient } from '../../store/clients/selector';

import './style.scss';

const enhance = compose(
    connect(store => ({
        client: getCurrentViewableClient(store),
    })),
    branch(({ client }) => typeof client === 'undefined', renderNothing),
);

const ClientInfo = ({ client: {  general, job  }}) => (
    <div className="ClientInfo">
        <img src={general.avatar} alt="" />
        <div className="ClientInfo-name">
            <strong>Client Name: { general.firstName } <br /> {general.lastName}</strong>
        </div>
    </div>
);

ClientInfo.propTypes = {
    client: clientShape.isRequired,
};

export default enhance(ClientInfo);