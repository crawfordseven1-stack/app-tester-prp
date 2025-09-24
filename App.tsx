import React from 'react';

// Icon components for the workflow steps
const DocumentSearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l-2.293-2.293a1 1 0 010-1.414l7-7a1 1 0 011.414 0l7 7a1 1 0 010 1.414L10 21z" />
  </svg>
);

const ClipboardListIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
  </svg>
);

const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const CogIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const BugIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 8h14a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2z" />
  </svg>
);

const RefreshIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5M20 20v-5h-5M4 4l1.5 1.5A9 9 0 0121.5 12M20 20l-1.5-1.5A9 9 0 002.5 12" />
  </svg>
);

const UserCheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.5 14.5l-1.5 1.5-1-1" />
    </svg>
);

const FlagIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6H8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
  </svg>
);

const workflowSteps = [
  {
    step: 1,
    title: "Requirement Analysis",
    description: "Our AI Analyst agent ingests your Product Requirements Document (PRD), clarifying ambiguities and structuring all requirements into a traceable matrix (RTM).",
    icon: <DocumentSearchIcon />,
  },
  {
    step: 2,
    title: "Test Planning",
    description: "The AI QA Lead agent receives the approved RTM and generates a comprehensive test plan, defining the scope, strategy, and resource allocation for the entire project.",
    icon: <ClipboardListIcon />,
  },
  {
    step: 3,
    title: "Test Case Design",
    description: "Guided by the test plan, the AI QA Engineer agent designs detailed positive, negative, and edge-case test scripts in Gherkin for every single requirement.",
    icon: <CodeIcon />,
  },
  {
    step: 4,
    title: "Test Environment Setup",
    description: "This step is fully automated. Our platform provisions a standardized, containerized test environment on-demand, ensuring a perfect setup every time.",
    icon: <CogIcon />,
  },
  {
    step: 5,
    title: "Test Execution",
    description: "The AI Automation agent converts Gherkin scripts into executable Playwright code and runs the full test suite in the provisioned cloud environment.",
    icon: <PlayIcon />,
  },
  {
    step: 6,
    title: "Defect Reporting & Tracking",
    description: "Our Senior AI Engineer agent analyzes all test failures, assigns severity, and writes detailed, easy-to-understand reproduction steps for your developers.",
    icon: <BugIcon />,
  },
  {
    step: 7,
    title: "Regression Testing",
    description: "The AI QA Manager agent reviews all test outcomes to intelligently curate the most critical test cases for the regression suite, ensuring future releases are stable.",
    icon: <RefreshIcon />,
  },
  {
    step: 8,
    title: "User Acceptance Testing (UAT)",
    description: "The platform facilitates a seamless review process for human stakeholders to review all test plans, cases, and reports, providing a final sign-off on the results.",
    icon: <UserCheckIcon />,
  },
  {
    step: 9,
    title: "Test Closure & Reporting",
    description: "As the final step, the AI QA Manager synthesizes all data into a comprehensive test closure report, including key metrics and a high-level quality sign-off.",
    icon: <FlagIcon />,
  },
];

const App: React.FC = () => {
  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-slate-900">
            <span className="text-indigo-600">App Tester</span> Pro
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-slate-600 hover:text-indigo-600">Features</a>
            <a href="#workflow" className="text-slate-600 hover:text-indigo-600">Workflow</a>
            <a href="#" className="text-slate-600 hover:text-indigo-600">Pricing</a>
            <button className="text-indigo-600 hover:text-indigo-700 font-semibold">Log in</button>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 font-semibold shadow-sm">
              Start free trial
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
          Ship Perfect Software, Faster.
        </h1>
        <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
          App Tester Pro leverages an autonomous team of AI agents to execute your entire QA workflow, from planning to reporting.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-indigo-700 shadow-lg">
            Get Started for Free
          </button>
          <button className="bg-slate-100 text-slate-700 px-8 py-3 rounded-md text-lg font-semibold hover:bg-slate-200">
            Book a Demo
          </button>
        </div>
      </main>

      {/* Workflow Section */}
      <section id="workflow" className="bg-slate-50 py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900">Your End-to-End AI-Powered QA Workflow</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
              Follow our fully managed, 9-step process that takes your project from initial requirements to final sign-off, all powered by our team of specialized AI agents.
            </p>
          </div>
          
          <div className="relative">
            {/* The connecting line */}
            <div className="hidden md:block absolute top-12 left-12 w-0.5 h-[calc(100%-6rem)] bg-slate-200"></div>

            <div className="space-y-12">
              {workflowSteps.map((item, index) => (
                <div key={item.step} className="flex items-start">
                  <div className="flex-shrink-0 z-10">
                    <div className="w-24 h-24 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg">
                      {item.icon}
                    </div>
                  </div>
                  <div className="ml-6 md:ml-12 pt-1">
                    <h3 className="text-2xl font-bold text-slate-900">
                      <span className="text-indigo-600">Step {item.step}:</span> {item.title}
                    </h3>
                    <p className="mt-2 text-slate-600 max-w-prose">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400">
        <div className="container mx-auto px-6 py-12 text-center">
          <p>&copy; {new Date().getFullYear()} App Tester Pro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
