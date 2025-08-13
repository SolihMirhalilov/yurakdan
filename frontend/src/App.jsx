import { Routes , Route} from "react-router-dom"
import "./index.css";
import Layout from "./components/Next/Layout.jsx";

import AdminReg from "./AdminPanel/AdminReg.jsx"
import AdminPanel from "./AdminPanel/AdminPanel.jsx";
function App() {
  return <>

    <Routes>
      {/* Обычные страницы через Layout */}
      <Route path="/" element={<Layout />}>
   
        {/* сюда можно добавить другие страницы */}
      </Route>

      {/* Страница админки отдельно, без Layout */}
      <Route path="/AdminReg" element={<AdminReg />} />
      <Route path="/AdminPanel" element={<AdminPanel/>}/>
    </Routes>

    
  </>
}

export default App;
