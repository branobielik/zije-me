from __future__ import annotations

import subprocess
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "assets" / "clanky"

ARTWORKS = [
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


def main() -> None:
    OUTPUT.mkdir(parents=True, exist_ok=True)
    for slug, background, accent_a, accent_b, shapes in ARTWORKS:
        target = OUTPUT / f"{slug}.webp"
        subprocess.run(
            ["magick", "svg:-", "-strip", "-quality", "84", str(target)],
            input=svg(background, accent_a, accent_b, shapes),
            text=True,
            check=True,
        )
        print(target.relative_to(ROOT))


if __name__ == "__main__":
    main()
