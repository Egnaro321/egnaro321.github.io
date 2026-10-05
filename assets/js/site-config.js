/*
 * 范雨思｜个人研究与视频作品。日常主要修改本文件。
 * 使用 UTF-8 编码保存，刷新 index.html 查看效果。
 * 引号、英文逗号和括号请保留；路径使用 /，不要写电脑绝对路径。
 * avatar 留空时显示 FYS 字母头像；填 "images/avatar.jpg" 可显示自己的照片。
 * cover 留空时显示文字封面；填 "images/thumbs/01.jpg" 可显示实验截图。
 * video 留空时显示待添加状态；放入视频后填写 "videos/01.mp4"，后续依次为 02 至 06。
 * title 中用 · 分隔的短语会显示为独立标签，shortName 用于占位封面和弹窗标题。
 * PACR 的“多智能体协同”仍待确认，当前保留“几何推理”，确认后可替换。
 * platforms 可按实际使用情况增删；设为 [] 时隐藏实验平台区域。
 * publications 用于额外论文，六篇作品已完整展示，不需要重复添加。
 */
window.STRATA_SITE = {
  "profile": {
    "name": "范雨思",
    "affiliation": "哈尔滨工业大学 · 博士研究生",
    "tagline": "具身操作、模型后训练、人形机器人",
    "avatar": "images/IMG/AU1.png",
    "email": "FYS2091276886@163.com",
    "introTitle": "个人简介",
    "intro": "哈尔滨工业大学博士生（2027毕业），2024年至今在清华大学联合培养，主要从事具身智能方向研究  ，关注基础模型后训练、真实机器人策略学习与验证。相关工作涵盖融合视觉、力觉与触觉反馈的接触丰富操作、双臂协同，以及移动平台运动控制。 ",
    "research": [
      "具身基础模型后训练与机器人操作（真机）",
      "人形机器人运动控制",
      "领域模型与智能体系统"
    ],
    "platforms": [
      "UR5",
      "Franka",
      "逐际 TRON2",
      "宇树 G1",
      "灵巧手 RH56DFX",
      "触觉 SyTac"
    ]
  },
  "worksTitle": "代表性研究与视频展示",
  "worksIntro": "",
  "works": [
    {
      "shortName": "CoordVLA",
      "title": "双臂协同 · VLA · 约束动作生成",
      "paper": "CoordVLA: Constraint-Guided Adaptation of Vision-Language-Action Models for Contact-Rich Manipulation",
      "meta": "Conference on Robot Learning (CoRL)· 已录用",
      "description": "基于 VLA 构建双臂协同框架，通过模式感知的约束动作专家生成几何一致的协同动作，并联合调节臂间差动力与接触柔顺性。",
      "cover": "images/IMG/CoordVLA.png",
      "video": "videos/CoordVLA.mp4"
    },
    {
      "shortName": "CoReTac",
      "title": "触觉精细操作 · 世界动作模型 · 预测式调节",
      "paper": "CoReTac: Diffusion-Referenced Predictive Tactile Regulation for Precision Contact-Rich Manipulation",
      "meta": "IEEE Robotics and Automation Letters (RA-L)· 已录用",
      "description": "以世界—动作模型提供动作参考，结合触觉预测、候选动作后果评估与反馈调节，实现接触丰富任务中的精细操作。",
      "cover": "images/IMG/CoreTac.png",
      "video": "videos/CoReTac.mp4"
    },
    {
      "shortName": "InteractVLA",
      "title": "柔顺操作 · 多类别 · 交互学习",
      "paper": "InteractVLA: Learning Physically Grounded Vision-Language-Action Policies for Contact-Rich Manipulation",
      "meta": "IEEE International Conference on Robotics and Automation (ICRA)· 已录用",
      "description": "面向接触丰富的机器人操作，解耦 VLA 动作规划与交互控制，结合接触触发与交互学习，实现自适应柔顺调节。",
      "cover": "images/IMG/InteractVLA.png",
      "video": "videos/InteractVLA.mp4"
    },
    {
      "shortName": "DLOs-Manip",
      "title": "可变形线性物体操作 · 滑移调节 · 残差强化学习",
      "paper": "Dual-Arm Motion-Slip Boundary Modulation for Stiff Cable Insertion via Residual Reinforcement Learning",
      "meta": "IEEE Transactions on Automation Science and Engineering (T-ASE)· 已录用",
      "description": "针对刚性较高的线缆插接，结合双臂协同、滑移调节与残差强化学习，研究可变形线性物体的稳定操作。",
      "cover": "images/IMG/DLOs-Manip.png",
      "video": "videos/DLOs-Manip.mp4"
    },
    {
      "shortName": "DreamManip",
      "title": "长程操作 · 视觉规划 · 视频基础模型",
      "paper": "DreamManip: Holistic Visual Planning for Long-Horizon Robotic Manipulation via Video Foundation Models",
      "meta": "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS) 2026· 已录用",
      "description": "基于视频基础模型预测任务关键帧，构建时序连贯的视觉目标序列，通过整体视觉规划引导多阶段机器人操作与长程任务执行。",
      "cover": "images/IMG/DreamManip.png",
      "video": "videos/dream.mp4"
    },
    {
      "shortName": "PACR",
      "title": "点轴约束 · 多智能体  · 柔顺操作",
      "paper": "PACR: Point-Axis Constraint Reasoning for Enhanced Robotic Manipulation with Dexterity and Compliance",
      "meta": "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS) 2025· 已发表",
      "description": "基于点—轴几何表征开展操作约束推理，将几何关系融入动作规划与柔顺控制，支持复杂任务中的灵巧操作与稳定交互。",
      "cover": "images/IMG/PACR.png",
      "video": "videos/PACR.mp4"
    },
    {
      "shortName": "HandoffWM",
      "title": "世界模型 · 技能衔接 · 长程精细操作",
      "paper": "HandoffWM: Contact-Grounded World Modeling for Skill Chaining in Long-Horizon Precision Manipulation",
      "meta": "AAAI Conference on Artificial Intelligence (AAAI)· 在审",
      "description": "基于接触信息构建世界模型，预测技能执行后果并评估衔接可行性，支撑长视距精细操作中的技能链规划与连续执行。",
      "cover": "images/IMG/HandoffWM.png",
      "video": ""
    },
    {
      "shortName": "TerraMat",
      "title": "人形运动控制 · 材料条件化 · 可变形地形",
      "paper": "TerraMat: Learning Material-Conditioned Humanoid Locomotion on Deformable Terrain",
      "meta": "IEEE International Conference on Robotics and Automation (ICRA)· 在审",
      "description": "基于 GPU 加速的可变形地形仿真与并行训练，融合视觉预判与接触反馈，学习材料条件化的人形机器人自适应行走策略。",
      "cover": "images/IMG/TerraMat.png",
      "video": ""
    }
  ],
  "publications": []
};
