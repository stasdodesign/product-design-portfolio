(function (global) {
  // Comprehensive dark-pattern dataset synthesized from major UX/privacy/product taxonomies.
  // There is no single universal canonical "all patterns" list, so this file uses a unified superset.
  const CASES = {
    GENERAL: ["Dark Patterns: Ethics vs KPI"],
    PRICING: ["Dark Patterns: Ethics vs KPI", "Yandex Bank: Super Split"],
    SUBSCRIPTION: ["Dark Patterns: Ethics vs KPI", "Sber: Ecosystem Subscriptions"],
    VISUAL: ["Dark Patterns: Ethics vs KPI", "Plata Fintech Audit"]
  };

  const patterns = [
    {
      name: "Aesthetic Manipulation",
      description: "Продукт использует приятную, доверительную или премиальную визуальную подачу, чтобы замаскировать риск, цену или невыгодный выбор.",
      category: "Visual Manipulation",
      relatedCases: CASES.VISUAL
    },
    {
      name: "Activity Messages",
      description: "Сообщения о якобы недавней активности других пользователей подталкивают к поспешному действию через эффект толпы.",
      category: "Social Manipulation",
      relatedCases: CASES.PRICING
    },
    {
      name: "Addictive Autoplay",
      description: "Следующая единица контента запускается автоматически, сокращая момент осознанного выбора и удлиняя сессию.",
      category: "Attention Capture",
      relatedCases: CASES.GENERAL
    },
    {
      name: "Asymmetric Choice",
      description: "Согласие сделано крупным, ярким и простым, а отказ визуально ослаблен, спрятан или требует больше усилий.",
      category: "Interface Interference",
      relatedCases: CASES.GENERAL
    },
    {
      name: "Attention Capture",
      description: "Интерфейс непрерывно борется за внимание пользователя и мешает спокойно завершить задачу или остановиться.",
      category: "Attention Capture",
      relatedCases: CASES.GENERAL
    },
    {
      name: "Bait and Switch",
      description: "Знакомое действие или контроль приводит к другому результату, выгодному продукту, а не пользователю.",
      category: "Task Flow Control",
      relatedCases: CASES.GENERAL
    },
    {
      name: "Bundled Consent",
      description: "Несколько разных согласий объединяются в один пакет без возможности принять необходимое и отказаться от лишнего.",
      category: "Consent & Privacy",
      relatedCases: CASES.GENERAL
    },
    {
      name: "Comparison Prevention",
      description: "Пользователю мешают честно сравнить тарифы, альтернативы, сроки или реальные различия между опциями.",
      category: "Information Asymmetry",
      relatedCases: CASES.VISUAL
    },
    {
      name: "Confirmshaming",
      description: "Текст отказа формулируется так, чтобы вызывать вину, страх, стыд или ощущение глупого выбора.",
      category: "Social Manipulation",
      relatedCases: CASES.GENERAL
    },
    {
      name: "Consent Wall",
      description: "Доступ к сервису или базовой функции блокируется, пока пользователь не согласится на лишний сбор данных или трекинг.",
      category: "Consent & Privacy",
      relatedCases: CASES.GENERAL
    },
    {
      name: "Countdown Timers",
      description: "Таймер создаёт давление по времени даже тогда, когда реальной срочности у предложения нет.",
      category: "Checkout & Pricing",
      relatedCases: CASES.PRICING
    },
    {
      name: "Default Bias Exploitation",
      description: "По умолчанию включаются настройки, полезные продукту, с расчётом на то, что пользователь не станет их менять.",
      category: "Interface Interference",
      relatedCases: CASES.GENERAL
    },
    {
      name: "Disguised Ads",
      description: "Реклама маскируется под обычную навигацию, органический контент или безопасный элемент интерфейса.",
      category: "Interface Interference",
      relatedCases: CASES.GENERAL
    },
    {
      name: "Disguised Interaction",
      description: "Интерактивный элемент выглядит как безобидный UI-компонент, хотя запускает значимое или нежелательное действие.",
      category: "Interface Interference",
      relatedCases: CASES.GENERAL
    },
    {
      name: "Drip Pricing",
      description: "Итоговая стоимость раскрывается частями по мере движения к оплате, из-за чего цена сначала кажется заметно ниже.",
      category: "Checkout & Pricing",
      relatedCases: CASES.PRICING
    },
    {
      name: "Emotion Steering",
      description: "Продукт использует страх, надежду, чувство вины или тревогу, чтобы направить выбор сильнее рациональных аргументов.",
      category: "Social Manipulation",
      relatedCases: CASES.GENERAL
    },
    {
      name: "Fake Reviews & Testimonials",
      description: "Фальшивые, нерепрезентативные или искусственно отобранные отзывы создают ложное чувство доверия.",
      category: "Social Manipulation",
      relatedCases: CASES.GENERAL
    },
    {
      name: "Fake Scarcity",
      description: "Ложное ощущение ограниченности предложения подталкивает к покупке или согласию быстрее, чем пользователь хотел бы.",
      category: "Checkout & Pricing",
      relatedCases: CASES.PRICING
    },
    {
      name: "Fake Social Proof",
      description: "Поддельные сигналы популярности создают впечатление, что большинство уже выбрало нужный продукту вариант.",
      category: "Social Manipulation",
      relatedCases: CASES.PRICING
    },
    {
      name: "Fake Urgency",
      description: "Ложное ощущение срочности создаётся через временные ограничения, которых в действительности нет.",
      category: "Checkout & Pricing",
      relatedCases: CASES.PRICING
    },
    {
      name: "False Hierarchy",
      description: "Визуальная иерархия специально искажает значимость вариантов, чтобы нужный бизнесу путь воспринимался как естественный.",
      category: "Visual Manipulation",
      relatedCases: CASES.VISUAL
    },
    {
      name: "Fickle",
      description: "Интерфейс непоследовательно меняет логику, формулировки или расположение элементов в критический момент, сбивая пользователя.",
      category: "Task Flow Control",
      relatedCases: CASES.GENERAL
    },
    {
      name: "Forced Action",
      description: "Чтобы получить базовый результат, пользователь вынужден выполнить дополнительное действие, которое полезно продукту, а не ему.",
      category: "Task Flow Control",
      relatedCases: CASES.GENERAL
    },
    {
      name: "Forced Continuity",
      description: "Подписка или платный режим продолжаются автоматически после пробного периода без действительно ясного и своевременного контроля.",
      category: "Subscription & Retention",
      relatedCases: CASES.SUBSCRIPTION
    },
    {
      name: "Forced Enrollment",
      description: "Пользователя автоматически втягивают в подписку, trial, клуб, бонусную программу или режим обмена данными.",
      category: "Subscription & Retention",
      relatedCases: CASES.SUBSCRIPTION
    },
    {
      name: "Forced Registration",
      description: "Базовое действие нельзя завершить без создания аккаунта, хотя регистрация технически не необходима.",
      category: "Task Flow Control",
      relatedCases: CASES.GENERAL
    },
    {
      name: "Forced Update",
      description: "Доступ к сервису, данным или устройству ограничивается до тех пор, пока пользователь не примет обновление или новый пакет условий.",
      category: "Task Flow Control",
      relatedCases: CASES.GENERAL
    },
    {
      name: "Friend Spam",
      description: "Продукт отправляет приглашения или сообщения от имени пользователя либо подталкивает к агрессивному импорту контактов.",
      category: "Growth & Virality",
      relatedCases: CASES.GENERAL
    },
    {
      name: "Gamified Loss Aversion",
      description: "Прогресс, бонусы или статус показываются так, чтобы пользователь боялся потерять накопленное и продолжал взаимодействие.",
      category: "Behavioral Conditioning",
      relatedCases: CASES.GENERAL
    },
    {
      name: "Hard to Cancel",
      description: "Отмена продукта, подписки или услуги заметно длиннее, сложнее и менее очевидна, чем подключение.",
      category: "Subscription & Retention",
      relatedCases: ["Sber: Ecosystem Subscriptions", "Yandex Bank: Super Split"]
    },
    {
      name: "Hidden Costs",
      description: "Дополнительные комиссии, сборы или обязательные условия появляются слишком поздно, когда пользователь уже почти завершил действие.",
      category: "Checkout & Pricing",
      relatedCases: CASES.PRICING
    },
    {
      name: "Hidden Defaults",
      description: "Важные настройки заранее включены, но спрятаны глубоко в интерфейсе и редко пересматриваются пользователем.",
      category: "Consent & Privacy",
      relatedCases: CASES.GENERAL
    },
    {
      name: "Hidden Information",
      description: "Существенная информация вынесена в мелкий шрифт, второстепенные вкладки, раскрывашки или поздние шаги.",
      category: "Information Asymmetry",
      relatedCases: CASES.GENERAL
    },
    {
      name: "Hidden Opt-Out",
      description: "Путь отказа существует, но спрятан так глубоко или назван так неочевидно, что большинство пользователей его не находит.",
      category: "Consent & Privacy",
      relatedCases: CASES.SUBSCRIPTION
    },
    {
      name: "Hidden Subscription",
      description: "Переход на подписочную модель или автоматическую оплату скрывается в второстепенном тексте или неявном шаге.",
      category: "Subscription & Retention",
      relatedCases: CASES.SUBSCRIPTION
    },
    {
      name: "Hidden Terms",
      description: "Ключевые ограничения, последствия или юридически значимые условия спрятаны так, что пользователь почти наверняка их пропустит.",
      category: "Information Asymmetry",
      relatedCases: CASES.GENERAL
    },
    {
      name: "High-Demand Messages",
      description: "Сообщения вроде 'сейчас смотрят 24 человека' или 'купили 11 раз сегодня' стимулируют давление через групповое поведение.",
      category: "Social Manipulation",
      relatedCases: CASES.PRICING
    },
    {
      name: "Hindering",
      description: "Продукт специально добавляет лишние шаги, задержки или разрывы потока на пути к отказу, защите данных или выходу.",
      category: "Task Flow Control",
      relatedCases: CASES.GENERAL
    },
    {
      name: "Infinite Scroll",
      description: "Лента без естественной точки остановки затягивает пользователя в более длинную сессию, чем он изначально планировал.",
      category: "Attention Capture",
      relatedCases: CASES.GENERAL
    },
    {
      name: "Interface Interference",
      description: "Общая группа приёмов, где форма интерфейса работает против намерений пользователя и в пользу бизнес-метрики.",
      category: "Interface Interference",
      relatedCases: CASES.VISUAL
    },
    {
      name: "Intermittent Rewards",
      description: "Непредсказуемые награды удерживают пользователя дольше, чем это оправдано его реальной целью.",
      category: "Behavioral Conditioning",
      relatedCases: CASES.GENERAL
    },
    {
      name: "Left in the Dark",
      description: "Пользователю не дают достаточной прозрачности о сборе данных, состоянии подписки, последствиях выбора или логике системы.",
      category: "Information Asymmetry",
      relatedCases: CASES.GENERAL
    },
    {
      name: "Loot Box Monetization",
      description: "Рандомизированные покупки маскируют реальную вероятность выигрыша и стоимость нужного результата.",
      category: "Behavioral Conditioning",
      relatedCases: CASES.GENERAL
    },
    {
      name: "Low-Stock Messages",
      description: "Сообщения о почти закончившемся товаре или месте в очереди создают дефицит, который может быть искусственным.",
      category: "Checkout & Pricing",
      relatedCases: CASES.PRICING
    },
    {
      name: "Misdirection",
      description: "Визуальный акцент направляет внимание к нужной бизнесу опции, а более полезный пользователю выбор становится менее заметным.",
      category: "Visual Manipulation",
      relatedCases: CASES.VISUAL
    },
    {
      name: "Nagging",
      description: "Повторяющиеся запросы, баннеры и модальные окна изматывают пользователя, пока он не согласится с нужным действием.",
      category: "Attention Capture",
      relatedCases: CASES.GENERAL
    },
    {
      name: "Negative Option Billing",
      description: "Плата взимается автоматически, если пользователь не совершил активный отказ в короткое или неочевидное время.",
      category: "Subscription & Retention",
      relatedCases: CASES.SUBSCRIPTION
    },
    {
      name: "Notification Pressure",
      description: "Серия push- и in-app-уведомлений возвращает пользователя в продукт через чувство срочности, долга или страха пропустить важное.",
      category: "Attention Capture",
      relatedCases: CASES.GENERAL
    },
    {
      name: "Obstruction",
      description: "Преднамеренная фрикция мешает выполнить невыгодное продукту действие: отказаться, удалить, экспортировать или закрыть.",
      category: "Task Flow Control",
      relatedCases: CASES.GENERAL
    },
    {
      name: "Overloading",
      description: "Пользователя перегружают количеством вариантов, настроек и запросов, чтобы он быстрее согласился с default-путём.",
      category: "Consent & Privacy",
      relatedCases: CASES.GENERAL
    },
    {
      name: "Preselection",
      description: "Флажки, согласия или дополнительные услуги уже выбраны за пользователя до того, как он начал взаимодействие.",
      category: "Interface Interference",
      relatedCases: CASES.PRICING
    },
    {
      name: "Price Partitioning",
      description: "Цена искусственно дробится на более мелкие части, чтобы казаться ниже и менее значимой.",
      category: "Checkout & Pricing",
      relatedCases: CASES.PRICING
    },
    {
      name: "Privacy Maze",
      description: "Настройки приватности распределены по сложной, нелогичной навигации и требуют несоразмерно много времени на настройку.",
      category: "Consent & Privacy",
      relatedCases: CASES.GENERAL
    },
    {
      name: "Privacy Zuckering",
      description: "Пользователя убеждают поделиться заметно большим объёмом данных, чем необходимо для текущей задачи.",
      category: "Consent & Privacy",
      relatedCases: CASES.GENERAL
    },
    {
      name: "Pull-to-Refresh Loop",
      description: "Жест обновления превращает проверку ленты или статуса в компульсивный цикл ожидания новой награды.",
      category: "Attention Capture",
      relatedCases: CASES.GENERAL
    },
    {
      name: "Question Shaping",
      description: "Формулировка вопроса направляет к нужному ответу и искажает ощущение свободного выбора.",
      category: "Interface Interference",
      relatedCases: CASES.GENERAL
    },
    {
      name: "Recommendation Rabbit Hole",
      description: "Рекомендательная система последовательно уводит пользователя в бесконечную цепочку контента без ясной точки остановки.",
      category: "Attention Capture",
      relatedCases: CASES.GENERAL
    },
    {
      name: "Red-Dot Notifications",
      description: "Красные бейджи и индикаторы непрочитанного создают постоянное чувство незавершённости и подталкивают к возврату.",
      category: "Attention Capture",
      relatedCases: CASES.GENERAL
    },
    {
      name: "Roach Motel",
      description: "Войти в сервис, включить опцию или оформить продукт легко, а выйти, отменить или отключить заметно сложнее.",
      category: "Subscription & Retention",
      relatedCases: CASES.SUBSCRIPTION
    },
    {
      name: "Skip Path Suppression",
      description: "Путь 'пропустить', 'не сейчас' или 'только необходимое' ослаблен, спрятан или визуально наказан.",
      category: "Task Flow Control",
      relatedCases: CASES.GENERAL
    },
    {
      name: "Skipping",
      description: "Структура flow устроена так, что пользователь легко пропускает критически важную информацию, не замечая этого.",
      category: "Information Asymmetry",
      relatedCases: CASES.GENERAL
    },
    {
      name: "Sneak into Basket",
      description: "Пользователю незаметно добавляют дополнительную услугу, опцию или продукт прямо в момент оформления.",
      category: "Checkout & Pricing",
      relatedCases: CASES.PRICING
    },
    {
      name: "Sneaking",
      description: "Условия, выборы или дополнительные действия меняются скрытно и без заметного, честного уведомления пользователя.",
      category: "Interface Interference",
      relatedCases: CASES.GENERAL
    },
    {
      name: "Social Brokering",
      description: "Социальные связи, контакты, общие друзья или перенос адресной книги используются как рычаг давления и распространения.",
      category: "Growth & Virality",
      relatedCases: CASES.GENERAL
    },
    {
      name: "Social Proof Inflation",
      description: "Метрики популярности преувеличены, нерепрезентативны или подобраны манипулятивно, чтобы завысить доверие.",
      category: "Social Manipulation",
      relatedCases: CASES.GENERAL
    },
    {
      name: "Stirring",
      description: "Язык, цвет, тон и framing специально разогревают эмоции, мешая нейтральному и взвешенному решению.",
      category: "Social Manipulation",
      relatedCases: CASES.GENERAL
    },
    {
      name: "Streaks",
      description: "Серии посещений или действий превращают возврат в моральное обязательство не 'сломать цепочку'.",
      category: "Behavioral Conditioning",
      relatedCases: CASES.GENERAL
    },
    {
      name: "Subscription Trap",
      description: "Подписка спроектирована так, чтобы вход казался безопасным и дешёвым, а удержание происходило за счёт инерции и фрикции.",
      category: "Subscription & Retention",
      relatedCases: CASES.SUBSCRIPTION
    },
    {
      name: "Trick Questions",
      description: "Запутанные вопросы, двойные отрицания и сбивающие формулировки заставляют согласиться вопреки намерению.",
      category: "Interface Interference",
      relatedCases: CASES.GENERAL
    },
    {
      name: "Trick Wording",
      description: "Формально корректная, но намеренно двусмысленная формулировка вводит в заблуждение о смысле выбора.",
      category: "Information Asymmetry",
      relatedCases: CASES.GENERAL
    },
    {
      name: "Visual Interference",
      description: "Цвет, контраст, размер и порядок элементов мешают заметить нежелательные для продукта, но важные для пользователя опции.",
      category: "Visual Manipulation",
      relatedCases: CASES.VISUAL
    },
    {
      name: "Visual Noise",
      description: "Избыточная плотность интерфейса, конкурирующие блоки и плохая группировка делают важные решения менее прозрачными.",
      category: "Visual Manipulation",
      relatedCases: CASES.VISUAL
    }
  ].sort((a, b) => a.name.localeCompare(b.name, "en"));

  function normalizeValue(value) {
    return String(value || "").trim().toLowerCase();
  }

  function clonePattern(pattern) {
    return {
      ...pattern,
      description: pattern.description && typeof pattern.description === "object" && !Array.isArray(pattern.description)
        ? { ...pattern.description }
        : pattern.description,
      relatedCases: [...pattern.relatedCases]
    };
  }

  function getAllPatterns() {
    return patterns.map(clonePattern);
  }

  function getCategories() {
    return [...new Set(patterns.map((pattern) => pattern.category))].sort((a, b) => a.localeCompare(b, "en"));
  }

  function getPatternsByCategory(category) {
    const normalizedCategory = normalizeValue(category);

    if (!normalizedCategory) {
      return getAllPatterns();
    }

    return getAllPatterns().filter(
      (pattern) => normalizeValue(pattern.category) === normalizedCategory
    );
  }

  function getPatternsByLetter(letter) {
    const normalizedLetter = normalizeValue(letter).charAt(0);

    if (!normalizedLetter) {
      return getAllPatterns();
    }

    return getAllPatterns().filter(
      (pattern) => normalizeValue(pattern.name).startsWith(normalizedLetter)
    );
  }

  function searchPatterns(query) {
    const normalizedQuery = normalizeValue(query);

    if (!normalizedQuery) {
      return getAllPatterns();
    }

    return getAllPatterns().filter((pattern) => {
      const descriptionText = typeof pattern.description === "string"
        ? pattern.description
        : [pattern.description?.ru, pattern.description?.en].filter(Boolean).join(" ");
      const searchableText = [
        pattern.name,
        descriptionText,
        pattern.category,
        pattern.relatedCases.join(" ")
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(normalizedQuery);
    });
  }

  global.patternStore = {
    patterns: getAllPatterns(),
    getAllPatterns,
    getCategories,
    getPatternsByCategory,
    getPatternsByLetter,
    searchPatterns
  };
})(window);
