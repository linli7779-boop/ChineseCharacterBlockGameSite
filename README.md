# Chinese Character Block Landing Page

This repository contains a static landing page for the Chinese Character Block
learning game. It follows the visual direction from `assets/webpage_example.png`
and ships with the Windows executable and gameplay demo video under `public/`.

## Project structure

```
/project-root
├── public/
│   ├── chinese_character_block.exe
│   └── Chinese-Character-Block_game_demo.mp4
├── src/
│   ├── index.html
│   ├── styles.css
│   └── app.js
├── assets/
│   └── webpage_example.png
└── PRD.txt
```

## Local development

1. Serve `src/` with any static server, or open `src/index.html` directly in a
   browser. The relative paths expect the site to be deployed from the project
   root so assets load from `/public`.
2. Update the PayPal `hosted_button_id` in `src/index.html` with the value from
   your PayPal dashboard to keep the donation button functional without
   exposing your email address.

## Deploying to Vercel

1. Push the repository to GitHub and connect it to Vercel.
2. In the Vercel project settings set `output directory` to `src` so the build
   serves the HTML and assets located there.
3. Ensure the `public/` directory is uploaded with the executable and video.
   Vercel copies everything in `public/` to the root of the deployed site,
   making them available at `/chinese_character_block.exe` and
   `/Chinese-Character-Block_game_demo.mp4`.
4. Redeploy the project. Verify that the video autoplays muted and the download
   link retrieves the `.exe` file successfully.

## Additional notes

- The layout is responsive down to 320px wide and respects system reduced
  motion preferences.
- Buttons use accessible focus states and hover transitions aligned with the
  product requirements.
- The downloadable executable runs on Windows operating systems only.
