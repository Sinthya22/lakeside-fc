/* =============================================================
   Lakeside FC — Site translations
   -------------------------------------------------------------
   Every element in index.html with a data-i18n="key" attribute
   gets its text from this object. To change any text on the
   site, edit it here (English under "en", Spanish under "es").
   Keep the same keys in both languages.
   ============================================================= */

const TRANSLATIONS = {
  en: {
    "meta.title": "Lakeside FC | Recreational Youth Soccer in Etobicoke",
    "a11y.skip": "Skip to main content",
    tagline: "Play. Grow. Belong.",

    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.programs": "Programs",
    "nav.contact": "Contact",
    "nav.menu": "Open menu",
    "nav.menuClose": "Close menu",

    // Buttons
    "buttons.register": "Register Now",
    "buttons.viewPrograms": "View Programs",

    // Hero
    "hero.titleLead": "Welcome to",
    "hero.text":
      "Where young athletes in Etobicoke discover their potential, build friendships, and fall in love with the beautiful game — training at Centennial Park.",

    // Why Choose Lakeside FC?
    "why.title": "Why Choose Lakeside FC?",
    "why.intro":
      "We're a friendly recreational club dedicated to helping every young athlete enjoy the game, make friends, and grow at their own pace.",
    "why.card1.title": "Friendly Coaches",
    "why.card1.text": "Caring, experienced coaches who make every kid feel welcome on the field.",
    "why.card2.title": "Community Spirit",
    "why.card2.text": "A friendly club where kids make friends and learn to play together.",
    "why.card3.title": "Fun Comes First",
    "why.card3.text": "A relaxed, positive environment where kids love to learn and play.",
    "why.card4.title": "Growing at Their Own Pace",
    "why.card4.text": "Age-appropriate activities that build confidence, one game at a time.",

    // Programs
    "programs.title": "Programs for Every Age",
    "programs.intro":
      "From first kicks to recreational league play — there's a Lakeside FC program for every child.",
    "programs.p1.ages": "Ages 6-8",
    "programs.p1.text":
      "Introduction to soccer through fun games and basic skills. Focus on coordination, following instructions, and making friends.",
    "programs.p1.item1": "45-minute sessions",
    "programs.p1.item2": "Small group activities",
    "programs.p1.item3": "Parent participation welcome",
    "programs.p2.ages": "Ages 9-12",
    "programs.p2.text":
      "Developing technical skills and understanding of the game. Introduction to positions and basic tactics.",
    "programs.p2.item1": "60-minute training sessions",
    "programs.p2.item2": "Friendly matches",
    "programs.p2.item3": "Skills challenges and tournaments",
    "programs.p3.ages": "Ages 13-15",
    "programs.p3.text":
      "Advanced training and competitive play. Focus on teamwork, strategy, and preparing for high school soccer.",
    "programs.p3.item1": "90-minute training sessions",
    "programs.p3.item2": "League competitions",
    "programs.p3.item3": "Leadership development",

    // Call to action
    "cta.title": "Ready to Join the Lakeside FC Family?",
    "cta.text": "Registration is now open! Fill out the form below and we'll get back to you soon.",

    // Footer
    "footer.about": "A recreational youth soccer club training at Centennial Park, Etobicoke, since 2024.",
    "footer.programsTitle": "Our Programs",
    "footer.link1": "Lakeside Academy (Ages 6-8)",
    "footer.link2": "Lakeside Strikers (Ages 9-12)",
    "footer.link3": "Lakeside FC Elite (Ages 13-15)",
    "footer.contactTitle": "Contact",
    "footer.copyright": "© 2026 Lakeside FC. All rights reserved.",

    // Contact form
    "form.title": "Get in Touch",
    "form.firstName": "First Name",
    "form.lastName": "Last Name",
    "form.email": "Email",
    "form.message": "Message",
    "form.submit": "Submit",
    "form.sending": "Sending...",
    "form.errorRequired": "Please fill out all fields.",
    "form.errorEmail": "Please enter a valid email address.",
    "form.success": "Thank you! Your message has been sent. We'll get back to you soon.",
    "form.mailtoOpened": "Your email app has opened with your message. Just press send!",
    "form.errorSend": "Something went wrong. Please email us at info@lakesidefc.ca.",
    "form.emailSubject": "Lakeside FC website inquiry",
  },

  es: {
    "meta.title": "Lakeside FC | Fútbol juvenil recreativo en Etobicoke",
    "a11y.skip": "Saltar al contenido principal",
    tagline: "Juega. Crece. Pertenece.",

    // Navigation
    "nav.home": "Inicio",
    "nav.about": "Nosotros",
    "nav.programs": "Programas",
    "nav.contact": "Contacto",
    "nav.menu": "Abrir menú",
    "nav.menuClose": "Cerrar menú",

    // Buttons
    "buttons.register": "Regístrate",
    "buttons.viewPrograms": "Ver programas",

    // Hero
    "hero.titleLead": "Bienvenido a",
    "hero.text":
      "Donde los jóvenes atletas de Etobicoke descubren su potencial, construyen amistades y se enamoran del hermoso juego — entrenando en Centennial Park.",

    // Why Choose Lakeside FC?
    "why.title": "¿Por qué elegir Lakeside FC?",
    "why.intro":
      "Somos un club recreativo y cercano, dedicado a que cada joven atleta disfrute el juego, haga amigos y crezca a su propio ritmo.",
    "why.card1.title": "Entrenadores cercanos",
    "why.card1.text":
      "Entrenadores comprensivos y con experiencia que hacen sentir bienvenido a cada niño en la cancha.",
    "why.card2.title": "Espíritu comunitario",
    "why.card2.text": "Un club cercano donde los niños hacen amigos y aprenden a jugar en equipo.",
    "why.card3.title": "La diversión primero",
    "why.card3.text": "Un ambiente relajado y positivo donde los niños aman aprender y jugar.",
    "why.card4.title": "Crecer a su propio ritmo",
    "why.card4.text": "Actividades apropiadas para cada edad que generan confianza, un juego a la vez.",

    // Programs
    "programs.title": "Programas para cada edad",
    "programs.intro":
      "Desde los primeros pases hasta la liga recreativa — hay un programa de Lakeside FC para cada niño.",
    "programs.p1.ages": "6-8 años",
    "programs.p1.text":
      "Introducción al fútbol mediante juegos divertidos y habilidades básicas. Enfoque en coordinación, seguir instrucciones y hacer amigos.",
    "programs.p1.item1": "Sesiones de 45 minutos",
    "programs.p1.item2": "Actividades en grupos pequeños",
    "programs.p1.item3": "Participación de padres bienvenida",
    "programs.p2.ages": "9-12 años",
    "programs.p2.text":
      "Desarrollo de habilidades técnicas y comprensión del juego. Introducción a posiciones y tácticas básicas.",
    "programs.p2.item1": "Sesiones de 60 minutos",
    "programs.p2.item2": "Partidos amistosos",
    "programs.p2.item3": "Retos de habilidad y torneos",
    "programs.p3.ages": "13-15 años",
    "programs.p3.text":
      "Entrenamiento avanzado y juego competitivo. Enfoque en trabajo en equipo, estrategia y preparación para el fútbol de secundaria.",
    "programs.p3.item1": "Sesiones de 90 minutos",
    "programs.p3.item2": "Competencias de liga",
    "programs.p3.item3": "Desarrollo de liderazgo",

    // Call to action
    "cta.title": "¿Listo para unirte a la familia Lakeside FC?",
    "cta.text":
      "¡Las inscripciones ya están abiertas! Completa el formulario y nos pondremos en contacto contigo pronto.",

    // Footer
    "footer.about":
      "Un club recreativo de fútbol juvenil que entrena en Centennial Park, Etobicoke, desde 2024.",
    "footer.programsTitle": "Nuestros programas",
    "footer.link1": "Lakeside Academy (6-8 años)",
    "footer.link2": "Lakeside Strikers (9-12 años)",
    "footer.link3": "Lakeside FC Elite (13-15 años)",
    "footer.contactTitle": "Contacto",
    "footer.copyright": "© 2026 Lakeside FC. Todos los derechos reservados.",

    // Contact form
    "form.title": "Contáctanos",
    "form.firstName": "Nombre",
    "form.lastName": "Apellido",
    "form.email": "Correo electrónico",
    "form.message": "Mensaje",
    "form.submit": "Enviar",
    "form.sending": "Enviando...",
    "form.errorRequired": "Por favor completa todos los campos.",
    "form.errorEmail": "Por favor ingresa un correo electrónico válido.",
    "form.success": "¡Gracias! Tu mensaje fue enviado. Nos pondremos en contacto contigo pronto.",
    "form.mailtoOpened": "Se abrió tu aplicación de correo con tu mensaje. ¡Solo presiona enviar!",
    "form.errorSend": "Algo salió mal. Escríbenos a info@lakesidefc.ca.",
    "form.emailSubject": "Consulta desde el sitio web de Lakeside FC",
  },
};
