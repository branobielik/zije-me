from __future__ import annotations

import hashlib
import shutil
import subprocess
import sys
from pathlib import Path

from PIL import Image, ImageColor, ImageDraw, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "assets" / "clanky"

ARTWORKS = [
    (
        "pms-cyklicky-vzorec",
        "#20213a",
        "#8973b7",
        "#dc8c83",
        '<circle cx="800" cy="500" r="275" fill="none" stroke="url(#soft)" stroke-width="54" stroke-dasharray="1080 650" stroke-linecap="round"/>'
        '<circle cx="800" cy="500" r="155" fill="#fff" fill-opacity=".13"/>'
        '<circle cx="800" cy="500" r="48" fill="#fff" fill-opacity=".58"/>',
    ),
    (
        "muzska-perimenopauza-existuje",
        "#172b36",
        "#4d91a0",
        "#d39b72",
        '<path d="M420 720 C510 260 730 260 800 560 C870 260 1090 260 1180 720" fill="none" stroke="url(#soft)" stroke-width="58" stroke-linecap="round"/>'
        '<path d="M520 750 Q800 570 1080 750" fill="none" stroke="#fff" stroke-opacity=".28" stroke-width="20"/>',
    ),
    (
        "andropauza-nedostatok-testosteronu",
        "#162832",
        "#4c91a1",
        "#e09a6c",
        '<path d="M330 655 H570 L665 400 L805 705 L930 500 L1035 655 H1270" fill="none" stroke="url(#soft)" stroke-width="44" stroke-linecap="round" stroke-linejoin="round"/>'
        '<circle cx="800" cy="500" r="300" fill="none" stroke="#fff" stroke-opacity=".12" stroke-width="8"/>',
    ),
    (
        "intimna-hygiena-vulva-vagina",
        "#29202f",
        "#b36f91",
        "#e5ad83",
        '<path d="M800 170 C570 315 500 650 800 850 C1100 650 1030 315 800 170Z" fill="url(#soft)" opacity=".48"/>'
        '<path d="M800 285 C675 405 655 635 800 755 C945 635 925 405 800 285Z" fill="#fff" fill-opacity=".18"/>'
        '<path d="M800 365 V680" stroke="#fff" stroke-opacity=".44" stroke-width="16" stroke-linecap="round"/>',
    ),
    (
        "intimna-hygiena-muza",
        "#172b35",
        "#4f96a1",
        "#d5a06e",
        '<path d="M800 180 L1110 305 V515 C1110 700 985 825 800 875 C615 825 490 700 490 515 V305Z" fill="url(#soft)" opacity=".5"/>'
        '<path d="M695 520 L770 595 L925 420" fill="none" stroke="#fff" stroke-opacity=".72" stroke-width="30" stroke-linecap="round" stroke-linejoin="round"/>',
    ),
    (
        "perimenopauza-zmeny-cyklu",
        "#22243b",
        "#747eb7",
        "#d8917e",
        '<path d="M1070 295 A340 340 0 1 1 555 275" fill="none" stroke="url(#soft)" stroke-width="48" stroke-linecap="round"/>'
        '<path d="M545 275 L595 395 L445 355Z" fill="#d8917e"/>'
        '<circle cx="800" cy="500" r="175" fill="#fff" fill-opacity=".13"/>',
    ),
    (
        "menopauza-bez-mytov",
        "#272033",
        "#a26792",
        "#e0a471",
        '<path d="M250 690 Q800 215 1350 690" fill="none" stroke="url(#soft)" stroke-width="62" stroke-linecap="round"/>'
        '<path d="M260 690 H1340" stroke="#fff" stroke-opacity=".35" stroke-width="14"/>'
        '<circle cx="800" cy="500" r="105" fill="#fff" fill-opacity=".28"/>',
    ),
    (
        "ked-ma-partner-prestava-pritahovat",
        "#1e1a2e",
        "#a06888",
        "#e8a97a",
        '<path d="M420 500 C520 350 680 380 800 480 C920 380 1080 350 1180 500" fill="none" stroke="url(#soft)" stroke-width="52" stroke-linecap="round"/>'
        '<path d="M420 500 C520 650 680 620 800 520 C920 620 1080 650 1180 500" fill="none" stroke="#fff" stroke-opacity=".28" stroke-width="22" stroke-linecap="round"/>'
        '<circle cx="800" cy="500" r="88" fill="#fff" fill-opacity=".22"/>',
    ),
    (
        "je-normalne-nemat-chut-na-sex",
        "#191a2e",
        "#7a6baa",
        "#dda06e",
        '<circle cx="800" cy="500" r="285" fill="none" stroke="url(#soft)" stroke-width="52" stroke-dasharray="540 1200" stroke-linecap="round"/>'
        '<circle cx="800" cy="500" r="180" fill="none" stroke="#fff" stroke-opacity=".3" stroke-width="18" stroke-dasharray="360 840"/>'
        '<circle cx="800" cy="500" r="68" fill="#fff" fill-opacity=".45"/>',
    ),
    (
        "nikdy-som-nemala-orgazmus",
        "#201929",
        "#b46e88",
        "#e8b080",
        '<path d="M420 680 C560 230 640 230 800 500 C960 230 1040 230 1180 680" fill="none" stroke="url(#soft)" stroke-width="56" stroke-linecap="round"/>'
        '<circle cx="800" cy="500" r="110" fill="#fff" fill-opacity=".28"/>'
        '<path d="M640 620 Q800 720 960 620" fill="none" stroke="#fff" stroke-opacity=".38" stroke-width="18" stroke-linecap="round"/>',
    ),
    (
        "hanba-vlastneho-tela-v-intimite",
        "#1c1c2c",
        "#906aad",
        "#e0a070",
        '<ellipse cx="800" cy="500" rx="310" ry="390" fill="url(#soft)" opacity=".38"/>'
        '<ellipse cx="800" cy="500" rx="200" ry="265" fill="none" stroke="#fff" stroke-opacity=".45" stroke-width="12"/>'
        '<circle cx="800" cy="500" r="72" fill="#fff" fill-opacity=".55"/>',
    ),
    (
        "mam-sexualne-fantazie-o-ktorych-sa-bojim-hovorit",
        "#17162a",
        "#7b68b8",
        "#d8946a",
        '<path d="M560 300 H920 Q970 300 970 350 V590 Q970 640 920 640 H800 L760 720 L720 640 H560 Q510 640 510 590 V350 Q510 300 560 300Z" fill="url(#soft)" opacity=".6"/>'
        '<circle cx="800" cy="460" r="62" fill="#fff" fill-opacity=".5"/>'
        '<path d="M760 460 H840 M800 420 V500" stroke="#fff" stroke-opacity=".9" stroke-width="14" stroke-linecap="round"/>',
    ),
    (
        "ked-ma-partner-odmietne",
        "#1a1c2e",
        "#7272b8",
        "#dba06e",
        '<path d="M380 500 L700 500" stroke="url(#soft)" stroke-width="52" stroke-linecap="round"/>'
        '<path d="M900 500 L1220 500" stroke="#fff" stroke-opacity=".42" stroke-width="52" stroke-linecap="round"/>'
        '<circle cx="800" cy="500" r="88" fill="none" stroke="url(#soft)" stroke-width="18"/>'
        '<path d="M760 460 L840 540 M840 460 L760 540" stroke="#fff" stroke-opacity=".72" stroke-width="18" stroke-linecap="round"/>',
    ),
    (
        "ako-hovorit-o-sexe-bez-hadky",
        "#172030",
        "#4f8a8e",
        "#e0a46c",
        '<path d="M250 350 H820 Q880 350 880 410 V590 Q880 650 820 650 H580 L540 740 L500 650 H250 Q190 650 190 590 V410 Q190 350 250 350Z" fill="url(#soft)" opacity=".65"/>'
        '<path d="M680 350 H1350 Q1410 350 1410 410 V590 Q1410 650 1350 650 H1100 L1060 740 L1020 650 H680 Q620 650 620 590 V410 Q620 350 680 350Z" fill="#fff" fill-opacity=".16" stroke="#fff" stroke-opacity=".3" stroke-width="4"/>',
    ),
    (
        "trojica-dovera-integrita-vztahu",
        "#18202e",
        "#5888a0",
        "#d8a06e",
        '<circle cx="625" cy="440" r="220" fill="url(#soft)" opacity=".55"/>'
        '<circle cx="975" cy="440" r="220" fill="#fff" fill-opacity=".16" stroke="#fff" stroke-opacity=".36" stroke-width="8"/>'
        '<circle cx="800" cy="680" r="220" fill="none" stroke="url(#soft)" stroke-width="10" stroke-opacity=".8"/>',
    ),
    (
        "vo-vztahu-a-predsa-osamelo",
        "#1a1e30",
        "#6870ae",
        "#d49a70",
        '<path d="M420 680 C500 350 660 350 800 500 C940 350 1100 350 1180 680" fill="none" stroke="url(#soft)" stroke-width="58" stroke-linecap="round"/>'
        '<path d="M420 320 C500 650 660 650 800 500 C940 650 1100 650 1180 320" fill="none" stroke="#fff" stroke-opacity=".22" stroke-width="22" stroke-linecap="round"/>'
        '<path d="M450 500 H750 M850 500 H1150" stroke="#fff" stroke-opacity=".44" stroke-width="12" stroke-linecap="round"/>',
    ),
    (
        "co-je-sexualita-a-ako-sa-s-nou-stotoznit",
        "#17162b",
        "#b56b82",
        "#edba8f",
        '<path d="M555 790 C430 660 430 390 570 260 C700 390 705 655 555 790Z" fill="url(#soft)"/>'
        '<path d="M1045 790 C1170 660 1170 390 1030 260 C900 390 895 655 1045 790Z" fill="url(#soft)" opacity=".78"/>'
        '<circle cx="800" cy="500" r="165" fill="none" stroke="#fff" stroke-opacity=".42" stroke-width="5"/>',
    ),
    (
        "je-fyzicka-intimita-cesta-k-dusevnej-alebo-naopak",
        "#132431",
        "#4d9c91",
        "#d4a76c",
        '<path d="M330 690 C530 300 730 840 920 430 C1070 120 1240 410 1320 650" fill="none" stroke="url(#soft)" stroke-width="54" stroke-linecap="round"/>'
        '<path d="M310 520 C510 850 740 260 930 610 C1090 900 1260 590 1340 380" fill="none" stroke="#fff" stroke-opacity=".28" stroke-width="22" stroke-linecap="round"/>',
    ),
    (
        "co-je-zavislost-od-pornografie-a-kedy-sa-da-o-nej-hovorit",
        "#151927",
        "#705b99",
        "#da7b78",
        '<rect x="545" y="265" width="510" height="470" rx="58" fill="#10131d" stroke="url(#soft)" stroke-width="10"/>'
        '<circle cx="800" cy="500" r="112" fill="none" stroke="#fff" stroke-opacity=".55" stroke-width="18"/>'
        '<circle cx="800" cy="500" r="210" fill="none" stroke="#fff" stroke-opacity=".13" stroke-width="11"/>'
        '<circle cx="800" cy="500" r="300" fill="none" stroke="#fff" stroke-opacity=".07" stroke-width="8"/>',
    ),
    (
        "pornografia-ako-stimulacny-nastroj",
        "#101c25",
        "#388d94",
        "#c98368",
        '<rect x="350" y="210" width="900" height="580" rx="54" fill="#111c25" stroke="#fff" stroke-opacity=".16" stroke-width="5"/>'
        '<path d="M800 300 L1045 700 L555 700Z" fill="url(#soft)" opacity=".72"/>'
        '<circle cx="800" cy="500" r="74" fill="#fff" fill-opacity=".6"/>',
    ),
    (
        "existuje-moralne-cista-pornografia-a-co-to-je",
        "#20202a",
        "#7a9a81",
        "#d8a25d",
        '<path d="M800 220 V785 M520 350 H1080" stroke="#fff" stroke-opacity=".64" stroke-width="18" stroke-linecap="round"/>'
        '<path d="M520 350 L390 620 H650Z M1080 350 L950 620 H1210Z" fill="url(#soft)" opacity=".78"/>'
        '<ellipse cx="520" cy="630" rx="180" ry="30" fill="#fff" fill-opacity=".22"/>'
        '<ellipse cx="1080" cy="630" rx="180" ry="30" fill="#fff" fill-opacity=".22"/>',
    ),
    (
        "komunikacia-ako-zaklad-zdraveho-sexualneho-zivota",
        "#17302d",
        "#4f9b77",
        "#e0a06e",
        '<path d="M260 270 H855 Q930 270 930 345 V610 Q930 685 855 685 H590 L430 820 L470 685 H335 Q260 685 260 610Z" fill="url(#soft)" opacity=".72"/>'
        '<path d="M690 210 H1270 Q1340 210 1340 280 V545 Q1340 615 1270 615 H1150 L1190 740 L1040 615 H690 Q620 615 620 545 V280 Q620 210 690 210Z" fill="#fff" fill-opacity=".18" stroke="#fff" stroke-opacity=".24" stroke-width="4"/>',
    ),
    (
        "manzelske-povinnosti-na-hranici-legality",
        "#19242a",
        "#5d8a83",
        "#d69a78",
        '<circle cx="665" cy="500" r="265" fill="url(#soft)" opacity=".64"/>'
        '<circle cx="935" cy="500" r="265" fill="none" stroke="#fff" stroke-opacity=".62" stroke-width="16"/>'
        '<path d="M800 242 V758" stroke="#fff" stroke-opacity=".38" stroke-width="8" stroke-dasharray="22 22"/>',
    ),
    (
        "planovany-sex-ano-nie-a-za-akych-okolnosti",
        "#222039",
        "#8a6ca8",
        "#e1a16f",
        '<rect x="410" y="210" width="780" height="590" rx="58" fill="#fff" fill-opacity=".11" stroke="#fff" stroke-opacity=".34" stroke-width="6"/>'
        '<path d="M410 360 H1190 M590 160 V300 M1010 160 V300" stroke="#fff" stroke-opacity=".52" stroke-width="18" stroke-linecap="round"/>'
        '<circle cx="800" cy="560" r="118" fill="url(#soft)"/>'
        '<path d="M743 553 L787 597 L870 506" fill="none" stroke="#fff" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/>',
    ),
    (
        "deti-pricina-ci-vyhovorka",
        "#18302d",
        "#5c997b",
        "#e6aa70",
        '<circle cx="610" cy="385" r="126" fill="url(#soft)"/>'
        '<circle cx="990" cy="385" r="126" fill="#fff" fill-opacity=".28"/>'
        '<circle cx="800" cy="550" r="92" fill="#f0c37c" fill-opacity=".9"/>'
        '<path d="M390 810 C420 600 570 555 700 650 C755 690 845 690 900 650 C1030 555 1180 600 1210 810" fill="none" stroke="#fff" stroke-opacity=".42" stroke-width="48" stroke-linecap="round"/>',
    ),
    (
        "libido-magicke-slovo-ktore-vytvara-predsudky",
        "#24192b",
        "#9d5f8d",
        "#ec9b68",
        '<path d="M170 600 C300 600 315 325 450 325 C585 325 600 700 735 700 C870 700 890 255 1020 255 C1150 255 1175 575 1430 575" fill="none" stroke="url(#soft)" stroke-width="54" stroke-linecap="round"/>'
        '<path d="M170 660 C340 660 360 450 510 450 C670 450 690 770 850 770 C1010 770 1040 430 1430 430" fill="none" stroke="#fff" stroke-opacity=".16" stroke-width="18" stroke-linecap="round"/>',
    ),
    (
        "aj-muzi-maju-bod-g-a-neuverite-kde-ho-najdete",
        "#122733",
        "#4b98a4",
        "#e39a72",
        '<path d="M590 245 C470 390 495 690 680 790 M1010 245 C1130 390 1105 690 920 790" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="24" stroke-linecap="round"/>'
        '<ellipse cx="800" cy="545" rx="125" ry="92" fill="url(#soft)" opacity=".88"/>'
        '<circle cx="800" cy="545" r="165" fill="none" stroke="#fff" stroke-opacity=".18" stroke-width="8"/>',
    ),
    (
        "sexualne-stastie-telo-dusa-a-mysel",
        "#172d2b",
        "#57a078",
        "#e5b36b",
        '<circle cx="650" cy="480" r="205" fill="url(#soft)" opacity=".54"/>'
        '<circle cx="950" cy="480" r="205" fill="#fff" fill-opacity=".18"/>'
        '<circle cx="800" cy="675" r="205" fill="#8fb8a1" fill-opacity=".28"/>'
        '<circle cx="800" cy="535" r="72" fill="#fff" fill-opacity=".7"/>',
    ),
    (
        "zenska-sexualna-energia-verzus-muzska-sexualna-energia",
        "#261a31",
        "#b06391",
        "#68a5a0",
        '<path d="M170 620 C330 180 560 820 760 420 C930 80 1160 760 1430 355" fill="none" stroke="url(#soft)" stroke-width="62" stroke-linecap="round"/>'
        '<path d="M190 410 C380 770 590 230 810 650 C990 990 1190 310 1410 590" fill="none" stroke="#fff" stroke-opacity=".22" stroke-width="24" stroke-linecap="round"/>',
    ),
    (
        "vie-vas-partner-o-vasej-najtajnejsej-sexualnej-tuzbe",
        "#241b31",
        "#9f678e",
        "#d8a36e",
        '<path d="M260 300 H790 Q860 300 860 370 V620 Q860 690 790 690 H560 L420 805 L455 690 H330 Q260 690 260 620Z" fill="url(#soft)" opacity=".58"/>'
        '<path d="M785 225 H1270 Q1340 225 1340 295 V555 Q1340 625 1270 625 H1135 L1170 735 L1035 625 H785 Q715 625 715 555 V295 Q715 225 785 225Z" fill="#fff" fill-opacity=".16"/>'
        '<circle cx="800" cy="470" r="34" fill="#fff" fill-opacity=".72"/>',
    ),
    (
        "sexualita-v-partnerstve-a-jej-piliere",
        "#162a2d",
        "#56947e",
        "#d7a064",
        '<path d="M300 780 H1300 M380 350 V780 M520 290 V780 M660 245 V780 M800 215 V780 M940 245 V780 M1080 290 V780 M1220 350 V780" stroke="url(#soft)" stroke-width="46" stroke-linecap="round"/>'
        '<path d="M300 365 Q800 110 1300 365" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="28"/>',
    ),
    (
        "aj-traumy-sa-daju-riesit-najcitlivejsia-tema",
        "#1c2530",
        "#547d86",
        "#d7aa71",
        '<path d="M790 125 L675 315 L825 430 L690 590 L845 710 L790 900" fill="none" stroke="#101923" stroke-width="75" stroke-linejoin="round"/>'
        '<path d="M790 125 L675 315 L825 430 L690 590 L845 710 L790 900" fill="none" stroke="url(#soft)" stroke-width="18" stroke-linejoin="round"/>'
        '<circle cx="790" cy="125" r="24" fill="#fff" fill-opacity=".7"/><circle cx="790" cy="900" r="24" fill="#fff" fill-opacity=".7"/>',
    ),
    (
        "partnerske-potreby-bez-povinnosti",
        "#17302e",
        "#5aa080",
        "#dfa46e",
        '<path d="M180 720 C430 720 430 300 690 300 C820 300 835 485 800 585" fill="none" stroke="url(#soft)" stroke-width="64" stroke-linecap="round"/>'
        '<path d="M1420 720 C1170 720 1170 300 910 300 C780 300 765 485 800 585" fill="none" stroke="#fff" stroke-opacity=".34" stroke-width="64" stroke-linecap="round"/>'
        '<circle cx="800" cy="585" r="95" fill="#fff" fill-opacity=".18"/>',
    ),
    (
        "cyklus-cesta-k-svojej-sexualite",
        "#20223a",
        "#6e78b3",
        "#d99678",
        '<path d="M1070 295 A340 340 0 1 1 555 275" fill="none" stroke="url(#soft)" stroke-width="44" stroke-linecap="round"/>'
        '<path d="M545 275 L590 390 L450 355Z" fill="#d99678"/>'
        '<circle cx="800" cy="500" r="90" fill="#fff" fill-opacity=".18"/>'
        '<circle cx="800" cy="500" r="220" fill="none" stroke="#fff" stroke-opacity=".12" stroke-width="8" stroke-dasharray="18 30"/>',
    ),
    (
        "masturbacia-prirodzena-tema-o-ktorej-sa-stale-mlci",
        "#2a1d2d",
        "#a3668d",
        "#db9e72",
        '<path d="M800 220 C590 310 520 545 625 750 C700 895 900 895 975 750 C1080 545 1010 310 800 220Z" fill="url(#soft)" opacity=".5"/>'
        '<path d="M800 305 C670 390 640 570 710 710 C755 800 845 800 890 710 C960 570 930 390 800 305Z" fill="#fff" fill-opacity=".16"/>'
        '<circle cx="800" cy="570" r="58" fill="#fff" fill-opacity=".58"/>',
    ),
]


