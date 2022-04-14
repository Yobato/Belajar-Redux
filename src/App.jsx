import { useState, createContext, useReducer } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Users from "./pages/Users/Users";
import Article from "./pages/Article/Article";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";


export const AppContext = createContext({
  nama: "",
  setNama: () => {},
});

const initialState = { count: 0 };

function AppReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function App() {
  const [nama, setNama] = useState("adam");
  const theme = createTheme();
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <AppContext.Provider
          value={{
            nama,
            setNama,
            state,
            dispatch,
          }}
        >
          <Router>
            <Routes>
              <Route path="/">
                <Route index element={<Login />} />
                <Route path="home" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="users" element={<Users />} />
                <Route path="article" element={<Article />} />
                <Route
                  path="*"
                  element={
                    <>
                      <h1>Page Not Found</h1>
                      <h1>404</h1>
                    </>
                  }
                />
              </Route>
            </Routes>
          </Router>
        </AppContext.Provider>
      </Provider>
    </ThemeProvider>
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <div>Nama Saya {nama}</div>
  //       <button onClick={() => setNama('Rafie')}>changeNama</button>
  //       <div>{JSON.stringify(value)}</div>
  //       <button onClick={() => setValue(!value)}>button</button>

  //       <About>
  //         <h1 style={{ color: 'tomato' }}>Ini adalah halaman About</h1>
  //       </About>
  //       {/* <Header title={nama} changeTitle={(value) => setNama(value)} /> */}

  //       {/* <h6>{count}</h6>
  //       <h6>{name}</h6>
  //       <input
  //         type="text"aa
  //         value={name}
  //         onChange={(e) => setName(e.target.value)}
  //       />
  //       <button onClick={() => setCount(count + 1)}>plus</button>
  //       <button onClick={() => setCount(count - 1)}>minus</button> */}
  //     </header>
  //   </div>
  // );
}

export default App;
