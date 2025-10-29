# GPF104 A2 — Unity WebGL Landing (Vite + React)
Лендинг под твою игру: тизер-видео + iframe со сборкой Unity.

## Куда класть файлы
- Видео-тизер: `public/assets/trailer.mp4` (уже добавлен из твоего файла)
- Постер: `public/assets/poster.jpg` (можно заменить своим кадром)
- Игра (WebGL): `public/game/index.html` и папка `Build/` рядом

## Запуск
```bash
npm i
npm run dev
```

## Сборка и предпросмотр
```bash
npm run build
npm run preview
```

## Деплой (Vercel — проще всего)
```bash
npm i -g vercel
npm run build
vercel
```

## Настройки Unity
- Player Settings → Publishing Settings:
  - Compression: Gzip или Brotli
  - Decompression Fallback: On
- Threads: Off, если не настраиваешь COOP/COEP на хостинге
