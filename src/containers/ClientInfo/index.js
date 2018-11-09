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

const ClientInfo = ({ client: {  general, job, contact, address  }}) => {
    return (
        <div>
            <h1>Client's Details</h1>
            <div className="ClientInfo">
                <div className="ClientInfo-leftContent">
                    <div className="ClientInfo-leftContent--avatarLine">
                     <img src={general.avatar} alt="avatar"/>
                    </div>
                </div>
                <div className="ClientInfo-rightContent">
                    <div className="ClientInfo-rightContent--name">
                        <h3><b>Client Name: </b> {general.firstName} {general.lastName}</h3>
                    </div>
                    <div className="ClientInfo-rightContent--job">
                        <b>Company: </b> {job.company} - <b>Post: </b>{job.title}
                    </div>
                    <div className="ClientInfo-rightContent--contact">
                        <b>E-mail: </b>  {contact.email} <br/> <b>Phone: </b>{contact.phone}
                    </div>
                    <div className="ClientInfo-rightContent--address">
                        <strong>Country:</strong> {address.country}<br/>
                        <strong>City: </strong>   {address.city}<br/>
                        <strong>Street:</strong>  {address.street}<br/>
                        <strong>Post:</strong>    {address.zipCode}
                    </div>
                </div>
            </div>
        </div>
    );
};


ClientInfo.propTypes = {
    client: clientShape.isRequired,
};

export default enhance(ClientInfo);