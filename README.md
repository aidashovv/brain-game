# Идея:

Во время планирования каждый человек пишет ключевые слова или термины, с которыми он должен ознакомиться. Возможно, это будет реализация какой-либо фичи или http-endpoint’ы.

Игра заключается в том, что пользователю будут предоставлены вопросы с вариантами ответа или открытые. При формулировании вопроса игра будет опираться как на выделенные задачи за сессию, так и на материалы собранные Omnia или иной источник. Это хороший вариант для закрепления материала и самоанализа. В случае плохого результата, человек понимает, что задача не полностью изучена и знает, на что ему сделать акцент на следующей сессии.

Есть книга на тему эффективности, в которой упоминается такой термин, как «мыслетопливо». Чем его меньше, тем ниже эффективность во время выполнения задач. При составлении задач наше «мыслетопливо» используется, а если задача будет без какой-либо конкретики, то мы будем додумывать «что ж надо было сделать» => получаем потерю нашего «мыслетоплива».

Поэтому данная игра также будет минимизировать потери «мыслетоплива» и решать вопрос с эффективностью работы/обучения во время следующей сессии.

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.