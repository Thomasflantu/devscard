import createSkillFactory from '@/data/_internals/create-skill-factory';

/*

Place where you can define all your skills.
This way, you can ensure one skill has the same name, icon, and URL among all resume sections.

Where skills are used:
- experience-section.data.ts
- portfolio-section.data.ts
- skills-section.data.ts

Usage examples:
skill() — returns skill object without any customizations.
skill({ level: 3 }) — returns a levelled-skill. It can be used only in skills-section.data.ts.
skill({ name: '...' }) — returns skill object with a custom name.
skill({ description: '...' }) — returns skill with a description displayed when user hovers over it.

*/

export const C = createSkillFactory({
  name: 'C',
  icon: 'simple-icons:c',
  iconColor: '#A8B9CC',
  url: 'https://www.w3schools.com/c/c_intro.php',
});

export const astro = createSkillFactory({
  name: 'Astro',
  icon: 'simple-icons:astro',
  iconColor: '#FF5D01',
  url: 'https://astro.build/',
});

export const cSharp = createSkillFactory({
  name: 'Csharp',
  icon: 'simple-icons:csharp',
  iconColor: '#512BD4',
  url: 'https://learn.microsoft.com/en-us/dotnet/csharp/',
});

export const java = createSkillFactory({
  name: 'Java',
  icon: 'simple-icons:oracle',
  iconColor: '#F80000',
  url: 'https://www.oracle.com/java/',
});

export const kotlin = createSkillFactory({
  name: 'Kotlin',
  icon: 'simple-icons:kotlin',
  iconColor: '#7F52FF',
  url: 'https://kotlinlang.org/',
});

export const firebase = createSkillFactory({
  name: 'Firebase',
  icon: 'simple-icons:firebase',
  iconColor: '#FFCA28',
  url: 'https://firebase.google.com/',
});

export const flutter = createSkillFactory({
  name: 'Flutter',
  icon: 'simple-icons:flutter',
  iconColor: '#02569B',
  url: 'https://flutter.dev/',
});

export const dotNet = createSkillFactory({
  name: '.NET',
  icon: 'simple-icons:dotnet',
  iconColor: '#512BD4',
  url: 'https://dotnet.microsoft.com/en-us/',
});

export const nodeJs = createSkillFactory({
  name: 'node.js',
  icon: 'simple-icons:nodedotjs',
  iconColor: '#5FA04E',
  url: 'https://nodejs.org/en',
});

export const webFlow = createSkillFactory({
  name: 'Webflow',
  icon: 'simple-icons:webflow',
  iconColor: '#146EF5',
  url: 'https://webflow.com/',
});

export const avalonia = createSkillFactory({
  name: 'Avalonia',
  icon: 'simple-icons:avaloniaui',
  iconColor: '##165BFF',
  url: 'https://avaloniaui.net/',
});

export const domainDrivenDesign = createSkillFactory({
  name: 'Domain Driven Design',
  icon: 'simple-icons:bookstack',
  iconColor: '#4A4A4A',
  url: 'https://www.bergler.nl/domain-driven-design-in-gewoon-nederlands-artikel-2-het-model',
});

export const eventDrivenArchitecture = createSkillFactory({
  name: 'Event-Driven Architecture',
  icon: 'mdi:arrow-decision-auto', // werkt, conceptueel symbool
  iconColor: '#007ACC',
  url: 'https://medium.com/@seetharamugn/the-complete-guide-to-event-driven-architecture-b25226594227',
});

export const bpmn = createSkillFactory({
  name: 'BPMN',
  icon: 'simple-icons:miro', // staat symbool voor procesmodel tooling
  iconColor: '#FFD02F',
  url: 'https://leansixsigmagroep.nl/lean-agile-en-six-sigma/bpmn-business-processing-model-notation/?srsltid=AfmBOopgooxNOos0I5D9KmYkJfLBQdH0DONj_6-Gdf-yL1HTwI3vsimr',
});

export const businessAnalysis = createSkillFactory({
  name: 'Business Analysis',
  icon: 'mdi:account-tie',
  iconColor: '#007ACC',
  url: 'https://www.iiba.org/professional-development/career-centre/what-is-business-analysis',
});

export const python = createSkillFactory({
  name: 'Python',
  icon: 'simple-icons:python',
  iconColor: '#3776AB',
  url: 'https://www.python.org/',
});

export const git = createSkillFactory({
  name: 'Git',
  icon: 'simple-icons:git',
  iconColor: '#F05032',
  url: 'https://git-scm.com/',
});

export const github = createSkillFactory({
  name: 'GitHub',
  icon: 'simple-icons:github',
  iconColor: '#181717',
  url: 'https://github.com/',
});

export const kubernetes = createSkillFactory({
  name: 'Kubernetes',
  icon: 'simple-icons:kubernetes',
  iconColor: '#326CE5',
  url: 'https://kubernetes.io/',
});

export const terraform = createSkillFactory({
  name: 'Terraform',
  icon: 'simple-icons:terraform',
  iconColor: '#844FBA',
  url: 'https://www.terraform.io/',
});

export const bicep = createSkillFactory({
  name: 'Bicep',
  icon: 'mdi:code-brackets',
  iconColor: '#008AD7',
  url: 'https://learn.microsoft.com/azure/azure-resource-manager/bicep/',
});

export const kong = createSkillFactory({
  name: 'Kong (API Gateway)',
  icon: 'simple-icons:kong',
  iconColor: '#003459',
  url: 'https://konghq.com/',
});

