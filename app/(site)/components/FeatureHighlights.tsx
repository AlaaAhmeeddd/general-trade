import { PiCertificateFill } from "react-icons/pi";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { MdLocalShipping } from "react-icons/md";
import { BsTransparency } from "react-icons/bs";

export default function FeatureHighlights() {
    return (
        <div className="px-4 py-16 h-auto w-full">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-4 grid-cols-2 w-full py-8 xl:bg-gray-100 rounded-lg xl:gap-0 gap-4">
                    <div className="feature xl:border-r xl:border-r-primary/40 px-4 xl:py-0 py-8 rounded-lg xl:rounded-none">
                        <PiCertificateFill className="featIcon text-primary border-primary/40" />
                        <h3 className="featTitle text-basic-text">Certified</h3>
                        <p className="text-dark-gray featSebTitle">Available certificates of authenticity</p>
                    </div>
                    <div className="feature xl:border-r xl:border-r-primary/40 px-4 xl:py-0 py-8 rounded-lg xl:rounded-none">
                        <AiFillSafetyCertificate className="featIcon text-primary border-primary/40" />
                        <h3 className="featTitle text-basic-text">Secure</h3>
                        <p className="text-dark-gray featSebTitle">Certified marketplace since 2024</p>
                    </div>
                    <div className="feature xl:border-r xl:border-r-primary/40 px-4 xl:py-0 py-8 rounded-lg xl:rounded-none">
                        <MdLocalShipping className="featIcon text-primary border-primary/40" />
                        <h3 className="featTitle text-basic-text">Shipping</h3>
                        <p className="text-dark-gray featSebTitle">Free, fast, and reliable shipping</p>
                    </div>
                    <div className="feature px-4 xl:py-0 py-8 rounded-lg">
                        <BsTransparency className="featIcon text-primary border-primary/40" />
                        <h3 className="featTitle text-basic-text">Transparent</h3>
                        <p className="text-dark-gray featSebTitle">Hassle-free return policy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
