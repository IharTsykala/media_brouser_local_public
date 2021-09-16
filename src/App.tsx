import React from "react"
import "./App.scss"
// import Header from "./Components/Header/Header"
import VideoList from "./Pages/VideoList/VideoList"
// import Footer from "./Components/Footer/Footer"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "./Redux/index"
import createSagaMiddleware from "redux-saga"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import ImgGalleryPage from "./Pages/ImgGalleryPage/ImgGalleryPage";
import ImgSinglePage from "./Pages/ImgSinglePage/ImgSinglePage";
import videoSaga from "./Redux/store/video/video.saga";

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

        {/* <Header /> */}
          <Switch>
        <main className={"main"}>
            <Route component={VideoList} path="/video/list" exact />
            <Route component={ImgSinglePage} path="/img/single" exact />
            <Route component={ImgGalleryPage} path="/img/gallery" exact />
        </main>
          </Switch>
        {/* <Footer /> */}

    </div>
          </BrowserRouter>
  </Provider>
)

export default App
