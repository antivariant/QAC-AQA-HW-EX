package com.antivariantum.mvpexamplejava.model.datasources;

import com.antivariantum.mvpexamplejava.model.models.Author;
import com.antivariantum.mvpexamplejava.model.models.Course;
import com.antivariantum.mvpexamplejava.model.models.Trainer;
import com.antivariantum.mvpexamplejava.model.models.User;

import java.util.ArrayList;
import java.util.List;

public class CourseMockDataSource implements ICourseDataSource {

    private List<Course> getMockData() {

        List<Course> courseList = new ArrayList<>();

        User userIgor = new User("Игорь Громов");
        userIgor.setDescription("18 лет опыта в IT. Frontend программист (php, html, css, JavaScript, node.js), программист баз данных (tsql), менеджер проектов (автоматизация финансового учета на базе 1С ERP, автоматизация транспортного учета), SDET (JavaScript, Java, C#, Swift, Python, C++, Dart; WEB, Android, iOS; Selenium, Appium, Cypress, UIAutomator, XCUITest...; CI/CD Jenkins, Azure), QA Team Lead, преподаватель (более 100 выпускников)");

        userIgor.setImage(new byte[]{1, 23, 3});


        Author authorIgor = new Author(userIgor);


        Trainer trainerIgor = new Trainer(userIgor);

        courseList.add(new Course("Общие инженерные дисциплины", "ООП, регулярные выражения, XPath, SQL, дизайн-паттерны, алгоритмы, структуры данных... Как не застрять на изучении языков программирования - 8 языков за 2 занятия.", authorIgor, trainerIgor));

        courseList.add(new Course("Автоматизированное тестирование UI. WEB.", "Детально про языки и фреймворки: JavaScript, Node.js, JUnit, Cypress, Selenium, Mocha, Chai, Unit тесты... Архитектура WEB: DOM, BOM. Сотни примеров и автоматическая проверка домашних заданий...", authorIgor, trainerIgor));

        courseList.add(new Course("Автоматизированное тестирование Android.", "Архитектура Android: MVC, MVP, MVVC, жизненный цикл Activity, примеры кода и интерфейсов. Детально про языки и фреймворки: Android Studio, Java, Kotlin, gradle, View и Jetpack Compose, Espresso, UIAutomator... Сотни примеров и автоматическая проверка домашних заданий... ", authorIgor, trainerIgor));

        courseList.add(new Course("Автоматизированное тестирование iOS.", "Архитектура iOS: MVC, примеры кода и интерфейсов. Детально про языки и фреймворки: XCode, Swift, Fastlane, xcodebuild, EarlGrey, XCUITest... Сотни примеров и автоматическая проверка домашних заданий... ", authorIgor, trainerIgor));

        courseList.add(new Course("Кросс-платформенное тестирование.", "Appium, BrowserStack, Flutter. Язык программирования Dart. Тестирование Android. Тестирование iOS. Тестирование WEB. Сотни примеров и автоматическая проверка домашних заданий... ", authorIgor, trainerIgor));

        courseList.add(new Course("Тестирование API.", "Автотесты в Postman: JavaScript, Chai, Newman. Тестирование API средствами языков JavaScript, Python, Java, Kotlin, Swift. Сотни примеров и автоматическая проверка домашних заданий... ", authorIgor, trainerIgor));

        courseList.add(new Course("Тестирование производительности.", "К6, JMeter. Основные показатели. Мониторинг. ", authorIgor, trainerIgor));

        courseList.add(new Course("CI/CD.", "Jenkins, Azure Pipelines. Скрипты на bash. Настройка тестовой среды для WEB, Android iOS в Jenkins и Azure", authorIgor, trainerIgor));

        courseList.add(new Course("Advanced Skills", "C#: .net core, mstest, TestDrivenTesting, Selenium, API testing, конфигурации. Python: pytest, Selenium, API Testing. TestRail integration (C#). Docker. Основные design patterns: POM, Factory,Façade, Singleton, Fluent POM.", authorIgor, trainerIgor));


        return courseList;
    }

    @Override
    public void getCourseData(Callback<List<Course>> callback) {
        try {
            List<Course> courseList = getMockData();
            callback.onSuccess(courseList);
        } catch (Exception e) {
            callback.onError(e);
        }
    }
}
