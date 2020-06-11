import { Dimensions, StyleSheet } from 'react-native';
import { ROW_HEIGHT } from '../events/events.style';
import { colors } from '../../../src/meta/constants/color_consts';
import HeaderStyle from '../header/header.style';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white },
  scrollViewContent: { flexDirection: 'row' },
  header: { height: 40, justifyContent: 'center', alignItems: 'center' },
  timeLabel: { flex: -1, height: ROW_HEIGHT },
  timeText: { fontSize: 9, position: 'absolute', width: 40, flex: 1 },
  timeColumn: {
    paddingTop: 4,
    width: HeaderStyle.spacer.width,
  },
  eventsContainer: { flex: 1, width: SCREEN_WIDTH - HeaderStyle.spacer.width },
});

export default styles;
