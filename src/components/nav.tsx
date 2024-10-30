import { Link } from 'react-router-dom'

function Nav() {

  return (
    <nav>
      <Link to="/"> home</Link>
      <Link to="/user"> usuarios</Link>
    </nav>
  )
}

export default Nav
