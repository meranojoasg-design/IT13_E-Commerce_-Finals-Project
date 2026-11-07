# IT13 Finals Practical Exam — KidFlix (Kids Streaming App)

Everything you need is inside this folder. **No internet is needed.** Requires Node.js 18 or newer (must already be installed on the lab PC).

## How to open and run
1. Open this folder in VS Code: **File → Open Folder…**
2. Open the terminal: **Terminal → New Terminal**
3. Run:
   ```
   npm run dev
   ```
   (`node_modules` is already included. Do not run `npm install`; the lab has no internet.)
4. Open the link shown in the terminal (usually http://localhost:5173) in Chrome or Edge.
5. Keep the dev server running. Every time you save, the page updates by itself.

## What you will do
- Edit **only `src/App.jsx`**. Follow the numbered `TODO` comments; they match the tasks on your exam sheet.
- Type your code on the **empty line under** each `{/* TODO ... */}` comment, never inside the `{/* ... */}`. Code inside a comment is ignored: no error, and nothing shows on the page.
- Compare your page with the pictures in the `expected_output/` folder.

## Rules
- **Do not edit** files in `src/components/`, `src/data/`, `public/`, or any `.css` file.
- Read the comment at the top of each component file to see which **props** it needs.
- The videos are for **offline classroom use only**. Do not copy, share, or upload them.

## Folder map
```
src/App.jsx            <- YOUR WORK (TODO 1 to TODO 4)
src/components/        <- finished components: Navbar, HeroBanner, SearchBar,
                          CategoryButton, ShowCard, VideoPlayer, EmptyState, Footer
src/data/shows.js      <- the shows array and the categories array
public/videos/         <- 10 local .mp4 videos
public/thumbnails/     <- 10 local thumbnail pictures
expected_output/       <- screenshots of the finished page
```

## Submission
Take each screenshot as soon as you finish its task (see the table on your exam sheet).
When time is up, stop the dev server (Ctrl + C), then follow the submission steps on your exam sheet.
