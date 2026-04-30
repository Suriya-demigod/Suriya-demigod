<div align="center">

<!-- Animated AI Brain SVG Centerpiece -->
<svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .orbit { transform-origin: 200px 200px; }
      .ring1 { animation: spin1 6s linear infinite; }
      .ring2 { animation: spin2 9s linear infinite; }
      .ring3 { animation: spin3 12s linear infinite; }
      .pulse { animation: pulse 2s ease-in-out infinite; }
      .node { animation: nodePulse 2s ease-in-out infinite; }
      .n1 { animation-delay: 0s; }
      .n2 { animation-delay: 0.3s; }
      .n3 { animation-delay: 0.6s; }
      .n4 { animation-delay: 0.9s; }
      .n5 { animation-delay: 1.2s; }
      .n6 { animation-delay: 1.5s; }
      .dash { animation: dash 3s linear infinite; }
      .dash2 { animation: dash 3s linear infinite reverse; }
      @keyframes spin1 { to { transform: rotate(360deg); } }
      @keyframes spin2 { to { transform: rotate(-360deg); } }
      @keyframes spin3 { to { transform: rotate(360deg); } }
      @keyframes pulse { 0%,100%{r:38;opacity:0.15} 50%{r:52;opacity:0.35} }
      @keyframes nodePulse { 0%,100%{opacity:0.6;r:5} 50%{opacity:1;r:7} }
      @keyframes dash { to { stroke-dashoffset: -100; } }
    </style>
    <!-- Glow filter -->
    <filter id="glow">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>

  <!-- Outer pulse rings -->
  <circle class="pulse" cx="200" cy="200" r="38" fill="#6E40C9" opacity="0.15"/>
  <circle cx="200" cy="200" r="70" fill="none" stroke="#6E40C9" stroke-width="0.5" opacity="0.3"/>
  <circle cx="200" cy="200" r="110" fill="none" stroke="#6E40C9" stroke-width="0.5" opacity="0.25"/>
  <circle cx="200" cy="200" r="150" fill="none" stroke="#6E40C9" stroke-width="0.5" opacity="0.2"/>

  <!-- Orbit ring 1 -->
  <g class="orbit ring1">
    <ellipse cx="200" cy="200" rx="70" ry="25" fill="none" stroke="#6E40C9" stroke-width="1.5" opacity="0.7"/>
    <circle cx="270" cy="200" r="7" fill="#6E40C9" filter="url(#glow)"/>
  </g>

  <!-- Orbit ring 2 (tilted 60deg) -->
  <g class="orbit ring2" style="transform: rotate(-60deg) rotateX(60deg)">
    <ellipse cx="200" cy="200" rx="70" ry="25" fill="none" stroke="#9B72DD" stroke-width="1.5" opacity="0.7" transform="rotate(60, 200, 200)"/>
    <circle cx="200" cy="130" r="7" fill="#9B72DD" filter="url(#glow)"/>
  </g>

  <!-- Orbit ring 3 (tilted 120deg) -->
  <g class="orbit ring3">
    <ellipse cx="200" cy="200" rx="110" ry="35" fill="none" stroke="#4A1D96" stroke-width="1" opacity="0.5"/>
    <circle cx="310" cy="200" r="5" fill="#4A1D96" filter="url(#glow)"/>
  </g>

  <!-- Neural network nodes inside -->
  <!-- Center core -->
  <circle cx="200" cy="200" r="30" fill="#6E40C9" opacity="0.9" filter="url(#glow)"/>
  <text x="200" y="196" text-anchor="middle" font-size="10" fill="white" font-family="monospace" font-weight="bold">AI</text>
  <text x="200" y="208" text-anchor="middle" font-size="7" fill="white" font-family="monospace" opacity="0.8">CORE</text>

  <!-- Surrounding nodes with connecting lines -->
  <!-- Node positions around center -->
  <line x1="200" y1="170" x2="200" y2="145" stroke="#6E40C9" stroke-width="1" opacity="0.5" stroke-dasharray="4 2" class="dash"/>
  <line x1="200" y1="230" x2="200" y2="255" stroke="#6E40C9" stroke-width="1" opacity="0.5" stroke-dasharray="4 2" class="dash2"/>
  <line x1="174" y1="183" x2="155" y2="165" stroke="#6E40C9" stroke-width="1" opacity="0.5" stroke-dasharray="4 2" class="dash"/>
  <line x1="226" y1="183" x2="245" y2="165" stroke="#6E40C9" stroke-width="1" opacity="0.5" stroke-dasharray="4 2" class="dash2"/>
  <line x1="174" y1="217" x2="155" y2="235" stroke="#6E40C9" stroke-width="1" opacity="0.5" stroke-dasharray="4 2" class="dash"/>
  <line x1="226" y1="217" x2="245" y2="235" stroke="#6E40C9" stroke-width="1" opacity="0.5" stroke-dasharray="4 2" class="dash2"/>

  <!-- Surrounding nodes -->
  <circle class="node n1" cx="200" cy="140" r="5" fill="#A78BFA"/>
  <circle class="node n2" cx="200" cy="260" r="5" fill="#A78BFA"/>
  <circle class="node n3" cx="150" cy="160" r="5" fill="#A78BFA"/>
  <circle class="node n4" cx="250" cy="160" r="5" fill="#A78BFA"/>
  <circle class="node n5" cx="150" cy="240" r="5" fill="#A78BFA"/>
  <circle class="node n6" cx="250" cy="240" r="5" fill="#A78BFA"/>

  <!-- Labels around -->
  <text x="200" y="125" text-anchor="middle" font-size="8" fill="#6E40C9" font-family="monospace" opacity="0.9">RAG</text>
  <text x="200" y="280" text-anchor="middle" font-size="8" fill="#6E40C9" font-family="monospace" opacity="0.9">LLM</text>
  <text x="122" y="158" text-anchor="middle" font-size="7.5" fill="#6E40C9" font-family="monospace" opacity="0.9">Vision</text>
  <text x="278" y="158" text-anchor="middle" font-size="7.5" fill="#6E40C9" font-family="monospace" opacity="0.9">Edge AI</text>
  <text x="120" y="242" text-anchor="middle" font-size="7.5" fill="#6E40C9" font-family="monospace" opacity="0.9">Agents</text>
  <text x="282" y="242" text-anchor="middle" font-size="7.5" fill="#6E40C9" font-family="monospace" opacity="0.9">MLOps</text>

