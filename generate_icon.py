from PIL import Image, ImageDraw, ImageFont

# Create 512x512 image with dark background
img = Image.new('RGBA', (512, 512), '#0c0c0c')
draw = ImageDraw.Draw(img)

# Try to use a monospace font, fallback to default
try:
    font = ImageFont.truetype("C:/Windows/Fonts/cour.ttf", 220)
except:
    font = ImageFont.load_default()

# Draw "MP" text centered
text = "MP"
bbox = draw.textbbox((0, 0), text, font=font)
text_width = bbox[2] - bbox[0]
text_height = bbox[3] - bbox[1]
x = (512 - text_width) / 2
y = (512 - text_height) / 2 - 20

draw.text((x, y), text, fill='#33ff33', font=font)

# Save as PNG
img.save('D:/Codigo/mathias-paulenko-cv/public/icon-512x512.png')
print('Icon created: icon-512x512.png')
