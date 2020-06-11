import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { addColor, genDayOfWeek } from '../utils';
import Events from '../events/events';
import Header from '../header/header';
import styles from './timetable.style';

const Timetable = ({
  headerStyle,
  onEventPress = () => {},
  events = [],
  pastFutureIterator = 0,
  numOfCalendarDays = 7,
  firstHour = 1,
  finalHour = 25,
  firstDay = 1,
  titleCutoff = 2,
}) => {
  let initial = firstHour;
  const firstDayOfCalendar = genDayOfWeek(firstDay);

  const times = Array(finalHour - firstHour)
    .fill(1)
    .map(() => initial++);

  const showTime = time => {
    if ([6, 12, 18, 0, 24].includes(time)) {
      return `${time === 12 ? time : time % 12} ${
        time >= 12 && time !== 24 ? 'PM' : 'AM'
      }`;
    }
  };

  const coloredEvents = addColor(events);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header
          style={headerStyle}
          firstDayOfCalendar={firstDay}
          pastFutureIterator={pastFutureIterator}
          numOfCalendarDays={numOfCalendarDays}
          titleCutoff={titleCutoff}
        />
      </View>
      <View style={styles.scrollViewContent}>
        <ScrollView contentContainerStyle={{ flexDirection: 'row' }}>
          <View style={styles.timeColumn}>
            {times.map(time => (
              <View key={time} style={styles.timeLabel}>
                <Text style={styles.timeText}>{showTime(time)}</Text>
              </View>
            ))}
          </View>
          <View style={styles.eventsContainer}>
            <Events
              showTime={showTime}
              firstHour={firstHour}
              times={times}
              firstDayOfCalendar={firstDayOfCalendar}
              numOfCalendarDays={numOfCalendarDays}
              onEventPress={onEventPress}
              events={coloredEvents}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Timetable;
