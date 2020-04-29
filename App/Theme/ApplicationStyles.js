import {getHeightPercent} from './../Services/RadioService';

export default {
  screen: {
    container: {
      flex: 1,
      backgroundColor: '#000000',
    },
    goChatImage: {
      width: getHeightPercent(3.4),
      height: getHeightPercent(3.4),
    },
    listImage: {
      width: getHeightPercent(4.0),
      height: getHeightPercent(4.0),
    },
    topContainer: {
      flexDirection: 'row-reverse',
      alignItems: 'center',
      paddingTop: getHeightPercent(5.0),
      paddingLeft: getHeightPercent(2.4),
      paddingRight: getHeightPercent(2.4),
    },
    mainContainer: {marginHorizontal: getHeightPercent(2.4), flex: 1},
    mainBodyText: {
      fontSize: getHeightPercent(3.2),
      color: '#FFFFFF',
    },
  },
  customFonts: {
    notoSerifRegular: {
      fontFamily: 'NotoSerif',
    },
    balooBhainaRegular: {
      fontFamily: 'BalooBhaina-Regular',
    },
    balooBhaina2Medium: {
      fontFamily: 'BalooBhaina2-Medium',
    },
  },
};
