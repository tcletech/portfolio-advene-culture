export type WorkItem = {
    id: number
    title: string
    image: string
    category: string
    /** Org or team the work was done for */
    org?: string
    /** Role held, e.g. "Hardware Design Engineering Intern" */
    role?: string
    /** Date range, e.g. "May 2026 – Present" */
    period?: string
    /** 1–3 sentences: what the problem was and what was designed/built */
    description?: string
    /** Tools, methods, and standards actually used */
    tools?: string[]
    /** The measured or verified outcome. Keep to real, documented results. */
    result?: string
}

export const works: WorkItem[] = [
    // ─────────────────────────────────────────────────────────────
    // DESIGN & CAD
    // ─────────────────────────────────────────────────────────────
    {
        id: 1,
        title: "Universal Phone Holder",
        image: "/projects/vectorcam-holder.svg",
        category: "Design & CAD",
        org: "Vector Control Innovations / JHU CBID",
        role: "Hardware Design Engineering Intern",
        period: "May 2026 – Present",
        description:
            "VectorCam is an AI-enabled mosquito surveillance device used in malaria-endemic regions. Its fixed camera placement didn't account for variation in phone size or camera position, so I designed a universal holder with a sliding XY adjustment stage and 3D-printed compressive springs for adaptive alignment.",
        tools: ["SolidWorks", "FDM 3D Printing", "Rapid Prototyping", "Mechanism Design"],
        result:
            "Iterated across multiple printed prototypes to validate fit and imaging performance across different phones before finalizing the design.",
    },
    {
        id: 2,
        title: "Crane Boom & Transmission System",
        image: "/projects/crane-boom.svg",
        category: "Design & CAD",
        org: "Johns Crane Co. — JHU Mechanics-Based Design Lab",
        role: "3-Person Design Team",
        period: "Spring 2026",
        description:
            "Engineered a high-torque lifting machine that raises a 10 lb load using a single micro gearmotor. A slotted cast-acrylic boom carries a 2.93-ratio gear train and a three-wrap compound pulley, with press-fit sleeve bearings on the shafts.",
        tools: [
            "SolidWorks",
            "ANSI Drawings",
            "Laser Cutting",
            "Lathe & Mill",
            "Hand Calculations",
        ],
        result:
            "Predicted 0.249 in boom-end deflection against a measured 0.25 in — 0.4% error, half the 0.5 in allowable. Lifted the load in 12 s against a 60 s limit, and came in at $38.29 of a $45 budget.",
    },
    {
        id: 3,
        title: "CAD & Engineering Change Control",
        image: "/projects/seafire-cad.svg",
        category: "Design & CAD",
        org: "Sea-Fire Marine",
        role: "Mechanical Engineering & Quality Assurance Intern",
        period: "May 2026 – Present",
        description:
            "Produce and refine production parts, assemblies, and drawings in SolidWorks against company drafting standards and GD&T, then carry the resulting documentation through the formal change process.",
        tools: [
            "SolidWorks",
            "GD&T",
            "ECN / Change Management",
            "ERP Systems",
            "Document Control",
        ],
        result:
            "Managed 10 Engineering Change Notices end-to-end, coordinating CAD documentation through technical review and approval while maintaining traceability under strict file control.",
    },

    // ─────────────────────────────────────────────────────────────
    // ANALYSIS & SIMULATION
    // ─────────────────────────────────────────────────────────────
    {
        id: 4,
        title: "Offshore Turbine Floating Base",
        image: "/projects/turbine-base.svg",
        category: "Analysis & Simulation",
        org: "Hopkins Student Wind Energy Team",
        role: "Structures Team Member",
        period: "Aug 2024 – May 2026",
        description:
            "Designed and tested the floating foundation for an offshore wind turbine entered in the 2025 DOE Collegiate Wind Competition, with the governing requirement being stability under combined wind and wave loading.",
        tools: [
            "SolidWorks",
            "FEA",
            "CFD",
            "80/20 Aluminum Extrusion",
            "Physical Pool Testing",
        ],
        result:
            "Placed 4th in Turbine Design and 5th overall out of 50+ teams. The prototype foundation supported the full turbine structure and held stability throughout competition.",
    },
    {
        id: 5,
        title: "Hovercar External Loft & Fan Intake",
        image: "/projects/hovercar-loft.svg",
        category: "Analysis & Simulation",
        org: "Nexus Nova Innovations",
        role: "Engineering Assistant, CAD/Design",
        period: "Jun 2025 – May 2026",
        description:
            "Developed the external body loft and a fan intake ducting concept for a hover-car integrating hydrogen fuel cells and ducted-fan propulsion, reconstructing surfaces from reference geometry using projected curves and boundary surfaces.",
        tools: [
            "SolidWorks (Project Curve, Boundary Surface)",
            "CFD",
            "NACA Airfoil Profiles",
            "Surface Modeling",
        ],
        result:
            "Modeled roughly 50% of the vehicle frame and identified lift-maximizing intake configurations by iterating fan surface curvature against CFD feedback.",
    },
    {
        id: 6,
        title: "MIDI Gun — Structural Design",
        image: "/projects/midigun-structure.svg",
        category: "Analysis & Simulation",
        org: "Independent Product Development",
        role: "Independent Developer",
        period: "Jun 2025 – Present",
        description:
            "Designed the modular, 3D-printable casing for a handheld MIDI instrument housing a microcontroller, IMU, hall-effect sensors, and tactile buttons. A mirrored pistol-grip body and four dovetail-jointed extensions allow tool-free disassembly, and a dual-spring translational trigger converts 21 mm of travel into a linear sensing range.",
        tools: [
            "SolidWorks",
            "SolidWorks FEA",
            "PETG / Material Selection",
            "Tolerancing",
            "DFM for FDM",
        ],
        result:
            "Held sub-0.2 mm sliding fits across all translational joints. FEA under worst-case wrist-snap torque and drop loading returned a 17–32× factor of safety against PETG yield; filleting the trigger-guard cutouts reduced peak von Mises stress on retest.",
    },

    // ─────────────────────────────────────────────────────────────
    // MANUFACTURING & QUALITY
    // ─────────────────────────────────────────────────────────────
    {
        id: 7,
        title: "Fire Suppression QA & Metrology",
        image: "/projects/seafire-qa.svg",
        category: "Manufacturing & Quality",
        org: "Sea-Fire Marine",
        role: "Mechanical Engineering & Quality Assurance Intern",
        period: "May 2026 – Present",
        description:
            "Run receiving, in-process, and final inspection on fire suppression and marine safety hardware under ISO 9001, identifying nonconformances against drawing requirements. Designed 3D-printed inspection jigs to orient non-flat parts for repeatable optical measurement.",
        tools: [
            "Precision Metrology",
            "Bore / Thread / Ring / Pin Gauges",
            "Borescopes",
            "Pressure Test Equipment",
            "Keyence IM Optical Measurement",
            "ISO 9001",
        ],
        result:
            "Inspected 50+ unique fire suppression parts. Closed process gaps by building two ERP-integrated tools: an inspection-report PDF compiler and an ASQ sampling-size calculator.",
    },
    {
        id: 8,
        title: "FDM Print Farm Operations",
        image: "/projects/print-farm.svg",
        category: "Manufacturing & Quality",
        org: "Vector Control Innovations / JHU CBID",
        role: "Hardware Design Engineering Intern",
        period: "May 2026 – Present",
        description:
            "Operated an 8-printer FDM farm producing parts on the original unmodified design to fill urgent customer orders under tight turnaround, managing scheduling, print failures, and throughput across machines.",
        tools: ["FDM 3D Printing", "Print Farm Operations", "Production Scheduling"],
        result: "Fulfilled urgent orders on compressed timelines without design changes.",
    },
    {
        id: 9,
        title: "DFM for Mass Production Handoff",
        image: "/projects/dfm-analysis.svg",
        category: "Manufacturing & Quality",
        org: "Vector Control Innovations / JHU CBID",
        role: "Hardware Design Engineering Intern",
        period: "May 2026 – Present",
        description:
            "Applied design-for-manufacturability analysis to existing VectorCam components for a manufacturing partner in Uganda, updating geometry for improved printability and preparing the designs for future mass production along a 3D-printing to injection-molding pathway.",
        tools: ["DFM Analysis", "SolidWorks", "FDM Process Constraints", "Injection Molding (DFM)"],
        result:
            "Interfaced with hardware and software teams so each design revision still met software constraints and field testing requirements.",
    },

    // ─────────────────────────────────────────────────────────────
    // ELECTRONICS & FIRMWARE
    // ─────────────────────────────────────────────────────────────
    {
        id: 10,
        title: "MIDI Gun — Sensing & Firmware",
        image: "/projects/midigun-firmware.svg",
        category: "Electronics & Firmware",
        org: "Independent Product Development",
        role: "Independent Developer",
        period: "Jun 2025 – Present",
        description:
            "Built the electronics and firmware for a gesture-controlled MIDI instrument. Analog hall-effect sensing reads continuous trigger position and an IMU reads orientation; custom Arduino firmware translates both into real-time MIDI, mapping yaw and roll to pitch and pitch bend.",
        tools: [
            "Arduino (C++)",
            "Hall-Effect Sensing",
            "IMU Integration",
            "Breadboard Prototyping",
            "Max/MSP",
            "Ableton Live",
        ],
        result:
            "Implemented multiple performance modes — semi, velocity-sensitive, arpeggiated, charge-release, and burst. Authored a full proposal, budget, and 12-month timeline; selected as a finalist out of 50+ submissions for the Peabody Launch Grant.",
    },
    {
        id: 11,
        title: "Analog Distortion Guitar Pedal",
        image: "/projects/guitar-pedal.svg",
        category: "Electronics & Firmware",
        org: "JHU Electronics & Instrumentation",
        role: "Independent Design Project",
        period: "Spring 2026",
        description:
            "Designed and built a fully analog recreation of the Boss MD-2 distortion pedal. Annotated the open-source schematic to decide which stages were actually necessary, keeping a non-inverting op-amp gain stage and a complementary push-pull discrete output buffer, and dropped the JFET input buffer after determining the op-amp's input impedance already prevented pickup loading.",
        tools: [
            "Analog Circuit Design",
            "Falstad Simulation",
            "Op-Amps & BJTs",
            "Oscilloscope",
            "Function Generator",
            "Breadboard Prototyping",
        ],
        result:
            "Verified saturation and clipping at roughly 550 mV against simulation on a two-channel oscilloscope. The potentiometer sweeps from clean at 0–4 kΩ to heavy distortion at 5–10 kΩ; the pedal is slated for live band use and a Peabody computer music recital.",
    },

    // ─────────────────────────────────────────────────────────────
    // COMPETITION & TEAM PROJECTS
    // ─────────────────────────────────────────────────────────────
    {
        id: 12,
        title: "Movie-Inspired Arcade Game",
        image: "/projects/arcade-game.svg",
        category: "Competition & Team Projects",
        org: "JHU Freshman Design",
        role: "Design Team Collaborator",
        period: "Jan 2025 – May 2025",
        description:
            "Built a Princess Bride–themed arcade game driving three motors through mechanical outputs — a rotating table, a curtain, and pouring effects — inside a fabricated hardboard enclosure with custom steel brackets and hidden cable routing.",
        tools: [
            "SolidWorks",
            "3D Printing",
            "Bandsaw & Machining",
            "Arduino (C++)",
            "Soldering",
            "Ableton Live",
        ],
        result:
            "Ran flawlessly for 1.5+ hours at the JHU Freshman Design Exhibition. Gameplay used an exponential-decay probability model and a high-score counter, with 23 original audio cues, delivered under a $60 budget.",
    },
    {
        id: 13,
        title: "Vehicle & Glider Launch System",
        image: "/projects/vehicle-glider.svg",
        category: "Competition & Team Projects",
        org: "JHU Freshman Design",
        role: "Design Team Collaborator",
        period: "Aug 2024 – Dec 2024",
        description:
            "Designed a vehicle that travels down a ramp and transfers impact energy into launching a glider over a 4 ft barrier, with travel distance past the barrier as the objective. Refined the body and wings through iterative prototyping, testing, and redesign.",
        tools: ["CAD", "Laser Cutting", "3D Printing", "Woodworking", "Iterative Prototyping"],
        result:
            "Placed 2nd out of 32 teams in the JHU Freshman Design Competition with a 100% barrier clearance rate across all four competition rounds.",
    },
]

export const categories = [
    "Design & CAD",
    "Analysis & Simulation",
    "Manufacturing & Quality",
    "Electronics & Firmware",
    "Competition & Team Projects",
]
