import HomeButton from "../components/HomeButton";

export default function contatosPage(){
    return(
        <div>
            <header className="bg-orange-400 p-4"><h1>Nossos Contatos!</h1></header>
            <nav className="my-4">
                <ul className="flex flex-wrap gap-8 justify-center">
                    <li className="bg-orange-600 rounded-lg p-2 w-72">
                        {/* Adicionar o componente Image do Next */}
                        <h5>Giovani Feitosa</h5>
                        <p><a className="hover:text-gray-600 duration-500" href="mailto:gflp@discente.ifpe.edu.br">Email - gflp@discente.ifpe.edu.br </a></p>
                    </li>
                    <li className="bg-orange-600 rounded-lg p-2 w-72">
                        <h5>João Vitor</h5>
                        <p><a className="hover:text-gray-600 duration-500" href="mailto:jvl1@discente.ifpe.edu.br">Email - jvl1@discente.ifpe.edu.br </a></p>
                    </li>
                    <li className="bg-orange-600 rounded-lg p-2 w-72">
                        <h5>Enio Batalha</h5>
                        <p><a className="hover:text-gray-600 duration-500" href="mailto:ehlb@discente.ifpe.edu.br">Email - ehlb@discente.ifpe.edu.br </a></p>
                    </li>
                    <li className="bg-orange-600 rounded-lg p-2 w-72">
                        <h5>Ernani Reis</h5>
                        <p><a className="hover:text-gray-600 duration-500" href="mailto:esrn@discente.ifpe.edu.br">Email - esrn@discente.ifpe.edu.br </a></p>
                    </li>
                    <li className="bg-orange-600 rounded-lg p-2 w-72">
                        <h5>Clauscyberion Emmanuel</h5>
                        <p><a className="hover:text-gray-600 duration-500" href="mailto:ceac1@discente.ifpe.edu.br">Email - ceac1@discente.ifpe.edu.br </a></p>
                    </li>
                    <li className="bg-orange-600 rounded-lg p-2 w-72">
                        <h5>Jonathas Gabriel</h5>
                        <p><a className="hover:text-gray-600 duration-500" href="mailto:jgsp@discente.ifpe.edu.br">Email - jgsp@discente.ifpe.edu.br </a></p>
                    </li>
                    <li className="bg-orange-600 rounded-lg p-2 w-72">
                        <h5>Carlos Antônio</h5>
                        <p><a className="hover:text-gray-600 duration-500" href="mailto:casj@discente.ifpe.edu.br">Email - casj@discente.ifpe.edu.br </a></p>
                    </li>
                    <li className="bg-orange-600 rounded-lg p-2 w-72">
                        <h5>Matheus Victor</h5>
                        <p><a className="hover:text-gray-600 duration-500" href="mailto:mvsc7@discente.ifpe.edu.br">Email - mvsc7@discente.ifpe.edu.br </a></p>
                    </li>
                </ul>
            </nav>
            <HomeButton></HomeButton>
        </div>
    )
}