/* English content for index-en.html. Keep image/video paths identical to the Chinese version. */
window.STRATA_SITE = {
  "profile": {
    "name": "Yusi Fan",
    "affiliation": "Harbin Institute of Technology · PhD Student",
    "tagline": "Embodied Manipulation, Model Post-training, Humanoid Robotics",
    "avatar": "images/IMG/AU1.png",
    "email": "FYS2091276886@163.com",
    "introTitle": "About Me",
    "intro": "I am a PhD student at Harbin Institute of Technology and expect to graduate in 2027. Since 2024, I have been conducting research at Tsinghua University as part of my joint doctoral training. My research focuses on embodied intelligence, with an emphasis on foundation model post-training, robot policy learning, and real-world validation. My work spans contact-rich manipulation with visual, force, and tactile feedback, bimanual coordination, and motion control for mobile robotic platforms.",
    "research": [
      "Embodied Foundation Model Post-training and Real-world Robot Manipulation",
      "Humanoid Motion Control",
      "Domain-specific Models and Agent Systems"
    ],
    "platforms": [
      "UR5",
      "Franka",
      "LimX TRON2",
      "Unitree G1",
      "RH56DFX Dexterous Hand",
      "SyTac Tactile Sensing"
    ]
  },
  "worksTitle": "Selected Research & Videos",
  "worksIntro": "",
  "works": [
    {
      "shortName": "CoordVLA",
      "title": "Bimanual Coordination · VLA · Constraint-Guided Actions",
      "paper": "CoordVLA: Constraint-Guided Adaptation of Vision-Language-Action Models for Contact-Rich Manipulation",
      "meta": "Conference on Robot Learning (CoRL)· Accepted",
      "description": "A bimanual VLA framework uses mode-aware action experts to generate geometrically consistent coordinated motions, while jointly regulating inter-arm differential forces and contact compliance.",
      "cover": "images/IMG/CoordVLA.png",
      "video": "videos/CoordVLA.mp4"
    },
    {
      "shortName": "CoReTac",
      "title": "Tactile Manipulation · World-Action Models · Predictive Regulation",
      "paper": "CoReTac: Diffusion-Referenced Predictive Tactile Regulation for Precision Contact-Rich Manipulation",
      "meta": "IEEE Robotics and Automation Letters (RA-L)· Accepted",
      "description": "Uses a world–action model to provide action references, combining tactile prediction, evaluation of candidate action outcomes, and feedback regulation for precise, contact-rich manipulation.",
      "cover": "images/IMG/CoreTac.png",
      "video": "videos/CoReTac.mp4"
    },
    {
      "shortName": "InteractVLA",
      "title": "Compliant Manipulation · Multiple Categories · Interaction Learning",
      "paper": "InteractVLA: Learning Physically Grounded Vision-Language-Action Policies for Contact-Rich Manipulation",
      "meta": "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)2026 · Accepted",
      "description": "Decouples VLA planning from physical interaction control, combining contact-triggered adaptation with interaction learning to regulate compliance in contact-rich manipulation.",
      "cover": "images/IMG/InteractVLA.png",
      "video": "videos/InteractVLA.mp4"
    },
    {
      "shortName": "DLOs-Manip",
      "title": "Deformable Linear Objects · Slip Regulation · Residual RL",
      "paper": "Dual-Arm Motion-Slip Boundary Modulation for Stiff Cable Insertion via Residual Reinforcement Learning",
      "meta": "IEEE Transactions on Automation Science and Engineering (T-ASE)· Accepted",
      "description": "Combines bimanual coordination, slip regulation, and residual reinforcement learning for stable manipulation of deformable linear objects, with a focus on stiff cable insertion.",
      "cover": "images/IMG/DLOs-Manip.png",
      "video": "videos/DLOs-Manip.mp4"
    },
    {
      "shortName": "DreamManip",
      "title": "Long-Horizon Manipulation · Visual Planning · Video Foundation Models",
      "paper": "DreamManip: Holistic Visual Planning for Long-Horizon Robotic Manipulation via Video Foundation Models",
      "meta": "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)2026 · Accepted",
      "description": "Predicts task keyframes using video foundation models to construct temporally coherent sequences of visual goals. Holistic visual planning guides multi-stage robotic manipulation and long-horizon task execution.",
      "cover": "images/IMG/DreamManip.png",
      "video": "videos/dream.mp4"
    },
    {
      "shortName": "PACR",
      "title": "Point–Axis Constraints · Multi-agent Systems · Compliant Manipulation",
      "paper": "PACR: Point-Axis Constraint Reasoning for Enhanced Robotic Manipulation with Dexterity and Compliance",
      "meta": "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)2025 · Published",
      "description": "Reasons about manipulation constraints through point–axis geometric representations, integrating geometric relations into motion planning and compliant control to support dexterous manipulation and stable interaction in complex tasks.",
      "cover": "images/IMG/PACR.png",
      "video": "videos/PACR.mp4"
    },
    {
      "shortName": "HandoffWM",
      "title": "World Models · Skill Chaining · Long-Horizon Precision Manipulation",
      "paper": "HandoffWM: Contact-Grounded World Modeling for Skill Chaining in Long-Horizon Precision Manipulation",
      "meta": "AAAI Conference on Artificial Intelligence (AAAI)· Under Review",
      "description": "Builds contact-grounded world models to predict skill outcomes and assess transition feasibility, supporting skill-chain planning and continuous execution in long-horizon precision manipulation.",
      "cover": "images/IMG/HandoffWM.png",
      "video": ""
    },
    {
      "shortName": "TerraMat",
      "title": "Humanoid Locomotion · Material Conditioning · Deformable Terrain",
      "paper": "TerraMat: Learning Material-Conditioned Humanoid Locomotion on Deformable Terrain",
      "meta": "IEEE International Conference on Robotics and Automation (ICRA)· Under Review",
      "description": "Uses GPU-accelerated simulation of deformable terrain and parallel training to learn material-conditioned humanoid locomotion policies that combine visual anticipation with contact feedback.",
      "cover": "images/IMG/TerraMat.png",
      "video": ""
    }
  ],
  "publications": []
};