</svg>

### `< Open Profile />`

</div>

---

<div align="center">

# Suriya A
### AI / ML Engineer · Building Intelligent Systems

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/suriya-a)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:suriya4548j@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Suriya-demigod)
[![Profile Views](https://komarev.com/ghpvc/?username=Suriya-demigod&label=Profile%20views&color=6E40C9&style=for-the-badge)](https://github.com/Suriya-demigod)

</div>

---

```python
class SuriyaA:
    def __init__(self):
        self.name        = "Suriya A"
        self.role        = "AI / ML Engineer"
        self.education   = "B.E. ECE @ Dr. Mahalingam College (2023–2027)"
        self.focus       = ["RAG Pipelines", "LLM Fine-tuning", "AI Agent Workflows"]
        self.exploring   = ["LangGraph", "MLflow", "Production ML Deployment"]
        self.fun_fact    = "I build AI systems that run on drones AND in the cloud 🚁"

    def say_hi(self):
        print("Thanks for dropping by! Let's build something intelligent. 🧠")

me = SuriyaA()
me.say_hi()
```

---

## 🛠️ Tech Stack

**Languages**

![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![C](https://img.shields.io/badge/C-00599C?style=flat-square&logo=c&logoColor=white)
![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white)
![SQL](https://img.shields.io/badge/SQL-4479A1?style=flat-square&logo=mysql&logoColor=white)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)

**AI / ML & Generative AI**

![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=flat-square&logo=tensorflow&logoColor=white)
![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=flat-square&logo=pytorch&logoColor=white)
![Scikit-learn](https://img.shields.io/badge/Scikit--learn-F7931E?style=flat-square&logo=scikit-learn&logoColor=white)
![HuggingFace](https://img.shields.io/badge/HuggingFace-FFD21E?style=flat-square&logo=huggingface&logoColor=black)
![LangChain](https://img.shields.io/badge/LangChain-1C3C3C?style=flat-square&logo=langchain&logoColor=white)
![OpenCV](https://img.shields.io/badge/OpenCV-5C3EE8?style=flat-square&logo=opencv&logoColor=white)
![NumPy](https://img.shields.io/badge/NumPy-013243?style=flat-square&logo=numpy&logoColor=white)
![Pandas](https://img.shields.io/badge/Pandas-150458?style=flat-square&logo=pandas&logoColor=white)

**GenAI & LLM Tools**

![Ollama](https://img.shields.io/badge/Ollama-000000?style=flat-square&logo=ollama&logoColor=white)
![FAISS](https://img.shields.io/badge/FAISS-0467DF?style=flat-square&logoColor=white)
![RAG](https://img.shields.io/badge/RAG_Pipelines-6E40C9?style=flat-square&logoColor=white)
![Prompt Engineering](https://img.shields.io/badge/Prompt_Engineering-FF6B6B?style=flat-square&logoColor=white)

**MLOps & Tools**

![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![MLflow](https://img.shields.io/badge/MLflow-0194E2?style=flat-square&logo=mlflow&logoColor=white)
![Jupyter](https://img.shields.io/badge/Jupyter-F37626?style=flat-square&logo=jupyter&logoColor=white)
![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=flat-square&logo=visual-studio-code&logoColor=white)
![n8n](https://img.shields.io/badge/n8n-EA4B71?style=flat-square&logo=n8n&logoColor=white)

**Embedded & Edge AI**

![Arduino](https://img.shields.io/badge/Arduino-00979D?style=flat-square&logo=arduino&logoColor=white)
![ESP32](https://img.shields.io/badge/ESP32-E7352C?style=flat-square&logo=espressif&logoColor=white)
![STM32](https://img.shields.io/badge/STM32-03234B?style=flat-square&logo=stmicroelectronics&logoColor=white)

---

## 🚀 Featured Projects

<table>
  <tr>
    <td width="50%">
      <h3>🧠 AI Academic Assistant</h3>
      <p>Production-grade RAG pipeline with local LLM, FAISS vector store, LangGraph agents, and semantic search over academic documents.</p>
      <p>
        <img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white"/>
        <img src="https://img.shields.io/badge/FAISS-0467DF?style=flat-square"/>
        <img src="https://img.shields.io/badge/LangGraph-1C3C3C?style=flat-square"/>
        <img src="https://img.shields.io/badge/Ollama-000000?style=flat-square"/>
      </p>
    </td>
    <td width="50%">
      <h3>🚗 RTO Driving Test Evaluator</h3>
      <p>Real-time CV pipeline with YOLOv8 + Optical Flow for vehicle behaviour analysis, automated pass/fail scoring and infraction logging.</p>
      <p>
        <img src="https://img.shields.io/badge/YOLOv8-FF4B4B?style=flat-square"/>
        <img src="https://img.shields.io/badge/OpenCV-5C3EE8?style=flat-square&logo=opencv&logoColor=white"/>
        <img src="https://img.shields.io/badge/STM32-03234B?style=flat-square"/>
      </p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>🌾 Crop Disease Detection & UAV Spray</h3>
      <p>End-to-end CNN-based disease detection with GPS geo-tagging and autonomous drone navigation for precision pesticide spraying.</p>
      <p>
        <img src="https://img.shields.io/badge/CNN-FF6F00?style=flat-square"/>
        <img src="https://img.shields.io/badge/OpenCV-5C3EE8?style=flat-square&logo=opencv&logoColor=white"/>
        <img src="https://img.shields.io/badge/GPS_Drone-00979D?style=flat-square"/>
      </p>
    </td>
    <td width="50%">
      <h3>🔥 Autonomous Fire Detection Drone</h3>
      <p>YOLO-based fire detection on ESP32-CAM with sub-second edge inference and automated suppression trigger.</p>
      <p>
        <img src="https://img.shields.io/badge/YOLO-FF4B4B?style=flat-square"/>
        <img src="https://img.shields.io/badge/ESP32--CAM-E7352C?style=flat-square"/>
        <img src="https://img.shields.io/badge/IoT-0194E2?style=flat-square"/>
      </p>
    </td>
  </tr>
</table>

---

## 📊 GitHub Stats

<div align="center">

<img src="https://github-readme-stats.vercel.app/api?username=Suriya-demigod&show_icons=true&theme=tokyonight&hide_border=true&count_private=true" height="170"/>
<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Suriya-demigod&layout=compact&theme=tokyonight&hide_border=true" height="170"/>

<img src="https://github-readme-streak-stats.herokuapp.com/?user=Suriya-demigod&theme=tokyonight&hide_border=true" />

</div>

---

## 🏆 GitHub Trophies

<div align="center">

<img src="https://github-profile-trophy.vercel.app/?username=Suriya-demigod&theme=tokyonight&no-frame=true&row=1&column=6"/>

</div>

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=6E40C9&height=80&section=footer"/>

*Made with ❤️ by Suriya A*

</div>
