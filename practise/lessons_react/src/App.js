import React, { Component } from 'react';
import './App.css';
import News from './News';
import TestInput from './TestInput';

var my_new = [
    {
        author: 'Саша Печкин',
        text: 'В четверг, четвертого числа...',
        bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
    },
    {
        author: 'Просто Вася',
        text: 'Считаю, что $ должен стоить 35 рублей!',
        bigText: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение'
    }
];

class App extends Component {
  render() {
    return (
      <div className="App">
          <TestInput />
          <News data={my_new} />
      </div>
    );
  }
}

export default App;
