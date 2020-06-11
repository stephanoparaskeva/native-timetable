import React from 'react';
import { Text, View } from 'react-native';
import { generateCalendarDays, getFormattedDate, isToday } from '../utils';
import styles from './header.style';
import CommonText from '../../../src/components/common/text/common_text';

const TimetableHeader = ({
  numOfCalendarDays,
  pastFutureIterator,
  firstDayOfCalendar,
  titleCutoff,
  style,
}) => {
  const columns = generateCalendarDays(
    numOfCalendarDays,
    pastFutureIterator,
    firstDayOfCalendar
  );

  return (
    <View style={[styles.container, style]}>
      <View style={styles.spacer} />
      <View style={styles.columns}>
        {columns.map((column, index) => {
          const dayOfMonth = column.getUTCDate();
          return (
            <View key={index} style={styles.column}>
              <Text style={styles.text}>
                {getFormattedDate(column, titleCutoff)}
              </Text>
              <CommonText> {dayOfMonth}</CommonText>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default TimetableHeader;