export const azureOpenAI = createSkillFactory({
  name: 'Azure OpenAI',
  icon: 'mdi:brain',
  iconColor: '#0078D4',
  url: 'https://learn.microsoft.com/azure/ai-services/openai/',
});

export const azureMachineLearning = createSkillFactory({
  name: 'Azure Machine Learning',
  icon: 'mdi:chart-bell-curve',
  iconColor: '#0078D4',
  url: 'https://learn.microsoft.com/azure/machine-learning/',
});

export const langChain = createSkillFactory({
  name: 'LangChain',
  icon: 'mdi:link-variant',
  iconColor: '#3B82F6',
  url: 'https://www.langchain.com/',
});

export const langGraph = createSkillFactory({
  name: 'LangGraph',
  icon: 'mdi:graph-outline',
  iconColor: '#6366F1',
  url: 'https://langchain-ai.github.io/langgraph/',
});

export const androidStudio = createSkillFactory({
  name: 'Android studio',
  icon: 'simple-icons:androidstudio',
  iconColor: '#3DDC84',
  url: 'https://developer.android.com/studio',
});

export const googleCloud = createSkillFactory({
  name: 'Google cloud',
  icon: 'simple-icons:googlecloud',
  iconColor: '#4285F4',
  url: 'https://cloud.google.com/',
});

export const postgreSql = createSkillFactory({
  name: 'PostgreSQL',
  icon: 'simple-icons:postgresql',
  iconColor: '#4169E1',
  url: 'https://www.postgresql.org/',
});

export const azureDevOps = createSkillFactory({
  name: 'Azure DevOps',
  icon: 'simple-icons:azuredevops',
  iconColor: '#0078D7',
  url: 'https://azure.microsoft.com/nl-nl/products/devops',
});

export const react = createSkillFactory({
  name: 'React.js',
  icon: 'simple-icons:react',
  iconColor: '#61DAFB',
  url: 'https://reactjs.org/',
});

export const azure = createSkillFactory({
  name: 'Azure',
  icon: 'simple-icons:azurefunctions',
  iconColor: '#0062AD',
  url: 'https://azure.microsoft.com/en-us/',
});

export const intelliJ = createSkillFactory({
  name: 'intelliJ',
  icon: 'simple-icons:intellijidea',
  iconColor: '#000000',
  url: 'https://www.jetbrains.com/idea/',
});

export const visualStudioCode = createSkillFactory({
  name: 'Visual studio code',
  icon: 'simple-icons:visualstudiocode',
  iconColor: '#007ACC',
  url: 'https://code.visualstudio.com/',
});

export const visualStudio = createSkillFactory({
  name: 'Visual studio',
  icon: 'simple-icons:visualstudio',
  iconColor: '#5C2D91',
  url: 'https://visualstudio.microsoft.com/',
});

export const typescript = createSkillFactory({
  name: 'TypeScript',
  icon: 'simple-icons:typescript',
  iconColor: '#3178C6',
  url: 'https://www.typescriptlang.org/',
});

export const linuxUbuntu = createSkillFactory({
  name: 'linux Ubuntu',
  icon: 'simple-icons:ubuntu',
  iconColor: '#E95420',
  url: 'https://ubuntu.com/',
});

export const blazor = createSkillFactory({
  name: 'Blazor',
  icon: 'simple-icons:blazor',
  iconColor: '#512BD4',
  url: 'https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor',
});

export const radzen = createSkillFactory({
  name: 'Radzen',
  icon: 'simple-icons:radzen',
  iconColor: '#0C7CD5',
  url: 'https://www.radzen.com/',
});

export const pytorch = createSkillFactory({
  name: 'PyTorch',
  icon: 'simple-icons:pytorch',
  iconColor: '#EE4C2C',
  url: 'https://pytorch.org/',
});

export const tesseract = createSkillFactory({
  name: 'Tesseract OCR',
  icon: 'simple-icons:tesseract',
  iconColor: '#4285F4',
  url: 'https://github.com/tesseract-ocr/tesseract',
});

export const yolov8 = createSkillFactory({
  name: 'YOLOv8',
  icon: 'simple-icons:ultralytics',
  iconColor: '#FFDD00',
  url: 'https://docs.ultralytics.com/',
});

export const onnxRuntime = createSkillFactory({
  name: 'ONNX Runtime',
  icon: 'simple-icons:onnx',
  iconColor: '#005CED',
  url: 'https://onnxruntime.ai/',
});

export const opencv = createSkillFactory({
  name: 'OpenCV',
  icon: 'simple-icons:opencv',
  iconColor: '#5C3EE8',
  url: 'https://opencv.org/',
});

export const docker = createSkillFactory({
  name: 'Docker',
  icon: 'simple-icons:docker',
  iconColor: '#2496ED',
  url: 'https://www.docker.com/',
});

export const bitbucket = createSkillFactory({
  name: 'Bitbucket',
  icon: 'simple-icons:bitbucket',
  iconColor: '#205081',
  url: 'https://bitbucket.org/',
});

export const jira = createSkillFactory({
  name: 'Jira',
  icon: 'simple-icons:jira',
  iconColor: '#0052CC',
  url: 'https://www.atlassian.com/software/jira',
});

export const scrum = createSkillFactory({
  name: 'Scrum',
  icon: 'simple-icons:scrumalliance',
  iconColor: '#6DB33F',
  url: 'https://www.scrum.org/resources/what-is-scrum',
});

export const googlenet = createSkillFactory({
  name: 'GoogLeNet',
  icon: 'simple-icons:googlegemini', // geen officiële GoogLeNet icon, dit is alternatief
  iconColor: '#34A853',
  url: 'https://en.wikipedia.org/wiki/GoogLeNet',
});
