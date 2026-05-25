import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Activity,
  ArrowRight,
  Award,
  BadgeCheck,
  ChevronDown,
  GraduationCap,
  HeartPulse,
  Search,
  ShieldCheck,
  Stethoscope,
  UserRound
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import useSEO from '../hooks/useSEO';
import { teamFilters, teamMembers } from '../data/teamData';

const filterTerms = {
  All: [],
  'Integrative Medicine': ['integrative medicine', 'integrative', 'functional medicine'],
  Gynecology: ['gynecology', 'gynaecology', 'women', 'obstetric', 'pelvic'],
  Orthopedics: ['orthopedics', 'orthopaedics', 'orthopaedic', 'musculoskeletal', 'spine', 'joint', 'pain'],
  Homeopathy: ['homeopathy', 'homeopathic'],
  'Health Optimization': ['healthspan', 'optimization', 'preventive', 'metabolic', 'lifestyle', 'wellness optimization'],
  'Regenerative Care': ['regenerative', 'recovery', 'rehabilitation', 'cellular', 'hifu', 'hifem', 'hbot', 'ozone']
};

const trustFeatures = [
  {
    title: 'Personalized Care',
    description: 'Care pathways shaped around each patient\'s clinical context, goals, recovery needs, and long-term wellness.',
    icon: UserRound
  },
  {
    title: 'Advanced Therapeutics',
    description: 'Integrative support through modern non-invasive wellness technologies and structured therapeutic protocols.',
    icon: Activity
  },
  {
    title: 'Integrated Clinical Support',
    description: 'Multidisciplinary coordination across consultants, therapies, lifestyle support, and ongoing recovery planning.',
    icon: ShieldCheck
  }
];

const founderDoctor = teamMembers[0];
const specialistDoctors = teamMembers.slice(1);
const interactiveFocusClasses = 'focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-teal/20 focus-visible:ring-offset-2 focus-visible:ring-offset-white';

