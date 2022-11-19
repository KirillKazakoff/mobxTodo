# Тестовое задание - Todo List (React/Mobx)

> ## Ссылка на приложение: [**GitHubPages**][GitHubPages]

<br/>

<h2>Оглавление</h2>

- [Тестовое задание - Todo List (React/Mobx)](#тестовое-задание---todo-list-reactmobx)
  - [Задачи](#задачи)
  - [Резервирование](#резервирование)
  - [Реализация](#реализация)
    - [**Состояние**](#состояние)
    - [**Роутер**](#роутер)
    - [**Взаимодействие с сервером**](#взаимодействие-с-сервером)
    - [**Формы**](#формы)
    - [**Стилизация**](#стилизация)
  - [Установка](#установка)

</br>

[![Build status](https://ci.appveyor.com/api/projects/status/9434x2hhpl9ryq4y/branch/master?svg=true)](https://ci.appveyor.com/project/KirillKazakoff/mobxtodo/branch/master)

## Задачи
<hr/>

- Реализовать авторизацию (регистрация/логин пользователя)
- В случае успешной авторизации перенаправление на страницу с заданиями 
- Получить список дел с сервера при редиректе в компонент TodosRoute
- Реализовать фильтрацию заданий
- Реализовать функцию добавления новых заданий
- При отметке чекбоксов отправлять запросы на сервер и изменять статус заданий
- В случае успеха необходимо обновить чекбокс
- Реализовать стилизацию и адаптивную верстку на SASS
  
</br>

## Резервирование
<hr/>

В базе данных (файл db.js на сервере) зарезервированы пользователи со следующими данными:

- {mail: 'username1@mail.com', password: '123'}
- {mail: 'username2@mail.com', password: '123'}

Вы можете использовать эти данные для авторизации в целях тестирования

</br>

## Реализация
<hr/>

### **Состояние**
Глобальное состояние в приложении хранится в 3 сторах:
- userStore: данные пользователя, а также методы логин, регистрация. Когда пользователь покидает страницу, то данные отправляются в localStorage. Когда возвращается - загужаются в хранилище.

    Также здесь обрабатывается переключение вкладки пользователя (для того, чтобы всегда иметь актуальные данные на странице при изменении данных для одной учетной записи в 2 или более вкладках)

- todos: методы для работы с заданиями, фильтер заданий.

- pageStatusStore: хранилище для работы с ошибками по сети. 

### **Роутер**
Для навигации в SPA используется React router (v6). Есть 3 глобальных маршрута:
- MainRoute: обертка над другими маршрутами. Также в нем есть ErrorNavigator-компонент, отслеживающий изменения в pageStatusStore и перенаправляющий в ErrorNetworkRoute в случае статуса с ошибкой.
  
- ErrorUrlRoute: редирект в этот компонент происходит при неправильном значении в адресной строке браузера (такого маршрута не существует).
  
- ErrorNetworkRoute: отображает в случае ошибки с сервера (потеря соединения, 404, 500 ошибки). 

### **Взаимодействие с сервером**
- Логика для запросов на сервер хранится в сервисе "api". Каждый запрос проходит через функцию request, которая является оберткой над fetch. 
  
- В ней происходит запрос на сервер, а также изменение статуса в pageStatusStore в случае ошибки

- Перед каждым запросом выполняется функция timeoutMock для эмуляции запросов на реальный сервер.

### **Формы**
Формы в проекте созданы с помощью Formik-фреймворка. 
- Логика создания каждой формы хранится отдельно в функции, функция возвращает значения для инициализации полей формы, функции onSubmit, validate. 
  
- Создан кастомный текстовый инпут (InputText)
  
- В компоненте создается кастомная форма, в компонент Formik передаются initialValues, onSubmit, validate.

### **Стилизация**
Стилизация осуществлена с помощью SCSS-препроцессора по БЭМ-методологии. 

</br>

## Установка
<hr/>

Если вы хотите запустить приложение, то вам необходимо отдельно клонировать два репозитория: этот (клиентская сторона) и [этот] (серверная).
После вам нужно установить зависимости в обоих проектах:
```sh
yarn
```
Затем:
- В проекте с бэкэндом запустите "dev" команду для отладки (с использованием nodemon), либо просто запустите сервер с помощью команды "start"
    ```sh
    yarn dev
    yarn start
    ``` 

- В проекте с фронтэндом вам нужно запустить сначала скрипт "build" чтобы webpack собрал проект, а затем использовать команду "start"
  ```sh
  yarn build
  yarn start
  ```

</br>

<!-- Links in text -->

[этот]:https://github.com/KirillKazakoff/MobxTodosBack
[GitHubPages]: https://kirillkazakoff.github.io/mobxTodo/