def svg(background: str, accent_a: str, accent_b: str, shapes: str) -> str:
    return f"""<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="{background}"/>
      <stop offset="1" stop-color="#080d12"/>
    </linearGradient>
    <linearGradient id="soft" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="{accent_a}"/>
      <stop offset="1" stop-color="{accent_b}"/>
    </linearGradient>
    <radialGradient id="glow">
      <stop offset="0" stop-color="{accent_b}" stop-opacity=".28"/>
      <stop offset="1" stop-color="{accent_a}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1600" height="1000" fill="url(#bg)"/>
  <circle cx="800" cy="500" r="650" fill="url(#glow)"/>
  <circle cx="170" cy="120" r="260" fill="{accent_a}" opacity=".08"/>
  <circle cx="1440" cy="900" r="330" fill="{accent_b}" opacity=".08"/>
  {shapes}
</svg>"""


def pillow_webp(
    target: Path,
    slug: str,
    background: str,
    accent_a: str,
    accent_b: str,
) -> None:
    size = (1600, 1000)
    start = ImageColor.getrgb(background)
    end = (8, 13, 18)
    gradient = Image.new("RGB", (2, 2))
    gradient.putdata((start, tuple((a + b) // 2 for a, b in zip(start, end)), tuple((a + b) // 2 for a, b in zip(start, end)), end))
    base = gradient.resize(size, Image.Resampling.BICUBIC)

    glow = Image.new("RGBA", size)
    glow_draw = ImageDraw.Draw(glow)
    color_a = ImageColor.getrgb(accent_a)
    color_b = ImageColor.getrgb(accent_b)
    glow_draw.ellipse((240, -60, 1360, 1060), fill=(*color_b, 34))
    glow_draw.ellipse((-130, -180, 470, 420), fill=(*color_a, 22))
    glow = glow.filter(ImageFilter.GaussianBlur(110))
    base = Image.alpha_composite(base.convert("RGBA"), glow)

    art = Image.new("RGBA", size)
    draw = ImageDraw.Draw(art)
    soft = (*color_a, 205)
    warm = (*color_b, 205)
    white = (255, 255, 255, 105)

    if slug in {"pms-cyklicky-vzorec", "perimenopauza-zmeny-cyklu"}:
        draw.arc((485, 185, 1115, 815), 28, 320, fill=soft, width=58)
        draw.polygon(((1040, 230), (1150, 260), (1075, 355)), fill=warm)
        draw.ellipse((665, 365, 935, 635), fill=(255, 255, 255, 28))
    elif slug == "muzska-perimenopauza-existuje":
        draw.arc((390, 235, 835, 845), 185, 355, fill=soft, width=58)
        draw.arc((765, 235, 1210, 845), 185, 355, fill=warm, width=58)
        draw.arc((515, 520, 1085, 850), 205, 335, fill=white, width=20)
    elif slug == "andropauza-nedostatok-testosteronu":
        draw.line((300, 655, 560, 655, 665, 390, 805, 710, 935, 495, 1040, 655, 1300, 655), fill=soft, width=45, joint="curve")
        draw.ellipse((505, 205, 1095, 795), outline=(255, 255, 255, 30), width=8)
    elif slug == "intimna-hygiena-vulva-vagina":
        draw.ellipse((500, 130, 1100, 870), fill=(*color_a, 90))
        draw.ellipse((650, 260, 950, 780), fill=(255, 255, 255, 30))
        draw.line((800, 350, 800, 680), fill=white, width=16)
    elif slug == "intimna-hygiena-muza":
        draw.polygon(((800, 150), (1120, 285), (1120, 520), (1040, 720), (800, 875), (560, 720), (480, 520), (480, 285)), fill=(*color_a, 105))
        draw.line((665, 520, 765, 620, 950, 405), fill=(255, 255, 255, 175), width=30, joint="curve")
    else:
        draw.arc((260, 190, 1340, 980), 205, 335, fill=soft, width=64)
        draw.line((260, 690, 1340, 690), fill=white, width=14)
        draw.ellipse((690, 390, 910, 610), fill=(*color_b, 95))

    digest = hashlib.sha256(slug.encode("utf-8")).digest()
    draw.ellipse((120 + digest[0], 80 + digest[1] // 2, 145 + digest[0], 105 + digest[1] // 2), fill=(*color_b, 90))
    base = Image.alpha_composite(base, art)
    base.convert("RGB").save(target, "WEBP", quality=84, method=6)


def main() -> None:
    OUTPUT.mkdir(parents=True, exist_ok=True)
    requested = set(sys.argv[1:])
    artworks = [artwork for artwork in ARTWORKS if not requested or artwork[0] in requested]
    missing = requested - {artwork[0] for artwork in artworks}
    if missing:
        raise SystemExit(f"Unknown artwork slugs: {sorted(missing)}")

    magick = shutil.which("magick")
    for slug, background, accent_a, accent_b, shapes in artworks:
        target = OUTPUT / f"{slug}.webp"
        if magick:
            subprocess.run(
                [magick, "svg:-", "-strip", "-quality", "84", str(target)],
                input=svg(background, accent_a, accent_b, shapes),
                text=True,
                check=True,
            )
        else:
            pillow_webp(target, slug, background, accent_a, accent_b)
        print(target.relative_to(ROOT))


if __name__ == "__main__":
    main()
