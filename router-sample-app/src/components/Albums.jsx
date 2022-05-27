import { Outlet } from "react-router-dom"

export const Albums = () => {
  return (
    <div>
      <p>Album list page</p>
      <Outlet />
    </div>
  )

}