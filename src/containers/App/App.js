import React  from 'react';
import ClientsList from "../ClientsList/index";
import ClientInfo from "../ClientInfo";
import ClientsSearchContainer from '../ClientsSearchContainer';

import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import * as clientsActions from '../../store/clients/actions';

import './style.scss';


const enhance = compose(
    connect(
        null,
        clientsActions,
    ),
    lifecycle({
        componentDidMount() {
            const { fetchClientsList } = this.props;
            fetchClientsList();
        },
    }),
);

const App = () => (
    <div className="App">
        <div className="App-content">
            <div className="App-clientsList">
                <ClientsSearchContainer />
                <ClientsList />
            </div>
            <div className="App-clientsInfo">
                <ClientInfo />
            </div>
        </div>
    </div>
    );

export default enhance(App);
