import LoginProvider from "./context/LoginProvider";

import AppRouter from "./router/AppRouter";

function App() {
  return (
    <>
      <div>
        <LoginProvider>
          <AppRouter />
        </LoginProvider>
      </div>
    </>
  );
}

export default App;
