import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';



//리액트는 최종적으로 하나의 컴포넌트를 그려야 한다.
//여러 개의 컴포넌트는 하나로 합친 다음 그려야 할 듯.
//예를들어 포테이토 컴포넌트는 앱 컴포넌트에 넣어서 앱 컴포넌트를 
//그리면 됨.
ReactDOM.render(<App />, document.getElementById('root'));


