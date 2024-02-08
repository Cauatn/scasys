import { Outlet } from 'react-router-dom'
import Navbar from './navbar'

export default function PageRoot({ toggleReturnButton = true }) {
    return (
        <>
            <Navbar toggleReturnButton={toggleReturnButton} />
            <section className="mx-10 flex h-4/5 flex-col justify-between">
                <Outlet />
            </section>
        </>
    )
}
