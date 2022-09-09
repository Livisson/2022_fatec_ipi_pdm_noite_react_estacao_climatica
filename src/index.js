import 'bootstrap/dist/css/bootstrap.css'
import ReactDOM from 'react-dom';
import React from 'react';

class App extends React.Component{

    /*window.navigator.geolocation.getCurrentPosition(
        // significa que executa quando a localização estiver disponivel
        (position) => {
            console.log(position)
        }
    )*/
    render(){

        return (
            <div>
                Meu App
            </div>
        )
    }

}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)