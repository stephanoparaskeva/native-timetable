import { StyleSheet } from 'react-native';
import { colors } from '../../../src/meta/constants/color_consts';

export const ROW_HEIGHT = 9;

const styles = StyleSheet.create({
  timeRow: { flex: 0, height: ROW_HEIGHT },
  timeLabelLine: {
    height: 4,
    borderRadius: 20,
    top: 8,
    marginHorizontal: 5,
    backgroundColor: '#E1E9EE',
  },
  events: {
    position: 'absolute',
    flexDirection: 'row',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    backgroundColor: 'transparent',
  },
  eventWrapper: {
    flex: 1,
    overflow: 'hidden',
  },
  event: {
    position: 'absolute',
    paddingVertical: 2,
    paddingHorizontal: 2,
    marginLeft: 10,
    borderRadius: 100,
    flex: 1,
  },
});

export default styles;
