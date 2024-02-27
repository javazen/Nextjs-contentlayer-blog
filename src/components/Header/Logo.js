import Link from "next/link"
import Image from "next/image"
import profileImg from "@/public/profile-img.png"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
        <div className="w-16 rounded-full overflow-hidden border border-solid border-dark dark:border-gray mr-4">
            <Image 
            src={profileImg} 
            alt="Javazen" 
            className="w-full h-auto rounded-full" 
            priority
            />
        </div>
        <span className="font-bold dark:font-semibold text-xl">Javazen</span>
    </Link>
  )
}

export default Logo