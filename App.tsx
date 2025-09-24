import React from 'react';

// --- SVG ICONS ---

const Logo: React.FC = () => (
  <svg width="32" height="32" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M64 0C102.348 0 128 25.652 128 64C128 102.348 102.348 128 64 128C25.652 128 0 102.348 0 64C0 25.652 25.652 0 64 0Z" fill="url(#paint0_linear_10_7)"/>
    <path d="M48 91L74.6667 64L48 37" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="paint0_linear_10_7" x1="0" y1="0" x2="128" y2="128" gradientUnits="userSpaceOnUse">
        <stop stopColor="#06b6d4"/>
        <stop offset="1" stopColor="#3b82f6"/>
      </linearGradient>
    </defs>
  </svg>
);

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
);

const GoogleIcon: React.FC = () => (
    <svg className="w-5 h-5" viewBox="0 0 48 48">
      <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
      <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
      <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.582-3.344-11.227-7.915l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
      <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C42.01,35.638,44,30.138,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
    </svg>
);

const SearchIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>
);

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);


// --- DATA ---

const benefits = [
  'AI-Generated Test Cases',
  'Automated Execution',
  'Smart Defect Reporting',
  'Full Workflow Automation'
];

const features = [
  { title: "AI Requirement Analysis", description: "Upload your PRD and get a complete Requirement Traceability Matrix instantly." },
  { title: "Automated Test Plan & Case Design", description: "Our AI agents generate comprehensive test plans and Gherkin scripts for all scenarios." },
  { title: "On-Demand Test Environments", description: "Standardized Playwright environments provisioned automatically in the cloud." },
  { title: "Intelligent Defect Analysis", description: "AI analyzes failures, assigns severity, and writes detailed reproduction steps." },
];

const workflowSteps = [
    'Requirement Analysis', 'Test Planning', 'Test Case Design', 'Environment Setup', 
    'Test Execution', 'Defect Reporting', 'Regression Testing', 'UAT', 'Test Closure'
];

const uatDeliverables = [
    "Requirement Traceability Matrix",
    "Test Plan Document",
    "Test Execution Report",
    "Defect Reports",
    "Regression Test Suite"
];

// --- UI COMPONENTS ---

const Header: React.FC<{
  searchQuery: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchFocus: () => void;
  onLoginClick: () => void;
  onSignupClick: () => void;
}> = ({ searchQuery, onSearchChange, onSearchFocus, onLoginClick, onSignupClick }) => (
  <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200">
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center space-x-3">
          <Logo />
          <span className="text-xl font-bold text-slate-800">App Tester Pro</span>
        </div>
        <div className="flex-1 flex justify-center px-8">
            <div className="relative w-full max-w-md">
                 <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <SearchIcon className="h-5 w-5 text-slate-400" />
                 </div>
                 <input
                    type="search"
                    placeholder="Search content..."
                    value={searchQuery}
                    onChange={onSearchChange}
                    onFocus={onSearchFocus}
                    className="block w-full rounded-md border border-slate-300 bg-white py-2 pl-10 pr-3 text-sm placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                 />
            </div>
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={onLoginClick} className="text-sm font-medium text-slate-600 hover:text-blue-600 hidden sm:block">Log in</button>
          <button onClick={onSignupClick} className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
            Start free trial
          </button>
        </div>
      </div>
    </nav>
  </header>
);

