const manuals = [
  {
    name: "M149A2",
    description: "400 Gallon Water Buffalo",
    type: "Trailer",
    files: [
      "manuals/m149a2-water-buffalo/tm-9-2330-267-13p.pdf"
    ],
  },
  {
    name: "H140 HEATER",
    description: "140,000 BTU SPACE HEATER",
    type: "Equipment",
    files: [
      "manuals/h140-heater/tm-9-4520-271-14.pdf"
    ],
  },
  {
    name: "SATS",
    description: "STANDARD AUTOMOTIVE TOOL SET",
    type: "Equipment",
    files: [
      "manuals/sats/tm-9-4910-783-13p.pdf"
    ],
  },
  {
    name: "M984A4",
    description: "HEMTT A4 WRECKER (EIC BG5)",
    type: "Truck",
    files: [
      "manuals/m984-a4/tm-9-2320-342-10-1.pdf",
      "manuals/m984-a4/tm-9-2320-342-10-2.pdf" 
    ],
  },
  {
    name: "M985A4",
    description: "HEMTT A4 CARGO",
    type: "Truck",
    files: [
      "manuals/m985-a4/tm-9-2320-343-10.pdf"
    ],
  },
  {
    name: "M1120A4",
    description: "HEMTT A4 LHS",
    type: "Truck",
    files: [
      "manuals/m1120-a4/tm-9-2320-345-10.pdf"
    ],
  },
  {
    name: "M978A4",
    description: "HEMTT A4 TANK FUELER",
    type: "Truck",
    files: [
      "manuals/m978-a4/tm-9-2320-339-10.pdf"
    ],
  },
  {
    name: "M977A4",
    description: "HEMTT A4 CARGO",
    type: "Truck",
    files: [
      "manuals/m977-a4/tm-9-2320-338-10.pdf"
    ],
  },
  {
    name: "M978A2",
    description: "HEMTT A2 TANK FUELER",
    type: "Truck",
    files: [
      "manuals/m978-a2/tm-9-2320-348-10.pdf"
    ],
  },
  {
    name: "M977A2",
    description: "HEMTT A2 CARGO",
    type: "Truck",
    files: [
      "manuals/m977-a2/tm-9-2320-347-10.pdf"
    ],
  },
  {
    name: "M985A2",
    description: "HEMTT A2 CARGO",
    type: "Truck",
    files: [
      "manuals/m985-a2/tm-9-2320-422-10.pdf"
    ],
  },
  {
    name: "M1101 & M1102",
    description: "HMMWV TRAILERS",
    type: "Trailer",
    files: [
      "manuals/m1101-1102-trailer/tm-9-2330-392-14p.pdf"
    ],
  },
  {
    name: "M1097 and MANY",
    description: "NON-UPARMORRED HMMWV VARIANTS",
    type: "HMMWV",
    files: [
      "manuals/m1097/tm-9-2320-280-10.pdf"
    ],
  },
  {
    name: "LCFH TYPE II",
    description: "350,000 BTU SPACE HEATER",
    type: "Equipment",
    files: [
      "manuals/lcfh-heater/tm-10-4520-265-14p.pdf"
    ],
  },
  {
    name: "M989A1",
    description: "HEMTT AMMUNITION TRAILER",
    type: "Trailer",
    files: [
      "manuals/m989-a1/tm-9-2330-383-14p.pdf"
    ],
  },
  {
    name: "M1077 IPFM",
    description: "ISO COMPATIBLE PALLETIZED FLATRACK",
    type: "Equipment",
    files: [
      "manuals/m1077-ipfm/tm-9-3990-206-10.pdf"
    ],
  },
  {
    name: "MEP831",
    description: "3KW TQG GENERATOR",
    type: "Generator",
    files: [
      "manuals/mep831/tm-9-3990-206-10.pdf"
    ],
  },
  {
    name: "MEP802A",
    description: "5KW TQG GENERATOR",
    type: "Generator",
    files: [
      "manuals/mep802a/tm-9-6115-641-10.pdf"
    ],
  },
  {
    name: "MEP803A",
    description: "10KW TQG GENERATOR",
    type: "Generator",
    files: [
      "manuals/mep803a/tm-9-6115-642-10.pdf"
    ],
  },
  {
    name: "PU-797",
    description: "5KW TRAILER MOUNTED GENERATOR",
    type: "Generator",
    files: [
      "manuals/pu797/tm-9-6115-659-13p.pdf"
    ],
  },
{
    name: "PU-802A",
    description: "15KW TRAILER MOUNTED GENERATOR",
    type: "Generator",
    files: [
      "manuals/pu802a/tm-9-6115-661-13p.pdf"
    ],
  },
  {
    name: "PU-2001",
    description: "AMMPS 5KW TRAILER MOUNTED GENERATOR",
    type: "Generator",
    files: [
      "manuals/pu2001/tm-9-6115-755-13p.pdf"
    ],
  },
  {
    name: "MEP531A",
    description: "2KW TQG GENERATOR",
    type: "Generator",
    files: [
      "manuals/mep531a/tm-9-6115-673-13p.pdf"
    ],
  },
  {
    name: "M1076",
    description: "PLS TRAILER",
    type: "Trailer",
    files: [
      "manuals/m1076/tm-9-2330-385-14.pdf"
    ],
  },
  {
    name: "M3 CROP",
    description: "M3 CROP PLS FLATRACK",
    type: "Equipment",
    files: [
      "manuals/m3-crop/tm-9-3990-260-14p.pdf"
    ],
  },
  {
    name: "M1088A1",
    description: "FMTV 5 TON TRACTOR",
    type: "Truck",
    files: [
      "manuals/m1088-a1/tm-9-2320-392-10-1.pdf",
      "manuals/m1088-a1/tm-9-2320-392-10-2.pdf"
    ],
  },
  {
    name: "M1095-M1082",
    description: "FMTV TRAILERS",
    type: "Trailer",
    files: [
      "manuals/m1095-1082/tm-9-2330-394-13p.pdf",
    ],
  },
  {
    name: "SPACE HEATER",
    description: "SPACE HEATER CONVECTIVE",
    type: "Equipment",
    files: [
      "manuals/spaceHeater/tm-10-4520-262-12p.pdf",
    ],
  },
];
