import { Link, Outlet } from 'react-router-dom'

function Layout() {

  return (
    <div>
    <nav>
        <Link to="/"> home</Link>
        <Link to="/user"> usuarios</Link>
        <Link to="/poke"> Pokemones</Link>
    </nav>
    <main>
        <Outlet />
    </main>
  </div>
  )
}

export default Layout
