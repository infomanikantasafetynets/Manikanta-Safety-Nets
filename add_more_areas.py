with open('generate_areas.py', 'r', encoding='utf-8') as f:
    code = f.read()

extra_areas = """
    ("austin-town", "Austin Town", "Central-East Bangalore heritage residential pocket", "peaceful family apartments, residential flats, and colonial layout homes",
     "Balconies require child safety nets and bird deterrent spikes to keep homes safe and clean.",
     "Balcony safety nets and invisible grills in Austin Town — verified installation crew.",
     ["Austin Town Main Road", "Victoria Layout Border", "Neelasandra Link", "Anjaneya Temple Street"],
     ["Austin Town BBMP Ground", "St. Philomena Hospital", "Lifestyle Mall Link"]),

    ("vivek-nagar", "Vivek Nagar", "Central-East Bangalore residential hub", "multi-tier apartment buildings, residential complexes, and family homes",
     "Open balconies and utility windows benefit from UV-stabilized anti-pigeon netting and child safety netting.",
     "Pigeon safety nets and balcony nets in Vivek Nagar — fast doorstep measurement.",
     ["Vivek Nagar Main Road", "Vannarpet", "Sonnenahalli", "Austin Town Link"],
     ["Infant Jesus Church", "Vivek Nagar Police Station", "National Games Village Border"]),

    ("neelasandra", "Neelasandra", "Central Bangalore connected residential area", "apartment buildings, residential builder floors, and family homes",
     "Child safety nets on multi-floor balconies and anti-pigeon netting for duct areas.",
     "Safety nets and invisible grills in Neelasandra — budget-friendly certified safety.",
     ["Neelasandra Main Road", "Bazaar Street", "Anepalya Link", "Rose Garden"],
     ["Neelasandra Ground", "Anepalya Junction", "Richmond Road Link"]),

    ("kothanur", "Kothanur", "North-East Bangalore Hennur corridor", "modern gated apartment societies, high-rise condominiums, and villa enclaves",
     "High-floor balconies require certified child fall protection nets and sleek invisible wire grills.",
     "Balcony safety nets and invisible grills in Kothanur — 5-year replacement warranty.",
     ["Hennur-Bagalur Road", "Geddalahalli Link", "Byrathi Cross", "Manning Lake Area"],
     ["Kothanur Bus Depot", "Kristu Jayanti College", "Bio-Miracle Ground"]),

    ("byrathi", "Byrathi", "Hennur-Bagalur growing residential zone", "contemporary apartment complexes, gated layouts, and residential builder flats",
     "Balconies and windows need anti-bird netting and child fall arrest nets for total security.",
     "Balcony safety nets and pigeon spikes in Byrathi — prompt doorstep service.",
     ["Byrathi Main Road", "Kothanur Border", "Kuvempu Layout", "Gubbi Cross Link"],
     ["Byrathi Lake", "Legacy Cirocco Link", "Hennur Main Road"]),

    ("kaggadasapura", "Kaggadasapura", "East Bangalore tech residential hub near DRDO", "multi-tier residential apartments, gated societies, and tech worker flats",
     "Balconies require child safety nets and space-saving ceiling cloth drying hangers.",
     "Balcony safety nets and ceiling cloth hangers in Kaggadasapura — same-day site visit.",
     ["Kaggadasapura Main Road", "Abhayadhama Road", "Vignan Nagar Link", "GM Palya Border"],
     ["Kaggadasapura Lake", "DRDO Phase 2", "BEML Gate"]),

    ("gm-palya", "GM Palya", "East Bangalore connected residential enclave", "modern apartment buildings, family flats, and residential layouts",
     "Open balconies and utility ducts require anti-pigeon netting and child safety netting.",
     "Safety nets and invisible grills in GM Palya — certified durable materials.",
     ["GM Palya Main Road", "BEML Main Road", "Byrasandra Link", "Suranjandas Road Link"],
     ["BEML Hospital", "Sree Rama Temple", "DRDO Township Link"]),

    ("tc-palya", "TC Palya", "East Bangalore KR Puram extension", "peaceful residential apartments, gated communities, and family builder floors",
     "Child safety netting on open balconies and anti-pigeon netting for duct areas.",
     "Balcony safety netting and invisible grills in TC Palya — free doorstep inspection.",
     ["TC Palya Main Road", "Anandapura", "Bhavi Layout", "Kowdenahalli Link"],
     ["TC Palya Junction", "St. Antony Church", "Kalkere Lake Link"]),

    ("outer-ring-road", "Outer Ring Road (ORR)", "Bangalore premier IT tech expressway", "ultra-modern high-rise condominiums, luxury tech towers, and gated societies",
     "High-altitude towers along the ORR corridor demand high-tensile SS316 invisible wire grills and childproof netting.",
     "High-rise safety nets and invisible grills on Outer Ring Road — certified high-altitude rigging.",
     ["Bellandur ORR", "Marathahalli ORR", "Mahadevapura ORR", "Hebbal ORR", "Nagavara ORR"],
     ["Ecospace Business Park", "Embassy TechVillage", "Prestige Tech Park", "Bagmane Tech Center"]),

    ("kanakapura-road-metro", "Kanakapura Road Metro Corridor", "South Bangalore green metro expansion hub", "luxury high-rise townships, lake-view apartments, and gated villa communities",
     "High-floor balconies along the green metro corridor require certified safety nets and SS316 invisible grills.",
     "Balcony safety nets and SS316 invisible grills on Kanakapura Metro Corridor — 5-year warranty.",
     ["Vajarahalli Metro Station", "Thalaghattapura Metro", "Konanakunte Cross Metro", "Silk Institute Metro"],
     ["Forum South Bangalore Mall", "Art of Living Centre", "KSIT Campus"]),
"""

code = code.replace('    ("dommasandra",', extra_areas + '    ("dommasandra",')
with open('generate_areas.py', 'w', encoding='utf-8') as f:
    f.write(code)

print("Updated generate_areas.py successfully.")
