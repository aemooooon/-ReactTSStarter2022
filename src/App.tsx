import './assets/style.css'
import img from './assets/img.png'
import react_logo from './assets/react_logo.svg'
import ClickCounter from './components/ClickCounter'

export const App = () => {
    return (
        <>
            <h1>
                Kia ora - {process.env.NODE_ENV} {process.env.name}
            </h1>
            <img src={img} alt="" width={200} />
            <img src={react_logo} alt="" width={300} />
            <ClickCounter />
        </>
    )
}
