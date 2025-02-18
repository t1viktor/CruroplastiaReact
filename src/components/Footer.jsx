const qrCode = '/img/qrCode.jpeg';
const logo = '/img/LOGO_TRANSPARENTE_1.png';


export default function Footer() {
    return(
        <footer className="bg-gray-900 text-gray-200 py-8 border-t-[1px] border-gray-700">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 items-center">
    
    <div className="flex justify-center md:justify-start">
      <img src={logo} alt="Logo" className="w-60 h-auto object-contain" />
    </div>

    <div className="text-center md:text-left">
      <h3 className="text-lg font-semibold text-orange-400 mb-2">Dr. Douglas Macêdo</h3>
      <ul className="space-y-2 text-sm">
        <li><strong>CRM:</strong> 14722</li>
        <li><strong>RQE:</strong> 14365</li>
        <li><strong>Email:</strong> <a href="mailto:douglasmacedo.plastica@gmail.com"
            className="hover:text-orange-300">douglasmacedo.plastica@gmail.com</a></li>
        <li><strong>Contato:</strong> <a href="tel:+5585997100666" className="hover:text-orange-300">(85) 99710-0666</a>
        </li>
      </ul>
    </div>

    <div className="flex justify-center md:justify-end">
      <div className="bg-white p-4 items-center flex flex-col rounded-lg shadow-lg">
        <img src={qrCode} alt="QR Code" className="w-40 object-contain" />
        <p className="text-sm text-gray-700 mt-2 text-center">Aponte a câmera para acessar as informações</p>
      </div>
    </div>
  </div>

  <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
    &copy; 2024 Dr. Douglas Macêdo. Todos os direitos reservados.
  </div>
</footer>
    
    )
}