import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const project = getProject(slug); if (!project) notFound();
  const currentIndex = projects.findIndex((item) => item.slug === project.slug); const nextProject = projects[(currentIndex + 1) % projects.length];
  return <main className="project-page" style={{ "--project-accent": project.accent } as React.CSSProperties}><SiteHeader back />
    <section className="project-hero shell"><div className="project-title-row"><p className="project-number">0{currentIndex + 1} / 04</p><h1>{project.title}</h1><p><span className="lang-zh">{project.subtitleZh}</span><span className="lang-en">{project.subtitleEn}</span></p></div><img src={project.cover} alt={`${project.title} overview`} className="project-hero-image" /></section>
    <section className="project-intro shell"><div className="project-facts"><div><span><span className="lang-zh">年份</span><span className="lang-en">Year</span></span><b>{project.year}</b></div><div><span><span className="lang-zh">周期</span><span className="lang-en">Duration</span></span><b>{project.duration}</b></div><div><span><span className="lang-zh">角色</span><span className="lang-en">Role</span></span><b><span className="lang-zh">{project.roleZh}</span><span className="lang-en">{project.roleEn}</span></b></div></div><div className="project-description"><p className="lang-zh">{project.descriptionZh}</p><p className="lang-en">{project.descriptionEn}</p></div></section>
    <section className="project-gallery shell" aria-label={`${project.title} project gallery`}>{project.pages.slice(1).map((page, index) => <figure key={page}><img src={`/projects/pages/slide-${String(page).padStart(2, "0")}.webp`} alt={`${project.title} process ${index + 1}`} loading="lazy" /></figure>)}</section>
    <section className="next-project"><Link href={`/projects/${nextProject.slug}`} className="shell next-project-link"><p><span className="lang-zh">下一个项目</span><span className="lang-en">Next project</span></p><h2>{nextProject.title}</h2><span>↗</span></Link></section>
  </main>;
}
