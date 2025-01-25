import Image from "next/image"

export function Header(){
    return(
        <header className="w-full h-20 sm:h-28 flex items-center">
            <Image
            src="/logo1.png"
            alt='LogoMarca to BlogTech'
            width={229}
            height={50}
            className="w-44 sm:w-[229px]"
            />
        </header>
    )

}
