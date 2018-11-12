import React from 'react';
import ClientsListItem from './ClientsListItem';

import './style.scss';

export const ClientsList = () => {
  return (
    <ul className="ClientsList">
      <ClientsListItem />
    </ul>
  );
};

export default ClientsList;
