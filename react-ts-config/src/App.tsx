import Image from './assets/sun_boat.jpg'
import Logo from './assets/logo.svg'
import './style.css'
import { ClickCounter } from './ClickCounter'

export const App = () => {
  const name = 'Sample'
  return (
    <>
      <h1>
        React typescript template {process.env.NODE_ENV} {process.env.name}
      </h1>
      <p>{name}</p>
      <img src={Logo} alt="sun" height="300" width="300" />
      <img src={Image} alt="sun" height="300" width="300" />
      <ClickCounter />
    </>
  )
}
