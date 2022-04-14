import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button/button';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Input from './components/input/Input';
import Checkbox from './components/checkbox/Checkbox';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Input name='name' label='Имя'/>
        <Checkbox 
          checked={true} 
          label={'Перенесенная covid-инфекция '}
          onChange={() => console.log('hi')}
        />
        <Button 
          name='Продолжить' 
          icon={faChevronRight}
        />
      </header>
    </div>
  );
}

export default App;
