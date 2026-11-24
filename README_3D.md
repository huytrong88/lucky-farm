# Lucky Farm - 3D World M1

- `farm-3d.html`: **real-time Three.js WebGL scene** with fixed isometric camera, 25 crop beds, two animal enclosures, moving chickens/cows, moving farmer, trees, buildings, fences and camera pan/zoom.
- `game.html`: the existing v4.4 game (including original API calls); unchanged.
- `index.html`: unchanged existing v4.4 game; to inspect the 3D scene visit `/farm-3d.html`.
- `api/`: original server functions; unchanged.
- `farm-scene.png` and `scene-preview.html`: previous reference image and preview.

IMPORTANT: The 3D scene uses procedurally constructed low-poly geometry, NOT professionally authored GLB models and does NOT yet match the photorealism/stylized detail of the reference. It is a true interactive 3D scene but is **not integrated with gameplay, user balances, Redis or Pi payment**. Do not use it as a production replacement. The scene loads Three.js from esm.sh and needs internet access. Test mobile performance and permissions in Pi Browser.

Deploy: Upload extracted files to GitHub repository root, preserving api directory. Open `/farm-3d.html` for 3D and `/` for current game. Do not delete validation-key.txt. Backup existing repo and Redis first.
