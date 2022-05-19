import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import Rockets from "../components/rocket/Rocket";
import store from "../store/configureStore";
import { rocketsRequested, joinRocket, leaveRocket } from "../store/rocket";

describe("Rockets tests", () => {
  it("render test", () => {
    const tree = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    expect(tree).toMatchSnapshot();
  });

  it("should return an action with type rockets/rocketsRequested", () => {
    const action = rocketsRequested.type;
    expect(action).toBe("rockets/rocketsRequested");
  });

  it("should return an action with type rockets/joinRocket", () => {
    const action = joinRocket.type;
    expect(action).toBe("rockets/joinRocket");
  });

  it("should should return an action with type rockets/leaveRocket", () => {
    const action = leaveRocket.type;
    expect(action).toBe("rockets/leaveRocket");
  });
});
