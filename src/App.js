import React, { Component } from 'react';
import styles from './App.module.css';
import { Switch, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import TitleComponent from './components/TitleComponent/';
import Nabvar from './components/Navbar/Navbar';
import login from './pages/Login';
import Home from './pages/Home';
import Books from './pages/Books';
import registro from './pages/registro';
import { setTitle } from './store/actions/ui';
import actualizarPassword from './pages/actualizarPassword';
import passwordOlvidada from './pages/passwordOlvidada';
import {useFirebaseApp} from 'reactfire';
class App extends Component {
  render() {
 //   const firebase=useFirebaseApp();
//    console.log(firebase);
    return (  
      <div id='xdc' className={styles.App}>
        <Nabvar />
        <TitleComponent/> 
        <div className='container-fluid'>
          <Switch>
            <Route exact path='/' component={Home} /> 
            <Route exact path='/Login' component={login} /> 
            <Route exact path='/books' component={Books} />
            <Route exact path='/Login' component={Home} />
            <Route exact path='/login' component={registro}/>
            <Route exact path='/registro' component={registro}/>
            <Route exact path='/login' component={actualizarPassword}/>
            <Route exact path='/actualizarPassword' component={actualizarPassword}/>
            <Route exact path='/login' component={passwordOlvidada}/>
            <Route exact path='/passwordOlvidada' component={passwordOlvidada}/>       
          </Switch>
        </div>
        {
        }
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
    };

    console.log(this.state);

    this.onCambiarNombreClicked = this.onCambiarNombreClicked.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.infoArrived = this.infoArrived.bind(this);
    this.changeFlag = this.changeFlag.bind(this);
  }

  componentDidMount() {
  }

  componentDidUpdate() {
  }

  componentWillUnmount() {

  }

  // Método propios o extras
  onCambiarNombreClicked(event) {
    const name = event.target.name;
    if (name === '1') 
      this.setState({ name: 'Books App Changed!' });
    else if (name === '2')
      this.setState({ name: 'Books App Updated!' });
  }

  onChangeTitle() {
    this.props.setTitle('Este es mi nuevo título');
  }

  changeFlag() {
    this.setState({ flag: !this.state.flag });
  }

  infoArrived(info) {
    console.log(info);
    console.log('información recibida en el padre.');
  }
}

const mapActionsToProps = {
  setTitle
};

export default connect(null, mapActionsToProps)(App);
