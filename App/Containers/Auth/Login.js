import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import Images from '../../Theme/Images';
import {getHeightPercent} from './../../Services/RadioService';
import {ApplicationStyles} from '../../Theme';
import Carousel from 'react-native-snap-carousel';

const sliderWidth = Dimensions.get('window').width;
const itemWidth = getHeightPercent(16.0);
const itemHeight = getHeightPercent(32.8);

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: [
        {
          image: Images.ic_template1,
        },
        {
          image: Images.ic_template1,
        },
        {
          image: Images.ic_template1,
        },
      ],
    };
  }

  _renderItem = ({item, index}) => {
    return (
      <View style={styles.slide}>
        <Image
          source={item.image}
          style={styles.itemImg}
          resizeMode={'cover'}
        />
      </View>
    );
  };

  render() {
    return (
      <View>
        <KeyboardAvoidingView behavior="position">
          <View style={styles.logoContainer}>
            <Image
              source={Images.ic_logo}
              style={styles.logoImg}
              resizeMode={'contain'}
            />
            <Text style={styles.logoText}>SHARE YOUR HUSL WITH THE WORLD</Text>
          </View>
          <View style={styles.middleContainer}>
            <Carousel
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              inactiveSlideScale={0.7}
            />
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.inputContainer}>
              <TextInput
                selectionColor={'gray'}
                maxLength={20}
                placeholder={'Username'}
                placeholderTextColor={'#757575'}
                style={styles.input}
                returnKeyType="done"
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                selectionColor={'gray'}
                maxLength={20}
                placeholder={'Password'}
                placeholderTextColor={'#757575'}
                style={styles.input}
                returnKeyType="done"
              />
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.loginText}>Log In</Text>
            </TouchableOpacity>
            <Text style={styles.signUpText}>Create account</Text>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  // Top Container
  logoContainer: {
    height: getHeightPercent(22.2),
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoImg: {
    width: '100%',
    height: getHeightPercent(8.2),
  },
  logoText: {
    ...ApplicationStyles.customFonts.notoSerifRegular,
    fontSize: getHeightPercent(1.5),
    color: '#FFFFFF',
    fontWeight: '500',
    marginTop: getHeightPercent(1.8),
  },

  // Middle Container
  middleContainer: {
    marginTop: getHeightPercent(3.6),
  },

  //Carousel
  slide: {
    width: itemWidth,
    height: itemHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemImg: {
    width: getHeightPercent(17.6),
    height: getHeightPercent(28.8),
    borderRadius: getHeightPercent(1.6),
  },

  // Bottom Container
  bottomContainer: {
    marginStart: getHeightPercent(3.2),
    marginEnd: getHeightPercent(3.2),
    alignItems: 'center',
    marginTop: getHeightPercent(4.4),
  },
  // text input container
  inputContainer: {
    height: getHeightPercent(6.4),
    width: '100%',
    backgroundColor: 'white',
    borderRadius: getHeightPercent(3.7),
    justifyContent: 'center',
    marginTop: getHeightPercent(2.8),
  },
  // text input
  input: {
    ...ApplicationStyles.customFonts.balooBhaina2Medium,
    fontSize: getHeightPercent(2.0),
    paddingStart: getHeightPercent(3.2),
    paddingEnd: getHeightPercent(3.2),
    paddingTop: getHeightPercent(0.8),
    color: '#757575',
  },
  // login button
  button: {
    height: getHeightPercent(6.4),
    width: '100%',
    backgroundColor: 'white',
    borderRadius: getHeightPercent(3.7),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: getHeightPercent(2.8),
  },
  //login button text
  loginText: {
    ...ApplicationStyles.customFonts.balooBhaina2Medium,
    fontSize: getHeightPercent(2.2),
    color: '#000000',
  },
  //sign up text
  signUpText: {
    ...ApplicationStyles.customFonts.balooBhaina2Medium,
    fontSize: getHeightPercent(1.2),
    color: '#FFFFFF',
    marginTop: getHeightPercent(1.8),
  },
});
