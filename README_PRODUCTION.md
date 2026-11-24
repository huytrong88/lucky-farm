# Lucky Farm – production-quality 3D asset integration (WIP)

**NOT READY FOR GITHUB / VERCEL / PI BROWSER.** Existing farm-3d.html is the old technical prototype, not approved visual quality.

## Production acceptance gate
- 12 required GLB models with consistent art direction, PBR textures, correct proportions, and appropriate commercial rights.
- Farmer: Idle, Walk, Water, Harvest animation clips. Chicken: Idle, Walk, Peck. Cow: Idle, Walk, Graze.
- Each model checked in actual browser for silhouette, texture fidelity, clipping, lighting, scale, and mobile frame rate.
- Camera is fixed-angle orthographic; touch pan and pinch zoom; no auto-rotation.
- 25 plots, 2 barns, saved positions and actions; server-authoritative coin balances and Pi transactions.
- Real Pi Browser device testing and a visual side-by-side against user's reference image before declaring acceptable.

## Asset workflow
Place appropriately licensed .glb files at paths specified in `assets/manifest.json`. Run `python3 tools/check_assets.py` for basic file-presence/GLB-v2 checks. This checker is only a preliminary gate, not a quality or animation validator.

No third-party asset license has been acquired and no production-quality GLB has been integrated yet. Never claim otherwise.
