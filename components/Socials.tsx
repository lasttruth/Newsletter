import { socials } from "@/constants";
import { SocialIcon } from "react-social-icons";

function Socials() {
  return (
    <div className="flex items-center justify-center sm:gap-x-4 mt-28 md:w-[400px]">
      {socials.map((social) => (
        <div
          key={social.id}
          className="flex items-center justify-center flex-1 animate-fade-in-3 cursor-pointer group md:hover:shadow-outline-gray rounded-[9px] p-5 md:p-10 transition duration-200 ease-out"
        >
          <SocialIcon
            url={social.url}
            fgColor="#FFF"
            bgColor="transparent"
            className="!h-16 !w-16"
          />
          <div className="text-xs sm:text-sm space-y-1">
            <p className="text-[#ADB0B1] group-hover:text-purple-600 transition font-medium">
              {social.name}
            </p>
            <p className="text-[#a5a6ab]">{social.handle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Socials;