function Eyebrow({ children, className = '' }) {
  return (
    <div className={`mb-4 flex items-center gap-3 text-sm font-semibold uppercase text-brand-teal ${className}`}>
      <span className="h-px w-10 bg-brand-teal" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}

function memberSearchText(member) {
  return [
    member.name,
    member.role,
    member.specialty,
    member.bio,
    member.fullBio,
    ...(member.credentials || []),
    ...(member.clinicalFocus || []),
    ...(member.areas || []),
    ...(member.conditions || []),
    ...(member.therapies || [])
  ]
    .join(' ')
    .toLowerCase();
}

function matchesFilter(member, activeFilter) {
  if (activeFilter === 'All') return true;

  const searchText = memberSearchText(member);
  const terms = filterTerms[activeFilter] || [];

  return terms.some((term) => searchText.includes(term));
}

function getMemberId(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function getPreviewTags(member, limit = 4) {
  return (member.areas?.length ? member.areas : member.clinicalFocus || []).slice(0, limit);
}

function CredentialChips({ credentials }) {
  return (
    <div className="flex flex-wrap gap-2">
      {credentials.map((credential) => (
        <span
          key={credential}
          className="inline-flex items-center rounded-full border border-brand-teal/20 bg-brand-teal/5 px-3 py-1 text-sm font-semibold text-brand-teal"
        >
          {credential}
        </span>
      ))}
    </div>
  );
}

function DetailSection({ title, icon: Icon, children, className = '' }) {
  return (
    <section className={className}>
      <div className="mb-3 flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-teal/10 text-brand-teal">
          <Icon size={18} aria-hidden="true" />
        </span>
        <h4 className="text-base font-semibold text-brand-navy">{title}</h4>
      </div>
      {children}
    </section>
  );
}

function DetailList({ items }) {
  if (!items?.length) return null;

  return (
    <ul className="grid gap-x-5 gap-y-2 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-[15px] leading-7 text-brand-muted">
          <span className="mt-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-teal/70" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function DoctorDetails({ member }) {
  return (
    <div className="border-t border-brand-border bg-brand-light/70 px-5 py-6 sm:px-6 lg:px-7">
      <div className="grid gap-7 lg:grid-cols-2">
        <DetailSection title="About" icon={UserRound} className="lg:col-span-2">
          <div className="space-y-3">
            <p className="text-[15px] leading-8 text-brand-muted sm:text-base">{member.bio}</p>
            {member.fullBio && <p className="text-[15px] leading-8 text-brand-muted sm:text-base">{member.fullBio}</p>}
          </div>
        </DetailSection>

        <DetailSection title="Clinical Focus" icon={Stethoscope}>
          <DetailList items={member.clinicalFocus} />
        </DetailSection>

        <DetailSection title="Areas of Expertise" icon={Activity}>
          <DetailList items={member.areas} />
        </DetailSection>

        {member.conditions && (
          <DetailSection title="Conditions Managed" icon={HeartPulse}>
            <DetailList items={member.conditions} />
          </DetailSection>
        )}

        {member.therapies && (
          <DetailSection title="Therapies & Procedures" icon={BadgeCheck}>
            <DetailList items={member.therapies} />
          </DetailSection>
        )}

        {member.approach && (
          <DetailSection title="Approach to Care" icon={ShieldCheck} className="lg:col-span-2">
            <p className="border-l-2 border-brand-gold bg-white/70 py-3 pl-4 text-[15px] leading-8 text-brand-muted">
              {member.approach}
            </p>
          </DetailSection>
        )}

        <DetailSection title="Qualifications" icon={GraduationCap} className="lg:col-span-2">
          <CredentialChips credentials={member.credentials} />
        </DetailSection>
      </div>
    </div>
  );
}

function FounderCard({ founder }) {
  const [isOpen, setIsOpen] = useState(false);
  const profileId = 'founder-profile-details';

  return (
    <motion.article
      layout
      className="relative overflow-hidden rounded-lg border border-brand-teal/20 bg-white shadow-[0_24px_70px_rgba(13,33,55,0.12)]"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-teal via-brand-blue to-brand-gold" aria-hidden="true" />

      <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[minmax(280px,380px),1fr] lg:p-10">
        <div>
          <div className="aspect-[4/5] overflow-hidden rounded-lg border border-brand-border bg-brand-ice shadow-inner">
            <img
              src={founder.image}
              alt={founder.name}
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <Eyebrow>Founder / Lead Doctor</Eyebrow>
          <h2 className="font-cormorant text-4xl leading-tight text-brand-navy sm:text-5xl">
            {founder.name}
          </h2>

          <div className="mt-4">
            <CredentialChips credentials={founder.credentials} />
          </div>

          <p className="mt-5 text-lg font-semibold leading-7 text-brand-blue">{founder.role}</p>
          <p className="mt-1 text-base leading-7 text-brand-muted">{founder.specialty}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {founder.badges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-ice px-3 py-1.5 text-sm font-medium text-brand-navy"
              >
                <Award size={15} className="text-brand-teal" aria-hidden="true" />
                {badge}
              </span>
            ))}
          </div>

          <p className="mt-6 text-base leading-8 text-brand-muted">{founder.bio}</p>

          <blockquote className="mt-6 border-l-4 border-brand-gold bg-brand-beige/70 px-5 py-4">
            <p className="text-base italic leading-8 text-brand-navy">"{founder.note}"</p>
          </blockquote>

          <div className="mt-7 grid gap-5 md:grid-cols-2">
            <div>
              <h3 className="mb-3 text-base font-semibold text-brand-navy">Clinical Focus</h3>
              <div className="flex flex-wrap gap-2">
                {founder.clinicalFocus.map((item) => (
                  <span key={item} className="rounded-full bg-brand-teal/10 px-3 py-1.5 text-sm text-brand-teal">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-base font-semibold text-brand-navy">Areas of Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {founder.areas.map((item) => (
                  <span key={item} className="rounded-full border border-brand-border bg-white px-3 py-1.5 text-sm text-brand-muted">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className={`inline-flex min-h-[48px] items-center justify-center rounded-md bg-brand-teal px-6 py-3 text-base font-semibold text-white shadow-[0_12px_30px_rgba(11,110,110,0.25)] transition hover:-translate-y-0.5 hover:bg-brand-blue ${interactiveFocusClasses}`}
            >
              Book Consultation
            </Link>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={profileId}
              onClick={() => setIsOpen((current) => !current)}
              className={`inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md border border-brand-teal px-6 py-3 text-base font-semibold text-brand-teal transition hover:-translate-y-0.5 hover:bg-brand-teal hover:text-white ${interactiveFocusClasses}`}
            >
              {isOpen ? 'Hide Profile' : 'Read More'}
              <ChevronDown size={18} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={profileId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="border-t border-brand-border bg-brand-light/70 px-5 py-6 sm:px-8 lg:px-10">
              <div className="grid gap-7 lg:grid-cols-2">
                <DetailSection title="About" icon={UserRound} className="lg:col-span-2">
                  <p className="text-[15px] leading-8 text-brand-muted sm:text-base">{founder.fullBio}</p>
                </DetailSection>
                <DetailSection title="Clinical Focus" icon={Stethoscope}>
                  <DetailList items={founder.clinicalFocus} />
                </DetailSection>
                <DetailSection title="Areas of Expertise" icon={Activity}>
                  <DetailList items={founder.areas} />
                </DetailSection>
                <DetailSection title="Qualifications" icon={GraduationCap} className="lg:col-span-2">
                  <CredentialChips credentials={founder.credentials} />
                </DetailSection>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

function DoctorCard({ member, isOpen, onToggle }) {
  const memberId = getMemberId(member.name);
  const panelId = `doctor-details-${memberId}`;
  const previewTags = getPreviewTags(member);

  return (
    <motion.article
      layout
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-brand-border bg-white shadow-[0_16px_45px_rgba(13,33,55,0.07)] transition hover:-translate-y-1 hover:border-brand-teal/40 hover:shadow-[0_22px_60px_rgba(13,33,55,0.12)]"
    >
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-1 flex-col gap-5 sm:flex-row sm:items-start">
          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-full border-4 border-brand-ice bg-brand-ice shadow-sm">
            <img src={member.image} alt={member.name} className="h-full w-full object-cover object-top" />
          </div>

          <div className="flex min-w-0 flex-1 flex-col">
            <div className="flex flex-wrap gap-2">
              {member.credentials.map((credential) => (
                <span key={credential} className="rounded-full bg-brand-teal/10 px-2.5 py-1 text-sm font-semibold text-brand-teal">
                  {credential}
                </span>
              ))}
              {member.experience && (
                <span className="rounded-full bg-brand-gold/10 px-2.5 py-1 text-sm font-semibold text-brand-navy">
                  {member.experience} Experience
                </span>
              )}
            </div>

            <h3 className="mt-3 font-cormorant text-3xl leading-tight text-brand-navy">{member.name}</h3>
            <p className="mt-2 text-base font-semibold leading-7 text-brand-blue">{member.role}</p>
            <p className="mt-2 line-clamp-2 text-[15px] leading-7 text-brand-muted">{member.bio}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {previewTags.map((tag) => (
                <span key={tag} className="rounded-full border border-brand-border bg-brand-light px-3 py-1 text-sm text-brand-muted">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-auto pt-5">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={onToggle}
                className={`inline-flex min-h-[46px] w-fit items-center justify-center gap-2 rounded-md px-3 text-base font-semibold text-brand-teal transition hover:bg-brand-teal/5 hover:text-brand-blue ${interactiveFocusClasses}`}
              >
                {isOpen ? 'Hide Details' : 'View Details'}
                {isOpen ? (
                  <ChevronDown size={18} className="rotate-180 transition-transform" aria-hidden="true" />
                ) : (
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <DoctorDetails member={member} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export default function Team() {
  useSEO(
    'Our Clinical Specialists & Directors',
    "Meet the medical directors and consultants at ALMACURA, leading integrative wellness, pelvic floor rehabilitation, non-surgical pain management, and preventive women's healthcare."
  );

  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedDoctor, setExpandedDoctor] = useState(null);

  const filteredDoctors = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return specialistDoctors.filter((member) => {
      const matchesSearch = !normalizedSearch || memberSearchText(member).includes(normalizedSearch);
      return matchesSearch && matchesFilter(member, activeFilter);
    });
  }, [activeFilter, searchTerm]);

  const schema = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: 'ALMACURA',
    description: 'Integrative medicine, advanced therapeutics, and personalized patient care.',
    employee: teamMembers.map((member) => ({
      '@type': 'Physician',
      name: member.name,
      image: member.image,
      jobTitle: member.role,
      description: member.specialty,
      hasCredential: member.credentials.join(', ')
    }))
  }), []);

  return (
    <main className="bg-brand-white pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="relative overflow-hidden bg-brand-ice px-6 pb-12 pt-16 sm:pb-16 sm:pt-20 lg:pb-20 lg:pt-24">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              'linear-gradient(135deg, rgba(11, 110, 110, 0.08) 1px, transparent 1px), linear-gradient(45deg, rgba(26, 143, 191, 0.05) 1px, transparent 1px)',
            backgroundSize: '38px 38px'
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" aria-hidden="true" />

        <div className="relative mx-auto max-w-[1180px]">
          <div className="max-w-4xl">
            <Eyebrow>Medical Team</Eyebrow>
            <h1 className="font-cormorant text-4xl leading-tight text-brand-navy sm:text-6xl lg:text-7xl">
              Expert Consultants & Specialists
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-brand-muted">
              A multidisciplinary clinical team bringing together integrative medicine, advanced therapeutics, and personalized patient care for recovery, prevention, and long-term health optimization.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {[
              `${teamMembers.length} clinical experts`,
              'Multidisciplinary care',
              'Personalized pathways'
            ].map((item) => (
              <div key={item} className="rounded-lg border border-white/80 bg-white/75 px-5 py-4 shadow-sm backdrop-blur">
                <p className="text-base font-semibold leading-7 text-brand-navy">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 pb-16 pt-10 sm:pb-20 sm:pt-12 lg:pb-24 lg:pt-14">
        <div className="mx-auto max-w-[1180px]">
          <FounderCard founder={founderDoctor} />
        </div>
      </section>

      <section className="bg-brand-light px-6 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1180px]">
          <ScrollReveal>
            <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <Eyebrow>Specialist Directory</Eyebrow>
                <h2 className="font-cormorant text-4xl leading-tight text-brand-navy sm:text-5xl">
                  Find the right consultant for your care pathway
                </h2>
              </div>
              <p className="max-w-md text-base leading-8 text-brand-muted">
                Search by doctor name, specialty, therapeutic area, or clinical focus to quickly narrow the team.
              </p>
            </div>

            <div className="mb-10 rounded-lg border border-brand-border bg-white p-4 shadow-[0_14px_40px_rgba(13,33,55,0.06)] sm:p-5">
              <label htmlFor="doctor-search" className="sr-only">
                Search doctors by name or specialty
              </label>
              <div className="relative">
                <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-brand-teal" size={20} aria-hidden="true" />
                <input
                  id="doctor-search"
                  type="search"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search by doctor name or specialty"
                  className="min-h-[52px] w-full rounded-md border border-brand-border bg-brand-light py-3 pl-12 pr-4 text-base text-brand-navy outline-none transition placeholder:text-brand-muted/70 focus:border-brand-teal focus:bg-white focus:ring-4 focus:ring-brand-teal/10"
                />
              </div>

              <div className="mt-4 flex flex-wrap gap-2" aria-label="Filter doctors by specialty">
                {teamFilters.map((filter) => {
                  const isActive = activeFilter === filter;

                  return (
                    <button
                      key={filter}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setActiveFilter(filter)}
                      className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                        isActive
                          ? 'border-brand-teal bg-brand-teal text-white shadow-[0_8px_20px_rgba(11,110,110,0.2)]'
                          : 'border-brand-border bg-white text-brand-muted hover:border-brand-teal/50 hover:text-brand-teal'
                      } ${interactiveFocusClasses}`}
                    >
                      {filter}
                    </button>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          {filteredDoctors.length > 0 ? (
            <div className="grid items-stretch gap-6 lg:grid-cols-2">
              {filteredDoctors.map((member, index) => {
                const memberId = getMemberId(member.name);

                return (
                  <ScrollReveal key={member.name} delay={index * 0.04} className="h-full">
                    <DoctorCard
                      member={member}
                      isOpen={expandedDoctor === memberId}
                      onToggle={() => setExpandedDoctor((current) => (current === memberId ? null : memberId))}
                    />
                  </ScrollReveal>
                );
              })}
            </div>
          ) : (
            <div className="rounded-lg border border-brand-border bg-white px-6 py-10 text-center">
              <p className="text-base leading-8 text-brand-muted">
                No specialists match the current search. Clear the search or choose another filter.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchTerm('');
                  setActiveFilter('All');
                }}
                className={`mt-5 inline-flex min-h-[46px] items-center justify-center rounded-md bg-brand-teal px-5 py-3 text-base font-semibold text-white transition hover:bg-brand-blue ${interactiveFocusClasses}`}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1180px]">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow className="justify-center">
                Integrated Care
              </Eyebrow>
              <h2 className="font-cormorant text-4xl leading-tight text-brand-navy sm:text-5xl">
                A multidisciplinary team focused on root-cause healing, recovery, and long-term wellness.
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {trustFeatures.map(({ title, description, icon: Icon }) => (
                <article
                  key={title}
                  className="rounded-lg border border-brand-border bg-brand-light p-6 shadow-[0_12px_36px_rgba(13,33,55,0.06)] transition hover:-translate-y-1 hover:border-brand-teal/40"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-brand-teal/10 text-brand-teal">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-navy">{title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-brand-muted">{description}</p>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-brand-ice px-6 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <Eyebrow className="justify-center">Schedule a Consultation</Eyebrow>
            <h2 className="font-cormorant text-4xl leading-tight text-brand-navy sm:text-5xl lg:text-6xl">
              Connect with the right specialist
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-brand-muted">
              Discuss your health goals with our medical team and explore personalized treatment protocols tailored to your needs.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className={`inline-flex min-h-[50px] w-full items-center justify-center rounded-md bg-brand-teal px-8 py-3 text-base font-semibold text-white shadow-[0_14px_34px_rgba(11,110,110,0.26)] transition hover:-translate-y-0.5 hover:bg-brand-blue sm:w-auto ${interactiveFocusClasses}`}
              >
                Book Consultation
              </Link>
            </div>
            <p className="mt-4 text-base leading-7 text-brand-muted">
              Our team will guide you to the right specialist.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
