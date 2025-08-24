import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"
import { Header } from "./Header"

export const Applayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}


//outlet is used to render the matched child route component inside the parent route component.
//outlet appplayout ke ander jitne children element hai unko render karega.
// isme header or footer fixed rahega or beech me outlet ke through child component render hote rahenge like dynamically changing content.