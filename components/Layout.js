import Image from "next/image";
import Button from "./Button";
import Link from 'next/link'
import { useState } from "react";
import dynamic from 'next/dynamic'
const MessageModal = dynamic(() => import('./MessageModal'))

function Layout({ children }) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <>
            <MessageModal open={open} onClose={()=>setOpen(false)}/>
            <div onClick={handleOpen} className="cursor-pointer w-16 h-16 fixed bottom-5 z-50 right-5 bg-white rounded-full p-4">
                <Image src='/images/chat.png' className="object-cover w-full" alt='Esther Ejidike' width={40} height={40} />
            </div>
            <div className="">
                <div className="">
                    <header className="flex scroll-smooth justify-between py-14 mobile-width max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl m-auto">
                        <div className="flex">
                            <Image className="rounded-lg object-cover object-top" src='/images/esther.jpg' alt='Esther Ejidike' width={41} height={41} />
                            <div className="pl-5">
                                <h2 className='text-white font-semibold'>Esther Ejidike</h2>
                                <p className="small-text text-gray-50 mt-1">FRONTEND ENGINEER</p>
                            </div>
                        </div>
                        <ul className="text-white flex">
                            {/* <li className="mr-5 active:underline active:decoration-blue-700 active:decoration-4">
                                <Link href='/'>Home</Link>
                            </li> */}
                            {/* <li className="active:underline active:decoration-blue-700 active:decoration-4">
                                <Link prefetch={false} href='/skills'>Skills</Link>
                            </li> */}
                        </ul>
                    </header>
                    <main>
                        {children}
                    </main>
                    <footer className='mobile-width bg-gray text-white rounded-lg max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl m-auto px-5 lg:px-20 py-8 lg:py-16 my-14'>
                        <div className="flex justify-between">
                            <div className="flex justify-between items-center">
                                <p className="mr-2 lg:text-4xl">Get in touch</p>
                                <Image className=" object-contain object-right" src='/images/arrow.png' alt='arrow' width={40} height={10} />
                            </div>
                            <Button onClick={handleOpen}>
                                send a message
                            </Button>
                        </div>
                    </footer>
                    <p className="text-white text-center text-sm mb-3">Built with ❤ using Nextjs & TailwindCSS</p>
                </div>
            </div>
        </>
    );
}

export default Layout;