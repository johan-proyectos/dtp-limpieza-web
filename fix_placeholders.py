import re

# Leer el archivo
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Reemplazar Webpay
webpay_svg = '<svg class="me-3" style="height: 30px; width: auto;" viewBox="0 0 80 40" xmlns="http://www.w3.org/2000/svg"><rect width="80" height="40" fill="#ffffff" stroke="#ccc" stroke-width="1"/><text x="40" y="24" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#666">Webpay</text></svg>'
content = re.sub(r'<img src="https://via\.placeholder\.com/80x40.*?text=Webpay"[^>]*?>', webpay_svg, content)

# Reemplazar Mercado Pago
mercado_svg = '<svg style="height: 30px; width: auto;" viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="40" fill="#ffffff" stroke="#ccc" stroke-width="1"/><text x="60" y="24" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#1f78d1">Mercado Pago</text></svg>'
content = re.sub(r'<img src="https://via\.placeholder\.com/120x40.*?text=Mercado%20Pago"[^>]*?>', mercado_svg, content)

# Guardar
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("✓ Reemplazadas imágenes placeholder con SVGs")
