import re

with open(r'D:\Codigo\mathias-paulenko-cv\src\data\translations.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Map of corrupted UTF-8 sequences to correct characters
# These are UTF-8 bytes displayed as Latin-1/CP1252
replacements = {
    'â€“': '–',      # en dash
    'Â·': '·',       # middle dot
    'Ã¡': 'á',
    'Ã©': 'é',
    'Ã­': 'í',
    'Ã±': 'ñ',
    'Ã³': 'ó',
    'Ãº': 'ú',
    'Ã ': 'à',
    'Ã€': 'À',
    'Ã‰': 'É',
    'ÃŒ': 'Ì',
    'Ã‘': 'Ñ',
    'Ã“': 'Ó',
    'Ãš': 'Ú',
    'Ã¼': 'ü',
    'Ãœ': 'Ü',
    'Ã§': 'ç',
    'Ã‡': 'Ç',
    'Ã´': 'ô',
    'Ã¢': 'â',
    'Ãª': 'ê',
    'Ã®': 'î',
    'Ã¯': 'ï',
    'Ã«': 'ë',
    'Ã¸': 'ø',
    'Ã¥': 'å',
    'â€œ': '"',
    'â€': '"',
    'â€™': "'",
    'â€˜': "'",
    'â€¦': '…',
    'Â¿': '¿',
    'Â¡': '¡',
}

fixed_count = 0
for bad, good in replacements.items():
    if bad in content:
        count = content.count(bad)
        fixed_count += count
        content = content.replace(bad, good)
        print(f'Fixed {count} x "{bad}" -> "{good}"')

if fixed_count > 0:
    with open(r'D:\Codigo\mathias-paulenko-cv\src\data\translations.js', 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'\nTotal fixes: {fixed_count}')
else:
    print('No common corruption patterns found.')

# Also check for any remaining non-ASCII that looks suspicious
lines = content.split('\n')
for i, line in enumerate(lines, 1):
    if any(ord(c) > 127 for c in line):
        # Skip Chinese/Japanese characters (CJK range)
        has_non_cjk = False
        for c in line:
            o = ord(c)
            if o > 127 and not (0x4E00 <= o <= 0x9FFF or 0x3000 <= o <= 0x303F or 0xFF00 <= o <= 0xFFEF or 0x3400 <= o <= 0x4DBF or 0x2000 <= o <= 0x206F):
                has_non_cjk = True
                break
        if has_non_cjk:
            print(f'Line {i} has non-ASCII non-CJK: {repr(line)}')
