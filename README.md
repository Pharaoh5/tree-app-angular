# TreeApp

**Настраиваемый древовидный компонент**, созданный с использованием Angular 19. Визуализирует иерархические данные с возможностью разворачивания/сворачивания узлов.

---

Посетите мой проект на GitHub Pages: [Tree App Angular](https://pharaoh5.github.io/tree-app-angular/)

---

## 🚀 Возможности

- 📂 Отображение иерархических данных
- 🔽 Разворачиваемые/сворачиваемые узлы
- 🗑️ Стилизация удалённых элементов (серый + зачеркивание)
- ♿ Поддержка доступности (ARIA + клавиатура)
- ⚠️ Обработка ошибок
- ⏳ Индикация загрузки
- ⚙️ Без внешних зависимостей (только Angular)

---

## 🔧 Архитектура

- `TreeViewComponent` — рекурсивный компонент дерева
- `AppComponent` — родитель, управляет состоянием и загрузкой данных

**Модель:**

```ts
interface TreeNode {
  id: number;
  title: string;
  is_deleted: boolean;
  children: TreeNode[];
  deleted_at?: any;
}
```

**Пример использования:**

```html
<app-tree-view 
  [nodes]="treeNodes"
  [expanded]="expanded"
  [isExpanded]="isExpanded"
  (toggle)="toggle($event)">
</app-tree-view>
```

**Пример данных:**
```json
[
  {
    "id": 1,
    "title": "Корневой узел",
    "is_deleted": false,
    "children": [
      {
        "id": 2,
        "title": "Дочерний узел",
        "is_deleted": false,
        "children": []
      }
    ]
  }
]
```

**UI-индикаторы:**

- ▸ Свернут
- ▾ Развернут
- ~~Удалён~~ — зачёркнут и серый

---

## 🧱 Структура проекта

```
src/
├── app/
│   ├── model/
│   │   └── tree-node.model.ts    # Определение модели данных
│   ├── tree-view/
│   │   ├── tree-view.component.html  # Шаблон компонента
│   │   ├── tree-view.component.scss  # Стили компонента
│   │   └── tree-view.component.ts    # Логика компонента
│   ├── app.component.html        # Шаблон приложения
│   ├── app.component.scss        # Стили приложения
│   ├── app.component.ts          # Логика приложения
│   ├── app.config.ts             # Конфигурация приложения
│   └── app.routes.ts             # Конфигурация маршрутизации
├── assets/
│   └── mocks/
│       └── tree-data.json        # Пример данных дерева
├── index.html                    # Основной HTML файл
├── main.ts                       # Точка входа
└── styles.scss                   # Глобальные стили
```

---

## 🛠️ Разработка

### Установка и запуск

```bash
npm install
ng serve
```

Открой `http://localhost:4200/`.

### Генерация компонентов

```bash
ng generate component component-name
```

### Сборка проекта

```bash
ng build
```

### Юнит-тесты

```bash
ng test
```

### End-to-End тесты

```bash
ng e2e
```

---

## 📚 Дополнительные ресурсы

- [Angular CLI Docs](https://angular.dev/tools/cli)

---

## 📝 Лицензия

MIT License — см. файл `LICENSE`
