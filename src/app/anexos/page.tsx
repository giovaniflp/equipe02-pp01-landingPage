import HomeButton from "../components/HomeButton"
import Link from "next/link"

export default function anexosPage(){
    return(
        <div>
            <header className="bg-orange-400 p-4">
                <h1>Nossos Anexos!</h1>
            </header>
            <nav>
                <ul>
                    <li className="bg-gray-500 w-40 p-4 rounded-lg text-center">
                        <Link target="_blank" href="/anexosFiles/productBacklog.pdf" download={"PB"}>Product Backlog</Link>
                    </li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </nav>
            <HomeButton></HomeButton>
        </div>
    )
}