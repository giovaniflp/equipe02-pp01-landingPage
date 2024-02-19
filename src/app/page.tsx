import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white h-full">
      <header className="flex justify-between items-center p-4 bg-orange-400">
        <div className="flex items-center">
          <Image className="absolute" alt="" src={"/icons/angryTomato.png"} width={60} height={60}></Image>
          <h1 className="ml-16">MataFome</h1>
        </div>
        <nav>
          <ul className="flex gap-2">
            <li>
              <a href="#sessaoSobre">Sobre</a>
            </li>
            <li>
              <a href="/contatos">Contato</a>
            </li>
            <li>
              <a href="/anexos">Anexos</a>
            </li>
          </ul>
        </nav>
        </header>
        <main>
          <section className="text-black">
            <h2 className="text-black text-5xl p-4" id="sessaoSobre">Sobre nós!</h2>
            <h3 className="px-4 text-xl">MataFome - Seu delivery de confiança</h3>
            <section className="p-4">
              <h3>Fome batendo? O MataFome te salva!</h3>
              <p>Somos um delivery rápido e prático que oferece uma variedade de opções deliciosas para você matar a fome sem sair de casa.</p>
              <ul>
                  <li>Lanche: sanduíches, pizzas, salgados, pastéis e muito mais!</li>
                  <li>Comida: pratos feitos, porções e acompanhamentos para todos os gostos.</li>
                  <li>Bebidas: refrigerantes, sucos, água e outras opções para refrescar.</li>
              </ul>
            </section>
            <section className="text-black p-4">
              <h3 className="text-xl py-4">No MataFome você encontra:</h3>
              <ul>
                  <li>**Comida de qualidade:** Trabalhamos com ingredientes frescos e selecionados para garantir o melhor sabor para você.</li>
                  <li>**Preços acessíveis:** Pratos com preços justos para que você possa se alimentar bem sem gastar muito.</li>
                  <li>**Entrega rápida:** Entregamos seu pedido no conforto do seu lar em menos de 40 minutos*.</li>
                  <li>**Atendimento diferenciado:** Nossa equipe é atenciosa e está sempre disposta a te ajudar.</li>
              </ul>
            </section>
            <section className="flex justify-between bg-gray-500 text-white p-4">
              <div className="flex gap-2">
                <Link href={""}>
                  <Image alt="" src={"/icons/gplay.svg"} width={40} height={40}></Image>
                </Link>
                <div>
                  <h3>Peça já pelo nosso aplicativo</h3>
                  <p>Acesse nosso app e faça seu pedido agora mesmo!</p>
                </div>
              </div>
              <div>
                <h3>Siga-nos nas redes sociais</h3>
                <Link href={"https://www.instagram.com/matafomedeli/"} target="_blank">
                  Instagram
                </Link>
              </div>
            </section>
          </section>
        </main>
        <footer className="bg-black flex flex-col items-center text-center p-4">
          <p>MataFome: A sua fome, a nossa missão!</p>
          <p className="text-xs">*Tempo de entrega pode variar de acordo com a sua localização.</p>
          <p className="text-xs">**Tempo médio de entrega - 57 min.</p>
        </footer>
    </div>
  )
}
