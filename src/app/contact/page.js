import LottieAnimation from "@/src/components/Contact/LottieAnimation"


export default function Contact() {
    return <section className="w-full h-[75vh] border-b-2 border-solid border-dark text-dark flex flex-row items-center justify-center">
        <div className="inline-block w-2/5 h-full border-r-2 border-solid border-dark"><LottieAnimation /></div>
        <div>contact form</div>
    </section>
}