import json, pathlib, struct, sys
root = pathlib.Path(__file__).resolve().parents[1]
manifest = json.loads((root / 'assets/manifest.json').read_text())
missing = []
invalid = []
for model in manifest['models']:
    p = root / model['file']
    if not p.exists():
        missing.append(model['id']); continue
    with p.open('rb') as f:
        header = f.read(12)
    if len(header) != 12 or header[:4] != b'glTF' or struct.unpack('<I', header[4:8])[0] != 2:
        invalid.append(model['id'])
print('Assets:',len(manifest['models']),'Present:',len(manifest['models'])-len(missing))
print('Missing:',', '.join(missing) or 'none')
print('Invalid GLB:',', '.join(invalid) or 'none')
sys.exit(1 if missing or invalid else 0)
