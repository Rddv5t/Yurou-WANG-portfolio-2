import Link from "next/link";
import { LanguageToggle } from "./language-toggle";

export function SiteHeader({ back = false }: { back?: boolean }) {
  return <header className="site-header"><div className="shell nav-inner"><Link href="/" className="brand">Y.W</Link><nav aria-label="Primary navigation">{back ? <Link href="/#projects"><span className="lang-zh">项目</span><span className="lang-en">Projects</span></Link> : <><a href="#projects"><span className="lang-zh">项目</span><span className="lang-en">Projects</span></a><a href="#about"><span className="lang-zh">关于</span><span className="lang-en">About</span></a><a href="#experience"><span className="lang-zh">经历</span><span className="lang-en">Experience</span></a><a href="#contact"><span className="lang-zh">联系</span><span className="lang-en">Contact</span></a></>}</nav><LanguageToggle /></div></header>;
}
