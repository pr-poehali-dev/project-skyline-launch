import type React from "react"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const SQRT_5000 = Math.sqrt(5000)

const testimonials = [
  {
    tempId: 0,
    testimonial:
      "За 3 месяца сбросила 9 кг и наконец влезла в любимое платье. Но самое главное, я чувствую себя живой, энергичной и уверенной в себе!",
    by: "Марина, 34 года",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=MarinaK&backgroundColor=ec4899&textColor=ffffff",
  },
  {
    tempId: 1,
    testimonial:
      "Никогда не думал, что в 45 лет смогу так изменить тело. Сергей выстроил программу точно под меня. Силовые выросли, спина перестала болеть. Это просто другая жизнь.",
    by: "Андрей, 45 лет",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AndreyP&backgroundColor=3b82f6&textColor=ffffff",
  },
  {
    tempId: 2,
    testimonial:
      "Привела дочку-подростка, у неё была плохая осанка и зажатость в движениях. Уже через месяц осанка изменилась, появилась уверенность и желание двигаться.",
    by: "Ольга, мама Кати (15 лет)",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=OlgaMom&backgroundColor=10b981&textColor=ffffff",
  },
  {
    tempId: 3,
    testimonial:
      "Готовился к соревнованиям, нужна была работа на выносливость. Сергей мастер спорта, он знает тело изнутри. Результат превзошёл ожидания.",
    by: "Дмитрий, 29 лет",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=DmitryS&backgroundColor=ef4444&textColor=ffffff",
  },
  {
    tempId: 4,
    testimonial:
      "После родов хотела вернуть форму, но боялась навредить. Сергей выстроил щадящую, но эффективную программу. Через 2 месяца результат был виден всем.",
    by: "Екатерина, 31 год",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=EkatK&backgroundColor=f59e0b&textColor=ffffff",
  },
  {
    tempId: 5,
    testimonial:
      "Мой сын занимается с Сергеем с 9 лет. Тренер нашёл подход, сделал тренировки интересными. Сейчас ему 12, физически развит не по годам и обожает спорт.",
    by: "Павел, папа Миши",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=PavelD&backgroundColor=6366f1&textColor=ffffff",
  },
  {
    tempId: 6,
    testimonial:
      "Пришла просто подтянуться. Оказалось, у меня были серьёзные проблемы с суставами. Сергей разобрал всё и вернул мне комфортное движение.",
    by: "Наталья, 38 лет",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=NatalyaV&backgroundColor=8b5cf6&textColor=ffffff",
  },
  {
    tempId: 7,
    testimonial:
      "Работаю в офисе, хроническая боль в спине была нормой. После курса с Сергеем боль ушла, осанка выровнялась. Чувствую себя на 10 лет моложе.",
    by: "Игорь, 41 год",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=IgorM&backgroundColor=06b6d4&textColor=ffffff",
  },
  {
    tempId: 8,
    testimonial:
      "Хотела развить гибкость, была жёсткой как доска. Сергей терпеливо, шаг за шагом, за 2 месяца довёл меня до шпагата. Теперь это моя суперсила!",
    by: "Алина, 26 лет",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AlinaR&backgroundColor=f97316&textColor=ffffff",
  },
  {
    tempId: 9,
    testimonial:
      "Тренируюсь у Сергея уже год. Это человек, который искренне заинтересован в твоём результате. Каждая тренировка это вызов и удовольствие одновременно.",
    by: "Михаил, 33 года",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=MikhailV&backgroundColor=84cc16&textColor=ffffff",
  },
  {
    tempId: 10,
    testimonial:
      "Сергей редкий специалист: понимает биомеханику, умеет работать с разными людьми и всегда объясняет, зачем то или иное упражнение. Сразу внушает доверие.",
    by: "Светлана, 44 года",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=SvetlanaB&backgroundColor=a855f7&textColor=ffffff",
  },
  {
    tempId: 11,
    testimonial:
      "Занимаюсь с дочкой вместе, нам обеим по разной программе. Это очень сближает. Видим прогресс друг друга и это бесценно.",
    by: "Ирина, 39 лет, с дочкой Соней",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=IrinaS&backgroundColor=059669&textColor=ffffff",
  },
  {
    tempId: 12,
    testimonial:
      "После травмы колена думал, что спорт для меня закрыт. Сергей разработал план, вернул меня в форму и научил тренироваться правильно.",
    by: "Алексей, 37 лет",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AlexeyK&backgroundColor=0ea5e9&textColor=ffffff",
  },
  {
    tempId: 13,
    testimonial:
      "За полгода сбросила 14 кг и впервые в жизни полюбила тренировки. Сергей умеет заряжать и верить в тебя, даже когда сам уже готов сдаться.",
    by: "Юлия, 28 лет",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=YuliyaN&backgroundColor=dc2626&textColor=ffffff",
  },
  {
    tempId: 14,
    testimonial:
      "Ребёнок стал собраннее, дисциплинированнее и физически крепче. Сергей умеет работать с детьми, терпеливо, с пониманием, но с реальным результатом.",
    by: "Виктория, мама Артёма (11 лет)",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=ViktoriaMom&backgroundColor=7c3aed&textColor=ffffff",
  },
  {
    tempId: 15,
    testimonial:
      "Пришёл худым, хотел набрать массу. За 4 месяца плюс 6 кг мышц. Сергей реально знает, как работает тело.",
    by: "Роман, 22 года",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=RomanF&backgroundColor=ea580c&textColor=ffffff",
  },
  {
    tempId: 16,
    testimonial:
      "Стала лучше спать, меньше болеть и чувствую себя значительно моложе. Тренировки с Сергеем это реально инвестиция в себя.",
    by: "Тамара, 52 года",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=TamaraG&backgroundColor=16a34a&textColor=ffffff",
  },
  {
    tempId: 17,
    testimonial:
      "Сергей сразу увидел слабые места: нестабильность корпуса и плохую координацию. Проработали всё системно. Теперь тело это инструмент, а не обуза.",
    by: "Кирилл, 31 год",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=KirillV&backgroundColor=2563eb&textColor=ffffff",
  },
  {
    tempId: 18,
    testimonial:
      "Приходила подкачаться перед свадьбой. Получила намного больше: правильные привычки, любовь к движению и тело, которым горжусь.",
    by: "Анастасия, 27 лет",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AnastasiyaP&backgroundColor=be185d&textColor=ffffff",
  },
  {
    tempId: 19,
    testimonial:
      "Международный опыт Сергея чувствуется в каждой тренировке. Это не просто тренер из зала, это специалист мирового уровня, который работает с тобой лично.",
    by: "Владислав, 48 лет",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=VladislavC&backgroundColor=0891b2&textColor=ffffff",
  },
]

