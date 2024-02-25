import { Github, Code } from 'lucide-react'

export const Footer = () => {
  return (
    <>
      <footer
        className="
        w-full h-12 
        flex items-center justify-center
        px-8 py-8 sm:px-12 sm:py-0

        border-t-2
        
        text-black
        dark:text-gray-300
        "
      >
        <div
          className="w-[1280px] flex flex-col items-center justify-between
        
        md:flex-row
        text-sm
        "
        >
          <div className="flex gap-2">
            <a
              href="https://github.com/MrRedu"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              <div className="flex items-center gap-1">
                <span>Dev</span>
                <Github />
              </div>
            </a>
            <a
              href="https://github.com/MrRedu/ti-di-list"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              <div className="flex items-center gap-1">
                <span>Code</span>
                <Code />
              </div>
            </a>
          </div>
          <span>
            Made by{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/MrRedu"
              className="hover:underline"
            >
              MrRedu 🤺
            </a>
          </span>
        </div>
      </footer>
    </>
  )
}
