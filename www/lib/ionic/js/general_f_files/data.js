var cArray = [];

var procedures = [
    {
        "number": "1",
        "text": "PFO, Primary closure",
        "score": "3",
        "mortality": "1",
        "morbidity": "1",
        "difficulty": "1"
    },
    {
        "number": "2",
        "text": "ASD repair, Primary closure",
        "score": "3",
        "mortality": "1",
        "morbidity": "1",
        "difficulty": "1"
    },
    {
        "number": "3",
        "text": "ASD repair, Patch",
        "score": "3",
        "mortality": "1",
        "morbidity": "1",
        "difficulty": "1"
    },
    {
        "number": "4",
        "text": "ASD, Common atrium (Single atrium), Septation",
        "score": "3.8",
        "mortality": "1",
        "morbidity": "1",
        "difficulty": "1.8"
    },
    {
        "number": "5",
        "text": "ASD creation/enlargement",
        "score": "4",
        "mortality": "2",
        "morbidity": "2",
        "difficulty": "1"
    },
    {
        "number": "6",
        "text": "ASD partial closure",
        "score": "3",
        "mortality": "1",
        "morbidity": "1",
        "difficulty": "1"
    },
    {
        "number": "7",
        "text": "Atrial septal fenestration",
        "score": "5",
        "mortality": "2",
        "morbidity": "2",
        "difficulty": "1"
    },
    {
        "number": "8",
        "text": "VSD repair, Primary closure",
        "score": "6",
        "mortality": "2",
        "morbidity": "2",
        "difficulty": "2"
    },
    {
        "number": "9",
        "text": "VSD repair, Patch",
        "score": "6",
        "mortality": "2",
        "morbidity": "2",
        "difficulty": "2"
    },
    {
        "number": "10",
        "text": "VSD, Multiple, Repair",
        "score": "9",
        "mortality": "3",
        "morbidity": "2.5",
        "difficulty": "3.5"
    },
    {
        "number": "11",
        "text": "VSD creation/enlargement",
        "score": "9",
        "mortality": "3",
        "morbidity": "3",
        "difficulty": "3"
    },
    {
        "number": "12",
        "text": "Ventricular septal fenestration",
        "score": "7.5",
        "mortality": "3",
        "morbidity": "2",
        "difficulty": "2.5"
    },
    {
        "number": "13",
        "text": "AVC (AVSD) repair, Complete (CAVSD)",
        "score": "9",
        "mortality": "3",
        "morbidity": "3",
        "difficulty": "3"
    },
    {
        "number": "14",
        "text": "AVC (AVSD) repair, Intermediate (transitional)",
        "score": "5",
        "mortality": "1.5",
        "morbidity": "1.5",
        "difficulty": "2"
    },
    {
        "number": "15",
        "text": "AVC (AVSD) repair, Partial (incomplete) (PAVSD)",
        "score": "4",
        "mortality": "1",
        "morbidity": "1",
        "difficulty": "2"
    },
    {
        "number": "16",
        "text": "AP window repair",
        "score": "6",
        "mortality": "2",
        "morbidity": "2",
        "difficulty": "2"
    },
    {
        "number": "17",
        "text": "Pulmonary artery origin from ascending aorta (hemitruncus) repair",
        "score": "9",
        "mortality": "3",
        "morbidity": "3",
        "difficulty": "3"
    },
    {
        "number": "18",
        "text": "Truncus arteriosus repair",
        "score": "11",
        "mortality": "4",
        "morbidity": "3",
        "difficulty": "4"
    },
    {
        "number": "19",
        "text": "Valvuloplasty, Truncal valve",
        "score": "7",
        "mortality": "2",
        "morbidity": "2",
        "difficulty": "3"
    },
    {
        "number": "20",
        "text": "Valve replacement, Truncal valve",
        "score": "6",
        "mortality": "2",
        "morbidity": "2",
        "difficulty": "2"
    },
    {
        "number": "21",
        "text": "PAPVC repair",
        "score": "5",
        "mortality": "2",
        "morbidity": "1",
        "difficulty": "2"
    },
    {
        "number": "22",
        "text": "PAPVC, Scimitar, Repair",
        "score": "8",
        "mortality": "3",
        "morbidity": "2",
        "difficulty": "3"
    },
    {
        "number": "23",
        "text": "TAPVC repair",
        "score": "9",
        "mortality": "3",
        "morbidity": "3",
        "difficulty": "3"
    },
    {
        "number": "24",
        "text": "Cor triatriatum repair",
        "score": "6",
        "mortality": "2",
        "morbidity": "2",
        "difficulty": "2"
    },
    {
        "number": "25",
        "text": "Pulmonary venous stenosis repair",
        "score": "12",
        "mortality": "4",
        "morbidity": "4",
        "difficulty": "4"
    },
    {
        "number": "26",
        "text": "Atrial baffle procedure (non-Mustard, non-Senning)",
        "score": "7.8",
        "mortality": "2.8",
        "morbidity": "2",
        "difficulty": "3"
    },
    {
        "number": "27",
        "text": "Anomalous systemic venous connection repair",
        "score": "7",
        "mortality": "2",
        "morbidity": "2",
        "difficulty": "3"
    },
    {
        "number": "28",
        "text": "Systemic venous stenosis repair",
        "score": "8",
        "mortality": "3",
        "morbidity": "2",
        "difficulty": "3"
    },
    {
        "number": "29",
        "text": "TOF repair, No ventriculotomy ",
        "score": "8",
        "mortality": "3",
        "morbidity": "2",
        "difficulty": "3"
    },
    {
        "number": "30",
        "text": "TOF repair, Ventriculotomy, Non-transanular patch ",
        "score": "7.5",
        "mortality": "2.5",
        "morbidity": "2",
        "difficulty": "3"
    },
    {
        "number": "31",
        "text": "TOF repair, Ventriculotomy, Transanular patch ",
        "score": "8",
        "mortality": "3",
        "morbidity": "2",
        "difficulty": "3"
    },
    {
        "number": "32",
        "text": "TOF repair, RV-PA conduit",
        "score": "8",
        "mortality": "3",
        "morbidity": "2",
        "difficulty": "3"
    },
    {
        "number": "33",
        "text": "TOF - AVC (AVSD) repair",
        "score": "11",
        "mortality": "4",
        "morbidity": "3",
        "difficulty": "4"
    },
    {
        "number": "34",
        "text": "TOF - Absent pulmonary valve repair",
        "score": "9.3",
        "mortality": "3",
        "morbidity": "3",
        "difficulty": "3.3"
    },
    {
        "number": "35",
        "text": "Pulmonary atresia - VSD (including TOF, PA) repair",
        "score": "9",
        "mortality": "3",
        "morbidity": "3",
        "difficulty": "3"
    },
    {
        "number": "36",
        "text": "Pulmonary atresia - VSD - MAPCA (pseudotruncus) repair",
        "score": "11",
        "mortality": "4",
        "morbidity": "3",
        "difficulty": "4"
    },
    {
        "number": "37",
        "text": "Unifocalization MAPCA(s)",
        "score": "11",
        "mortality": "4",
        "morbidity": "3",
        "difficulty": "4"
    },
    {
        "number": "38",
        "text": "Occlusion MAPCA(s)",
        "score": "7",
        "mortality": "2",
        "morbidity": "2",
        "difficulty": "3"
    },
    {
        "number": "39",
        "text": "Valvuloplasty, Tricuspid",
        "score": "7",
        "mortality": "2",
        "morbidity": "2",
        "difficulty": "3"
    },
    {
        "number": "40",
        "text": "Valve replacement, Tricuspid (TVR)",
        "score": "7.5",
        "mortality": "2.5",
        "morbidity": "2",
        "difficulty": "3"
    },
    {
        "number": "41",
        "text": "Valve closure, Tricuspid (exclusion, univentricular approach)",
        "score": "9",
        "mortality": "4",
        "morbidity": "3",
        "difficulty": "2"
    },
    {
        "number": "42",
        "text": "Valve excision, Tricuspid (without replacement)",
        "score": "6",
        "mortality": "2",
        "morbidity": "2",
        "difficulty": "2"
    },
    {
        "number": "43",
        "text": "RVOT procedure",
        "score": "6.5",
        "mortality": "2",
        "morbidity": "2",
        "difficulty": "2.5"
    },
    {
        "number": "44",
        "text": "1 1/2 ventricular repair",
        "score": "9",
        "mortality": "3",
        "morbidity": "3",
        "difficulty": "3"
    },
    {
        "number": "45",
        "text": "PA, reconstruction (plasty), Main (trunk)",
        "score": "6",
        "mortality": "2",
        "morbidity": "2",
        "difficulty": "2"
    },
    {
        "number": "46",
        "text": "PA, reconstruction (plasty), Branch, Central (within the hilar bifurcation)",
        "score": "7.8",
        "mortality": "2.8",
        "morbidity": "2",
        "difficulty": "3"
    },
    {
        "number": "47",
        "text": "PA, reconstruction (plasty), Branch, Peripheral (at or beyond the hilar bifurcation)",
        "score": "8.8",
        "mortality": "2.8",
        "morbidity": "2.5",
        "difficulty": "3.5"
    },
    {
        "number": "48",
        "text": "DCRV repair",
        "score": "7",
        "mortality": "2",
        "morbidity": "2",
        "difficulty": "3"
    },
    {
        "number": "49",
        "text": "Conduit reoperation",
        "score": "8",
        "mortality": "3",
        "morbidity": "2",
        "difficulty": "3"
    },
    {
        "number": "50",
        "text": "Valvuloplasty, Pulmonic",
        "score": "5.6",
        "mortality": "1.8",
        "morbidity": "1.8",
        "difficulty": "2"
    },
    {
        "number": "51",
        "text": "Valve replacement, Pulmonic (PVR)",
        "score": "6.5",
        "mortality": "2",
        "morbidity": "2",
        "difficulty": "2.5"
    },
    {
        "number": "52",
        "text": "Conduit placement, RV to PA",
        "score": "7.5",
        "mortality": "2.5",
        "morbidity": "2",
        "difficulty": "3"
    },
    {
        "number": "53",
        "text": "Conduit placement, LV to PA",
        "score": "8",
        "mortality": "3",
        "morbidity": "2",
        "difficulty": "3"
    },
    {
        "number": "54",
        "text": "Valvuloplasty, Aortic",
        "score": "8",
        "mortality": "3",
        "morbidity": "2",
        "difficulty": "3"
    },
    {
        "number": "55",
        "text": "Valve replacement, Aortic (AVR), Mechanical",
        "score": "7",
        "mortality": "2",
        "morbidity": "2",
        "difficulty": "3"
    },
    {
        "number": "56",
        "text": "Valve replacement, Aortic (AVR), Bioprosthetic",
        "score": "7",
        "mortality": "2",
        "morbidity": "2",
        "difficulty": "3"
    },
    {
        "number": "57",
        "text": "Valve replacement, Aortic (AVR), Homograft",
        "score": "8.5",
        "mortality": "3",
        "morbidity": "2",
        "difficulty": "3.5"
    },
    {
        "number": "58",
        "text": "Aortic root replacement, Valve sparing ",
        "score": "8.5",
        "mortality": "2",
        "morbidity": "2",
        "difficulty": "4.5"
    },
    {
        "number": "59",
        "text": "Aortic root replacement, Mechanical",
        "score": "8.8",
        "mortality": "3.3",
        "morbidity": "2",
        "difficulty": "3.5"
    },
    {
        "number": "60",
        "text": "Aortic root replacement, Homograft",
        "score": "9.5",
        "mortality": "3.5",
        "morbidity": "2",
        "difficulty": "4"
    },
    {
        "number": "61",
        "text": "Ross procedure",
        "score": "10.3",
        "mortality": "4",
        "morbidity": "2.3",
        "difficulty": "4"
    },
    {
        "number": "62",
        "text": "Konno procedure",
        "score": "11",
        "mortality": "4",
        "morbidity": "3",
        "difficulty": "4"
    },
    {
        "number": "63",
        "text": "Ross�CKonno procedure",
        "score": "12.5",
        "mortality": "4.5",
        "morbidity": "3",
        "difficulty": "5"
    },
    {
        "number": "64",
        "text": "Aortic stenosis, Subvalvar, Repair",
        "score": "6.3",
        "mortality": "2",
        "morbidity": "1.8",
        "difficulty": "2.5"
    },
    {
        "number": "65",
        "text": "Aortic stenosis, Supravalvar, Repair",
        "score": "5.5",
        "mortality": "1.5",
        "morbidity": "2",
        "difficulty": "2"
    },
    {
        "number": "66",
        "text": "Sinus of Valsalva, Aneurysm repair",
        "score": "7.5",
        "mortality": "2.5",
        "morbidity": "2",
        "difficulty": "3"
    },
    {
        "number": "67",
        "text": "LV to aorta tunnel repair",
        "score": "8.3",
        "mortality": "3",
        "morbidity": "2.3",
        "difficulty": "3"
    },
    {
        "number": "68",
        "text": "Valvuloplasty, Mitral",
        "score": "8",
        "mortality": "3",
        "morbidity": "2",
        "difficulty": "3"
    },
    {
        "number": "69",
        "text": "Mitral stenosis, Supravalvar mitral ring repair",
        "score": "8",
        "mortality": "3",
        "morbidity": "2",
        "difficulty": "3"
    },
    {
        "number": "70",
        "text": "Valve replacement, Mitral (MVR)",
        "score": "7.5",
        "mortality": "2.5",
        "morbidity": "2",
        "difficulty": "3"
    },
    {
        "number": "71",
        "text": "Norwood procedure",
        "score": "14.5",
        "mortality": "5",
        "morbidity": "4.5",
        "difficulty": "5"
    },
    {
        "number": "72",
        "text": "HLHS biventricular repair",
        "score": "15",
        "mortality": "5",
        "morbidity": "5",
        "difficulty": "5"
    },
    {
        "number": "73",
        "text": "Transplant, Heart",
        "score": "9.3",
        "mortality": "3",
        "morbidity": "3.3",
        "difficulty": "3"
    },
    {
        "number": "74",
        "text": "Transplant, Heart and lung(s)",
        "score": "13.3",
        "mortality": "4",
        "morbidity": "5",
        "difficulty": "4.3"
    },
    {
        "number": "75",
        "text": "Partial left ventriculectomy (LV volume reduction surgery) (Batista)",
        "score": "12",
        "mortality": "4",
        "morbidity": "4",
        "difficulty": "4"
    },
    {
        "number": "76",
        "text": "Pericardial drainage procedure",
        "score": "3",
        "mortality": "1",
        "morbidity": "1",
        "difficulty": "1"
    },
    {
        "number": "77",
        "text": "Pericardiectomy",
        "score": "6",
        "mortality": "2",
        "morbidity": "2",
        "difficulty": "2"
    },
    {
        "number": "78",
        "text": "Fontan, Atrio-pulmonary connection",
        "score": "9",
        "mortality": "3",
        "morbidity": "3",
        "difficulty": "3"
    },
    {
        "number": "79",
        "text": "Fontan, Atrio-ventricular connection",
        "score": "9",
        "mortality": "3",
        "morbidity": "3",
        "difficulty": "3"
    },
    {
        "number": "80",
        "text": "Fontan, TCPC, Lateral tunnel, Fenestrated",
        "score": "9",
        "mortality": "3",
        "morbidity": "3",
        "difficulty": "3"
    },
    {
        "number": "81",
        "text": "Fontan, TCPC, Lateral tunnel, Non-fenestrated",
        "score": "9",
        "mortality": "3",
        "morbidity": "3",
        "difficulty": "3"
    },
    {
        "number": "82",
        "text": "Fontan, TCPC, External conduit, Fenestrated",
        "score": "9",
        "mortality": "3",
        "morbidity": "3",
        "difficulty": "3"
    },
    {
        "number": "83",
        "text": "Fontan, TCPC, External conduit, Non-fenestrated",
        "score": "9",
        "mortality": "3",
        "morbidity": "3",
        "difficulty": "3"
    },
    {
        "number": "84",
        "text": "Congenitally corrected TGA repair, Atrial Switch and ASO (Double switch)",
        "score": "13.8",
        "mortality": "5",
        "morbidity": "3.8",
        "difficulty": "5"
    },
    {
        "number": "85",
        "text": "Congenitally corrected TGA repair, Atrial switch and Rastelli",
        "score": "11",
        "mortality": "4",
        "morbidity": "3",
        "difficulty": "4"
    },
    {
        "number": "86",
        "text": "Congenitally corrected TGA repair, VSD closure",
        "score": "9",
        "mortality": "3",
        "morbidity": "3",
        "difficulty": "3"
    },
    {
        "number": "87",
        "text": "Congenitally corrected TGA repair, VSD closure and LV to PA conduit",
        "score": "11",
        "mortality": "4",
        "morbidity": "3",
        "difficulty": "4"
    },
    {
        "number": "88",
        "text": "Arterial switch operation (ASO)",
        "score": "10",
        "mortality": "3.5",
        "morbidity": "3",
        "difficulty": "3.5"
    },
    {
        "number": "89",
        "text": "Arterial switch operation (ASO) and VSD repair",
        "score": "11",
        "mortality": "4",
        "morbidity": "3",
        "difficulty": "4"
    },
    {
        "number": "90",
        "text": "Senning",
        "score": "8.5",
        "mortality": "3",
        "morbidity": "2.5",
        "difficulty": "3"
    },
    {
        "number": "91",
        "text": "Mustard",
        "score": "9",
        "mortality": "3",
        "morbidity": "3",
        "difficulty": "3"
    },
    {
        "number": "92",
        "text": "Rastelli",
        "score": "10",
        "mortality": "3",
        "morbidity": "3",
        "difficulty": "4"
    },
    {
        "number": "93",
        "text": "REV",
        "score": "11",
        "mortality": "4",
        "morbidity": "3",
        "difficulty": "4"
    },
    {
        "number": "94",
        "text": "DORV, Intraventricular tunnel repair",
        "score": "10.3",
        "mortality": "3.3",
        "morbidity": "3",
        "difficulty": "4"
    },
    {
        "number": "95",
        "text": "DOLV repair",
        "score": "11",
        "mortality": "4",
        "morbidity": "3",
        "difficulty": "4"
    },
    {
        "number": "96",
        "text": "Anomalous origin of coronary artery from pulmonary artery repair",
        "score": "10",
        "mortality": "3",
        "morbidity": "3",
        "difficulty": "4"
    },
    {
        "number": "97",
        "text": "Coronary artery fistula ligation",
        "score": "4",
        "mortality": "1",
        "morbidity": "2",
        "difficulty": "1"
    },
    {
        "number": "98",
        "text": "Coronary artery bypass",
        "score": "7.5",
        "mortality": "2.5",
        "morbidity": "2",
        "difficulty": "3"
    },
    {
        "number": "99",
        "text": "Coarctation repair, End to end",
        "score": "6",
        "mortality": "2",
        "morbidity": "2",
        "difficulty": "2"
    },
    {
        "number": "100",
        "text": "Coarctation repair, End to end, Extended",
        "score": "8",
        "mortality": "3",
        "morbidity": "2",
        "difficulty": "3"
    },
    {
        "number": "101",
        "text": "Coarctation repair, Subclavian flap",
        "score": "6",
        "mortality": "2",
        "morbidity": "2",
        "difficulty": "2"
    },
    {
        "number": "102",
        "text": "Coarctation repair, Patch aortoplasty",
        "score": "6",
        "mortality": "2",
        "morbidity": "2",
        "difficulty": "2"
    },
    {
        "number": "103",
        "text": "Coarctation repair, Interposition graft",
        "score": "7.8",
        "mortality": "2.8",
        "morbidity": "2",
        "difficulty": "3"
    },
    {
        "number": "104",
        "text": "Aortic arch repair",
        "score": "7",
        "mortality": "2",
        "morbidity": "2",
        "difficulty": "3"
    },
    {
        "number": "105",
        "text": "Interrupted aortic arch repair",
        "score": "10.8",
        "mortality": "3.8",
        "morbidity": "3",
        "difficulty": "4"
    },
    {
        "number": "106",
        "text": "PDA closure, Surgical",
        "score": "3",
        "mortality": "1",
        "morbidity": "1",
        "difficulty": "1"
    },
    {
        "number": "107",
        "text": "Vascular ring repair",
        "score": "6",
        "mortality": "2",
        "morbidity": "2",
        "difficulty": "2"
    },
    {
        "number": "108",
        "text": "Pulmonary artery sling repair",
        "score": "9",
        "mortality": "3",
        "morbidity": "3",
        "difficulty": "3"
    },
    {
        "number": "109",
        "text": "Aortic aneurysm repair",
        "score": "8.8",
        "mortality": "3",
        "morbidity": "2.8",
        "difficulty": "3"
    },
    {
        "number": "110",
        "text": "Aortic dissection repair",
        "score": "11",
        "mortality": "4",
        "morbidity": "3",
        "difficulty": "4"
    },
    {
        "number": "111",
        "text": "Lung biopsy",
        "score": "5",
        "mortality": "1.5",
        "morbidity": "2",
        "difficulty": "1.5"
    },
    {
        "number": "112",
        "text": "Transplant, Lung(s)",
        "score": "12",
        "mortality": "4",
        "morbidity": "4",
        "difficulty": "4"
    },
    {
        "number": "113",
        "text": "Pectus repair",
        "score": "5.3",
        "mortality": "2",
        "morbidity": "1",
        "difficulty": "2.3"
    },
    {
        "number": "114",
        "text": "Pacemaker implantation, Permanent",
        "score": "3",
        "mortality": "1",
        "morbidity": "1",
        "difficulty": "1"
    },
    {
        "number": "115",
        "text": "Pacemaker procedure",
        "score": "3",
        "mortality": "1",
        "morbidity": "1",
        "difficulty": "1"
    },
    {
        "number": "116",
        "text": "ICD (AICD) implantation",
        "score": "4",
        "mortality": "1.5",
        "morbidity": "1",
        "difficulty": "1.5"
    },
    {
        "number": "117",
        "text": "ICD (AICD) (automatic implantable cardioverter defibrillator) procedure",
        "score": "4",
        "mortality": "1.5",
        "morbidity": "1",
        "difficulty": "1.5"
    },
    {
        "number": "118",
        "text": "Arrhythmia surgery - atrial, Surgical ablation",
        "score": "8",
        "mortality": "3",
        "morbidity": "2",
        "difficulty": "3"
    },
    {
        "number": "119",
        "text": "Shunt, Systemic to pulmonary, Modified Blalock�CTaussig shunt (MBTS)",
        "score": "6.3",
        "mortality": "2",
        "morbidity": "2",
        "difficulty": "2.3"
    },
    {
        "number": "120",
        "text": "Shunt, Systemic to pulmonary, Central (From aorta or to main pulmonary artery)",
        "score": "6.8",
        "mortality": "2",
        "morbidity": "2",
        "difficulty": "2.8"
    },
    {
        "number": "121",
        "text": "Shunt, Ligation and takedown",
        "score": "3.5",
        "mortality": "1.5",
        "morbidity": "1",
        "difficulty": "1"
    },
    {
        "number": "122",
        "text": "PA banding (PAB)",
        "score": "6",
        "mortality": "2",
        "morbidity": "2",
        "difficulty": "2"
    },
    {
        "number": "123",
        "text": "PA debanding",
        "score": "6",
        "mortality": "2",
        "morbidity": "2",
        "difficulty": "2"
    },
    {
        "number": "124",
        "text": "Damus�CKaye�CStansel procedure (DKS) (creation of AP anastomosis without arch reconstruction)",
        "score": "9.5",
        "mortality": "3",
        "morbidity": "3",
        "difficulty": "3.5"
    },
    {
        "number": "125",
        "text": "Bidirectional cavopulmonary anastomosis (BDCPA) (bidirectional Glenn)",
        "score": "7",
        "mortality": "2.5",
        "morbidity": "2",
        "difficulty": "2.5"
    },
    {
        "number": "126",
        "text": "Glenn (unidirectional cavopulmonary anastomosis) (unidirectional Glenn)",
        "score": "7",
        "mortality": "2.5",
        "morbidity": "2",
        "difficulty": "2.5"
    },
    {
        "number": "127",
        "text": "Bilateral bidirectional cavopulmonary anastomosis (BBDCPA) (bilateral bidirectional Glenn)",
        "score": "7.5",
        "mortality": "2.5",
        "morbidity": "2",
        "difficulty": "3"
    },
    {
        "number": "128",
        "text": "Hemifontan",
        "score": "8",
        "mortality": "3",
        "morbidity": "2",
        "difficulty": "3"
    },
    {
        "number": "129",
        "text": "Aneurysm, Ventricular, Right, Repair",
        "score": "8",
        "mortality": "3",
        "morbidity": "2",
        "difficulty": "3"
    },
    {
        "number": "130",
        "text": "Aneurysm, Ventricular, Left, Repair",
        "score": "9",
        "mortality": "3",
        "morbidity": "2.5",
        "difficulty": "3.5"
    },
    {
        "number": "131",
        "text": "Aneurysm, Pulmonary artery, Repair",
        "score": "8",
        "mortality": "3",
        "morbidity": "2",
        "difficulty": "3"
    },
    {
        "number": "132",
        "text": "Cardiac tumor resection",
        "score": "8",
        "mortality": "3",
        "morbidity": "2",
        "difficulty": "3"
    },
    {
        "number": "133",
        "text": "Ligation, Pulmonary artery",
        "score": "5",
        "mortality": "1.5",
        "morbidity": "2",
        "difficulty": "1.5"
    },
    {
        "number": "134",
        "text": "Pulmonary embolectomy",
        "score": "8",
        "mortality": "3",
        "morbidity": "3",
        "difficulty": "2"
    },
    {
        "number": "135",
        "text": "Pleural drainage procedure",
        "score": "1.5",
        "mortality": "0.5",
        "morbidity": "0.5",
        "difficulty": "0.5"
    },
    {
        "number": "136",
        "text": "Ligation, Thoracic duct",
        "score": "4",
        "mortality": "1",
        "morbidity": "2",
        "difficulty": "1"
    },
    {
        "number": "137",
        "text": "Decortication",
        "score": "5",
        "mortality": "1",
        "morbidity": "1",
        "difficulty": "3"
    },
    {
        "number": "138",
        "text": "Intra-aortic balloon pump (IABP) insertion",
        "score": "2",
        "mortality": "0.5",
        "morbidity": "1",
        "difficulty": "0.5"
    },
    {
        "number": "139",
        "text": "ECMO procedure",
        "score": "6",
        "mortality": "2",
        "morbidity": "3",
        "difficulty": "1"
    },
    {
        "number": "140",
        "text": "Right/left heart assist device procedure",
        "score": "7",
        "mortality": "2",
        "morbidity": "3",
        "difficulty": "2"
    },
    {
        "number": "141",
        "text": "Bronchoscopy",
        "score": "1.5",
        "mortality": "0.5",
        "morbidity": "0.5",
        "difficulty": "0.5"
    },
    {
        "number": "142",
        "text": "Diaphragm plication",
        "score": "4",
        "mortality": "1",
        "morbidity": "2",
        "difficulty": "1"
    },
    {
        "number": "143",
        "text": "Delayed sternal closure",
        "score": "1.5",
        "mortality": "0.5",
        "morbidity": "0.5",
        "difficulty": "0.5"
    },
    {
        "number": "144",
        "text": "Mediastinal exploration",
        "score": "1.5",
        "mortality": "0.5",
        "morbidity": "0.5",
        "difficulty": "0.5"
    },
    {
        "number": "145",
        "text": "Sternotomy wound drainage",
        "score": "1.5",
        "mortality": "0.5",
        "morbidity": "0.5",
        "difficulty": "0.5"
    },
    {
        "number": "146",
        "text": "Coarctation + VSD repair",
        "score": "10",
        "mortality": "2.5",
        "morbidity": "3",
        "difficulty": "3.5"
    },
    {
        "number": "147",
        "text": "Aortic arch repair + VSD repair",
        "score": "10",
        "mortality": "3",
        "morbidity": "3",
        "difficulty": "4"
    },
    {
        "number": "148",
        "text": "Aortic root replacement, Bioprosthetic ",
        "score": "9.5",
        "mortality": "3.5",
        "morbidity": "2",
        "difficulty": "4"
    },
    {
        "number": "149",
        "text": "Arrhythmia surgery - ventricular, Surgical ablation",
        "score": "8",
        "mortality": "3",
        "morbidity": "2",
        "difficulty": "3"
    },
    {
        "number": "150",
        "text": "Atrial baffle procedure, Mustard or Senning revision",
        "score": "7",
        "mortality": "2",
        "morbidity": "2",
        "difficulty": "3"
    },
    {
        "number": "151",
        "text": "Atrial fenestration closure",
        "score": "3",
        "mortality": "1",
        "morbidity": "1",
        "difficulty": "1"
    },
    {
        "number": "152",
        "text": "Conduit placement, Ventricle to aorta",
        "score": "9",
        "mortality": "3",
        "morbidity": "3",
        "difficulty": "3"
    },
    {
        "number": "153",
        "text": "Ebstein's repair",
        "score": "10",
        "mortality": "3",
        "morbidity": "3",
        "difficulty": "4"
    },
    {
        "number": "154",
        "text": "Fontan revision or conversion (Re-do Fontan)",
        "score": "12.5",
        "mortality": "4",
        "morbidity": "4",
        "difficulty": "4.5"
    },
    {
        "number": "155",
        "text": "Pulmonary embolectomy, Acute pulmonary embolus",
        "score": "8",
        "mortality": "3",
        "morbidity": "3",
        "difficulty": "2"
    },
    {
        "number": "156",
        "text": "Pulmonary embolectomy, Chronic pulmonary embolus",
        "score": "9",
        "mortality": "3",
        "morbidity": "3",
        "difficulty": "3"
    },
    {
        "number": ""
    },
    {
        "number": ""
    }
]

