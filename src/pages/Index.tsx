import HeroSection from "@/components/HeroSection"
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll"
import { Timeline } from "@/components/ui/timeline"
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials"
import { motion } from "framer-motion"
import SmoothScrollHero from "@/components/ui/smooth-scroll-hero"

export default function Index() {
  const missionStatement =
    "Я прошёл путь от воды до зала. От мировых турниров по академической гребле до работы с каждым, кто хочет изменить своё тело и жизнь. Призёр и победитель крупнейших всероссийских, европейских и мировых соревнований. Работаю с женщинами, мужчинами, подростками и детьми. Моя задача не просто тренировать, а помочь тебе стать сильнее, выносливее и увереннее в себе. Каждый клиент получает отдельную программу, выстроенную под его цели и возможности. Похудеть, подтянуться, улучшить осанку или нарастить силу - найдём твой путь вместе."

  const timelineEntries = [
    {
      id: 1,
      image: "https://cdn.poehali.dev/files/c2675171-60df-457b-8bee-3836df48a11a.jpg",
      alt: "Ольга - 10 кг за 6 месяцев",
      title: "Ольга - 10 кг за 6 месяцев",
      description:
        "Похудеть и привести себя в форму, сделать тело подтянутым и красивым — цели, с которыми приходят чаще всего. Работаем системно: тренировки + контроль нагрузки + прогрессивный результат.",
      layout: "left" as const,
    },
    {
      id: 2,
      image: "https://cdn.poehali.dev/files/baaeb05e-d483-446f-8e81-b54178b2d6f9.jpg",
      alt: "Оксана - 6 кг за 4 месяца",
      title: "Оксана - 6 кг за 4 месяца",
      description:
        "Системная работа над телом: тренировки подобраны индивидуально, нагрузка нарастает постепенно. Результат виден уже через месяц, а через четыре — тело меняется полностью.",
      layout: "right" as const,
    },
    {
      id: 3,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1FdGyjVpWQANGzsDWpoPIvF5SVI2za.png",
      alt: "Похудение и красивая форма тела",
      title: "Форма и трансформация",
      description:
        "Похудеть и привести себя в форму, сделать тело подтянутым и красивым — цели, с которыми приходят чаще всего. Работаем системно: тренировки + контроль нагрузки + прогрессивный результат. Принимаем женщин, мужчин и детей.",
      layout: "left" as const,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Mission Statement Section with Grid Background */}
      <section id="mission" className="relative min-h-screen flex items-center justify-center py-20 bg-white">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black tracking-wider mb-12 text-gray-900">О ТРЕНЕРЕ</h2>
            <TextGradientScroll
              text={missionStatement}
              className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-gray-800"
              type="word"
              textOpacity="soft"
            />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="community" className="relative py-20 bg-white">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="relative z-10">
          <div className="container mx-auto px-6 mb-16">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-black tracking-wider mb-6 text-gray-900">НАПРАВЛЕНИЯ</h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                Работаю с женщинами, мужчинами, подростками и детьми. Каждая программа — строго индивидуальна.
              </p>
            </div>
          </div>

          <Timeline entries={timelineEntries} />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-20 bg-white">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-wider text-gray-900 mb-6">
              Что говорят{" "}
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">КЛИЕНТЫ</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
              Реальные результаты людей, которые доверили своё тело и здоровье Сергею Иськиву.
            </p>
          </motion.div>

          <StaggerTestimonials />
        </div>
      </section>

      {/* Smooth Scroll Hero with CTA Overlay */}
      <section id="join" className="relative">
        <SmoothScrollHero
          scrollHeight={2500}
          desktopImage="/images/runners-motion-blur.png"
          mobileImage="/images/runners-motion-blur.png"
          initialClipPercentage={30}
          finalClipPercentage={70}
        />
      </section>
    </div>
  )
}