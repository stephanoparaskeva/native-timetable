export const generateCalendarDays = (
  howManyDays = 7,
  pastFutureIterator = 0,
  startDay = 1
) => {
  const day = new Date().getDay();
  const multiplier = howManyDays * pastFutureIterator;
  const dates = Array(howManyDays)
    .fill(1)
    .map(() => {
      const date = new Date();
      date.setDate(date.getDate() + multiplier);
      return date;
    });
  dates.map((date, i) => {
    const pre = i - 1;
    return dates[pre]
      ? dates[pre].setDate(dates[pre].getDate() + (i - day + (startDay - 1)))
      : date;
  });
  const lastIndex = dates.length - 1;
  dates[lastIndex].setDate(dates[lastIndex - 1].getDate() + 1);

  return dates;
};

export const isToday = someDate => {
  const today = new Date();
  return (
    someDate.getDate() === today.getDate() &&
    someDate.getMonth() === today.getMonth() &&
    someDate.getFullYear() === today.getFullYear()
  );
};

export const isSameDay = (someDate, otherDate) => {
  if (!someDate || !otherDate) {
    return;
  }
  const date = new Date(someDate);
  const date1 = new Date(otherDate);
  return (
    date.getDate() === date1.getDate() &&
    date.getMonth() === date1.getMonth() &&
    date.getFullYear() === date1.getFullYear()
  );
};

export const getFormattedDate = (date, cutoff = 2) => {
  const formats = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const dayOfWeek = formats[date.getDay()];
  return `${dayOfWeek?.slice(0, cutoff)}`;
};

export const genDayOfWeek = dayNum => {
  const date = new Date();
  const currentDay = date.getDay();
  const distance = dayNum - currentDay;
  date.setDate(date.getDate() + distance);
  return date;
};

export const addColor = events => {
  return events.reduce((acc, item, idx) => {
    const sameOne = acc.find(elem => {
      return elem.title === item.title;
    });
    const count = acc.reduce((acc, item) => {
      if (acc[acc.length - 1] !== item.title) {
        acc.push(item.title);
      }
      return acc;
    }, []).length;
    acc.push({
      ...item,
      color: sameOne === undefined ? colorGenerator(count) : sameOne.color,
      id: idx,
    });
    return acc;
  }, []);
};

export const colorGenerator = num => {
  const colorList = [
    'rgba(235,20,76,0.9)',
    'rgba(83,0,235,1)',
    'rgba(18,115,222,1)',
    'rgba(0,107,118,1)',
    'rgba(129,199,132,1)',
    'rgba(184,0,0,1)',
  ];
  return colorList[num % colorList.length];
};
