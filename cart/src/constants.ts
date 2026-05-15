export const translations = {
  en: {
    nav: {
      caseStudy: "Dovidenko Stanislav",
      process: "Process",
      solutions: "Solutions",
      results: "Results"
    },
    common: {
      tag: "Cart Optimization • Product Design • 2026",
      explore: "Explore Solutions",
      fullDoc: "Full Document",
      viewAll: "View All Principles",
      close: "Close",
      footerTag: "Strategy-Driven Product Design Case Study",
      confidential: "Portfolio 206 • Stanislav Dovidenko"
    },
    hero: {
      headline: "Reducing Cart Abandonment",
      subheadline: "A UX/product case study focused on improving checkout conversion, reducing friction, and increasing trust in a food delivery platform.",
      kpis: [
        { label: "Checkout conversion uplift", value: "+44%" },
        { label: "Cart abandonment", value: "-31%" },
        { label: "Checkout completion time", value: "-42%" }
      ],
      ctaPrimary: "View Case Study",
      ctaSecondary: "Explore Solutions"
    },
    problem: {
      title: "Problem Definition",
      statement: "Users actively add items to cart, but a significant percentage abandon the flow before completing payment.",
      impact: [
        "Revenue loss",
        "Lower conversion",
        "Increased acquisition cost",
        "Reduced retention",
        "Inefficient marketing spend"
      ],
      funnelTitle: "Current Funnel Visibility",
      funnelHighlight: "Major drop-off occurs between Cart and Checkout",
      steps: [
        { name: "Menu visits", value: 100 },
        { name: "Add to cart", value: 42 },
        { name: "Checkout started", value: 18 },
        { name: "Payment completed", value: 9 }
      ]
    },
    research: {
      title: "Research & Analytics",
      cards: [
        {
          title: "Quantitative Analysis",
          items: ["Funnel analysis", "Conversion by step", "Checkout conversion rate", "Time per step", "Cart abandonment rate", "Traffic source analysis"]
        },
        {
          title: "Behavioral Analytics",
          items: ["Heatmaps", "Session replay", "Rage clicks", "Scroll depth", "Error tracking"]
        },
        {
          title: "Qualitative Research",
          items: ["User interviews", "Usability testing", "Pain point mapping", "Customer feedback", "JTBD interviews"]
        },
        {
          title: "Key Metrics",
          items: ["Checkout Conversion Rate", "Cart Abandonment Rate", "Average Order Value", "Time to Complete Order", "Repeat Purchase Rate"]
        }
      ],
      insight: "Users abandon checkout primarily due to hidden fees, checkout friction, and lack of trust before payment.",
      goal: "Increase checkout conversion by reducing friction, cognitive load, and uncertainty."
    },
    hypotheses: {
      title: "Key Hypotheses",
      cards: [
        {
          title: "Hidden Fees",
          desc: "Users see delivery costs and taxes too late in the flow, causing surprise and abandonment.",
          impact: "High"
        },
        {
          title: "High Cognitive Load",
          desc: "Too many checkout steps and input fields increase friction.",
          impact: "High"
        },
        {
          title: "Lack of Trust",
          desc: "Users do not see enough confidence signals before payment (ETA, security, guarantees).",
          impact: "Medium"
        },
        {
          title: "Checkout Distractions",
          desc: "Promotions and secondary actions distract users from completing the order.",
          impact: "Medium"
        }
      ],
      matrixTitle: "Impact vs Effort Matrix"
    },
    solutions: {
      title: "Proposed Solutions",
      s1: {
        title: "Transparent Pricing in Cart",
        items: ["Products", "Delivery fee", "Taxes", "Total price", "ETA"],
        desc: "Reduces uncertainty, increases transparency, lowers abandonment, improves trust.",
        impact: "High",
        effort: "Low"
      },
      s2: {
        title: "One-page Checkout",
        items: ["Address", "Payment method", "Delivery time", "Promo code", "CTA button"],
        desc: "Fewer steps, reduced cognitive load, faster checkout, improved completion rate.",
        impact: "High",
        effort: "Medium"
      },
      s3: {
        title: "Smart Reminders & Trust Signals",
        items: ["Order reminder", "Delivery ETA", "Secure payment label", "Refund guarantee"],
        desc: "Increases motivation, reinforces trust, improves checkout completion.",
        impact: "Medium",
        effort: "Low"
      }
    },
    behavioral: {
      title: "Behavioral Design Principles",
      principles: [
        { title: "Progressive Disclosure", desc: "Show information only when needed to lower cognitive load." },
        { title: "Cognitive Load Reduction", desc: "Minimize the number of choices and visual noise." },
        { title: "Visual Hierarchy", desc: "Guide users' eyes to the most important actions logicially." },
        { title: "Predictability Principle", desc: "Users should know exactly what happens after an action." },
        { title: "Fogg Behavior Model", desc: "Motivation, Ability, and Prompt must converge for a behavior." },
        { title: "Scarcity Effect", desc: "People value things more when they are perceived as limited or rare." },
        { title: "Social Proof", desc: "People tend to follow the actions of others in uncertain situations." },
        { title: "Zeigarnik Effect", desc: "People remember uncompleted tasks better than completed ones." },
        { title: "Cognitive Ease", desc: "Preference for things that are easy to think about and understand." },
        { title: "Framing Effect", desc: "The way information is presented affects processing." }
      ]
    },
    results: {
      title: "Success Metrics & Validation",
      table: {
        headers: ["Metric", "Baseline", "Target", "Improvement"],
        rows: [
          ["Checkout Conversion Rate", "9%", "13%", "+44%"],
          ["Cart Abandonment Rate", "58%", "40%", "-31%"],
          ["Time to Complete Order", "4m 20s", "2m 30s", "-42%"],
          ["Repeat Purchase Rate", "18%", "24%", "+33%"],
          ["Average Order Value", "$23.40", "$25.50", "+9%"]
        ]
      },
      validation: {
        title: "Validation Plan",
        plans: [
          { title: "A/B Testing", desc: "Compare redesigned checkout vs current version." },
          { title: "Cohort Analysis", desc: "Analyze behavioral changes over 7–14 days." },
          { title: "Retention Monitoring", desc: "Track repeat purchases after implementation." }
        ]
      }
    },
    nextSteps: {
      title: "Next Steps",
      steps: [
        "Align & prioritize hypotheses",
        "Design user flows & prototypes",
        "Test & validate solutions",
        "Launch A/B tests",
        "Measure & optimize"
      ]
    }
  },
  ru: {
    nav: {
      caseStudy: "Довиденко Станислав",
      process: "Процесс",
      solutions: "Решения",
      results: "Результаты"
    },
    common: {
      tag: "Оптимизация корзины • Продуктовый дизайн • 2026",
      explore: "Исследовать решения",
      fullDoc: "Полный документ",
      viewAll: "Смотреть все принципы",
      close: "Закрыть",
      footerTag: "Кейс по продуктовому дизайну",
      confidential: "Портфолио 2026 • Станислав Довиденко"
    },
    hero: {
      headline: "Снижение количества брошенных корзин",
      subheadline: "UX/продуктовый кейс, направленный на улучшение конверсии чекаута, снижение трения и повышение доверия в приложении доставки еды.",
      kpis: [
        { label: "Рост конверсии чекаута", value: "+44%" },
        { label: "Снижение количества брошенных корзин", value: "-31%" },
        { label: "Время завершения заказа", value: "-42%" }
      ],
      ctaPrimary: "Смотреть кейс",
      ctaSecondary: "Исследовать решения"
    },
    problem: {
      title: "Определение проблемы",
      statement: "Пользователи активно добавляют товары в корзину, но значительный процент уходит из воронки до оплаты.",
      impact: [
        "Потеря выручки",
        "Низкая конверсия",
        "Рост стоимости привлечения",
        "Снижение удержания",
        "Неэффективный маркетинг"
      ],
      funnelTitle: "Текущая воронка",
      funnelHighlight: "Основной отток происходит между корзиной и оформлением",
      steps: [
        { name: "Визиты в меню", value: 100 },
        { name: "Добавили в корзину", value: 42 },
        { name: "Начали чекаут", value: 18 },
        { name: "Оплата завершена", value: 9 }
      ]
    },
    research: {
      title: "Исследования и аналитика",
      cards: [
        {
          title: "Количественный анализ",
          items: ["Анализ воронки", "Конверсия по шагам", "Checkout rate", "Время на шаг", "Cart abandonment", "Анализ трафика"]
        },
        {
          title: "Поведенческая аналитика",
          items: ["Тепловые карты", "Записи сессий", "Rage clicks", "Глубина скролла", "Трекинг ошибок"]
        },
        {
          title: "Качественные исследования",
          items: ["Интервью", "Юзабилити-тесты", "Карта болей", "Фидбек клиентов", "JTBD-интервью"]
        },
        {
          title: "Ключевые метрики",
          items: ["Checkout Conversion", "Cart Abandonment", "Average Order Value", "Time to Order", "Repeat Purchase Rate"]
        }
      ],
      insight: "Пользователи уходят в основном из-за скрытых комиссий, сложности чекаута и отсутствия доверия.",
      goal: "Увеличить конверсию чекаута за счет снижения трения, когнитивной нагрузки и неопределенности."
    },
    hypotheses: {
      title: "Ключевые гипотезы",
      cards: [
        {
          title: "Скрытые комиссии",
          desc: "Стоимость доставки и налоги видны слишком поздно, что вызывает удивление и уход.",
          impact: "Высокий"
        },
        {
          title: "Высокая нагрузка",
          desc: "Слишком много шагов и полей ввода увеличивают трение.",
          impact: "Высокая"
        },
        {
          title: "Низкое доверие",
          desc: "Недостаточно сигналов уверенности (ETA, безопасность, гарантии) до оплаты.",
          impact: "Среднее"
        },
        {
          title: "Отвлекающие факторы",
          desc: "Промо-акции и вторичные действия отвлекают от завершения заказа.",
          impact: "Среднее"
        }
      ],
      matrixTitle: "Матрица Влияния и Усилий"
    },
    solutions: {
      title: "Предлагаемые решения",
      s1: {
        title: "Прозрачное ценообразование",
        items: ["Товары", "Доставка", "Налоги", "Итого", "ETA"],
        desc: "Снижает неопределенность, повышает прозрачность и доверие.",
        impact: "Высокий",
        effort: "Низкие"
      },
      s2: {
        title: "Одностраничный чекаут",
        items: ["Адрес", "Метод оплаты", "Время доставки", "Промокод", "Кнопка заказа"],
        desc: "Меньше шагов, меньше нагрузки, быстрее оформление.",
        impact: "Высокий",
        effort: "Средние"
      },
      s3: {
        title: "Смарт-напоминания и доверие",
        items: ["Напоминание", "Delivery ETA", "Safe payment", "Refund guarantee"],
        desc: "Повышает мотивацию и закрепляет уверенность пользователя.",
        impact: "Средний",
        effort: "Низкие"
      }
    },
    behavioral: {
      title: "Принципы поведенческого дизайна",
      principles: [
        { title: "Progressive Disclosure", desc: "Показ информации только по мере необходимости." },
        { title: "Снижение когнитивной нагрузки", desc: "Минимизация выбора и визуального шума." },
        { title: "Визуальная иерархия", desc: "Логичное направление взгляда к важным действиям." },
        { title: "Принцип предсказуемости", desc: "Пользователь понимает, что произойдет после действия." },
        { title: "Модель Фогга", desc: "Мотивация, возможность и триггер должны сойтись в одной точке." },
        { title: "Эффект дефицита", desc: "Люди больше ценят то, что воспринимается как ограниченное." },
        { title: "Социальное доказательство", desc: "Склонность следовать действиям других людей." },
        { title: "Эффект Зейгарник", desc: "Незавершенные задачи запоминаются лучше, чем завершенные." },
        { title: "Когнитивная легкость", desc: "Предпочтение простых и понятных паттернов." },
        { title: "Эффект фрейминга", desc: "Форма подачи информации влияет на восприятие." }
      ]
    },
    results: {
      title: "Метрики успеха и валидация",
      table: {
        headers: ["Метрика", "База", "Цель", "Улучшение"],
        rows: [
          ["Checkout Conversion Rate", "9%", "13%", "+44%"],
          ["Cart Abandonment Rate", "58%", "40%", "-31%"],
          ["Time to Complete Order", "4м 20с", "2м 30с", "-42%"],
          ["Repeat Purchase Rate", "18%", "24%", "+33%"],
          ["Average Order Value", "$23.40", "$25.50", "+9%"]
        ]
      },
      validation: {
        title: "План валидации",
        plans: [
          { title: "A/B Тестирование", desc: "Сравнение нового чекаута с текущей версией." },
          { title: "Когортный анализ", desc: "Анализ поведения за 7–14 дней." },
          { title: "Мониторинг удержания", desc: "Отслеживание повторных покупок." }
        ]
      }
    },
    nextSteps: {
      title: "Следующие шаги",
      steps: [
        "Приоритизация гипотез",
        "Проектирование флоу и прототипов",
        "Тестирование решений",
        "Запуск A/B тестов",
        "Измерение и оптимизация"
      ]
    }
  }
};
