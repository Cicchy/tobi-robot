import logoSrc from "../assets/logo.svg"

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-center bg-[#ECEEF1] px-4 py-3 sm:px-6">
      <a href="#">
        <img src={logoSrc} alt="TOB-I" className="h-8 w-auto" />
      </a>
    </header>
  )
}
