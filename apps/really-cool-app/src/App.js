import React from "react";

import { Button } from 'shared-ui';

const App = () => {
    return (
        <>
            <h1>Really Cool App - Hello world!</h1>
            <Button onClick={() => console.log('clicked')}>Click me</Button>
        </>
    )
};

export default App;
