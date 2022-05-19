import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import Missions from '../components/mission/Mission';
import store from '../store/configureStore';
import { missionsRequested, joinMission, leaveMission } from '../store/missions';

describe('Missions tests', () => {
  it('render test', () => {
    const tree = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    expect(tree).toMatchSnapshot();
  });

  it('should return an action with type missions/missionsRequested', () => {
    const action = missionsRequested.type;
    expect(action).toBe('missions/missionsRequested');
  });

  it('should return an action with type missions/joinMission', () => {
    const action = joinMission.type;
    expect(action).toBe('missions/joinMission');
  });

  it('should should return an action with type missions/leaveMission', () => {
    const action = leaveMission.type;
    expect(action).toBe('missions/leaveMission');
  });
});
