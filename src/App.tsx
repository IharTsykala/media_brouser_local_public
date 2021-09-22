import React from "react"
import "./App.scss"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "./Redux/index"
import createSagaMiddleware from "redux-saga"
import { BrowserRouter } from "react-router-dom"
import videoSaga from "./Redux/store/video/video.saga";
import ContainerSwitchComponent from "./components/ContainerSwitchComponent/ContainerSwitchComponent"
export type RootState = ReturnType<typeof store.getState>;

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  composeWithDevTools({ trace: true, traceLimit: 25 })(
    applyMiddleware(sagaMiddleware)
  )
)

sagaMiddleware.run(videoSaga)

const App: React.FC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className={"wrapper"}>
        <main className={"main"}>
          <ContainerSwitchComponent/>
        </main>
      </div>
    </BrowserRouter>
  </Provider>
)

export default App
