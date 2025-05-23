"use client"

import { useState, useEffect, useRef, useContext } from "react"
import { Link } from "react-router-dom"
import {
  Rocket,
  Paintbrush,
  Users,
  FileText,
  BookOpen,
  Presentation,
  DollarSign,
  Package,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  Megaphone,
  Euro,
  Compass,
  Loader2,
  CalendarCheck,
  Handshake,
  Target,
  Zap,
  Gift,
  Layers,
  ShieldCheck,
  Calendar,
  MessageSquareText
} from "lucide-react"
import RapidWorksHeader from "./new_landing_page_header"
import { LanguageContext as AppLanguageContext } from "../App"
import WebinarModal from './WebinarModal'
import { getNextWebinarDates } from '../utils/dateUtils'
import { testimonials } from "../testimonialsData"
import TestimonialCard from "./TestimonialCard"

// Import custom images
import YannickProfile from "../images/yannickprofile.png"
import BrandingImage from "../images/more.png"
import RapidWorkLaptop from "../images/rapidworkdlaptop.png"

export default function RapidWorksPage() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const servicesRef = useRef(null)
  const rapidAnswersRef = useRef(null)
  const ctaRef = useRef(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCalendlyLoading, setIsCalendlyLoading] = useState(true)
  const iframeRef = useRef(null)
  const [isWebinarModalOpen, setIsWebinarModalOpen] = useState(false)

  const context = useContext(AppLanguageContext)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isModalOpen])

  useEffect(() => {
    if (context) {
        setIsLoading(false);
    }
  }, [context]);

  const handleIframeLoad = () => {
    setIsCalendlyLoading(false)
  }

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToRapidAnswers = () => {
    rapidAnswersRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  const scrollToCTA = () => {
    ctaRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const openCalendly = () => {
    window.open('https://calendly.com/yannick-familie-heeren/30min', '_blank')
  }

  const openCalendlyModal = () => {
    setIsCalendlyLoading(true)
    setIsModalOpen(true)
  }

  // Call the imported function, requesting only 1 date
  const webinarDates = getNextWebinarDates(1);
  const nextWebinarDate = webinarDates.length > 0 ? webinarDates[0] : null;

  const openWebinarModal = () => {
    setIsWebinarModalOpen(true);
  }

  const formatDateForCard = (date, lang) => {
    if (!date) return '';
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
    const locale = lang === 'de' ? 'de-DE' : 'en-GB';
    return new Date(date).toLocaleString(locale, options);
  };

  const pageContent = {
    en: {
      hero: {
        platform: "Startup Acceleration Platform",
        title1: "The Full Service Agency for",
        title2: "your Startup",
        subtitle: "You are not alone, 80% of the problems faced by startups are identical. We solve these at unbeatable prices, so you can spend your time and capital on your core business.",
        getStarted: "Get Started",
        learnMore: "Learn More",
        scrollIndicatorAria: "Scroll to services"
      },
      whoWeAre: {
        title: "Who We Are",
        description: "We are Startup enthusiasts. We have experience in Software Development, Marketing, Finance, Fundraising, Validating market needs and especially founding startups ourselves and working with startups. We know the pains and the gains, the ups and downs and have been in your shoes before. We know the most painful parts of being a founder and provide affordable solutions so founders can focus on their business again instead of getting hung up."
      },
      commonGround: {
        title: "What All Our Offers Have in Common",
        points: [
          {
            title: "They all cater to startups needs",
            description: "We love startups and understand their needs from own previous startup journeys and working in the industry for years. Therefore all our services are built to cater the most common startup needs in the most time- and cost effective ways.",
            icon: "Target"
          },
          {
            title: "They deliver measurable results with unparalleled speed",
            description: "Startups cant afford to loose time. We know that, so we built all our services so that you can get the first measurable results in just 1 week time. Doesn't matter if you need to enter a market, develop an mvp, get expert coaching, have a meeting with a tax advisor ... we will get you in action.",
            icon: "Zap"
          },
          {
            title: "They are either free or can be subsidized",
            description: "We know that in startups, every Euro invested must create 10 Euros in value. Therefore, we have designed all our services so that they can be subsidized through funding programs, or are completely free for you. We are happy to show you free of charge which subsidies are available to your startup and gladly support you with the application process.",
            icon: "Gift"
          },
          {
            title: "They build upon each other",
            description: "All of our services build on one another, though they don't require each other. You can step in and out at every stage. If you need guidance finding out which of our services might help you the best feel free to book a free call with us to discuss your individual needs together. By the way we will stop you from booking services we don't see fit your current biggest needs. We hope for your understanding.",
            icon: "Layers"
          },
          {
            title: "They all provide cost transparency and always deliver value before we charge you",
            description: "You will always know upfront what we will charge and when we will do so. We will always only charge when you are satisfied with our work.",
            icon: "ShieldCheck"
          }
        ]
      },
      services: {
        title: "Our Services",
        subtitle: "Everything you need to build and scale your startup, all in one place.",
        rapidAnswers: {
          category: "Q&A",
          title: "Rapid Answers",
          description: "Ask your early-stage startup questions live! Join our free Q&A webinar with experienced founders.",
          learnMore: "Learn more",
          joinWebinar: "Join Free Webinar",
          nextWebinarPrefix: "Next:"
        },
        branding: {
          category: "Visibility",
          title: "Rapid Branding",
          description: "Get visible to your market in 1 week cheaper than building it yourself!",
          learnMore: "Learn more"
        },
        experts: {
          category: "Experts",
          title: "Rapid Experts",
          description: "Find your expert the same day cheaper than own employees!",
          learnMore: "Learn more",
          freeHour: "Get 1 hour free"
        },
        partners: {
          category: "Network",
          title: "Rapid Partners",
          description: "Get connected with vetted notaries, tax advisors, auditors, and more.",
          learnMore: "Learn more"
        },
        coaching: {
          category: "Growth",
          title: "Rapid Coaching",
          description: "Unleash your full potential with year-round coaching by a veteran founder!",
          learnMore: "Learn more"
        },
        workshops: {
          category: "Knowledge",
          title: "Rapid Workshops",
          description: "Close your business knowledge gaps. Don't become reliant on consultants!",
          learnMore: "Learn more"
        },
        financing: {
          title: "Rapid Financing",
          description: "Don't know how to finance your growth now? Did you know you can get up to 70% of our services subsidized? There are multiple options, reach out to us to find out for free!",
          learnMore: "Learn more",
          freeConsultation: "Free Consultation"
        }
      },
      financingSection: {
         title: "Need Financing?",
         subtitle: "Don't worry about how to finance your growth, we will show you the possibilities and help you apply for subsidies."
      },
      bundle: {
        title: "Rapid Bundle",
        description: "Reach the next level with all our Services combined in one bundle!",
        financingNote: "Think it's expensive? No, together with you we prepare the financing of our services and look out for subsidies to make our services ridiculously cheap for you!",
        getBundle: "Get Your Bundle"
      },
      cta: {
        title: "Ready to accelerate your startup?",
        description: "Book a call with our team and discover how RapidWorks can help you build and scale your company.",
        bookCall: "Book a Call Now"
      },
      modal: {
        title: "Schedule a Free Consultation",
        loadingText: "Loading scheduling calendar..."
      },
      testimonialSection: {
        title: "Real Results, Rapid Growth",
        subtitle: "Hear directly from founders who leveraged RapidWorks services to accelerate their startup journey."
      },
    },
    de: {
      hero: {
        platform: "Startup-Beschleunigungsplattform",
        title1: "Die Full-Service-Agentur für",
        title2: "dein Startup",
        subtitle: "Du bist nicht allein, 80% der Probleme, mit denen Startups konfrontiert sind, sind identisch. Wir lösen diese zu unschlagbaren Preisen, damit du deine Zeit und dein Kapital für dein Kerngeschäft einsetzen kannst.",
        getStarted: "Jetzt starten",
        learnMore: "Mehr erfahren",
        scrollIndicatorAria: "Zu den Services scrollen"
      },
      whoWeAre: {
        title: "Wer wir sind",
        description: "Wir sind Startup-Enthusiasten. Wir haben Erfahrung in Softwareentwicklung, Marketing, Finanzen, Fundraising, der Validierung von Marktbedürfnissen und insbesondere darin, selbst Startups zu gründen und mit Startups zusammenzuarbeiten. Wir kennen die Schmerzen und die Erfolge, die Höhen und Tiefen und waren schon mehrfach in deiner Situation. Wir kennen die schmerzhaftesten Aspekte des Gründerdaseins und bieten erschwingliche Lösungen, damit sich Gründer wieder auf ihr Geschäft konzentrieren können, anstatt stecken zu bleiben."
      },
      commonGround: {
        title: "Was alle unsere Angebote gemeinsam haben",
        points: [
          {
            title: "Sie sind alle auf die Bedürfnisse von Startups zugeschnitten",
            description: "Wir lieben Startups und verstehen ihre Bedürfnisse aus eigenen früheren Startup-Reisen und jahrelanger Arbeit in der Branche. Daher sind alle unsere Dienstleistungen darauf ausgelegt, die häufigsten Startup-Bedürfnisse auf die zeit- und kosteneffektivste Weise zu erfüllen.",
            icon: "Target"
          },
          {
            title: "Sie liefern messbare Ergebnisse mit beispielloser Geschwindigkeit",
            description: "Startups können es sich nicht leisten, Zeit zu verlieren. Wir wissen das, deshalb haben wir alle unsere Dienstleistungen so aufgebaut, dass du bereits nach einer Woche erste messbare Ergebnisse erzielen kannst. Egal, ob du einen Markt erschließen, ein MVP entwickeln, Experten-Coaching erhalten oder ein Treffen mit einem Steuerberater benötigst ... wir bringen dich in Aktion.",
            icon: "Zap"
          },
          {
            title: "Sie sind entweder kostenlos oder können gefördert werden",
            description: "„Wir wissen, dass in Startups jeder investierte Euro 10 Euro an Wert schaffen muss. Daher haben wir all unsere Services so ausgerichtet, dass sie durch Förderprogramme subventioniert werden können, oder gänzlich kostenfrei für dich sind. Wir zeigen dir gerne kostenfrei auf, welche Förderungen deinem Startup zustehen und unterstützen gerne bei der Beantragung.“",
            icon: "Gift"
          },
          {
            title: "Sie bauen aufeinander auf",
            description: "Alle unsere Dienstleistungen bauen aufeinander auf, erfordern sich jedoch nicht gegenseitig. Du kannst in jeder Phase ein- und aussteigen. Wenn du Hilfe benötigst, um herauszufinden, welche unserer Dienstleistungen dir am besten helfen könnten, buche gerne ein kostenloses Gespräch mit uns, um deine individuellen Bedürfnisse gemeinsam zu besprechen. Übrigens werden wir dich davon abhalten, Dienstleistungen zu buchen, die unserer Meinung nach nicht zu deinen aktuell größten Bedürfnissen passen. Wir bitten um dein Verständnis.",
            icon: "Layers"
          },
          {
            title: "Sie bieten alle Kostentransparenz und liefern immer Wert, bevor wir etwas berechnen",
            description: "Du wirst immer im Voraus wissen, was wir berechnen und wann wir dies tun. Wir berechnen immer erst dann etwas, wenn du mit unserer Arbeit zufrieden bist.",
            icon: "ShieldCheck"
          }
        ]
      },
      services: {
        title: "Unsere Dienstleistungen",
        subtitle: "Alles, was du brauchst, um dein Startup aufzubauen und zu skalieren, an einem Ort.",
        rapidAnswers: {
          category: "Q&A",
          title: "Rapid Answers",
          description: "Stelle deine Fragen zur frühen Startup-Phase live! Nimm an unserem kostenlosen Q&A-Webinar mit erfahrenen Gründern teil.",
          learnMore: "Mehr erfahren",
          joinWebinar: "Kostenlos teilnehmen",
          nextWebinarPrefix: "Nächste:"
        },
        branding: {
          category: "Sichtbarkeit",
          title: "Rapid Branding",
          description: "Werde in 1 Woche sichtbar für deinen Markt – günstiger als es selbst zu bauen!",
          learnMore: "Mehr erfahren"
        },
        experts: {
          category: "Experten",
          title: "Rapid Experts",
          description: "Finde deinen Experten am selben Tag – günstiger als eigene Mitarbeiter!",
          learnMore: "Mehr erfahren",
          freeHour: "1 Stunde gratis erhalten"
        },
        partners: {
          category: "Netzwerk",
          title: "Rapid Partners",
          description: "Vernetzen Sie sich mit geprüften Notaren, Steuerberatern, Wirtschaftsprüfern und mehr.",
          learnMore: "Mehr erfahren"
        },
        coaching: {
          category: "Wachstum",
          title: "Rapid Coaching",
          description: "Entfessle dein volles Potenzial mit ganzjährigem Coaching durch einen erfahrenen Gründer!",
          learnMore: "Mehr erfahren"
        },
        workshops: {
          category: "Wissen",
          title: "Rapid Workshops",
          description: "Schließe deine Wissenslücken im Business. Werde nicht von Beratern abhängig!",
          learnMore: "Mehr erfahren"
        },
        financing: {
          title: "Rapid Financing",
          description: "Weißt du nicht, wie du dein Wachstum jetzt finanzieren sollst? Wusstest du, dass du bis zu 70% unserer Dienstleistungen fördern lassen kannst? Es gibt mehrere Optionen, kontaktiere uns kostenlos, um mehr zu erfahren!",
          learnMore: "Mehr erfahren",
          freeConsultation: "Kostenlose Beratung"
        }
      },
      financingSection: {
          title: "Finanzierung benötigt?",
          subtitle: "Machen Sie sich keine Sorgen über die Finanzierung Ihres Wachstums. Wir zeigen Ihnen die Möglichkeiten und helfen bei der Beantragung von Fördermitteln."
       },
      bundle: {
        title: "Rapid Bundle",
        description: "Erreiche das nächste Level mit all unseren Services kombiniert in einem Paket!",
        financingNote: "Denkst du, es ist teuer? Nein, gemeinsam mit dir bereiten wir die Finanzierung unserer Dienstleistungen vor und suchen nach Fördermitteln, um unsere Services für dich lächerlich günstig zu machen!",
        getBundle: "Dein Bundle sichern"
      },
      cta: {
        title: "Bereit, dein Startup zu beschleunigen?",
        description: "Buche einen Anruf mit unserem Team und entdecke, wie RapidWorks dir helfen kann, dein Unternehmen aufzubauen und zu skalieren.",
        bookCall: "Jetzt Gespräch buchen"
      },
      modal: {
        title: "Kostenlose Beratung vereinbaren",
        loadingText: "Terminkalender wird geladen..."
      },
      testimonialSection: {
        title: "Echte Ergebnisse, schnelles Wachstum",
        subtitle: "Hören Sie direkt von Gründern, die RapidWorks-Dienste genutzt haben, um ihre Startup-Reise zu beschleunigen."
      },
    }
  }

  // Helper to get icon component by name
  const iconComponents = {
    Target, Zap, Gift, Layers, ShieldCheck, Calendar,
    // Add other icons used elsewhere if needed for consistency, or keep separate
  };

  const GetIcon = ({ name, className }) => {
    const IconComponent = iconComponents[name];
    return IconComponent ? <IconComponent className={className} /> : null;
  };

  if (isLoading || !context) {
    return <div className="flex justify-center items-center h-screen"><Loader2 className="h-12 w-12 animate-spin text-purple-600" /></div>;
  }

  const { language } = context;
  const content = pageContent[language];

  const formattedNextDate = formatDateForCard(nextWebinarDate, language);

  const FeaturedTestimonialSection = ({ content }) => {
    // Filter for all featured testimonials
    const featuredTestimonials = testimonials.filter(t => t.isFeatured);

    // If no featured testimonials, don't render
    if (featuredTestimonials.length === 0) {
      return null;
    }

    // Determine grid columns based on the number of testimonials (up to 3)
    const gridColsClass = `grid-cols-1 ${
      featuredTestimonials.length >= 2 ? 'md:grid-cols-2' : ''
    } ${
      featuredTestimonials.length >= 3 ? 'lg:grid-cols-3' : ''
    }`;

    return (
      // Add background styling and relative positioning for potential decorative elements
      <section className="py-24 bg-gradient-to-b from-purple-50 via-white to-white relative overflow-hidden">
         {/* Decorative gradient blobs */}
         <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200 rounded-full filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2 -z-10"></div>
         <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-200 rounded-full filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2 -z-10"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-purple-600 text-sm uppercase tracking-wider font-light mb-4 px-4 py-1.5 rounded-full bg-white border border-purple-100 shadow-sm">
              <MessageSquareText className="h-4 w-4" /> {/* Use an icon */}
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {content.testimonialSection?.title || "What Our Clients Say"}
            </h2>
             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {content.testimonialSection?.subtitle || "See how RapidWorks helps founders achieve their goals faster."}
            </p>
          </div>
          {/* Use a grid layout for testimonials */}
          <div className={`grid ${gridColsClass} gap-8 max-w-7xl mx-auto`}>
             {/* Map over the first 3 featured testimonials */}
            {featuredTestimonials.slice(0, 3).map((testimonial) => (
               <TestimonialCard
                 key={testimonial.id}
                 quote={testimonial.quote}
                 authorName={testimonial.authorName}
                 authorTitle={testimonial.authorTitle}
                 imageUrl={testimonial.imageUrl}
                 companyLogoUrl={testimonial.companyLogoUrl}
                 projectShowcaseImage={testimonial.projectShowcaseImage}
                 accentColor="purple"
               />
             ))}
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-purple-200 selection:text-purple-900">
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-30 pointer-events-none z-0"></div>

      <RapidWorksHeader />

      <section className="pb-16 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20 -z-10"></div>
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl opacity-20 -z-10"></div>

        <div className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white relative overflow-hidden flex items-center">
          <div className="container mx-auto px-6 py-12 md:py-16 lg:py-20 flex flex-col justify-center">
            <div className="text-center mb-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
                {content.hero.title1}
                <span className="relative block mt-2">
                  {content.hero.title2}
                  <span className="absolute bottom-2 left-0 w-full h-4 bg-white/20 rounded-lg -z-10"></span>
                </span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                {content.hero.subtitle}
              </p>
            </div>
            
          </div>

          <button
            onClick={scrollToRapidAnswers}
            className="absolute bottom-6 left-0 right-0 flex justify-center animate-bounce cursor-pointer bg-transparent border-none focus:outline-none"
            aria-label={content.hero.scrollIndicatorAria}
          >
            <svg className="w-8 h-8 text-white/70 hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </section>

      <section ref={rapidAnswersRef} className="py-20 relative">
        <div className="container mx-auto px-6">
          <div >
            <div className="relative overflow-hidden rounded-2xl h-auto min-h-[300px] md:h-80">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600/90 via-cyan-600/80 to-sky-600/90 mix-blend-multiply z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Webinar or Q&A session"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 z-20 p-6 md:p-12 flex flex-col md:flex-row items-center justify-center md:justify-between">
                <div className="mb-8 md:mb-0 w-full md:w-3/5">
                  <div className="bg-white/20 backdrop-blur-md w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                    <CalendarCheck className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3">{content.services.rapidAnswers.title}</h3>
                  <p className="text-white/90 text-sm md:text-lg mb-3">
                    {content.services.rapidAnswers.description}
                  </p>
                  {formattedNextDate && (
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white font-semibold px-4 py-1.5 rounded-lg mb-4 shadow">
                       <Calendar className="h-4 w-4 opacity-80" />
                       <span className="text-sm">
                         {content.services.rapidAnswers.nextWebinarPrefix} {formattedNextDate}
                       </span>
                    </div>
                  )}
                </div>
                <button
                  onClick={openWebinarModal}
                  className="bg-white text-cyan-600 px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all flex items-center gap-2"
                >
                  {content.services.rapidAnswers.joinWebinar} <ArrowRight className="h-5 w-5" />
                </button>
              </div>
              <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-teal-400/30 to-cyan-400/30 rounded-full -translate-y-1/2 blur-xl z-0"></div>
            </div>
          </div>
        </div>
      </section>

      <section ref={servicesRef} className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">{content.services.title}</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {content.services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-0">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/90 via-purple-600/80 to-indigo-600/90 mix-blend-multiply z-10"></div>
                <img
                  src={RapidWorkLaptop}
                  alt="Rapid Works Laptop Display"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between">
                  <div className="flex justify-between items-start w-full">
                  <div className="bg-white/20 backdrop-blur-md w-14 h-14 rounded-2xl flex items-center justify-center">
                      <Megaphone className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-xs font-medium text-white bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                      {content.services.branding.category}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{content.services.branding.title}</h3>
                    <p className="text-white/90 max-w-md mb-3">
                      {content.services.branding.description}
                    </p>
                    <Link
                      to="/branding"
                      className="inline-flex items-center gap-2 text-white font-medium bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg hover:bg-white/30 transition-all"
                    >
                      {content.services.branding.learnMore} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <div className="absolute top-1/2 right-0 w-64 h-64 bg-gradient-to-r from-purple-400/30 to-indigo-400/30 rounded-full -translate-x-1/4 -translate-y-1/2 blur-xl z-0"></div>
              </div>
            </div>

            <div className="group">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-blue-600/80 to-sky-600/90 mix-blend-multiply z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Experts illustration"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between">
                  <div className="flex justify-between items-start w-full">
                  <div className="bg-white/20 backdrop-blur-md w-14 h-14 rounded-2xl flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-xs font-medium text-white bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                      {content.services.experts.category}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{content.services.experts.title}</h3>
                    <p className="text-white/90 max-w-md mb-3">{content.services.experts.description}</p>
                    <div className="flex justify-between items-center">
                      <Link
                        to="/experts"
                        className="inline-flex items-center gap-2 text-white font-medium bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg hover:bg-white/30 transition-all"
                      >
                        {content.services.experts.learnMore} <ArrowRight className="h-4 w-4" />
                      </Link>
                      
                      <Link
                        to="/experts"
                        className="inline-flex items-center gap-2 text-blue-600 font-medium bg-white px-4 py-2 rounded-lg hover:bg-blue-50 transition-all"
                      >
                        {content.services.experts.freeHour} <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/2 right-0 w-64 h-64 bg-gradient-to-r from-blue-400/30 to-sky-400/30 rounded-full -translate-x-1/4 -translate-y-1/2 blur-xl z-0"></div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl aspect-[3/2] mb-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-blue-600/80 to-sky-600/90 mix-blend-multiply z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Partners network illustration"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start w-full">
                    <div className="bg-white/20 backdrop-blur-md w-12 h-12 rounded-xl flex items-center justify-center">
                      <Handshake className="h-5 w-5 text-white" />
                </div>
                  <span className="text-xs font-medium text-white bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                    {content.services.partners.category}
                  </span>
                </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{content.services.partners.title}</h3>
                    <p className="text-white/90 max-w-md text-sm mb-3">
                      {content.services.partners.description}
                    </p>
                    <Link
                      to="/partners"
                      className="inline-flex items-center gap-2 text-white font-medium bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-lg text-sm hover:bg-white/30 transition-all"
                    >
                      {content.services.partners.learnMore} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <div className="absolute top-1/2 right-0 w-40 h-40 bg-gradient-to-r from-blue-400/30 to-sky-600/30 rounded-full -translate-x-1/4 -translate-y-1/2 blur-xl z-0"></div>
              </div>
            </div>

            <div className="group">
              <div className="relative overflow-hidden rounded-2xl aspect-[3/2] mb-0">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600/90 via-amber-600/80 to-amber-800/90 mix-blend-multiply z-10"></div>
                <img
                  src={YannickProfile}
                  alt="Coaching with Yannick"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start w-full">
                    <div className="bg-white/20 backdrop-blur-md w-12 h-12 rounded-xl flex items-center justify-center">
                      <Compass className="h-5 w-5 text-white" />
                </div>
                  <span className="text-xs font-medium text-white bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                    {content.services.coaching.category}
                  </span>
                </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{content.services.coaching.title}</h3>
                    <p className="text-white/90 max-w-md text-sm mb-3">
                  {content.services.coaching.description}
                </p>
                    <Link
                      to="/coaching"
                      className="inline-flex items-center gap-2 text-white font-medium bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-lg text-sm hover:bg-white/30 transition-all"
                    >
                      {content.services.coaching.learnMore} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <div className="absolute top-1/2 right-0 w-40 h-40 bg-gradient-to-r from-amber-400/30 to-amber-600/30 rounded-full -translate-x-1/4 -translate-y-1/2 blur-xl z-0"></div>
              </div>
            </div>

            <div className="group">
              <div className="relative overflow-hidden rounded-2xl aspect-[3/2] mb-0">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/90 via-emerald-600/80 to-emerald-800/90 mix-blend-multiply z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Workshops illustration"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start w-full">
                    <div className="bg-white/20 backdrop-blur-md w-12 h-12 rounded-xl flex items-center justify-center">
                      <Presentation className="h-5 w-5 text-white" />
                </div>
                  <span className="text-xs font-medium text-white bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                    {content.services.workshops.category}
                  </span>
                </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{content.services.workshops.title}</h3>
                    <p className="text-white/90 max-w-md text-sm mb-3">
                  {content.services.workshops.description}
                </p>
                    <Link
                      to="/workshop"
                      className="inline-flex items-center gap-2 text-white font-medium bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-lg text-sm hover:bg-white/30 transition-all"
                    >
                      {content.services.workshops.learnMore} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <div className="absolute top-1/2 right-0 w-40 h-40 bg-gradient-to-r from-emerald-400/30 to-emerald-600/30 rounded-full -translate-x-1/4 -translate-y-1/2 blur-xl z-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
         <div className="container mx-auto px-6">
           <div className="text-center mb-16">
             <h3 className="text-3xl md:text-4xl font-bold mb-4">{content.financingSection.title}</h3>
             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
               {content.financingSection.subtitle}
             </p>
           </div>
           <div >
             <div className="relative overflow-hidden rounded-2xl h-auto min-h-[300px] md:h-80">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-600/90 via-rose-600/80 to-orange-600/90 mix-blend-multiply z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80"
                  alt="Person using MacBook Pro with financial data"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 z-20 p-6 md:p-12 flex flex-col md:flex-row items-center justify-between">
                  <div className="mb-8 md:mb-0 w-full md:w-3/5">
                    <div className="bg-white/20 backdrop-blur-md w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                      <Euro className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-3">{content.services.financing.title}</h3>
                    <p className="text-white/90 text-sm md:text-lg mb-4">
                      {content.services.financing.description}
                    </p>
                    <Link to="/financing" className="inline-flex items-center gap-2 text-white font-medium bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg hover:bg-white/30 transition-all">
                      {content.services.financing.learnMore} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <button
                    onClick={openCalendlyModal}
                    className="bg-white text-rose-600 px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all flex items-center gap-2"
                  >
                    {content.services.financing.freeConsultation} <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
                <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-rose-400/30 to-orange-400/30 rounded-full -translate-y-1/2 blur-xl z-0"></div>
             </div>
           </div>
         </div>
       </section>

      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTJlOGYwIiBzdHJva2Utd2lkdGg9IjEuNSI+PHBhdGggZD0iTTIgMmg1NnY1NkgyeiIvPjwvZz48L3N2Zz4=')] opacity-50 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-gradient-to-br from-black to-gray-800 rounded-3xl overflow-hidden relative">
            <div className="absolute inset-0 opacity-20 z-0">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                alt="Abstract background"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="md:flex relative z-10">
              <div className="md:w-1/2 p-10 md:p-16">
                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm inline-block mb-8">
                  <Package className="h-12 w-12 text-white" />
                </div>

                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">{content.bundle.title}</h3>
                <p className="text-white/80 text-xl mb-8">
                  {content.bundle.description}
                </p>

                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl mb-8">
                  <p className="text-white font-medium">
                    {content.bundle.financingNote}
                  </p>
                </div>

                <Link to="/bundle" className="bg-white text-black px-8 py-4 rounded-full font-medium hover:shadow-lg hover:shadow-white/20 transition-all flex items-center gap-2 inline-flex">
                  {content.bundle.getBundle} <ArrowRight className="h-5 w-5" />
                </Link>
              </div>

              <div className="md:w-1/2 relative min-h-[300px]">
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/30 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/30 rounded-full translate-y-1/2 -translate-x-1/4"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-6 p-8">
                    {[
                      { icon: <Megaphone className="h-8 w-8" />, color: "bg-purple-500/20", path: "/branding" },
                      { icon: <Users className="h-8 w-8" />, color: "bg-blue-500/20", path: "/experts" },
                      { icon: <Handshake className="h-8 w-8" />, color: "bg-blue-500/20", path: "/partners" },
                      { icon: <Compass className="h-8 w-8" />, color: "bg-amber-500/20", path: "/coaching" },
                      { icon: <Presentation className="h-8 w-8" />, color: "bg-emerald-500/20", path: "/workshop" },
                      { icon: <Euro className="h-8 w-8" />, color: "bg-rose-500/20", path: "/financing" },
                    ].map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className={`${item.color} backdrop-blur-sm p-6 rounded-2xl flex items-center justify-center text-white hover:scale-105 transition-transform cursor-pointer`}
                      >
                        {item.icon}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative bg-gradient-to-br from-gray-800 to-gray-900 text-white">
         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgdmlld0JveD0iMCAwIDUwIDUwIj48cGF0aCBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiIGQ9Ik0xMCAxMEg1djQwaDM1di01SDEwdjAySDUwek00NSA1SDQwVjBoNXY1ek0yNSAyNWgtNXAzMFYwSDIwdjI1ek00NSA0NWgtNXY1aDV2NXoAg0MCIvPjwvc3ZnPg==')] opacity-30 pointer-events-none z-0"></div>

         <div className="container mx-auto px-6 relative z-10">
           <div className="max-w-3xl mx-auto text-center">
             <h2 className="text-3xl md:text-4xl font-bold mb-6">{content.whoWeAre.title}</h2>
             <p className="text-lg text-gray-300 leading-relaxed">
               {content.whoWeAre.description}
             </p>
           </div>
         </div>
       </section>

       <section className="py-20 relative bg-white">
         <div className="container mx-auto px-6">
           <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{content.commonGround.title}</h2>
           </div>
           <div className="flex flex-wrap justify-center gap-8">
             {content.commonGround.points.map((point, index) => (
               <div key={index} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col text-left border border-gray-100 hover:border-purple-200">
                 <div className="flex items-center space-x-4 mb-4">
                   <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                     <GetIcon name={point.icon} className="h-6 w-6 text-purple-600" />
                   </div>
                   <h3 className="text-lg font-semibold text-gray-800">{point.title}</h3>
                 </div>
                 <p className="text-gray-600 text-sm leading-relaxed flex-grow">{point.description}</p>
               </div>
             ))}
           </div>
            <div className="mt-16 bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg max-w-4xl mx-auto">
               <p className="text-purple-800 italic text-sm md:text-base leading-relaxed">
                 {content.commonGround.points.find(p => p.icon === 'Layers')?.description || (language === 'de' ? "Alle unsere Dienstleistungen bauen aufeinander auf..." : "All of our services build on one another...")}
               </p>
             </div>
         </div>
       </section>

      <section ref={ctaRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">{content.cta.title}</h3>
            <p className="text-xl text-gray-600 mb-10">
              {content.cta.description}
            </p>
            <button
              onClick={openCalendly}
              className="px-8 py-4 bg-black hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 text-white rounded-full hover:shadow-xl hover:translate-y-[-2px] active:translate-y-[0px] transition-all duration-300 font-medium text-lg"
            >
              {content.cta.bookCall}
            </button>
          </div>
        </div>
      </section>

      <WebinarModal
        isOpen={isWebinarModalOpen}
        onClose={() => setIsWebinarModalOpen(false)}
        webinarDates={webinarDates}
      />

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2">
          <div className="bg-white rounded-2xl w-full max-w-7xl h-[95vh] relative flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="font-bold text-lg">{content.modal.title}</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-grow relative">
              {isCalendlyLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white">
                  <Loader2 className="h-10 w-10 text-rose-600 animate-spin mb-4" />
                  <p className="text-gray-600">{content.modal.loadingText}</p>
                </div>
              )}
              <iframe
                ref={iframeRef}
                src="https://calendly.com/yannick-familie-heeren/30min?primary_color=dc2626&text_color=374151&hide_gdpr_banner=1&name_field=0&a1=Rapid%20Financing"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Schedule a meeting"
                onLoad={handleIframeLoad}
                className={isCalendlyLoading ? "opacity-0" : "opacity-100"}
              ></iframe>
            </div>
          </div>
        </div>
      )}

      <FeaturedTestimonialSection content={content} />
    </div>
  )
}

