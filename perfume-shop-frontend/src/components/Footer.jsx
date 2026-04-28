import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="w-full bg-blue-800/20 py-10 mt-15">
      
      <div className="max-w-6xl mx-auto flex items-center justify-between px-10">

        <div className="flex flex-col items-start gap-3">
          <a 
            href="https://github.com/JairoIxiss"
            className="flex items-center gap-2 text-gray-600 hover:text-black transition"
          >
            <IconBrandGithub size={22}/>
            GitHub
          </a>
        </div>

        <div className="text-center">
          <h3 className="font-pacifico text-xl">
            Perfume Shop
          </h3>

          <p className="text-gray-500 text-sm mt-1">
            © 2026 Jairo Ixis 
          </p>
        </div>

        {/* Redes derecha */}
        <div className="flex flex-col items-end gap-3">
          <a 
            href="https://www.linkedin.com/in/jairo-ixis/"
            className="flex items-center gap-2 text-gray-600 hover:text-black transition"
          >
            <IconBrandLinkedin size={22}/>
            LinkedIn
          </a>
        </div>

      </div>

    </footer>
  );
};

export default Footer;