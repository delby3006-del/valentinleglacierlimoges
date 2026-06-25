import qrcode
from qrcode.image.styledpil import StyledPilImage
from qrcode.image.styles.moduledrawers import RoundedModuleDrawer
from qrcode.image.styles.colormasks import SolidFillColorMask

qr = qrcode.QRCode(
    version=2,
    box_size=10,
    border=6
)

qr.add_data("https://www.valentinleglacierlimoges.fr")
qr.make(fit=True)

img = qr.make_image(
    image_factory=StyledPilImage,
    module_drawer=RoundedModuleDrawer(),
    color_mask=SolidFillColorMask(
        back_color="#3c2610",
        front_color="#c8a878"
    )
)

img.save("qr_valentin.png")

print("QR code généré avec succès ✅")