'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronRight,
  Code2,
  Briefcase,
  GraduationCap,
} from 'lucide-react'
import { useLocale } from 'next-intl'
import { useTranslations } from 'next-intl'
import { NavLink, SectionTitle, Card, MobileBottomNav } from '@/components/portfolio'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { ThemeToggle } from '@/components/ThemeToggle'
import type { PersonalInfo, Experience, Education, Project } from '@/types/portfolio'
import personalPt from '@/data/pt/personal.json'
import personalEn from '@/data/en/personal.json'
import personalEs from '@/data/es/personal.json'
import skillsPt from '@/data/pt/skills.json'
import skillsEn from '@/data/en/skills.json'
import skillsEs from '@/data/es/skills.json'
import experiencesPt from '@/data/pt/experiences.json'
import experiencesEn from '@/data/en/experiences.json'
import experiencesEs from '@/data/es/experiences.json'
import educationPt from '@/data/pt/education.json'
import educationEn from '@/data/en/education.json'
import educationEs from '@/data/es/education.json'
import projectsPt from '@/data/pt/projects.json'
import projectsEn from '@/data/en/projects.json'
import projectsEs from '@/data/es/projects.json'

const personalByLocale = { pt: personalPt, en: personalEn, es: personalEs }
const skillsByLocale = { pt: skillsPt, en: skillsEn, es: skillsEs } as Record<string, string[]>
const experiencesByLocale = { pt: experiencesPt, en: experiencesEn, es: experiencesEs } as Record<string, Experience[]>
const educationByLocale = { pt: educationPt, en: educationEn, es: educationEs } as Record<string, Education[]>
const projectsByLocale = { pt: projectsPt, en: projectsEn, es: projectsEs } as Record<string, Project[]>

const DEVICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'
const FALLBACK_ICON = `${DEVICON_BASE}/devicon/devicon-original.svg`

interface TechIcon {
  name: string
  url: string
  invert?: boolean
}

const techIcons: TechIcon[] = [
  { name: 'Java', url: `${DEVICON_BASE}/java/java-original.svg` },
  { name: 'Spring Boot', url: `${DEVICON_BASE}/spring/spring-original.svg` },
  { name: 'React', url: `${DEVICON_BASE}/react/react-original.svg` },
  { name: 'Next.js', url: `${DEVICON_BASE}/nextjs/nextjs-original.svg`, invert: true },
  { name: 'TypeScript', url: `${DEVICON_BASE}/typescript/typescript-original.svg` },
  { name: 'PostgreSQL', url: `${DEVICON_BASE}/postgresql/postgresql-original.svg` },
  { name: 'Google Cloud Platform', url: `${DEVICON_BASE}/googlecloud/googlecloud-original.svg` },
  { name: 'Microsoft Azure', url: `${DEVICON_BASE}/azure/azure-original.svg` },
  { name: 'AWS', url: `${DEVICON_BASE}/amazonwebservices/amazonwebservices-original-wordmark.svg`, invert: true },
  { name: 'Docker', url: `${DEVICON_BASE}/docker/docker-original.svg` },
  { name: 'Linux', url: `${DEVICON_BASE}/linux/linux-original.svg` },
  { name: 'Python', url: `${DEVICON_BASE}/python/python-original.svg` },
  { name: 'Tailwind CSS', url: `${DEVICON_BASE}/tailwindcss/tailwindcss-original.svg` },
  { name: 'shadcn/ui', url: `${DEVICON_BASE}/react/react-original.svg` },
  { name: 'TanStack Query', url: `${DEVICON_BASE}/react/react-original.svg` },
  { name: 'Zod', url: `${DEVICON_BASE}/typescript/typescript-original.svg` },
  { name: 'Node.js', url: `${DEVICON_BASE}/nodejs/nodejs-original.svg` },
  { name: 'MongoDB', url: `${DEVICON_BASE}/mongodb/mongodb-original.svg` },
  { name: 'GraphQL', url: `${DEVICON_BASE}/graphql/graphql-plain.svg` },
  { name: 'APIs REST', url: `${DEVICON_BASE}/nestjs/nestjs-original.svg` },
  { name: 'Scrum', url: `${DEVICON_BASE}/jira/jira-original.svg` },
  { name: 'Kanban', url: `${DEVICON_BASE}/trello/trello-plain.svg` },
  { name: 'LGPD', url: FALLBACK_ICON },
]

