import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { projects } from "@/lib/projects";

const capabilities = [
  ["用户研究", "User Research"], ["概念设计", "Concept Design"],
  ["CMF 策略", "CMF Strategy"], ["三维建模", "3D Modelling"],
  ["效果渲染", "Visualisation"], ["样机验证", "Prototype Validation"],
];

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="hero shell" id="top">
        <div className="hero-kicker reveal"><span>Portfolio 2026</span><span>Shenzhen · China</span></div>
        <div className="hero-copy reveal delay-1">
          <p className="eyebrow">Industrial Design · Product Experience</p>
          <h1><span className="lang-zh">王语柔</span><span className="lang-en">Yurou Wang</span></h1>
          <p className="hero-role"><span className="lang-zh">工业设计师</span><span className="lang-en">Industrial Designer</span></p>
        </div>
        <div className="hero-bottom reveal delay-2">
          <p><span className="lang-zh">用清晰的产品逻辑与克制的设计语言，把复杂需求转化为可落地的硬件体验。</span><span className="lang-en">Turning complex needs into considered, buildable hardware experiences through clear product thinking.</span></p>
          <a className="text-link" href="#projects"><span className="lang-zh">查看项目</span><span className="lang-en">View projects</span> ↘</a>
        </div>
      </section>

      <section className="section shell" id="projects">
        <div className="section-heading"><p className="section-index">01</p><h2><span className="lang-zh">精选项目</span><span className="lang-en">Selected work</span></h2><p className="section-note"><span className="lang-zh">从物理 AI 硬件到消费电子</span><span className="lang-en">Physical AI hardware to consumer products</span></p></div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <Link href={`/projects/${project.slug}`} className={`project-card project-card-${index + 1}`} key={project.slug}>
              <div className="project-image-wrap"><img src={project.cover} alt={`${project.title} project`} className="project-image" loading={index > 1 ? "lazy" : "eager"} /><span className="project-open">↗</span></div>
              <div className="project-meta"><div><p className="project-number">0{index + 1} / {project.year}</p><h3>{project.title}</h3></div><p><span className="lang-zh">{project.subtitleZh}</span><span className="lang-en">{project.subtitleEn}</span></p></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section about shell" id="about">
        <div className="section-heading"><p className="section-index">02</p><h2><span className="lang-zh">关于我</span><span className="lang-en">About</span></h2><p className="section-note"><span className="lang-zh">设计 × 产品 × 工程协作</span><span className="lang-en">Design × Product × Engineering</span></p></div>
        <div className="about-grid">
          <div className="portrait-wrap"><img src="/profile/yurou-wang.webp" alt="王语柔 Yurou Wang" className="portrait" /></div>
          <div className="about-copy">
            <p className="about-lead lang-zh">我关注产品、用户与体验之间的关系，致力于通过设计创造兼具功能性与情感价值的产品体验。</p>
            <p className="about-lead lang-en">I explore the relationship between products, people and experience, creating solutions with both functional clarity and emotional value.</p>
            <p className="lang-zh">目前就读于沈阳航空航天大学工业设计专业。具备从用户研究、概念设计、CMF、三维建模到样机验证的完整项目经验，并参与过消费电子及机器人数据采集硬件的产品开发。</p>
            <p className="lang-en">I am studying Industrial Design at Shenyang Aerospace University. My experience spans user research, concept development, CMF, 3D modelling and prototype validation across consumer electronics and robotic data-collection hardware.</p>
            <div className="capability-list">{capabilities.map(([zh, en]) => <div key={en}><span className="lang-zh">{zh}</span><span className="lang-en">{en}</span><b>↗</b></div>)}</div>
          </div>
        </div>
      </section>

      <section className="section experience shell" id="experience">
        <div className="section-heading"><p className="section-index">03</p><h2><span className="lang-zh">经历</span><span className="lang-en">Experience</span></h2><p className="section-note">2023—2027</p></div>
        <div className="timeline">
          <article><p className="time">2026 · 2 months</p><div><h3><span className="lang-zh">工业设计实习生 · 新业务产品组</span><span className="lang-en">Industrial Design Intern · New Business Product Group</span></h3><p><span className="lang-zh">奥比中光科技集团股份有限公司 · 深圳</span><span className="lang-en">Orbbec Inc. · Shenzhen</span></p></div><p><span className="lang-zh">参与面向机器人与具身智能应用的数据采集硬件设计，覆盖概念探索、三维建模、人机工学分析与样机测试。</span><span className="lang-en">Contributed to data-collection hardware for robotics and embodied intelligence, from concept development and 3D modelling to ergonomics and prototype testing.</span></p></article>
          <article><p className="time">2025 · 2 months</p><div><h3><span className="lang-zh">工业设计实习生</span><span className="lang-en">Industrial Design Intern</span></h3><p><span className="lang-zh">上海鱼尾科技有限公司 · 上海</span><span className="lang-en">Shanghai FLEXTAIL Technology Co., Ltd. · Shanghai</span></p></div><p><span className="lang-zh">参与消费电子产品从前期概念研发到落地生产的完整设计流程，负责 CMF 研究与方案输出。</span><span className="lang-en">Participated in the full consumer-electronics design process from early concepts to production, with responsibility for CMF research and proposals.</span></p></article>
          <article><p className="time">2023—2027</p><div><h3><span className="lang-zh">工业设计本科 · GPA 3.8</span><span className="lang-en">B.A. Industrial Design · GPA 3.8</span></h3><p><span className="lang-zh">沈阳航空航天大学</span><span className="lang-en">Shenyang Aerospace University</span></p></div><p><span className="lang-zh">中文 · 英语六级 · 意大利语中级</span><span className="lang-en">Chinese · English CET-6 · Intermediate Italian</span></p></article>
        </div>
        <div className="tools-row"><span>Rhino 3D</span><span>KeyShot</span><span>Creo</span><span>Figma</span><span>Photoshop</span><span>Illustrator</span><span>Blender</span><span>Vizcom AI</span></div>
      </section>

      <section className="contact" id="contact"><div className="shell contact-inner"><p className="section-index">04</p><div><p className="eyebrow"><span className="lang-zh">期待与你交流</span><span className="lang-en">Let&apos;s create something meaningful</span></p><h2><span className="lang-zh">一起把想法做成产品。</span><span className="lang-en">Let&apos;s turn ideas into products.</span></h2></div><div className="contact-links"><a href="mailto:18802481350@163.com">18802481350@163.com ↗</a><a href="tel:+8618802481350">(+86) 188 0248 1350 ↗</a><a href="/downloads/Wang-Yurou-Portfolio.pdf" download><span className="lang-zh">下载作品集 PDF</span><span className="lang-en">Download Portfolio PDF</span> ↓</a></div><footer><span>© 2026 Yurou Wang</span><a href="#top"><span className="lang-zh">返回顶部</span><span className="lang-en">Back to top</span> ↑</a></footer></div></section>
    </main>
  );
}
