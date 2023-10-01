import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from 'react-native';
import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '0',
      currentInput: '',
      previousInput: '',
      operator: 0,
    };
  }

  handleDigitPress = digit => {
    this.setState(prevState => ({
      display: prevState.display === '0' ? digit : prevState.display + digit,
      currentInput: prevState.currentInput + digit,
    }));
  };

  handleDecimalPress = () => {
    this.setState(prevState => ({
      display: prevState.currentInput.includes('.')
        ? prevState.display
        : prevState.display + '.',
      currentInput: prevState.currentInput.includes('.')
        ? prevState.currentInput
        : prevState.currentInput + '.',
    }));
  };
  handleOperatorPress = operator => {
    this.setState(prevState => ({
      display: operator,
      currentInput: '',
      previousInput: prevState.currentInput,
      operator: operator,
    }));
  };

  handleEqualsPress = () => {
    const {currentInput, previousInput, operator} = this.state;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    switch (operator) {
      case '+':
        this.setState({display: (num1 + num2).toString()});
        break;
      case '-':
        this.setState({display: (num1 - num2).toString()});
        break;
      case '*':
        this.setState({display: (num1 * num2).toString()});
        break;
      case '/':
        this.setState({display: (num1 / num2).toString()});
        break;
      default:
        break;
    }
  };

  handleClearPress = () => {
    this.setState({
      display: '0',
      currentInput: '',
      previousInput: '',
      operator: '',
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar animated={true} backgroundColor="#111" />
        <View style={styles.subcontainer}>
          <TextInput style={styles.Number} maxLength={11}>
            {this.state.display}
          </TextInput>
        </View>
        <View style={styles.buttons}>
          {/* Row 1 */}
          <View>
            <TouchableOpacity onPress={() => this.handleDigitPress('7')}>
              <View style={styles.Press}>
                <Text style={styles.btnnames}>7</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.handleDigitPress('4')}>
              <View style={styles.Press}>
                <Text style={styles.btnnames}>4</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.handleDigitPress('1')}>
              <View style={styles.Press}>
                <Text style={styles.btnnames}>1</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.handleDigitPress('0')}>
              <View style={styles.Press}>
                <Text style={styles.btnnames}>0</Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* Row 2 */}
          <View>
            <TouchableOpacity onPress={() => this.handleDigitPress('8')}>
              <View style={styles.Press}>
                <Text style={styles.btnnames}>8</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.handleDigitPress('5')}>
              <View style={styles.Press}>
                <Text style={styles.btnnames}>5</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.handleDigitPress('2')}>
              <View style={styles.Press}>
                <Text style={styles.btnnames}>2</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.handleDecimalPress('.')}>
              <View style={styles.Press}>
                <Text style={styles.btnnames}>.</Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* Row 3 */}
          <View>
            <TouchableOpacity onPress={() => this.handleDigitPress('9')}>
              <View style={styles.Press}>
                <Text style={styles.btnnames}>9</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.handleDigitPress('6')}>
              <View style={styles.Press}>
                <Text style={styles.btnnames}>6</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.handleDigitPress('3')}>
              <View style={styles.Press}>
                <Text style={styles.btnnames}>3</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.handleOperatorPress('/')}>
              <View style={styles.operator}>
                <Text style={styles.btnnames}>/</Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* Row 4 */}
          <View>
            <TouchableOpacity onPress={this.handleClearPress}>
              <View style={styles.clear}>
                <Text style={styles.btnnames}>C</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.handleOperatorPress('*')}>
              <View style={styles.operator}>
                <Text style={styles.btnnames}>*</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.handleOperatorPress('-')}>
              <View style={styles.operator}>
                <Text style={styles.btnnames}>-</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.handleOperatorPress('+')}>
              <View style={styles.operator}>
                <Text style={styles.btnnames}>+</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.handleEqualsPress}>
              <View style={styles.Equals}>
                <Text style={styles.btnnames}>=</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
  subcontainer: {
    height: 100,
    width: '100%',
    marginTop: 50,
  },
  Number: {
    height: '100%',
    width: '100%',
    fontSize: 50,
    fontWeight: 'bold',
    color: '#fff',
  },
  Equals: {
    width: 90,
    height: 70,
    backgroundColor: 'red',
    borderRadius: 15,
    marginTop: 15,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Press: {
    width: 90,
    height: 70,
    backgroundColor: 'orange',
    borderRadius: 15,
    marginTop: 15,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  operator: {
    width: 90,
    height: 70,
    backgroundColor: 'skyblue',
    borderRadius: 15,
    marginTop: 15,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clear: {
    width: 90,
    height: 70,
    backgroundColor: '#111',
    borderRadius: 15,
    marginTop: 15,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  btnnames: {
    fontSize: 30,
    color: '#fff',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
});
