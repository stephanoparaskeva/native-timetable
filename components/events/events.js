import React, { Component } from 'react';
import { Dimensions, View, TouchableOpacity } from 'react-native';
import styles, { ROW_HEIGHT } from './events.style';
import HeaderStyle from '../header/header.style';
import { generateCalendarDays, isSameDay } from '../utils';

export const ONE_MILLISECOND = 1;
export const MS_IN_SEC = 1000;
export const SECONDS_IN_MIN = 60;
export const ONE_HOUR_IN_MIN = 60;
export const ONE_DAY_IN_HOURS = 24;

export const ONE_SECOND_IN_MS = ONE_MILLISECOND * MS_IN_SEC;
export const ONE_MINIUTE_IN_MS = ONE_SECOND_IN_MS * SECONDS_IN_MIN;
export const ONE_HOUR_IN_MS = ONE_MINIUTE_IN_MS * ONE_HOUR_IN_MIN;
export const ONE_DAY_IN_MS = ONE_HOUR_IN_MS * ONE_DAY_IN_HOURS;

export const ONE_DAY_IN_MIN = ONE_HOUR_IN_MIN * ONE_DAY_IN_HOURS;

const TOTAL_HEIGHT = ROW_HEIGHT * 24;

const Events = ({
  showTime,
  onEventPress,
  firstHour,
  events,
  numOfCalendarDays,
  firstDayOfCalendar,
  times,
}) => {
  const eventStyle = item => {
    const start = new Date(item.startTime);
    const end = new Date(item.endTime);
    const top = (start.getHours() - firstHour) * ROW_HEIGHT;

    return {
      top,
      height: 40,
      width: 40,
      left: 5,
    };
  };

  const getEventsWithPosition = totalEvents =>
    totalEvents.map(evts =>
      evts.reduce((eventsAcc, event, i) => {
        const style = eventStyle(event);
        eventsAcc.push({ data: event, style });
        return eventsAcc;
      }, [])
    );

  const sortEventByDates = evts =>
    evts.slice(0).sort((a, b) => {
      const diff = Math.abs(new Date(a.startTime) - new Date(b.startTime));
      return Math.floor(diff / 1000 / 60);
    });

  const sortedEvents = sortEventByDates(events);
  const newDayOfCal = new Date(firstDayOfCalendar);
  const arrayOfArraysOfDays = Array(numOfCalendarDays)
    .fill(newDayOfCal)
    .map((d, i) => (i ? d.setDate(d.getDate() + 1) : firstDayOfCalendar))
    .map(date => new Date(date))
    .map(fixed =>
      events.filter(
        evt => isSameDay(fixed, evt.startTime) && isSameDay(fixed, evt.endTime)
      )
    );
  const totalEvents = getEventsWithPosition(arrayOfArraysOfDays);

  return (
    <View style={styles.container}>
      {times.map(time => (
        <View key={time} style={styles.timeRow}>
          <View style={showTime(time) && styles.timeLabelLine} />
        </View>
      ))}
      <View style={styles.events}>
        {totalEvents.map((eventsInSection, sectionIndex) => (
          <View key={sectionIndex} style={styles.eventWrapper}>
            {eventsInSection.map(item => (
              <TouchableOpacity
                key={item.data.id}
                onPress={onEventPress}
                style={[
                  styles.event,
                  item.style,
                  { backgroundColor: item.data.color },
                ]}
              />
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

export default Events;
