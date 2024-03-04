import { Logo } from '@/components/atoms/ui/Logo'

export const Header = () => {
  return (
    <header
      className="
    w-full h-16
    flex items-center justify-center
    px-8 sm:px-12 
        
    border-b-2
    border-slate-200
    dark:border-neutral-900
    
    text-slate-950
    dark:text-slate-200
    "
    >
      <div className="w-[1280px] flex ">
        <h1 className="text-3xl font-bold hidden">TiDi List</h1>
        <a href="/" className="grid place-content-center">
          <Logo
            width={44}
            height={44}
            className="fill-slate-900 dark:fill-slate-300"
          />
        </a>
      </div>
    </header>
  )
}
