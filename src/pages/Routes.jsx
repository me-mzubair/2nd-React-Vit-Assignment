import { Route, Routes } from "react-router-dom"
import Frontend from "./Frontend"
import Auth from "./Auth"
import Dashboard from "./Dashboard"

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Frontend />} />
        <Route path="/auth/*" element={<Auth />} />
      </Routes>
    </>
  )
}

export default Router