import iconSuvs from "../assets/icon-suvs.svg" 
export default function Suvs() {
    return (
        <div className="bg-green p-12">
        <img src={iconSuvs} alt="ícone Suvs" className="mb-7"/>
        <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg"> SUVs</h2>
        <p className="font-Lexend mb-7 text-offwhite lg:mb-20" >Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
        <a className="font-Lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-green border-2 border-offwhitebg hover:bg-green hover:text-offwhitebg" href="https://www.webmotors.com.br/suvs" target="_blanck">Ver mais</a>
      </div>
    )
}