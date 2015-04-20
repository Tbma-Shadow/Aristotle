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
        "text": "AVC (AVSD) repair, Partial (Incomplete) (PAVSD)",
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
        "text": "TOF repair, No ventriculotomy",
        "score": "8",
        "mortality": "3",
        "morbidity": "2",
        "difficulty": "3"
    },
    {
        "number": "30",
        "text": "TOF repair, Ventriculotomy, Non-transanular patch",
        "score": "7.5",
        "mortality": "2.5",
        "morbidity": "2",
        "difficulty": "3"
    },
    {
        "number": "31",
        "text": "TOF repair, Ventriculotomy, Transanular patch",
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
        "text": "Valve replacement, Tricuspid",
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
        "text": "Aortic root replacement, Valve sparing",
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
        "text": "Ross–Konno procedure",
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
        "text": "Lung Biopsy",
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
        "text": "ICD (AICD) procedure",
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
        "text": "Shunt, Systemic to pulmonary, Modified Blalock–Taussig shunt (MBTS)",
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
        "text": "Damus–Kaye–Stansel procedure (DKS) (creation of AP anastomosis without arch reconstruction)",
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
        "text": "Aortic root replacement, Bioprosthetic",
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
]

var dependent_factors = [
  {
    "id":1,
    "procedure":"1 1/2 ventricular repair",
    "factor":"",
    "score":"BAS 9.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Ebstein repair ",
    "score":"(#153)"
  },
 
  {
    "id":2,
    "procedure":"Aneurysm, Pulmonary artery, Repair",
    "factor":"",
    "score":"BAS 8.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Aneurysm (or false aneurysm) ruptured",
    "score":"4"
  },
 
  {
    "id":3,
    "procedure":"Aneurysm, Ventricular, Left, Repair",
    "factor":"",
    "score":"BAS 9.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Aneurysm (or false aneurysm) ruptured",
    "score":"4"
  },
 
  {
    "id":4,
    "procedure":"Aneurysm, Ventricular, Right, Repair",
    "factor":"",
    "score":"BAS 8.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Aneurysm (or false aneurysm) ruptured",
    "score":"4"
  },
 
  {
    "id":5,
    "procedure":"Anomalous origin of coronary artery from pulmonary artery repair",
    "factor":"",
    "score":"BAS 10.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"LV ejection fraction <15%",
    "score":"2"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Takeuchi procedure or other left coronary ostial extension",
    "score":"1.5"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Valvuloplasty, Mitral",
    "score":"4"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Valve replacement, Mitral (MVR)",
    "score":"4"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Age <1M",
    "score":"3"
  },
 
 
  {
    "id":6,
    "procedure":"Anomalous systemic venous connection repair",
    "factor":"",
    "score":"BAS 7.0"
  },
  {
    "id":7,
    "procedure":"Aortic aneurysm repair",
    "factor":"",
    "score":"BAS 8.8"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Traumatic, acute",
    "score":"2"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Ruptured aneurysm",
    "score":"4"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Aortic arch repair",
    "score":"3"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Thoraco-abdominal aneurysm repair",
    "score":"4"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Aortic root replacement, With mechanical valve",
    "score":"(#59)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Aortic root replacement, Valve sparing",
    "score":"3"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Aortic root replacement, With homograft valve",
    "score":"(#60)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Aortic root replacement, With bioprosthetic valve",
    "score":"(#148)"
  },
  {
    "id":8,
    "procedure":"Aortic arch repair",
    "factor":"",
    "score":"BAS 7.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Glenn (unidirectional cavopulmonary anastomosis) (unidirectional Glenn)",
    "score":"2"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Bidirectional cavopulmonary anastomosis (BDCPA) (bidirectional Glenn)",
    "score":"2"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Bilateral bidirectional cavopulmonary anastomosis (BBDCPA)",
    "score":"SAPP (#127)"
  },
 
 
  {
    "id":null,
    "procedure":"",
    "factor":"Hemifontan",
    "score":"SAPP(#128)"
  },
 
 
 
  {
    "id":null,
    "procedure":"",
    "factor":"Aortic arch repair + VSD repair",
    "score":"SAPP(#147)"
  },
 
  {
    "id":9,
    "procedure":"Aortic arch repair + VSD repair",
    "factor":"",
    "score":"BAS 10.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"VSD, Multiple, repair",
    "score":"3"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Aortic stenosis, Subvalvar, Repair",
    "score":"3"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Damus-Kaye-Stansel procedure (DKS) (creation of AP anastomosis without arch reconstruction)",
    "score":"3.5"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"LV hypoplasia (see at HLHS biventricular repair)",
    "score":"SAPP (#72)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Ross-Konno (see at Ross Konno)",
    "score":"SAPP (#63)"
  },
  {
    "id":10,
    "procedure":"Aortic dissection repair",
    "factor":"",
    "score":"BAS 11.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Ruptured aneurysm",
    "score":"4"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Aortic arch repair",
    "score":"3"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Aortic root replacement, With mechanical valve",
    "score":"SAPP (#59)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Aortic root replacement, Valve sparing",
    "score":"3"
  },
 
 
  {
    "id":11,
    "procedure":"Aortic root replacement, Bioprosthetic",
    "factor":"",
    "score":"BAS 9.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Endocarditis",
    "score":"2"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Endocarditis with annular abcess",
    "score":"3"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Previous homograft",
    "score":"3.5"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Previous autograft",
    "score":"2"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Coronary artery bypass",
    "score":"2"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Non Konno annular enlargement procedure",
    "score":"1.5"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Aortic arch repair",
    "score":"2"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Valve replacement, Mitral (MVR)",
    "score":"2.5"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Valvuloplasty, Mitral",
    "score":"2"
  },
 
 
  {
    "id":12,
    "procedure":"Aortic root replacement, Homograft",
    "factor":"",
    "score":"BAS 9.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Endocarditis",
    "score":"2"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Previous homograft",
    "score":"3.5"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Previous autograft",
    "score":"2"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Endocarditis with annular abcess",
    "score":"4"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Coronary artery bypass",
    "score":"2"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Aortic arch repair",
    "score":"2"
  },
 
 
  {
    "id":null,
    "procedure":"",
    "factor":"Non Konno annular enlargement procedure",
    "score":"1.5"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Valvuloplasty, Mitral",
    "score":"(#68)"
  },
 
 
  {
    "id":null,
    "procedure":"",
    "factor":"Valve replacement, Mitral (MVR)",
    "score":"(#70)"
  },
 
 
 
 
  {
    "id":13,
    "procedure":"Aortic root replacement, Mechanical",
    "factor":"",
    "score":"BAS 8.8"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Endocarditis",
    "score":"2"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Previous homograft",
    "score":"3.5"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Previous autograft",
    "score":"2"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Endocarditis with annular abcess",
    "score":"4"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Coronary artery bypass",
    "score":"2"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Aortic arch repair",
    "score":"2"
  },
 
 
  {
    "id":null,
    "procedure":"",
    "factor":"Non Konno annular enlargement procedure",
    "score":"1.5"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Valvuloplasty, Mitral",
    "score":"(#68)"
  },
 
 
  {
    "id":null,
    "procedure":"",
    "factor":"Valve replacement, Mitral (MVR)",
    "score":"(#70)"
  },
  {
    "id":14,
    "procedure":"Aortic root replacement, Valve sparing",
    "factor":"",
    "score":"BAS 8.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Coronary artery bypass",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Aortic arch repair",
    "score":"2"
  },
 
  {
    "id":15,
    "procedure":"Aortic stenosis, Subvalvar, Repair",
    "factor":"",
    "score":"BAS 6.3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Previous subvalvular resection",
    "score":"1.5"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Previous LV to aorta tunnelization patch",
    "score":"2"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Accessory mitral valve tissue",
    "score":"1.5"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Idiopathic hypertrophic subaortic stenosis",
    "score":"4"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Fibromuscular tunnel",
    "score":"2"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Aortic arch repair",
    "score":"SAPP (#104)"
  },
 
 
  {
    "id":null,
    "procedure":"",
    "factor":"Valvuloplasty, Mitral",
    "score":"SAPP (#68)"
  },
 
 
  {
    "id":null,
    "procedure":"",
    "factor":"Valve replacement, Mitral (MVR)",
    "score":"SAPP (#70)"
  },
 
 
  {
    "id":null,
    "procedure":"",
    "factor":"Ventricular septoplasty",
    "score":"2.5"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Valvuloplasty, Aortic",
    "score":"SAPP (#54)"
  },
 
 
  {
    "id":null,
    "procedure":"",
    "factor":"Ross procedure",
    "score":"SAPP (#61)"
  },
 
 
  {
    "id":null,
    "procedure":"",
    "factor":"AVC (AVSD) repair, Complete (CAVSD)",
    "score":"SAPP (#13)"
  },
 
 
  {
    "id":null,
    "procedure":"",
    "factor":"AVC (AVSD) repair, Intermediate or Partial",
    "score":"2.5"
  },
 
  {
    "id":16,
    "procedure":"Aortic stenosis, Supravalvar, Repair",
    "factor":"",
    "score":"BAS 5.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Severe stenosis (gradient > 100 mmHg)",
    "score":"4"
  },
 
 
  {
    "id":null,
    "procedure":"",
    "factor":"Aortic arch repair",
    "score":"(#104)"
  },
 
 
  {
    "id":null,
    "procedure":"",
    "factor":"Valvuloplasty, Aortic",
    "score":"(#54)"
  },
 
 
  {
    "id":null,
    "procedure":"",
    "factor":"Aortic root replacement, Valve sparing",
    "score":"(#58)"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Coronary ostial reconstruction",
    "score":"3"
  },
 
  {
    "id":17,
    "procedure":"Aortopexy",
    "factor":"",
    "score":"BAS 4.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Vascular ring repair",
    "score":"(#107)"
  },
 
 
  {
    "id":18,
    "procedure":"AP window repair",
    "factor":"",
    "score":"BAS 6.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Interrupted aortic arch repair",
    "score":"(#105)"
  },
 
 
 
  {
    "id":null,
    "procedure":"",
    "factor":"VSD repair, Patch",
    "score":"1"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"VSD repair, Primary closure",
    "score":"1"
  },
 
  {
    "id":19,
    "procedure":"Arrhythmia surgery - atrial, Surgical ablation",
    "factor":"",
    "score":"BAS 8.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Maze procedure, right or left",
    "score":"1.5"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Maze procedure, bilateral",
    "score":"3"
  },
 
  {
    "id":20,
    "procedure":"Arrhythmia surgery - ventricular, Surgical ablation",
    "factor":"",
    "score":"BAS 8.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"ICD (AICD) implantation",
    "score":"1.5"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Pacemaker implantation, Permanent",
    "score":"1"
  },
 
  {
    "id":21,
    "procedure":"Arterial switch operation (ASO) and VSD repair",
    "factor":"",
    "score":"BAS 11.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Straddling AV valve",
    "score":"3"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Posterior loop: circumflex coming off the RCA",
    "score":"1.5"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Posterior Loop: left trunk coming off the RCA",
    "score":"3"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Anterior Loop",
    "score":"3"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Double Loops",
    "score":"3"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Single Ostium",
    "score":"1"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Intramural coronary",
    "score":"4"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Malaligned commissures",
    "score":"1.5"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Large infundibular artery, from LAD",
    "score":"1.5"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Taussig Bing",
    "score":"2.5"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Criss cross heart",
    "score":"4"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Take down of a commissure",
    "score":"1.5"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"VSD, Multiple, repair",
    "score":"3"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Aortic stenosis, Subvalvar, Repair",
    "score":"3"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"DORV, Intraventricular tunnel repair",
    "score":"4"
  },
 
 
  {
    "id":22,
    "procedure":"Arterial switch operation (ASO)",
    "factor":"",
    "score":"BAS 10.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Posterior loop: circumflex coming off the RCA",
    "score":"1.5"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Posterior Loop: left trunk coming off the RCA",
    "score":"3"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Anterior Loop",
    "score":"3"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Double Loops",
    "score":"3"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Single Ostium",
    "score":"1"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Intramural coronary",
    "score":"4"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Malaligned commissures",
    "score":"1.5"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Large infundibular artery, from LAD",
    "score":"1.5"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"ASO post LV retraining",
    "score":"2"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Take down of a commissure",
    "score":"1.5"
  },
 
 
  {
    "id":23,
    "procedure":"Arterial switch procedure + Aortic arch repair",
    "factor":"",
    "score":"BAS 11.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Posterior loop: circumflex coming off the RCA",
    "score":"1.5"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Posterior Loop: left trunk coming off the RCA",
    "score":"3"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Anterior Loop",
    "score":"3"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Double Loops",
    "score":"3"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Single Ostium",
    "score":"1"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Intramural coronary",
    "score":"4"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Malaligned commissures",
    "score":"1.5"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Large infundibular artery, from LAD",
    "score":"1.5"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"ASO post LV retraining",
    "score":"2"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Take down of a commissure",
    "score":"1.5"
  },
 
 
  {
    "id":24,
    "procedure":"Arterial switch procedure and VSD repair + Aortic arch repair",
    "factor":"",
    "score":"BAS 13.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Straddling AV valve",
    "score":"3"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Posterior loop: circumflex coming off the RCA",
    "score":"1.5"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Posterior Loop: left trunk coming off the RCA",
    "score":"3"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Anterior Loop",
    "score":"3"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Double Loops",
    "score":"3"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Single Ostium",
    "score":"1"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Intramural coronary",
    "score":"4"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Malaligned commissures",
    "score":"1.5"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Large infundibular artery, from LAD",
    "score":"1.5"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"ASO post LV retraining",
    "score":"2"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Taussig Bing",
    "score":"2.5"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Criss cross heart",
    "score":"4"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Aortic stenosis, Subvalvar repair",
    "score":"4"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"VSD, Multiple, Repair",
    "score":"2"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Take down of a commissure",
    "score":"1.5"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"DORV, Intraventricular tunnel repair",
    "score":"4"
  },
 
  {
    "id":25,
    "procedure":"ASD creation/enlargement",
    "factor":"",
    "score":"BAS 5.0"
  },

 
  {
    "id":26,
    "procedure":"ASD partial closure",
    "factor":"",
    "score":"BAS 3.0"
  },
 
  {
    "id":27,
    "procedure":"ASD repair, Patch",
    "factor":"",
    "score":"BAS 3.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Sinus venosus",
    "score":"1"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Sinus venosus + LSVC",
    "score":"1.5"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Age < 1 Y",
    "score":"1"
  },
 
  {
    "id":28,
    "procedure":"ASD repair, Primary closure",
    "factor":"",
    "score":"BAS 3.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Age < 1 Y",
    "score":"1"
  },
 
  {
    "id":29,
    "procedure":"ASD, Common atrium (Single atrium), Septation",
    "factor":"",
    "score":"BAS 3.8"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Atrial baffle procedure (non-Mustard, non-Senning)",
    "score":"(#26)"
  },
 
 
  {
    "id":30,
    "procedure":"Atrial baffle procedure (non-Mustard, non-Senning)",
    "factor":"",
    "score":"BAS 7.8"
  },

 
  {
    "id":31,
    "procedure":"Atrial baffle procedure, Mustard or Senning revision",
    "factor":"",
    "score":"BAS 7.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Enlarge caval pathway",
    "score":"2"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Enlarge pulmonary venous atrium",
    "score":"2"
  },
 
  {
    "id":32,
    "procedure":"Atrial fenestration closure",
    "factor":"",
    "score":"BAS 3.0"
  },

  {
    "id":33,
    "procedure":"Atrial septal fenestration",
    "factor":"",
    "score":"BAS 5.0"
  },

 
  {
    "id":34,
    "procedure":"AVC (AVSD) repair, Complete (CAVSD)",
    "factor":"",
    "score":"BAS 9.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"AV Valve regurgitation grade 3 and 4",
    "score":"3"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Double orifice mitral valve",
    "score":"2.5"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Parachute mitral valve",
    "score":"4"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Unbalanced AVSD: LV hypoplasia (LVEDV<20ml/m2)",
    "score":"2"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Hypoplastic posterior bridging leaflet",
    "score":"3"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Aortic stenosis, Subvalvar repair",
    "score":"4"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Aortic arch repair",
    "score":"3"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"TOF - AVC (AVSD) repair",
    "score":"(#33)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Age < 1M",
    "score":"3"
  },
 
 
 
  {
    "id":35,
    "procedure":"AVC (AVSD) repair, Intermediate (transitional)",
    "factor":"",
    "score":"BAS 5.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"AV Valve regurgitation grade 3 and 4",
    "score":"3"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Double orifice mitral valve",
    "score":"2.5"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Parachute mitral valve",
    "score":"4"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Unbalanced AVSD: LV hypoplasia (LVEDV<20ml/m2)",
    "score":"2"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Hypoplastic posterior bridging leaflet",
    "score":"3"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Aortic arch repair",
    "score":"(#104)"
  },
 
 
  {
    "id":null,
    "procedure":"",
    "factor":"Aortic stenosis, Subvalvar repair",
    "score":"(#64)"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Age < 1 M",
    "score":"4"
  },
  {
    "id":36,
    "procedure":"AVC (AVSD) repair, Partial (Incomplete) (PAVSD)",
    "factor":"",
    "score":"BAS 4.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"AV Valve regurgitation grade 3 and 4",
    "score":"3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Unbalanced AVSD: LV hypoplasia (LVEDV<20ml/m2)",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Aortic stenosis, Subvalvar repair",
    "score":"(#64)"
  },
  {
    "id":37,
    "procedure":"Bidirectional cavopulmonary anastomosis (BDCPA) (bidirectional Glenn)",
    "factor":"",
    "score":"BAS 7.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"PA, reconstruction (plasty), Branch, Central (within the hilar bifurcation)",
    "score":"1.5"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Systemic AV valve repair",
    "score":"3.5"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Aortic arch repair",
    "score":"2"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Damus-Kaye-Stansel",
    "score":"(#124)"
  },
 
 
 
  {
    "id":38,
    "procedure":"Bilateral bidirectional cavopulmonary anastomosis (BBDCPA) (bilateral bidirectional Glenn)",
    "factor":"",
    "score":"BAS 7.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"PA, reconstruction (plasty), Branch, Central (within the hilar bifurcation)",
    "score":"1.5"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Systemic AV valve repair",
    "score":"3.5"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Aortic arch repair",
    "score":"2"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Damus-Kaye-Stansel",
    "score":"(#124)"
  },
 
 
 
  {
    "id":39,
    "procedure":"Bronchoscopy",
    "factor":"",
    "score":"BAS 1.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Severe long segment tracheal stenosis",
    "score":"1.5"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Foreign body removal",
    "score":"1"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Age < 6 M",
    "score":"1.5"
  },
 
  {
    "id":40,
    "procedure":"Cardiac tumor resection",
    "factor":"",
    "score":"BAS 8.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Ventricular myocardial involvement",
    "score":"4"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Malignant neoplasm",
    "score":"3"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Valvuloplasty, Tricuspid",
    "score":"2"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Valvuloplasty, Mitral",
    "score":"3"
  },
 
  {
    "id":41,
    "procedure":"Coarctation + VSD repair",
    "factor":"",
    "score":"BAS 10.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"VSD, Multiple, repair",
    "score":"3"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Aortic stenosis, Subvalvar, Repair",
    "score":"3"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Damus-Kaye-Stansel procedure (DKS) (creation of AP anastomosis without arch reconstruction)",
    "score":"3.5"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"LV hypoplasia (see at HLHS biventricular repair)",
    "score":"(#72)"
  },
 
 
  {
    "id":null,
    "procedure":"",
    "factor":"Ross-Konno (see at Ross Konno)",
    "score":"(#63)"
  },
 
 
 
  {
    "id":42,
    "procedure":"Coarctation repair, End to end",
    "factor":"",
    "score":"BAS 6.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Aberrant subclavian artery",
    "score":"1"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Descending aorta Aneurysm",
    "score":"2.5"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Coarctation + VSD repair",
    "score":"(#146)"
  },
 
 
  {
    "id":null,
    "procedure":"",
    "factor":"Age >10Y",
    "score":"2"
  },
 
  {
    "id":43,
    "procedure":"Coarctation repair, End to end, Extended",
    "factor":"",
    "score":"BAS 8.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Aberrant subclavian artery",
    "score":"1"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Coarctation + VSD repair",
    "score":"(#146)"
  },
 
 
  {
    "id":null,
    "procedure":"",
    "factor":"Anastomosis extended to the proximal arch",
    "score":"3"
  },
 
  {
    "id":44,
    "procedure":"Coarctation repair, Interposition graft",
    "factor":"",
    "score":"BAS 7.8"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Descending aorta Aneurysm",
    "score":"2.5"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Coarctation + VSD repair",
    "score":"(#146)"
  },
 
 
  {
    "id":45,
    "procedure":"Coarctation repair, Patch aortoplasty",
    "factor":"",
    "score":"BAS 6.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Coarctation + VSD repair",
    "score":"(#146)"
  },
 
 
  {
    "id":46,
    "procedure":"Coarctation repair, Subclavian flap",
    "factor":"",
    "score":"BAS 6.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Reconstruction of left subclavian artery",
    "score":"1"
  },
 
  {
    "id":47,
    "procedure":"Conduit placement, RV to PA",
    "factor":"",
    "score":"BAS 7.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"PA reconstruction (plasty), Branch, Central (within the hilar bifurcation)",
    "score":"1.5"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Valvuloplasty, Tricuspid",
    "score":"1"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Sano shunt",
    "score":"2"
  },
 
 
  {
    "id":48,
    "procedure":"Conduit placement, LV to PA",
    "factor":"",
    "score":"BAS 8.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"PA reconstruction (plasty), Branch, Central (within the hilar bifurcation)",
    "score":"1.5"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Valvuloplasty, Tricuspid",
    "score":"1"
  },
 
 
  {
    "id":49,
    "procedure":"Conduit placement, Ventricle to aorta",
    "factor":"",
    "score":"BAS 9.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Anatomic right ventricle is systemic ventricle",
    "score":"2"
  },
 
  {
    "id":50,
    "procedure":"Conduit reoperation",
    "factor":"",
    "score":"BAS 8.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Severe RV dysfunction",
    "score":"1"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Failed Homograft",
    "score":"2"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"RVOT pseudoaneurysm",
    "score":"1.5"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Valvuloplasty, Tricuspid",
    "score":"2"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"PA reconstruction (plasty), Branch, Central (within the hilar bifurcation)",
    "score":"2.5"
  },
 
  {
    "id":51,
    "procedure":"Congenitally corrected TGA repair, Atrial Switch and ASO (Double switch)",
    "factor":"",
    "score":"BAS 13.8"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Single Coronary Ostium",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Dextrocardia",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Following LV retraining",
    "score":"3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Ebstein's repair",
    "score":"2.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"1 1/2 Ventricular Repair",
    "score":"1.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Intra Operative Ablation of Accessory Pathway",
    "score":"1.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Age < 6 M",
    "score":"3"
  },
 
  {
    "id":52,
    "procedure":"Congenitally corrected TGA repair, Atrial switch and Rastelli",
    "factor":"",
    "score":"BAS 11.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Dextrocardia",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Inlet VSD",
    "score":"4"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Ebstein's repair",
    "score":"2.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"1 1/2 Ventricular Repair",
    "score":"1.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Intra Operative Ablation of Accessory Pathway",
    "score":"1.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"VSD, Multiple,Repair",
    "score":"3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"VSD creation/enlargement",
    "score":"3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Age < 6 M",
    "score":"3"
  },
 
  {
    "id":53,
    "procedure":"Congenitally corrected TGA repair, VSD closure",
    "factor":"",
    "score":"BAS 9.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"VSD, Multiple,Repair",
    "score":"3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Tricuspid (sytemic AV Value) valvuloplasty or replacement",
    "score":"3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Age < 6 M",
    "score":"3"
  },
 
  {
    "id":54,
    "procedure":"Congenitally corrected TGA repair, VSD closure and LV to PA conduit",
    "factor":"",
    "score":"BAS 11.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"VSD, Multiple,Repair",
    "score":"3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Tricuspid (sytemic AV Value) valvuloplasty or replacement",
    "score":"3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Age < 6 M",
    "score":"3"
  },
 
  {
    "id":55,
    "procedure":"Cor triatriatum repair",
    "factor":"",
    "score":"BAS 6.8"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Pulmonary venous stenosis repair",
    "score":"(#25)"
  },
 
 
  {
    "id":56,
    "procedure":"Coronary artery bypass",
    "factor":"",
    "score":"BAS 7.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Coronary artery aneurysm repair",
    "score":"2.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Age <5Y",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Age <6M",
    "score":"3"
  },
 
  {
    "id":57,
    "procedure":"Coronary artery fistula ligation",
    "factor":"",
    "score":"BAS 4.0"
  },
 
 
 
  {
    "id":58,
    "procedure":"Damus–Kaye–Stansel procedure (DKS) (creation of AP anastomosis without arch reconstruction)",
    "factor":"",
    "score":"BAS 9.5"
  },
 
 
  {
    "id":null,
    "procedure":"",
    "factor":"Glenn (unidirectional cavopulmonary anastomosis (unidirectional Glenn)",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Bidirectional cavopulmonary anastomosis (BDCPA) (bidirectional Glenn)",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Bilateral bidirectional cavopulmonary anastomosis (BBDCPA) (bilateral bidirectional Glenn)",
    "score":"2.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Hemifontan",
    "score":"2.5"
  },
  {
    "id":59,
    "procedure":"DCRV repair",
    "factor":"",
    "score":"BAS 7.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"VSD, Multiple, Repair",
    "score":"(#10)"
  },
  {
    "id":60,
    "procedure":"Decortication",
    "factor":"",
    "score":"BAS 5.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Empyemectomy",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Age < 6 M",
    "score":"2"
  },
  {
    "id":61,
    "procedure":"Delayed sternal closure",
    "factor":"",
    "score":"BAS 1.5"
  },
  {
    "id":62,
    "procedure":"Diaphragm plication",
    "factor":"",
    "score":"BAS 4.0"
  },
  {
    "id":63,
    "procedure":"DOLV repair",
    "factor":"",
    "score":"BAS 11.0"
  },

  {
    "id":64,
    "procedure":"DORV, Intraventricular tunnel repair",
    "factor":"",
    "score":"BAS 10.3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"DORV non-committed VSD",
    "score":"3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"ASVD",
    "score":"4"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"VSD, Multiple, repair",
    "score":"3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Aortic stenosis, Subvalvar, Repair",
    "score":"3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Tricuspid chordae reimplantation",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"VSD creation/enlargement",
    "score":"1.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Conduit placement, RV to PA",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Arterial switch operation",
    "score":"(#89)"
  },
 
  {
    "id":65,
    "procedure":"Ebstein's repair",
    "factor":"",
    "score":"BAS 10.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Restricted anterior leaflet motion (Type 3)",
    "score":"3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Ablation of AV node reentry paathway",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"VSD repair, Patch",
    "score":"1.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"VSD, Multiple, repair",
    "score":"3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"VSD repair, Primary closure",
    "score":"1.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Bidirectional cavopulmonary anastomosis (BDCPA) (bidirectional Glenn)",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Age <1M",
    "score":"3"
  },
  {
    "id":66,
    "procedure":"ECMO procedure",
    "factor":"",
    "score":"BAS 6.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Primary procedure (acute rejection, drowinig, hypothermia, owerdose, etc...)",
    "score":"4"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Trans thoracic approach",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Age < 6 M",
    "score":"2"
  },
  {
    "id":67,
    "procedure":"Fontan revision or conversion (Re-do Fontan)",
    "factor":"",
    "score":"BAS 12.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"PA reconstruction (plasty), Branch, Central (within the hilar bifurcation)",
    "score":"2.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Systemic AV valve repair",
    "score":"3.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Arrythmia surgery - atrial, Surgical ablation",
    "score":"3.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Pacemaker implantation, Permanent",
    "score":"1"
  },
  {
    "id":68,
    "procedure":"Fontan, Atrio-pulmonary connection",
    "factor":"",
    "score":"BAS 9.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"PA reconstruction (plasty), Branch, Central (within the hilar bifurcation)",
    "score":"2.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Systemic AV valve repair",
    "score":"3.5"
  },
  {
    "id":69,
    "procedure":"Fontan, Atrio-ventricular connection",
    "factor":"",
    "score":"BAS 9.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"PA reconstruction (plasty), Branch, Central (within the hilar bifurcation)",
    "score":"2.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Systemic AV valve repair",
    "score":"3.5"
  },
  {
    "id":70,
    "procedure":"Fontan, TCPC, External conduit, Fenestrated",
    "factor":"",
    "score":"BAS 9.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"PA reconstruction (plasty), Branch, Central (within the hilar bifurcation)",
    "score":"2.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Systemic AV valve repair",
    "score":"3.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Arrythmia surgery - atrial, Surgical ablation",
    "score":"3.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Fontan revision",
    "score":"(#154)"
  },
 
  {
    "id":71,
    "procedure":"Fontan, TCPC, External conduit, Non-fenestrated",
    "factor":"",
    "score":"BAS 9.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"PA reconstruction (plasty), Branch, Central (within the hilar bifurcation)",
    "score":"2.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Systemic AV valve repair",
    "score":"3.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Arrythmia surgery - atrial, Surgical ablation",
    "score":"3.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Fontan revision",
    "score":"(#154)"
  },
 
  {
    "id":72,
    "procedure":"Fontan, TCPC, Lateral tunnel, Fenestrated",
    "factor":"",
    "score":"SAP 9.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"PA reconstruction (plasty), Branch, Central (within the hilar bifurcation)",
    "score":"2.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Systemic AV valve repair",
    "score":"3.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Arrythmia surgery - atrial, Surgical ablation",
    "score":"3.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Fontan revision",
    "score":"(#154)"
  },
 
  {
    "id":73,
    "procedure":"Fontan, TCPC, Lateral tunnel, Non-fenestrated",
    "factor":"",
    "score":"BAS 9.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"PA reconstruction (plasty), Branch, Central (within the hilar bifurcation)",
    "score":"2.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Systemic AV valve repair",
    "score":"3.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Arrythmia surgery - atrial, Surgical ablation",
    "score":"3.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Fontan revision",
    "score":"(#154)"
  },
 
  {
    "id":74,
    "procedure":"Glenn (unidirectional cavopulmonary anastomosis) (unidirectional Glenn)",
    "factor":"",
    "score":"BAS 7.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"PA, reconstruction (plasty), Branch, Central (within the hilar bifurcation)",
    "score":"1.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Systemic AV valve repair",
    "score":"3.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Aortic arch repair",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Damus-Kaye-Stansel",
    "score":"(#124)"
  },
 
  {
    "id":75,
    "procedure":"Hemifontan",
    "factor":"",
    "score":"BAS 8.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"PA, reconstruction (plasty), Branch, Central (within the hilar bifurcation)",
    "score":"1.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Systemic AV valve repair",
    "score":"3.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Aortic arch repair",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Damus-Kaye-Stansel",
    "score":"(#124)"
  },
 
  {
    "id":76,
    "procedure":"HLHS biventricular repair",
    "factor":"",
    "score":"BAS 15.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Valvuloplasty, Mitral",
    "score":"4"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Endocardial fibrosis resection",
    "score":"4"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Ross–Konno procedure",
    "score":"4"
  },
  {
    "id":77,
    "procedure":"ICD (AICD) implantation",
    "factor":"",
    "score":"BAS 4.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Left superior vena cava",
    "score":"1"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Sternotomy or thoracotomy required",
    "score":"2.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Age < 6 M",
    "score":"1.5"
  },
  {
    "id":78,
    "procedure":"ICD (AICD) procedure",
    "factor":"",
    "score":"BAS 4.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Lead reposition or replacement",
    "score":"(#116)"
  },
 
  {
    "id":79,
    "procedure":"Interrupted aortic arch repair",
    "factor":"",
    "score":"BAS 10.8"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Anatomical Type B",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Intact ventricular septum",
    "score":"3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"VSD, Multiple, repair",
    "score":"3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Aortic stenosis, Subvalvar, Repair",
    "score":"3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Damus-Kaye-Stansel procedure (DKS) (creation of AP anastomosis without arch reconstruction)",
    "score":"3.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"AP window repair",
    "score":"2.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Truncus arteriosus repair",
    "score":"(#18)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"LV hypoplasia (see at HLHS biventricular repair)",
    "score":"(#72)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Ross-Konno (see at Ross Konno)",
    "score":"(#63)"
  },
 
  {
    "id":80,
    "procedure":"Intra-aortic balloon pump (IABP) insertion",
    "factor":"",
    "score":"BAS 2.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Trans thoracic approach",
    "score":"2"
  },
  {
    "id":81,
    "procedure":"Konno procedure",
    "factor":"",
    "score":"BAS 11"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Endocarditis",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Previous autograft",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Endocarditis with annular abcess",
    "score":"4"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Coronary artery bypass",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Aortic arch repair",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Valve replacement, Mitral (MVR)",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Valvuloplasty, Mitral",
    "score":"(#68)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Aortic root replacement",
    "score":"1.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"LV to aorta tunnel repair",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Age > 1M, < 6M",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Age < 1 M",
    "score":"4"
  },
  {
    "id":82,
    "procedure":"Ligation, Pulmonary artery",
    "factor":"",
    "score":"BAS 5.0"
  },

  {
    "id":83,
    "procedure":"Ligation, Thoracic duct",
    "factor":"",
    "score":"BAS 4.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Pleurodesis",
    "score":"2"
  },
  {
    "id":84,
    "procedure":"Lung Biopsy",
    "factor":"",
    "score":"BAS 5.0"
  },

  {
    "id":85,
    "procedure":"LV to aorta tunnel repair",
    "factor":"",
    "score":"BAS 8.3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Reimplantation coronary artery",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Valvuloplasty, Aortic",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Valve replacement, Aortic (AVR)",
    "score":"1.5"
  },
  {
    "id":86,
    "procedure":"Mediastinal exploration",
    "factor":"",
    "score":"BAS 1.5"
  },

  {
    "id":87,
    "procedure":"Mitral stenosis, Supravalvar mitral ring repair",
    "factor":"",
    "score":"BAS 8.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Aortic stenosis, Subvalvar, Repair",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Valvuloplasty, Mitral",
    "score":"(#68)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Valve replacement, Aortic (AVR)",
    "score":"1.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Valvuloplasty, Aortic",
    "score":"2.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Aortic arch repair",
    "score":"3.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Valve replacement, Mitral (MVR)",
    "score":"3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Repair pulmonary vein stenosis",
    "score":"4"
  },
 
  {
    "id":88,
    "procedure":"Mustard",
    "factor":"",
    "score":"BAS 9.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Juxtaposition appendages",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"LSVC",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"VSD repair, Patch",
    "score":"1.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"VSD repair, Primary closure",
    "score":"1.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Congenitally corrected transportation repair with ASO",
    "score":"(#84)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Congenitally corrected transportation repair with Rastelli",
    "score":"(#85)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Age < 1M",
    "score":"2"
  },
  {
    "id":89,
    "procedure":"Norwood procedure",
    "factor":"",
    "score":"BAS 14.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Aortic atresia",
    "score":"3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Obstructed pulmonary venous return (no ASD)",
    "score":"4"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"AV Valve regurgitation grade 3 and 4",
    "score":"3.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Aberrant right subclavian artery (except Sano shunt)",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Interrupted arch repair",
    "score":"2.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"TAPVC repair",
    "score":"4"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Age > 1M",
    "score":"3"
  },
  {
    "id":90,
    "procedure":"Occlusion MAPCA(s)",
    "factor":"",
    "score":"BAS 7.0"
  },
  {
    "id":91,
    "procedure":"PA banding (PAB)",
    "factor":"",
    "score":"BAS 6.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Single ventricle",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Banding PA branches",
    "score":"4"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Coarctation repair, End to end",
    "score":"(#99)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Coarctation repair, End to end, Extended",
    "score":"(#100)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Coarctation repair, Subclavian flap",
    "score":"(#101)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Coarctation repair, Patch aortoplasty",
    "score":"(#102)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Coarctation repair, Interposition graft",
    "score":"(#103)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Interrupted aortic arch repair",
    "score":"(#105)"
  },
 
 
  {
    "id":92,
    "procedure":"PA debanding",
    "factor":"",
    "score":"BAS 6.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"PA, reconstruction (plasty), Main (trunk)",
    "score":"(#45)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"PA, reconstruction (plasty), Branch, Central (within the hilar bifurcation)",
    "score":"(#46)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"VSD repair, Primary closure",
    "score":"(#8)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"VSD repair, Patch",
    "score":"(#9)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"VSD, Multiple, Repair",
    "score":"(#10)"
  },
 
  {
    "id":93,
    "procedure":"PA, reconstruction (plasty), Branch, Central (within the hilar bifurcation)",
    "factor":"",
    "score":"BAS 7.8"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"VSD repair, Patch",
    "score":"1"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"VSD repair, Primary closure",
    "score":"3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Bilateral PA branch reconstruction",
    "score":"3"
  },
  {
    "id":94,
    "procedure":"PA, reconstruction (plasty), Branch, Peripheral (at or beyond the hilar bifurcation)",
    "factor":"",
    "score":"BAS 8.8"
  },
  {
    "id":95,
    "procedure":"PA, reconstruction (plasty), Main (trunk)",
    "factor":"",
    "score":"BAS 6.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"VSD repair, Patch",
    "score":"1"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"VSD repair, Primary closure",
    "score":"1"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"VSD repair, Primary closure",
    "score":"1"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"PA reconstruction (plasty), Branch, Central (within the hilar bifurcation)",
    "score":"(#46)"
  },
 
  {
    "id":96,
    "procedure":"Pacemaker implantation, Permanent",
    "factor":"",
    "score":"BAS 3.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Dual chamber lead placement",
    "score":"1"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Placement bi-ventricular leads",
    "score":"1.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Sternotomy or thoracotomy required",
    "score":"2.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Age < 6 M",
    "score":"1"
  },
  {
    "id":97,
    "procedure":"Pacemaker procedure",
    "factor":"",
    "score":"BAS 3.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Lead reposition or replacement",
    "score":"(#114)"
  },
 
 
  {
    "id":98,
    "procedure":"PAPVC repair",
    "factor":"",
    "score":"BAS 5.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Reimplantation SVC",
    "score":"1.5"
  },
  {
    "id":99,
    "procedure":"PAPVC, Scimitar, Repair",
    "factor":"",
    "score":"BAS 8.0"
  },

  {
    "id":100,
    "procedure":"Partial left ventriculectomy (LV volume reduction surgery) (Batista)",
    "factor":"",
    "score":"BAS 12.0"
  },

 
  {
    "id":101,
    "procedure":"PDA closure, Surgical",
    "factor":"",
    "score":"BAS 3.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Active endocarditis",
    "score":"3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Calcification",
    "score":"3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Removal of ductus closure device",
    "score":"2"
  },
  {
    "id":102,
    "procedure":"Pectus repair",
    "factor":"",
    "score":"BAS 5.3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Assymetric deformity",
    "score":"3.5"
  },
  {
    "id":103,
    "procedure":"Pericardial drainage procedure",
    "factor":"",
    "score":"BAS 3.0"
  },

  {
    "id":104,
    "procedure":"Pericardiectomy",
    "factor":"",
    "score":"BAS 6.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Pericardial/epicardial calcification",
    "score":"1"
  },
  {
    "id":105,
    "procedure":"PFO, Primary closure",
    "factor":"",
    "score":"BAS 3.0"
  },

  {
    "id":106,
    "procedure":"Pleural drainage procedure",
    "factor":"",
    "score":"BAS 1.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Empyema",
    "score":"2"
  },
 
  {
    "id":107,
    "procedure":"Pulmonary artery origin from ascending aorta (hemitruncus) repair",
    "factor":"",
    "score":"BAS 9.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"VSD repair, Patch",
    "score":"1"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"VSD repair, Primary closure",
    "score":"1"
  },
  {
    "id":108,
    "procedure":"Pulmonary artery sling repair",
    "factor":"",
    "score":"BAS 9.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Bronco-tracheal malacia",
    "score":"3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Repair complete tracheo-bronchial rings",
    "score":"4"
  },
  {
    "id":109,
    "procedure":"Pulmonary atresia - VSD (including TOF, PA) repair",
    "factor":"",
    "score":"BAS 9.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Coronary artery anomaly restricting RVOT enlargement, (LAD from RCA etc.)",
    "score":"2.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"VSD, Multiple, Repair",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"PA reconstruction (plasty), Branch, Central (within the hilar bifurcation)",
    "score":"2.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Age > 1M, < 6M",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Age < 1M",
    "score":"3"
  },
  {
    "id":110,
    "procedure":"Pulmonary atresia - VSD - MAPCA (pseudotruncus) repair",
    "factor":"",
    "score":"BAS 11.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Coronary artery anomaly restricting RVOT enlargement, (LAD from RCA etc.)",
    "score":"2.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Absent native pulmonary artery branches",
    "score":"4"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"VSD, Multiple, Repair",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Unifocalization MAPCA(s)",
    "score":"3.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"VSD fenestrated or left open",
    "score":"1.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Age > 1M, < 6M",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Age < 1M",
    "score":"3.5"
  },
 
  {
    "id":111,
    "procedure":"Pulmonary embolectomy",
    "factor":"",
    "score":"BAS 8.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Chronic Pulmonary Embolus",
    "score":"(#156)"
  },
 
  {
    "id":112,
    "procedure":"Pulmonary embolectomy, Acute pulmonary embolus",
    "factor":"",
    "score":"BAS 8.0"
  },

  {
    "id":113,
    "procedure":"Pulmonary embolectomy, Chronic pulmonary embolus",
    "factor":"",
    "score":"BAS 9.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Pulmonary thromboendarterectomy (CTEPH)",
    "score":"4"
  },
  {
    "id":114,
    "procedure":"Pulmonary venous stenosis repair",
    "factor":"",
    "score":"BAS 12.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"More than 2 pulmonary veins involved",
    "score":"4"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Left pulmonary vein stenosis",
    "score":"3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Prevoius pulmonary vein stenosis repair",
    "score":"3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Single ventricle",
    "score":"2"
  },
  {
    "id":115,
    "procedure":"Rastelli",
    "factor":"",
    "score":"BAS 10.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Straddling AV valve",
    "score":"3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"VSD, Multiple,Repair",
    "score":"3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"PA, reconstruction (plasty), Branch, Central (within the hilar bifurcation)",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"VSD creation/enlargement",
    "score":"2.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Tricuspid chordae reimplantation",
    "score":"2"
  },
  {
    "id":116,
    "procedure":"Right/left heart assist device procedure",
    "factor":"",
    "score":"BAS 7.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Implant permanent artificial heart",
    "score":"4"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Age < 6 M",
    "score":"2"
  },
  {
    "id":117,
    "procedure":"Ross procedure",
    "factor":"",
    "score":"BAS 10.3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Endocarditis",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Previous homograft",
    "score":"3.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Endocarditis with annular abcess",
    "score":"4"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Coronary artery bypass",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Aortic arch repair",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Valve replacement, Mitral (MVR)",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Valvuloplasty, Mitral",
    "score":"(#68)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Reduction anuloplasty",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Age < 6M",
    "score":"2"
  },
  {
    "id":118,
    "procedure":"Ross–Konno procedure",
    "factor":"",
    "score":"BAS 12.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Endocarditis",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Previous homograft",
    "score":"3.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Endocarditis with annular abcess",
    "score":"4"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Coronary artery bypass",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Aortic arch repair",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Valve replacement, Mitral (MVR)",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Valvuloplasty, Mitral",
    "score":"(#68)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"LV to aorta tunnel repair",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Age > 1M, < 6M",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Age < 1 M",
    "score":"4"
  },
  {
    "id":119,
    "procedure":"RVOT procedure",
    "factor":"",
    "score":"BAS 6.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"VSD repair, Patch",
    "score":"1"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"VSD repair, Primary closure",
    "score":"1"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Conduit placement, RV to PA",
    "score":"(#52)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Age < 1M",
    "score":"3"
  },
  {
    "id":120,
    "procedure":"Senning",
    "factor":"",
    "score":"BAS 8.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Juxtaposed atrial appendages",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Left superior vena cava",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"VSD repair, Patch",
    "score":"1.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"VSD repair, Primary closure",
    "score":"1.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Congenitally corrected transportation repair with ASO",
    "score":"(#84)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Congenitally corrected transportation repair with Rastelli",
    "score":"(#85)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Age < 1M",
    "score":"2"
  },
  {
    "id":121,
    "procedure":"Shunt, Ligation and takedown",
    "factor":"",
    "score":"BAS 3.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"PA, reconstruction (plasty), Branch, Central (within the hilar bifurcation)",
    "score":"(#85)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Takedown Pott's shunt",
    "score":"4"
  },
  {
    "id":122,
    "procedure":"Shunt, Systemic to pulmonary, Central (From aorta or to main pulmonary artery)",
    "factor":"",
    "score":"BAS 6.8"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Hypoplastic pulmonary arteries",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Pulmonary atresia, IVS and RV dependent coronary circulation",
    "score":"4"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Shunt dependent pulmonary circulation",
    "score":"3.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Single ventricle",
    "score":"3"
  },
  {
    "id":123,
    "procedure":"Shunt, Systemic to pulmonary, Modified Blalock–Taussig shunt (MBTS)",
    "factor":"",
    "score":"BAS 6.3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Hypoplastic pulmonary arteries",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Pulmonary atresia, IVS and RV dependent coronary circulation",
    "score":"4"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Right aortic arch",
    "score":"1"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Aberrant right subclavian artery",
    "score":"1"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Shunt dependent pulmonary circulation",
    "score":"3.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Single ventricle",
    "score":"3"
  },
 
  {
    "id":124,
    "procedure":"Sinus of Valsalva, Aneurysm repair",
    "factor":"",
    "score":"BAS 7.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Intracardiac rupture",
    "score":"2.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Extracardiac rupture",
    "score":"4"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Valvuloplasty, Aortic",
    "score":"(#54)"
  },
 
  {
    "id":125,
    "procedure":"Sternotomy wound drainage",
    "factor":"",
    "score":"BAS 1.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Complete sternectomy",
    "score":"2.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Muscle or omental flap closure",
    "score":"4"
  },
  {
    "id":126,
    "procedure":"Systemic venous stenosis repair",
    "factor":"",
    "score":"BAS 8.0"
  },

  {
    "id":127,
    "procedure":"TAPVC repair",
    "factor":"",
    "score":"BAS 9.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Obstructed TAPVD",
    "score":"3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Infracardiac type",
    "score":"2.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Mixed type",
    "score":"3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Hypoplastic pulmonary veins",
    "score":"4"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Single ventricle",
    "score":"3"
  },
  {
    "id":128,
    "procedure":"TOF - Absent pulmonary valve repair",
    "factor":"",
    "score":"BAS 9.3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Bronchial compression (malacia)",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Age < 1M",
    "score":"2.5"
  },
  {
    "id":129,
    "procedure":"TOF - AVC (AVSD) repair",
    "factor":"",
    "score":"BAS 11.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"AV Valve regurgitation grade 3 and 4",
    "score":"3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Coronary artery anomaly restricting RVOT enlargement, (LAD from RCA etc.)",
    "score":"1.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"VSD, Multiple, Repair",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"PA reconstruction (plasty), Branch, Central (within the hilar bifurcation)",
    "score":"2.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Trans-anular patch",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Conduit placement, RV to PA",
    "score":"1.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Age < 6 M",
    "score":"2"
  },
  {
    "id":130,
    "procedure":"TOF repair, No ventriculotomy",
    "factor":"",
    "score":"BAS 8.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Coronary artery anomaly restricting RVOT enlargement, (LAD from RCA etc.)",
    "score":"1.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"TOF - AVC (AVSD) repair",
    "score":"(#33)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"VSD, Multiple, Repair",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"PA reconstruction (plasty), Branch, Central (within the hilar bifurcation)",
    "score":"2.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"TOF - Absent pulmonary valve repair",
    "score":"(#34)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Age < 1M",
    "score":"2.5"
  },
 
  {
    "id":131,
    "procedure":"TOF repair, RV-PA conduit",
    "factor":"",
    "score":"BAS 8.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Coronary artery anomaly restricting RVOT enlargement, (LAD from RCA etc.)",
    "score":"1.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"TOF - AVC (AVSD) repair",
    "score":"(#33)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"VSD, Multiple, Repair",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"PA reconstruction (plasty), Branch, Central (within the hilar bifurcation)",
    "score":"2.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"TOF - Absent pulmonary valve repair",
    "score":"(#34)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Age < 1M",
    "score":"2.5"
  },
  {
    "id":132,
    "procedure":"TOF repair, Ventriculotomy, Non-transanular patch",
    "factor":"",
    "score":"BAS 7.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Coronary artery anomaly restricting RVOT enlargement, (LAD from RCA etc.)",
    "score":"1.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"TOF - AVC (AVSD) repair",
    "score":"(#33)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"VSD, Multiple, Repair",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"PA reconstruction (plasty), Branch, Central (within the hilar bifurcation)",
    "score":"2.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"TOF - Absent pulmonary valve repair",
    "score":"(#34)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Age < 1M",
    "score":"2.5"
  },
  {
    "id":133,
    "procedure":"TOF repair, Ventriculotomy, Transanular patch",
    "factor":"",
    "score":"BAS 8.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Coronary artery anomaly restricting RVOT enlargement, (LAD from RCA etc.)",
    "score":"1.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"TOF - AVC (AVSD) repair",
    "score":"(#33)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"VSD, Multiple, Repair",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"PA reconstruction (plasty), Branch, Central (within the hilar bifurcation)",
    "score":"2.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"TOF - Absent pulmonary valve repair",
    "score":"(#34)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Age < 1M",
    "score":"2.5"
  },
  {
    "id":134,
    "procedure":"Transplant, Heart",
    "factor":"",
    "score":"BAS 9.3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Previous Fontan",
    "score":"3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Previous Glenn shunt",
    "score":"1.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Panel reactive antibodies > 10%",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Hepatic dysfunction (serum bilirubin > 2)",
    "score":"3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Mechanical ventilation",
    "score":"3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Previous heart transplant",
    "score":"4"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"PVR 2 to 3 Woods units (FIO2 = 1: NO = 40 ppm)",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"PVR 3 to 4 Woods units (FIO2 = 1: NO = 40 ppm)",
    "score":"4"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Situs inversus",
    "score":"1.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Pulmonary venous stenosis repair",
    "score":"4"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Anomalous systemic venous connection repair",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"TAPVC repair",
    "score":"4"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Aortic arch repair",
    "score":"1.5"
  },
  {
    "id":135,
    "procedure":"Transplant, Heart and lung(s)",
    "factor":"",
    "score":"BAS 13.3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Situs inversus",
    "score":"2.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Panel reactive antibodies > 10%",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Anomalous systemic venous connection repair",
    "score":"2.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Age < 6M",
    "score":"2.5"
  },
  {
    "id":136,
    "procedure":"Transplant, Lung(s)",
    "factor":"",
    "score":"BAS 12.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Panel reactive antibodies > 10%",
    "score":"1"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Living donor transplant",
    "score":"4"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Bilateral transplant",
    "score":"3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Age < 5 Y",
    "score":"3"
  },
  {
    "id":137,
    "procedure":"Truncus arteriosus repair",
    "factor":"",
    "score":"BAS 11.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"VSD creation/enlargement",
    "score":"1"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Valvuloplasty, Truncal valve",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Replacement, Truncal valve",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"PA reconstruction (plasty), Branch, Central (within the hilar bifurcation)",
    "score":"3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Interrupted arch repair",
    "score":"4"
  },
  {
    "id":138,
    "procedure":"Unifocalization MAPCA(s)",
    "factor":"",
    "score":"BAS 11.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Absent native pulmonary artery branches",
    "score":"4"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Bilateral Unifocalization by sternotomy",
    "score":"4"
  },
  {
    "id":139,
    "procedure":"Valve closure, Tricuspid (exclusion, univentricular approach)",
    "factor":"",
    "score":"BAS 9.0"
  },

  {
    "id":140,
    "procedure":"Valve excision, Tricuspid (without replacement)",
    "factor":"",
    "score":"BAS 6.0"
  },

  {
    "id":141,
    "procedure":"Valve replacement, Aortic (AVR), Bioprosthetic",
    "factor":"",
    "score":"BAS 7.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Previous homograft",
    "score":"3.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Previous autograft",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Endocarditis",
    "score":"3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Endocarditis with annular abcess",
    "score":"4"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Coronary artery bypass",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Non Konno annular enlargement procedure",
    "score":"1.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Valvuloplasty, Mitral",
    "score":"(#68)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Valve replacement, Mitral (MVR)",
    "score":"(#70)"
  },
 
  {
    "id":142,
    "procedure":"Valve replacement, Aortic (AVR), Homograft",
    "factor":"",
    "score":"BAS 8.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Previous homograft",
    "score":"3.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Previous autograft",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Endocarditis",
    "score":"3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Endocarditis with annular abcess",
    "score":"4"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Coronary artery bypass",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Valve replacement, Mitral (MVR)",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Valvuloplasty, Mitral",
    "score":"2.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Non Konno annular enlargement procedure",
    "score":"1.5"
  },
  {
    "id":143,
    "procedure":"Valve replacement, Aortic (AVR), Mechanical",
    "factor":"",
    "score":"BAS 7.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Previous homograft",
    "score":"3.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Previous autograft",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Endocarditis",
    "score":"3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Endocarditis with annular abcess",
    "score":"4"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Coronary artery bypass",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Non Konno annular enlargement procedure",
    "score":"1.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Valvuloplasty, Mitral",
    "score":"(#68)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Valve replacement, Mitral (MVR)",
    "score":"(#70)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Aortic stenosis, Supravalvular, Repair",
    "score":"1.5"
  },
  {
    "id":144,
    "procedure":"Valve replacement, Mitral (MVR)",
    "factor":"",
    "score":"BAS 7.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Endocarditis",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Endocarditis with annular abcess",
    "score":"3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Hypoplasia left ventricle (<20 ml/m2)",
    "score":"(#72)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Valvuloplasty, Mitral",
    "score":"(#68)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Valve replacement, Aortic (AVR)",
    "score":"1.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Valvuloplasty, Aortic",
    "score":"2.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Aortic arch repair",
    "score":"3.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Posterior leaflet resection",
    "score":"1.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Supra-annular placement",
    "score":"3.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Aortic stenosis, Subvalvar, Repair",
    "score":"3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Age < 6 M",
    "score":"2"
  },
  {
    "id":145,
    "procedure":"Valve replacement, Pulmonic (PVR)",
    "factor":"",
    "score":"BAS 6.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"PA reconstruction (plasty), Branch, Central (within the hilar bifurcation)",
    "score":"1.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Valvuloplasty, Tricuspid",
    "score":"1"
  },
  {
    "id":146,
    "procedure":"Valve replacement, Tricuspid",
    "factor":"",
    "score":"BAS 7.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Ebstein's anomaly",
    "score":"1.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Ablation of AV node reentry paathway",
    "score":"2"
  },
  {
    "id":147,
    "procedure":"Valve replacement, Truncal valve",
    "factor":"",
    "score":"BAS 6.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Endocarditis",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Endocarditis with annular abcess",
    "score":"3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Non Konno annular enlargement procedure",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Coronary artery bypass",
    "score":"2"
  },
  {
    "id":148,
    "procedure":"Valvuloplasty, Aortic",
    "factor":"",
    "score":"BAS 8.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Predominant regurgitaiton",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Hypoplasia left ventricle (<20 ml/m2)",
    "score":"(#72)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Aortic arch repair",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Aortic stenosis, Subvalvar, Repair",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"VSD repair, Patch",
    "score":"1.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Valve replacement, Mitral (MVR)",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Valvuloplasty, Mitral",
    "score":"2.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Aortic stenosis, Supravalvular, Repair",
    "score":"1.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Age < 1M",
    "score":"1.5"
  },
  {
    "id":149,
    "procedure":"Valvuloplasty, Mitral",
    "factor":"",
    "score":"BAS 8.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Hypoplasia left ventricle (<20 ml/m2)",
    "score":"(#72)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Endocarditis",
    "score":"3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Endocarditis with annular abcess",
    "score":"3.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Aortic stenosis, Subvalvar, Repair",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Valve replacement, Aortic (AVR)",
    "score":"1.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Chordae and/or papillary muscle repair",
    "score":"4"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Leaflet patch enlargement",
    "score":"3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Supravalvar mitral ring repair",
    "score":"1.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Valvuloplasty, Aortic",
    "score":"2.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Aortic arch repair",
    "score":"3.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Valvuloplasty, Tricuspid",
    "score":"1"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Valve replacement, Mitral (MVR)",
    "score":"3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Age < 6 M",
    "score":"2"
  },
  {
    "id":150,
    "procedure":"Valvuloplasty, Pulmonic",
    "factor":"",
    "score":"5.6"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Age < 1M",
    "score":"3"
  },
  {
    "id":151,
    "procedure":"Valvuloplasty, Tricuspid",
    "factor":"",
    "score":"BAS 7.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Ebstein's repair",
    "score":"(#72)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Chordae repair",
    "score":"3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Ablation of AV node reentry paathway",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Bidirectional Glenn (see 1 1/2 ventricular repair)",
    "score":"(#44)"
  },
 
  {
    "id":152,
    "procedure":"Valvuloplasty, Truncal valve",
    "factor":"",
    "score":"BAS 7.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Leaflet resection",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Reimplantation coronary artery",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Age < 6 M",
    "score":"1.5"
  },
  {
    "id":153,
    "procedure":"Vascular ring repair",
    "factor":"",
    "score":"BAS 6.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Bilaterally patent double aortic arch",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Bronco-tracheal malacia",
    "score":"3"
  },
  {
    "id":154,
    "procedure":"Ventricular septal fenestration",
    "factor":"",
    "score":"BAS 7.5"
  },

  {
    "id":155,
    "procedure":"Ventricular septation",
    "factor":"",
    "score":"BAS 10.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Chordae and/or papillary muscle repair",
    "score":"4"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Conduit placement, RV to PA",
    "score":"2"
  },
  {
    "id":156,
    "procedure":"VSD creation/enlargement",
    "factor":"",
    "score":"BAS 9.0"
  },
  {
    "id":157,
    "procedure":"VSD repair, Patch",
    "factor":"",
    "score":"BAS 6.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Apical VSD",
    "score":"4"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Inlet VSD",
    "score":"1"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Straddling AV valve",
    "score":"3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Valvuloplasty, Aortic",
    "score":"(#54)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"AP window repair",
    "score":"(#16)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"PA, reconstruction (plasty), Main (trunk)",
    "score":"(#45)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"PA, reconstruction (plasty), Branch, Central (within the hilar bifurcation)",
    "score":"(#46)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Coarctation + VSD repair",
    "score":"(#146)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Interrupted aortic arch repair",
    "score":"(#105)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"RVOT procedure",
    "score":"(#43)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Age < 1 M",
    "score":"1"
  },
  {
    "id":158,
    "procedure":"VSD repair, Primary closure",
    "factor":"",
    "score":"BAS 6.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Apical VSD",
    "score":"4"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Inlet VSD",
    "score":"1"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Straddling AV valve",
    "score":"3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Valvuloplasty, Aortic",
    "score":"(#54)"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"AP window repair",
    "score":"(#16)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"PA, reconstruction (plasty), Main (trunk)",
    "score":"(#45)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"PA, reconstruction (plasty), Branch, Central (within the hilar bifurcation)",
    "score":"(#46)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Coarctation + VSD repair",
    "score":"(#146)"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Interrupted aortic arch repair",
    "score":"(#105)"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"RVOT procedure",
    "score":"(#43)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Age < 1 M",
    "score":"1"
  },
  {
    "id":159,
    "procedure":"VSD, Multiple, Repair",
    "factor":"",
    "score":"BAS 9.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Apical VSD",
    "score":"4"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Inlet VSD",
    "score":"1"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Straddling AV valve",
    "score":"3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Swiss Cheese (> 2 VSDs)",
    "score":"4"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"RVOT procedure",
    "score":"1"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Valvuloplasty, Aortic",
    "score":"(#54)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"AP window repair",
    "score":"(#16)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Coarctation + VSD repair",
    "score":"(#146)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"Interrupted aortic arch repair",
    "score":"(#105)"
  },
 
  {
    "id":null,
    "procedure":"",
    "factor":"PA, reconstruction(plasty), Main (trunk)",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"PA, reconstruction (plasty), Branch, Central (within the hilar bifurcation)",
    "score":"2.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Age < 1 M",
    "score":"1"
  },
  {
    "id":160,
    "procedure":"REV",
    "factor":"",
    "score":"BAS 10.0"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Straddling AV valve",
    "score":"3"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Side by side vessels",
    "score":"1.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":" Coronary across RVOT",
    "score":"1.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"DORV non-committed VSD",
    "score":"4"
  },
 {
    "id":null,
    "procedure":"",
    "factor":"PA, reconstruction (plasty), Branch, Central (within the hilar bifurcation)",
    "score":"2"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"VSD creation/enlargement",
    "score":"2.5"
  },
  {
    "id":null,
    "procedure":"",
    "factor":"Tricuspid chordae reimplantation",
    "score":"2"
  },
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