var general = [
  {
    "text":"Weight < 2.5 kg",
    "score":2
  },
  {
    "text":"Prematurity 32 - 35 weeks",
    "score":2
  },
  {
    "text":"Extreme Prematurity < 32 weeks",
    "score":4
  }
]

var surgical = [
  {
    "text":"Redosternotomy: Redo # 1, 2, or 3",
    "score":2
  },
  {
    "text":"Redosternotomy: Redo # 4 or more",
    "score":1
  },
  {
    "text":"Redothoracotomy",
    "score":1
  },
  {
    "text":"Minimal invasive sternotomy",
    "score":0.5
  },
  {
    "text":"Minimal invasive anterolateral thoracotomy",
    "score":0.5
  },
  {
    "text":"Minimal invasive posterolateral thoracotomy",
    "score":0.5
  },
  {
    "text":"Minimal invasive posterior thoracotomy",
    "score":1
  },
  {
    "text":"Robot assisted surgery",
    "score":0.5
  },
  {
    "text":"Video assisted thoracic surgery (VATS)",
    "score":0.5
  }
]

var clinical = [
  {
    "text":"Mechanical Cardio-Pulmonary Support ",
    "score":4
  },
  {
    "text":"Shock - persistent at time of surgery",
    "score":3
  },
  {
    "text":"Myocardial dysfunction",
    "score":2
  },
  {
    "text":"Cardio-pulmonary resuscitation",
    "score":2
  },
  {
    "text":"Shock - resolved at time of surgery",
    "score":1
  },
  {
    "text":"Supraventricular tachycardia",
    "score":0.5
  },
  {
    "text":"Ventricular tachycardia",
    "score":0.5
  },
  {
    "text":"Mechanical ventilation to treat cardiorespiratory failure",
    "score":2
  },
  {
    "text":"Respiratory Syncytial Virus",
    "score":3
  },
  {
    "text":"Elevated lung resistances. Bi-ventricular repair",
    "score":2
  },
  {
    "text":"Elevated lung resistances. Heart transplant",
    "score":2
  },
  {
    "text":"Elevated lung resistances. Uni-ventricular repair",
    "score":2
  },
  {
    "text":"Single lung",
    "score":3
  },
  {
    "text":"Tracheostomy",
    "score":1
  },
  {
    "text":"Septicemia",
    "score":2
  },
  {
    "text":"Endocarditis",
    "score":3
  },
  {
    "text":"Necrotizing entero-colitis treated medically",
    "score":1
  },
  {
    "text":"Necrotizing entero-colitis treated surgically",
    "score":2
  },
  {
    "text":"Hepatic dysfunction",
    "score":1
  },
  {
    "text":"Enterostomy present",
    "score":0.5
  },
  {
    "text":"Coagulation disorder - Acquired",
    "score":1
  },
  {
    "text":"Coagulation disorder - Congenital",
    "score":0.5
  },
  {
    "text":"Renal dysfunction",
    "score":1
  },
  {
    "text":"Renal failure requiring dialysis",
    "score":3
  },
  {
    "text":"Stroke, CVA, or Intracranial hemorrhage < Grade 2 lifetime",
    "score":1
  },
  {
    "text":"Stroke, CVA, or Intracranial hemorrhage > Grade 2",
    "score":2
  },
  {
    "text":"Seizure during lifetime",
    "score":0.5
  },
  {
    "text":"Seizure within 48 h prior to surgery ",
    "score":1
  },
  {
    "text":"Hypothyroidism",
    "score":1
  },
  {
    "text":"Diabetes mellitus - insulin dependent",
    "score":1
  },
  {
    "text":"Diabetes mellitus - non-insulin dependent",
    "score":0.5
  },
  {
    "text":"Criss-cross heart",
    "score":0.5
  },
  {
    "text":"Dextrocardia",
    "score":0.5
  },
  {
    "text":"Ectopia cordis",
    "score":4
  }
]

