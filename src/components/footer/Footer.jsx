import { Mail, MapPin, PhoneCall } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-gray-50 pt-20 pb-5 -mb-6">
      <div className="max-w-7xl mx-auto px-5">
        <div className="px-5 lg:px-0 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 border-b pb-6 border-gray-200">
          <div>
            <h3 className="text-xl font-semibold text-primary mb-8">
              Useful Links
            </h3>
            <Link href={"/"} className="text-gray-500 mb-2 text-sm block">
              Content
            </Link>
            <Link href={"/"} className="text-gray-500 mb-2 text-sm block">
              Services
            </Link>
            <Link href={"/"} className="text-gray-500 mb-2 text-sm block">
              ExLinklore
            </Link>
            <Link href={"/"} className="text-gray-500 mb-2 text-sm block">
              Terms & Services
            </Link>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-primary mb-8">
              Our Contact
            </h3>
            <h3 className=" font-semibold text-primary mb-3">Alauddin Ahmed</h3>
            <a
              href=""
              className="text-gray-500 mb-3 text-sm flex items-center gap-2"
            >
              <PhoneCall className="text-lg text-dark-03" /> +880 1945 009 200
            </a>
            <a
              href=""
              className="text-gray-500 mb-6 text-sm flex items-start gap-2"
            >
              <MapPin className="w-8 text-dark-03" />
              Motalib Plaza, (2nd Floor) Shop # 398, Hatirpool Dhaka-1205
            </a>
          </div>{" "}
          <div className="col-span-2 md:col-span-2 lg:col-span-2">
            <h3 className="text-xl font-semibold text-primary mb-8">
              Find us on Google Map:
            </h3>
            <div className=" overflow-hidden h-48">
              <img
                className="scale-125"
                src="https://developers.arcgis.com/documentation/static/c1de4558bdb1e2e01b7debd25ee6ae39/4cdf7/display-a-map-desktop.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
