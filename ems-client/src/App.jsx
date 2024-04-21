import { AppRouterProvider } from "./routes";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <AppRouterProvider>
        <Outlet />
      </AppRouterProvider>
    </>
  );
}

export default App;

// {
//   <div>  top div 
//   <secure-route>
//     const [visible, setVisible] = useState(true)
//     <div visible={}></div> banner bar
//     <div> web app body - display-flex
//       <div></div> nav bar
//       <div></div> body section
//     </div>
//   </secure-route> 
//   <public-route>
//     <div></div>
//   </public-route>
// </div> 
// }