var extracardiac = [
  {
    "text":"Hydrocephalus",
    "score":0.5
  },
  {
    "text":"Spina Bifida",
    "score":0.5
  },
  {
    "text":"Laryngo-malacia",
    "score":3
  },
  {
    "text":"Broncho-tracheal Malacia",
    "score":3
  },
  {
    "text":"Cystic fibrosis",
    "score":2
  },
  {
    "text":"Tracheo-oesophageal Fistula",
    "score":1
  },
  {
    "text":"Pulmonary lymphangectasis",
    "score":1
  },
  {
    "text":"Choanal atresia",
    "score":0.5
  },
  {
    "text":"Cleft Palate",
    "score":0.5
  },
  {
    "text":"Congenital lobar emphysema",
    "score":0.5
  },
  {
    "text":"Congenital cystic adenomatoid malformation",
    "score":0.5
  },
  {
    "text":"Sequestration",
    "score":0.5
  },
  {
    "text":"Chest wall deformity including pectus",
    "score":0.5
  },
  {
    "text":"Biliary atresia",
    "score":4
  },
  {
    "text":"Gastroschises",
    "score":2
  },
  {
    "text":"Omphalocoele",
    "score":1
  },
  {
    "text":"Duodenal atresia",
    "score":1
  },
  {
    "text":"Imperforate anus",
    "score":0.5
  },
  {
    "text":"Hirshsprungs disease",
    "score":0.5
  },
  {
    "text":"Inflammatory bowel disease - Crohn's, Ulcerative colitis",
    "score":0.5
  },
  {
    "text":"Polycistic disease",
    "score":0.5
  },
  {
    "text":"Vesicouteric reflux",
    "score":0.5
  },
  {
    "text":"Hydronephrosis (PUJ and VUJ obstruction)",
    "score":0.5
  },
  {
    "text":"Marfan's syndrome",
    "score":2
  },
  {
    "text":"Down's syndrome",
    "score":1
  },
  {
    "text":"Di George",
    "score":1
  },
  {
    "text":"22q11 deletion",
    "score":1
  },
  {
    "text":"William Beuren's syndrome",
    "score":1
  },
  {
    "text":"Alagille's syndrome",
    "score":0.5
  },
  {
    "text":"Turner's syndrome",
    "score":0.5
  },
  {
    "text":"Genetic + Chromosomal Other",
    "score":0.5
  },
  {
    "text":"Heterotaxia",
    "score":1
  },
  {
    "text":"Situs inversus",
    "score":0.5
  },
  {
    "text":"Criss-cross heart",
    "score":0.5
  },
  {
    "text":"Dextrocardia",
    "score":0.5
  },
  {
    "text":"Ectopia cordis",
    "score":4
  },
  {
    "text":"Diabetic mother",
    "score":1
  },
  {
    "text":"Muscular dystrophy",
    "score":0.5
  },
  {
    "text":"Currently taking steroids",
    "score":0.5
  }
]

var factors = [general,clinical,extracardiac,surgical];