const Modal: React.FC<{ children: React.ReactNode, onClose: () => void }> = ({ children, onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={onClose}>
    <div className="relative bg-white p-8 rounded-2xl shadow-2xl shadow-slate-300/60 w-full max-w-md" onClick={e => e.stopPropagation()}>
       <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
        <CloseIcon className="w-6 h-6" />
      </button>
      {children}
    </div>
  </div>
);

const SignUpForm: React.FC = () => (
  <>
    <h3 className="text-2xl font-bold text-slate-800 text-center">Get started free</h3>
    <p className="text-center text-sm text-slate-600 mt-2">No credit card required.</p>
    <div className="mt-6 space-y-4">
      <div>
        <label htmlFor="email-signup" className="block text-sm font-medium text-slate-700">Work Email</label>
        <input type="email" id="email-signup" placeholder="you@company.com" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
      </div>
      <div>
        <label htmlFor="password-signup" className="block text-sm font-medium text-slate-700">Password</label>
        <input type="password" id="password-signup" placeholder="••••••••" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
      </div>
      <button className="w-full bg-blue-600 text-white font-semibold py-2.5 rounded-lg hover:bg-blue-700 transition-colors">
        Sign up with Email
      </button>
      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-white px-2 text-slate-500">OR</span>
        </div>
      </div>
       <button className="w-full bg-white border border-slate-300 text-slate-700 font-semibold py-2.5 rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
         <GoogleIcon />
         Sign up with Google
      </button>
    </div>
    <p className="text-xs text-slate-500 mt-6 text-center">
      By signing up, you agree to our <a href="#" className="text-blue-600 hover:underline">Terms of Service</a>.
    </p>
  </>
);

const LoginForm: React.FC = () => (
    <>
      <h3 className="text-2xl font-bold text-slate-800 text-center">Welcome back</h3>
      <p className="text-center text-sm text-slate-600 mt-2">Sign in to your account.</p>
      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor="email-login" className="block text-sm font-medium text-slate-700">Work Email</label>
          <input type="email" id="email-login" placeholder="you@company.com" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
        </div>
        <div>
          <label htmlFor="password-login" className="block text-sm font-medium text-slate-700">Password</label>
          <input type="password" id="password-login" placeholder="••••••••" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
        </div>
        <button className="w-full bg-blue-600 text-white font-semibold py-2.5 rounded-lg hover:bg-blue-700 transition-colors">
          Sign in with Email
        </button>
        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-slate-500">OR</span>
          </div>
        </div>
         <button className="w-full bg-white border border-slate-300 text-slate-700 font-semibold py-2.5 rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
           <GoogleIcon />
           Sign in with Google
        </button>
      </div>
       <p className="text-xs text-slate-500 mt-6 text-center">
        Don't have an account? <a href="#" className="text-blue-600 hover:underline">Sign up</a>.
      </p>
    </>
  );


// --- MAIN APP COMPONENT ---

interface SearchableItem {
  id: string;
  title: string;
  content: string;
  category: string;
}

export default function App() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchResults, setSearchResults] = React.useState<SearchableItem[]>([]);
  const [isSearchVisible, setIsSearchVisible] = React.useState(false);
  const searchContainerRef = React.useRef<HTMLDivElement>(null);
  
  const [isLoginModalOpen, setIsLoginModalOpen] = React.useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = React.useState(false);

  const searchableContent = React.useMemo<SearchableItem[]>(() => [
    {
      id: 'hero',
      title: 'AI-Powered QA',
      content: "Leverage our 9-step, AI-driven workflow to ship flawless applications faster. From requirement analysis to test closure, we've got you covered. " + benefits.join(', '),
      category: 'Overview'
    },
    ...features.map(f => ({ id: 'features', title: f.title, content: f.description, category: 'Feature' })),
    ...workflowSteps.map(w => ({ id: 'workflow', title: w, content: `Step in the QA workflow: ${w}`, category: 'Workflow Step' })),
    {
      id: 'uat',
      title: 'User Acceptance Testing (UAT)',
      content: 'Final approval step where the user reviews all generated deliverables and provides a sign-off. The platform consolidates artifacts for this review.',
      category: 'Process Step'
    }
  ], []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.length > 1) {
      setIsSearchVisible(true);
      const results = searchableContent.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.content.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setIsSearchVisible(false);
      setSearchResults([]);
    }
  };

   React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchVisible(false);
      }
    };
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsSearchVisible(false);
        setIsLoginModalOpen(false);
        setIsSignupModalOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, []);


  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen font-sans">
      {isLoginModalOpen && <Modal onClose={() => setIsLoginModalOpen(false)}><LoginForm /></Modal>}
      {isSignupModalOpen && <Modal onClose={() => setIsSignupModalOpen(false)}><SignUpForm /></Modal>}

      <div ref={searchContainerRef}>
        <Header 
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          onSearchFocus={() => searchQuery.length > 1 && setIsSearchVisible(true)}
          onLoginClick={() => setIsLoginModalOpen(true)}
          onSignupClick={() => setIsSignupModalOpen(true)}
        />
        {isSearchVisible && (
          <div className="absolute top-16 w-full z-40 flex justify-center">
              <div className="bg-white w-full max-w-md mt-1 rounded-lg border border-slate-200 shadow-lg overflow-hidden">
                  {searchResults.length > 0 ? (
                      <ul>
                          {searchResults.map((result, index) => (
                              <li key={`${result.title}-${index}`}>
                                  <a href={`#${result.id}`} onClick={() => setIsSearchVisible(false)} className="block p-4 hover:bg-slate-50">
                                      <p className="font-semibold text-slate-800 text-sm">{result.title}</p>
                                      <p className="text-xs text-slate-500">{result.category}</p>
                                  </a>
                              </li>
                          ))}
                      </ul>
                  ) : (
                      <div className="p-4 text-center text-sm text-slate-500">
                          No results found for "{searchQuery}"
                      </div>
                  )}
              </div>
          </div>
        )}
      </div>

      <main>
        {/* Hero Section */}
        <section id="hero" className="relative py-20 sm:py-24 lg:py-32">
          <div className="absolute inset-0 bg-[url('https://tailwindcss.com/_next/static/media/hero@75.b2469a49.jpg')] bg-cover bg-center opacity-5"></div>
           <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-slate-50/80 to-slate-50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
                AI-Powered QA.
                <span className="block text-blue-600">Automated, Intelligent, Effortless.</span>
              </h1>
              <p className="mt-6 text-lg text-slate-600 max-w-xl mx-auto lg:mx-0">
                Leverage our 9-step, AI-driven workflow to ship flawless applications faster. From requirement analysis to test closure, we've got you covered.
              </p>
              <ul className="mt-8 space-y-3 text-left max-w-md mx-auto lg:mx-0">
                {benefits.map(benefit => (
                  <li key={benefit} className="flex items-center">
                    <CheckIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center lg:justify-end">
                <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-2xl shadow-slate-300/60 w-full max-w-md text-center border">
                    <h3 className="text-2xl font-bold text-slate-800">Ready to transform your QA?</h3>
                    <p className="mt-2 text-slate-600">Join hundreds of teams shipping higher quality software, faster.</p>
                    <button 
                        onClick={() => setIsSignupModalOpen(true)}
                        className="mt-6 w-full max-w-xs mx-auto bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-transform hover:scale-105"
                    >
                        Start Your Free Trial
                    </button>
                    <p className="text-xs text-slate-500 mt-4">
                        No credit card required.
                    </p>
                </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-slate-900">The Future of Quality Assurance is Here</h2>
              <p className="mt-4 text-lg text-slate-600">A comprehensive platform built for modern QA teams.</p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {features.map(feature => (
                <div key={feature.title} className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900">{feature.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Workflow Section */}
        <section id="workflow" className="py-20 sm:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-slate-900">A Workflow You Can Trust</h2>
                    <p className="mt-4 text-lg text-slate-600">Our 9-step AI-powered process ensures complete coverage and consistency.</p>
                </div>
                <div className="mt-16">
                    <ol className="relative border-l border-slate-200">
                      {workflowSteps.map((step, index) => (
                         <li key={step} className="mb-10 ml-6">
                            <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-8 ring-slate-50 text-blue-800 font-bold">
                                {index + 1}
                            </span>
                            <h3 className="flex items-center mb-1 text-lg font-semibold text-slate-900">{step}</h3>
                        </li>
                      ))}
                    </ol>
                </div>
            </div>
        </section>

        {/* UAT Section */}
        <section id="uat" className="py-20 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-lg">
                        <h3 className="text-xl font-bold text-slate-900">UAT Deliverable Review</h3>
                        <p className="mt-2 text-sm text-slate-600">Review and approve the following deliverables to complete the testing cycle.</p>
                        <ul className="mt-6 space-y-4">
                           {uatDeliverables.map(item => (
                               <li key={item} className="flex items-center p-3 bg-white rounded-md border border-slate-200">
                                   <CheckIcon className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                                   <span className="text-sm font-medium text-slate-700">{item}</span>
                               </li>
                           ))}
                        </ul>
                        <button className="mt-8 w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition-colors">
                            Approve & Sign-Off
                        </button>
                    </div>
                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl font-extrabold text-slate-900">Your Final Approval</h2>
                        <p className="mt-4 text-lg text-slate-600">User Acceptance Testing is the final, critical step. Our platform consolidates all generated artifacts into a single, auditable view. Review the complete testing cycle and provide your official sign-off with confidence.</p>
                    </div>
                </div>
            </div>
        </section>

      </main>

      <footer className="bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center items-center space-x-3">
              <Logo />
              <span className="text-lg font-bold text-slate-800">App Tester Pro</span>
            </div>
          <p className="mt-4 text-sm text-slate-600">&copy; {new Date().getFullYear()} App Tester Pro, Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
