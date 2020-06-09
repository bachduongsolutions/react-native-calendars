import {StyleSheet} from 'react-native';
import * as defaultStyle from '../../style';

const STYLESHEET_ID = 'stylesheet.calendar.header';

export default function (theme = {}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 10,
      paddingRight: 10,
      paddingVertical: 5,
      alignItems: 'center',
      width: 350,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    monthText: {
      fontSize: appStyle.textMonthFontSize,
      fontFamily: appStyle.textMonthFontFamily,
      fontWeight: appStyle.textMonthFontWeight,
      color: appStyle.monthTextColor,
      marginHorizontal: 10,
      marginVertical: 5,
    },
    yearText: {
      fontSize: appStyle.textMonthFontSize,
      fontFamily: appStyle.textMonthFontFamily,
      fontWeight: appStyle.textMonthFontWeight,
      color: 'rgba(84,84,84,0.5)',
      marginRight: 10,
      marginBottom: 5,
      marginTop: 5,
      marginLeft: -5,
    },
    arrow: {
      padding: 10,
      ...appStyle.arrowStyle
    },
    arrowImage: {
      tintColor: appStyle.arrowColor
    },
    disabledArrowImage: {
      tintColor: appStyle.disabledArrowColor
    },
    week: {
      // marginTop: 7,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    dayHeaderRow: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    dayHeaderWrapper: {
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    dayHeader: {
      // marginTop: 5,
      textAlign: 'center',
      fontSize: appStyle.textDayHeaderFontSize,
      fontFamily: appStyle.textDayHeaderFontFamily,
      fontWeight: appStyle.textDayHeaderFontWeight,
      color: appStyle.textSectionTitleColor,
    },
    separator: {
      width: '100%',
      height: 1,
      backgroundColor: 'rgba(84,84,84,0.1)',
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}
