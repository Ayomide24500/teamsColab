
import { RouterProvider } from "react-router-dom";
import { mainRouter } from "./Router/mainRouter";

const App = () => {
  return (
    <div>
      <RouterProvider router={mainApp}/>
    </div>
  )
}

export default App;
