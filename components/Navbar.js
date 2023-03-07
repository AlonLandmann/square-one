import { useUser } from '@auth0/nextjs-auth0/client'
import css from '@/scss/Navbar.module.scss'

export default function Navbar() {
  const { user } = useUser()

  console.log(user)

  return (
    <div className={css.container}>
      <div className={css.center}>
        <div className={css.logo}>
          <div>square</div><i className='bi bi-1-square'></i><div>one</div>
        </div>
        <nav className={css.navLinks}>
          <div>User Guide</div>
          <div>My Courses</div>
          <div>Feedback</div>
        </nav>
        {!user &&
          <div className={css.loginButton}>
            <button onClick={() => { location.replace('api/auth/login') }}>
              Login
            </button>
          </div>
        }
        {user &&
          <div className={css.accountButton}>
            <button onClick={() => { location.replace('api/auth/logout') }}>
              {user.email.slice(0, 2).toUpperCase()}
            </button>
          </div>
        }
      </div>
    </div>
  )
}