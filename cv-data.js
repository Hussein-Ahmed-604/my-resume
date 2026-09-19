// ============================================
// CV DATA - البيانات المستخدمة لتوليد ملف PDF
// ============================================

const cvData = {
    en: {
        name: "Hussein Ahmed",
        title: "Software Engineer",
        contacts: {
            email: "ahmedhussejn07@gmail.com",
            phone: "+7 922 701 67 84",
            github: "github.com/Hussein-Ahmed-604",
            telegram: "@HusseinAhmed15"
        },
        sections: {
            summary: {
                title: "Professional Summary",
                text: "Software Engineering graduate from South Ural State University (2026). Skilled in Java, Python, Kotlin, SQL, C#. Experienced in developing web applications with Spring Boot, mobile applications on Android, and 1C configurations for business automation."
            },
            skills: {
                title: "Technical Skills",
                items: [
                    { category: "Languages", list: "Java, Python, Kotlin, C#, SQL" },
                    { category: "Frameworks", list: "Spring Boot, JPA, Spring Security" },
                    { category: "Databases", list: "MySQL, PostgreSQL" },
                    { category: "Tools", list: "Git, Docker, IntelliJ IDEA, Android Studio" },
                    { category: "Other", list: "1C:Enterprise 8.3, REST API, JWT" }
                ]
            },
            projects: {
                title: "Projects",
                items: [
                    {
                        name: "E-commerce Store",
                        desc: "Web application on Java + Spring Boot with MySQL, REST API, authentication, and admin panel.",
                        tech: "Java, Spring Boot, MySQL"
                    },
                    {
                        name: "Bank Card Management",
                        desc: "Backend on Java + Spring Boot with JWT, card management, transfers, and role model.",
                        tech: "Java, JWT, Docker"
                    },
                    {
                        name: "1C Trade Automation",
                        desc: "1C:Enterprise 8.3 configuration for automating purchases, sales, and warehouse.",
                        tech: "1C, ERP"
                    },
                    {
                        name: "MathTrainerKids",
                        desc: "Android app for teaching children counting. Implemented UI and task logic.",
                        tech: "Android, Java"
                    },
                    {
                        name: "Apriori Data Analysis",
                        desc: "Market basket analysis using Apriori algorithm in Python.",
                        tech: "Python, Pandas"
                    }
                ]
            },
            certificates: {
                title: "Certificates",
                items: ["CSS", "JavaScript", "Functional Testing", "HTML", "Git", "Java", "C#"]
            },
            education: {
                title: "Education",
                items: [
                    {
                        school: "South Ural State University",
                        degree: "Bachelor in Software Engineering",
                        year: "2022 - 2026"
                    }
                ]
            }
        }
    },

    ru: {
        name: "Хуссейн Ахмед",
        title: "Инженер-программист",
        contacts: {
            email: "ahmedhussejn07@gmail.com",
            phone: "+7 922 701 67 84",
            github: "github.com/Hussein-Ahmed-604",
            telegram: "@HusseinAhmed15"
        },
        sections: {
            summary: {
                title: "О себе",
                text: "Выпускник ЮУрГУ по специальности «Программная инженерия» (2026). Владею Java, Python, Kotlin, SQL, C#. Имею опыт разработки веб-приложений на Spring Boot, мобильных приложений на Android и конфигураций 1С."
            },
            skills: {
                title: "Технические навыки",
                items: [
                    { category: "Языки", list: "Java, Python, Kotlin, C#, SQL" },
                    { category: "Фреймворки", list: "Spring Boot, JPA, Spring Security" },
                    { category: "Базы данных", list: "MySQL, PostgreSQL" },
                    { category: "Инструменты", list: "Git, Docker, IntelliJ IDEA, Android Studio" },
                    { category: "Другое", list: "1С:Предприятие 8.3, REST API, JWT" }
                ]
            },
            projects: {
                title: "Проекты",
                items: [
                    {
                        name: "Интернет-магазин",
                        desc: "Веб-приложение на Java + Spring Boot с MySQL, REST API, аутентификацией и панелью администратора.",
                        tech: "Java, Spring Boot, MySQL"
                    },
                    {
                        name: "Управление картами",
                        desc: "Backend на Java + Spring Boot с JWT, управлением картами, переводами и ролевой моделью.",
                        tech: "Java, JWT, Docker"
                    },
                    {
                        name: "Автоматизация 1С",
                        desc: "Конфигурация 1С:Предприятие 8.3 для автоматизации закупок, продаж и склада.",
                        tech: "1C, ERP"
                    },
                    {
                        name: "MathTrainerKids",
                        desc: "Android-приложение для обучения детей счёту. Реализован UI и логика заданий.",
                        tech: "Android, Java"
                    },
                    {
                        name: "Анализ данных Apriori",
                        desc: "Анализ покупательских корзин с использованием алгоритма Apriori на Python.",
                        tech: "Python, Pandas"
                    }
                ]
            },
            certificates: {
                title: "Сертификаты",
                items: ["CSS", "JavaScript", "Функциональное тестирование", "HTML", "Git", "Java", "C#"]
            },
            education: {
                title: "Образование",
                items: [
                    {
                        school: "Южно-Уральский государственный университет",
                        degree: "Бакалавр программной инженерии",
                        year: "2022 - 2026"
                    }
                ]
            }
        }
    }
};