function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export default function HomePage() {
  const locale = useLocale() as 'pt' | 'en' | 'es'
  const t = useTranslations()
  const [scrolled, setScrolled] = useState(false)

  const personal = personalByLocale[locale] as PersonalInfo
  const skills = skillsByLocale[locale] ?? skillsByLocale.pt
  const experiences = experiencesByLocale[locale] ?? experiencesByLocale.pt
  const education = educationByLocale[locale] ?? educationByLocale.pt
  const projects = projectsByLocale[locale] ?? projectsByLocale.pt

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-emerald-500/30 selection:text-emerald-200 pb-[calc(5rem+env(safe-area-inset-bottom,0px))] md:pb-0">
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-scroll {
          animation: marquee-scroll 30s linear infinite;
        }
        .tech-carousel-mask {
          mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }
        @media (min-width: 768px) {
          .tech-carousel-mask {
            mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          }
        }
      `}</style>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/90 backdrop-blur-md border-b border-border py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
          <a
            href="#home"
            className="text-xl font-bold text-foreground tracking-tighter md:text-2xl"
          >
            {t('nav.brand')}<span className="text-emerald-600 dark:text-emerald-400">.</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <NavLink href="#about">{t('nav.about')}</NavLink>
            <NavLink href="#experience">{t('nav.experience')}</NavLink>
            <NavLink href="#projects">{t('nav.projects')}</NavLink>
            <NavLink href="#contact">{t('nav.contact')}</NavLink>
            <ThemeToggle />
            <LanguageSwitcher />
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] min-w-[44px] md:min-h-0 md:min-w-0 px-4 py-2 text-sm font-medium text-emerald-600 dark:text-emerald-400 border border-emerald-500/40 dark:border-emerald-400/30 rounded-lg hover:bg-emerald-500/10 dark:hover:bg-emerald-400/10 transition-colors inline-flex items-center justify-center"
            >
              {t('nav.resume')}
            </a>
          </div>

          {/* Mobile: tema e idioma no header */}
          <div className="md:hidden flex items-center gap-0">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      {/* Bottom nav apenas no mobile */}
      <MobileBottomNav />

      {/* Hero */}
      <section
        id="home"
        className="pt-28 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 container mx-auto px-4 sm:px-6 scroll-mt-20"
      >
        <div className="max-w-4xl">
          <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-3 md:mb-4 tracking-wide text-sm sm:text-base">
            {t('hero.greeting')}
          </p>
          <h1 className="text-4xl font-bold text-foreground mb-4 tracking-tight md:text-5xl md:mb-6 lg:text-7xl">
            {personal.name}.
          </h1>
          <h2 className="text-3xl font-bold text-muted-foreground mb-6 tracking-tight md:text-4xl md:mb-8 lg:text-6xl">
            {t('hero.tagline')}
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mb-8 leading-relaxed md:text-lg md:mb-10">
            {personal.description}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="px-6 py-4 sm:px-8 bg-emerald-500 text-white font-bold rounded-lg hover:bg-emerald-600 dark:hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 min-h-[44px]"
            >
              {t('hero.ctaProjects')} <ChevronRight size={20} />
            </a>
            <a
              href="#contact"
              className="px-6 py-4 sm:px-8 border border-border text-foreground font-medium rounded-lg hover:border-emerald-400/50 hover:bg-muted transition-all flex items-center justify-center min-h-[44px]"
            >
              {t('hero.ctaContact')}
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="py-12 md:py-20 bg-muted scroll-mt-20"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-12 md:items-center">
            {/* Foto em primeiro no mobile (flex-col), à direita no desktop (grid) */}
            <div className="relative group flex justify-center w-full min-w-0 md:order-1">
              <div className="w-full max-w-[260px] sm:max-w-[300px] md:max-w-none">
                <div className="absolute -inset-1 bg-linear-to-r from-emerald-500 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                <div className="relative bg-card rounded-2xl border border-border p-1.5 sm:p-2">
                  <div className="aspect-square w-full bg-muted rounded-xl overflow-hidden relative min-h-[220px] sm:min-h-[260px] md:min-h-0">
                    <Image
                      src={personal.image}
                      alt={personal.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover object-top"
                      sizes="(max-width: 640px) 260px, (max-width: 768px) 300px, 50vw"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:order-0">
              <SectionTitle subtitle={t('about.subtitle')}>
                {t('about.title')}
              </SectionTitle>
              <div className="space-y-3 md:space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                <p className="text-pretty">{t('about.paragraph1')}</p>
                <p className="text-pretty">{t('about.paragraph2')}</p>
                <div className="pt-3 md:pt-6">
                  <h3 className="text-foreground font-semibold mb-2 md:mb-4 flex items-center gap-2 text-sm md:text-base">
                    <Code2 size={18} className="text-emerald-600 dark:text-emerald-400 shrink-0 md:w-5 md:h-5" />{' '}
                    {t('about.techRecent')}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2.5 py-0.5 md:px-3 md:py-1 bg-muted text-emerald-600 dark:text-emerald-400 text-[11px] md:text-sm rounded-full border border-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="w-full overflow-hidden tech-carousel-mask select-none bg-card p-3 md:p-4 rounded-xl border border-border mt-3 md:mt-6">
                    <div className="flex w-max animate-marquee-scroll gap-6 md:gap-10 lg:gap-12 hover:paused">
                      {[...techIcons, ...techIcons].map((tech, i) => (
                        <div
                          key={`${tech.name}-${i}`}
                          className="flex flex-col items-center justify-center gap-1 md:gap-2 min-w-[44px] sm:min-w-[52px] md:min-w-[60px] group transition-all"
                        >
                          <Image
                            src={tech.url}
                            alt={tech.name}
                            width={40}
                            height={40}
                            className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 object-contain transition-all duration-300 opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 ${tech.invert ? 'invert' : ''}`}
                          />
                          <span className="text-[9px] sm:text-[10px] md:text-xs font-mono text-muted-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors text-center max-w-[56px] sm:max-w-[64px] md:max-w-[72px] truncate">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="py-16 md:py-20 container mx-auto px-4 sm:px-6 scroll-mt-20"
      >
        <div className="max-w-3xl mx-auto">
          <SectionTitle>{t('experience.title')}</SectionTitle>
          <div className="space-y-10 md:space-y-12 relative border-l border-border ml-3 pl-8 md:ml-6 md:pl-12">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative group">
                <span className="absolute -left-[41px] md:-left-[57px] top-1 h-5 w-5 rounded-full border-4 border-background bg-emerald-500 group-hover:scale-125 transition-transform shrink-0" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors md:text-xl">
                    {exp.role}
                  </h3>
                  <span className="text-xs font-mono text-emerald-600 dark:text-emerald-500/80 bg-emerald-500/15 dark:bg-emerald-500/10 px-2 py-1 rounded w-fit md:text-sm">
                    {exp.period}
                  </span>
                </div>
                <h4 className="text-base text-muted-foreground mb-3 md:mb-4 font-medium flex items-center gap-2 md:text-lg">
                  <Briefcase size={16} className="shrink-0" /> {exp.company} ·{' '}
                  {exp.location}
                </h4>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="py-16 md:py-20 bg-muted scroll-mt-20"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <SectionTitle subtitle={t('projects.subtitle')}>
            {t('projects.title')}
          </SectionTitle>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="group flex flex-col h-full">
                <div className="relative overflow-hidden h-44 sm:h-48">
                  <div className="absolute inset-0 bg-emerald-900/20 group-hover:bg-transparent transition-colors z-10" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    unoptimized
                  />
                </div>
                <div className="p-4 md:p-6 flex flex-col grow">
                  <div className="flex justify-between items-start gap-2 mb-3 md:mb-4">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors md:text-xl">
                      {project.title}
                    </h3>
                    <div className="flex gap-2 md:gap-3 text-muted-foreground shrink-0">
                      <a
                        href={project.github}
                        className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center md:min-h-0 md:min-w-0"
                        aria-label={t('aria.github')}
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center md:min-h-0 md:min-w-0"
                        aria-label={t('projects.ariaViewProject')}
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 md:mb-6 grow line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono text-emerald-600 dark:text-emerald-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-8 md:mt-12 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:underline underline-offset-4 min-h-[44px]"
            >
              {t('projects.contactMore')} <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Education & CTA */}
      <section className="py-16 md:py-20 container mx-auto px-4 sm:px-6 scroll-mt-20">
        <div className="grid gap-12 md:grid-cols-2 md:gap-12">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6 md:mb-8 flex items-center gap-2 md:text-2xl">
              <GraduationCap className="text-emerald-600 dark:text-emerald-400 shrink-0" /> {t('education.title')}
            </h3>
            <div className="space-y-4 md:space-y-6">
              {education.map((edu) => (
                <Card key={edu.id} className="p-4 md:p-6">
                  <h4 className="text-base font-bold text-foreground md:text-lg">
                    {edu.degree}
                  </h4>
                  <p className="text-muted-foreground text-sm md:text-base">
                    {edu.institution} · {edu.location}
                  </p>
                  <span className="text-xs text-emerald-600 dark:text-emerald-500/80 font-mono mt-2 block md:text-sm">
                    {edu.period}
                  </span>
                </Card>
              ))}
            </div>
          </div>
          <div className="bg-muted rounded-2xl p-6 md:p-8 border border-border flex flex-col justify-center items-center text-center">
            <h3 className="text-xl font-bold text-foreground mb-3 md:mb-4 md:text-2xl">
              {t('cta.title')}
            </h3>
            <p className="text-muted-foreground mb-6 md:mb-8 max-w-md text-sm md:text-base">
              {t('cta.subtitle')}
            </p>
            <a
              href="#contact"
              className="px-6 py-3 bg-emerald-500 text-white font-bold rounded-lg hover:bg-emerald-600 dark:hover:bg-emerald-400 transition-all w-full max-w-xs min-h-[44px] flex items-center justify-center"
            >
              {t('cta.button')}
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-20 md:py-24 container mx-auto px-4 sm:px-6 text-center scroll-mt-20"
      >
        <div className="max-w-2xl mx-auto">
          <p className="text-emerald-600 dark:text-emerald-400 font-mono mb-3 md:mb-4 text-sm md:text-base">
            {t('contact.pretitle')}
          </p>
          <h2 className="text-3xl font-bold text-foreground mb-4 md:text-4xl md:mb-6 lg:text-5xl">
            {t('contact.title')}
          </h2>
          <p className="text-muted-foreground text-base mb-8 md:text-lg md:mb-10">
            {t('contact.subtitle')}
          </p>
          <div className="flex justify-center gap-4 md:gap-6 mb-10 md:mb-12 flex-wrap">
            <a
              href={`mailto:${personal.email}`}
              className="p-4 bg-muted rounded-full text-emerald-600 dark:text-emerald-400 hover:bg-secondary hover:-translate-y-1 transition-all min-h-[56px] min-w-[56px] flex items-center justify-center"
              aria-label={t('aria.email')}
            >
              <Mail size={24} />
            </a>
            <a
              href={personal.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-muted rounded-full text-emerald-600 dark:text-emerald-400 hover:bg-secondary hover:-translate-y-1 transition-all min-h-[56px] min-w-[56px] flex items-center justify-center"
              aria-label={t('aria.whatsapp')}
            >
              <WhatsAppIcon size={24} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-muted rounded-full text-emerald-600 dark:text-emerald-400 hover:bg-secondary hover:-translate-y-1 transition-all min-h-[56px] min-w-[56px] flex items-center justify-center"
              aria-label={t('aria.linkedin')}
            >
              <Linkedin size={24} />
            </a>
            <a
              href={personal.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-muted rounded-full text-emerald-600 dark:text-emerald-400 hover:bg-secondary hover:-translate-y-1 transition-all min-h-[56px] min-w-[56px] flex items-center justify-center"
              aria-label={t('aria.instagram')}
            >
              <Instagram size={24} />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-muted rounded-full text-emerald-600 dark:text-emerald-400 hover:bg-secondary hover:-translate-y-1 transition-all min-h-[56px] min-w-[56px] flex items-center justify-center"
              aria-label={t('aria.github')}
            >
              <Github size={24} />
            </a>
          </div>
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center justify-center px-6 py-4 md:px-8 border border-emerald-500 dark:border-emerald-400 text-emerald-600 dark:text-emerald-400 rounded-lg hover:bg-emerald-500/10 dark:hover:bg-emerald-400/10 transition-colors min-h-[44px]"
          >
            {t('contact.sayHello')}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 md:py-8 bg-muted text-center text-muted-foreground text-sm border-t border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <p className="mb-2">{t('footer.developed')} {personal.name}</p>
          <p>{t('footer.built')}</p>
        </div>
      </footer>
    </div>
  )
}
