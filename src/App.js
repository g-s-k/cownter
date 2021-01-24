import { useCallback, useEffect, useReducer } from "react";
import countapi from "countapi-js";

import "./App.css";

// NB: not a secret
const API_KEY = "1ccb732e-b55a-4404-ad3f-0f99c02fe44e";

function updateCount(state, action) {
  if (typeof action === "boolean") return { ...state, loading: action };

  return { ...state, count: action, loading: false };
}

/**
 * The whole dang app. Big ball of mud, right?
 *
 * Not really. If you want to reuse the button styles, just add another
 * <button> element inside the `.App-header` and it will look just like the
 * existing one.
 *
 * If you want to track a second counter on the same page (why?) it is pretty
 * straightforward to copy the `useReducer` and `useCallback` invocations and
 * rename their return values as well.
 */
function App() {
  const [{ count, loading }, dispatch] = useReducer(updateCount, {
      count: 0,
      loading: true
    }),
    onButtonClick = useCallback(async () => {
      dispatch(true);
      const { value } = await countapi.hit(API_KEY);
      dispatch(value);
    }, []);

  useEffect(() => {
    (async () => {
      const { value } = await countapi.get(API_KEY);
      dispatch(value);
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>The current count is {loading ? "loading.." : count}.</p>
        <button disabled={loading} onClick={onButtonClick}>
          Increment it!
        </button>
      </header>
    </div>
  );
}

export default App;