interface TestimonialCardProps {
  position: number
  testimonial: (typeof testimonials)[0]
  handleMove: (steps: number) => void
  cardSize: number
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ position, testimonial, handleMove, cardSize }) => {
  const isCenter = position === 0
  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10 bg-gray-900 text-white border-gray-900"
          : "z-0 bg-white text-gray-900 border-gray-200 hover:border-gray-400",
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent",
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-gray-300"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
        }}
      />
      <img
        src={testimonial.imgSrc || "/placeholder.svg"}
        alt={`${testimonial.by.split(",")[0]}`}
        className="mb-4 h-14 w-12 bg-gray-100 object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px hsl(var(--background))",
        }}
      />
      <h3 className={cn("text-base sm:text-xl font-medium", isCenter ? "text-white" : "text-gray-900")}>
        "{testimonial.testimonial}"
      </h3>
      <p
        className={cn(
          "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
          isCenter ? "text-gray-300" : "text-gray-600",
        )}
      >
        - {testimonial.by}
      </p>
    </div>
  )
}

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365)
  const [testimonialsList, setTestimonialsList] = useState(testimonials)

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList]
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift()
        if (!item) return
        newList.push({ ...item, tempId: Math.random() })
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop()
        if (!item) return
        newList.unshift({ ...item, tempId: Math.random() })
      }
    }
    setTestimonialsList(newList)
  }

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)")
      setCardSize(matches ? 365 : 290)
    }
    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  return (
    <div className="relative w-full overflow-hidden bg-white" style={{ height: 600 }}>
      {testimonialsList.map((testimonial, index) => {
        const position =
          testimonialsList.length % 2 ? index - (testimonialsList.length + 1) / 2 : index - testimonialsList.length / 2
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        )
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-gray-300 hover:bg-gray-900 hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2",
          )}
          aria-label="Предыдущий отзыв"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-gray-300 hover:bg-gray-900 hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2",
          )}
          aria-label="Следующий отзыв"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}