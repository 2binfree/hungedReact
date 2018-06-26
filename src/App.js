import React, { Component } from 'react';
import Keyboard from './Keyboard/Keyboard';
import Word from './Word/Word';
import Trials from './Trials/Trials';
import Restart from './Restart/Restart';
import './App.css';

const dictionary = 'saule acrobatique fouet forteresse pair associer gouverneur diagonale basket rouge application confrontation vieux plantation donner triste sans aide fabrication requin conclusion crash banquet diva plus grand accessoires intime banque apocalypse assassinat terrains clignotement gant refroidissement moment manille artificiel archiver chuchotement vessie gauche gril puissance croquer criquet pension famille chambre gargouillis ville sagesse collision malheureux chaotique gonflable prix horizontal adorable humainement biblique toutefois fulminer ambre attention';

class App extends Component {


  static generateWord() {
    return dictionary.split(' ')[Math.floor(Math.random() * dictionary.split(' ').length)].toUpperCase();
  }

  static computeDisplay(word, usedLetters) {
    return word.replace(
      /\w/g,
      letter => (usedLetters.includes(letter) ? letter : '_'),
    );
  }

  constructor() {
    super();
    this.state = this.initialState;
  }

  initialState = {
    word: App.generateWord(),
    usedKeys: [],
    trials: 0,
  };

  init = () => {
    this.setState(this.initialState);
  };

  handleKey = (akey) => {
    const {
      usedKeys, trials,
    } = this.state;
    if (!usedKeys.includes(akey)) {
      this.setState({
        usedKeys: [...usedKeys, akey],
        trials: trials + 1,
      });
    }
  };

  render() {
    const { word, usedKeys } = this.state;
    const won = (App.computeDisplay(word, usedKeys) === word);
    return (
      <div className="hunged">
        <Word word={App.computeDisplay(this.state.word, this.state.usedKeys)} />
        {won === false ?
          <Keyboard onClick={this.handleKey} usedKeys={this.state.usedKeys} /> :
          <Restart onClick={this.init} />
        }
        <Trials trials={this.state.trials} />
      </div>
    );
  }
}

export default App;
