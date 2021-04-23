import React from 'react';

export const data = {
    titulo: "Use context",
    number: 20
}

const dataContext = React.createContext(data);

export default dataContext;