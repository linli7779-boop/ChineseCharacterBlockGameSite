# Chinese Character Block Landing Page

This repository contains a static landing page for the Chinese Character Block
learning game. It follows the visual direction from `assets/webpage_example.png`
and ships with the Windows executable and gameplay demo video under `public/`.

## Project structure

```
/project-root
├── src/
│   ├── index.html
│   ├── styles.css
│   ├── app.js
│   ├── public/
│        ├── chinese_character_block.zip
│        └── Chinese-Character-Block_game_demo.mp4
│   ├── assets/
│        └── webpage_example.png
└── PRD.txt
```
move folders 'public/' and 'assets/' under folder 'src/'
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
3. Ensure the `public/` directory is uploaded with the zip package and video.
   Vercel copies everything in `public/` to the deployed site, making the
   assets available at `/public/chinese_character_block.zip` and
   `/public/Chinese-Character-Block_game_demo.mp4`.
4. Redeploy the project. Verify that the video autoplays muted and the download
   link retrieves the `.exe` file successfully.

## Additional notes

- The layout is responsive down to 320px wide and respects system reduced
  motion preferences.
- Buttons use accessible focus states and hover transitions aligned with the
  product requirements.
- The downloadable package targets Windows operating systems only.
- The contact form launches the viewer's email client to message
  `lin.li7779@gmail.com`.
