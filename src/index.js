import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAlYT-szIdjwKLGNEB3BnYEdvxnQMoK--g';

//Create a new component that produces html

const App = () => {
    return (
      <div>
        <SearchBar />
      </div>
    );
}

//take this component's generated html and put it on th page

ReactDOM.render(<App />, document.querySelector('.container'));