export const en = {
  alerts: {
    success: "Email resent successfully!",
    error: "An error occurred. Please try again.",
    notAuthenticated: "The user is not authenticated.",
  },
  buttons: {
    back: "Back",
    backToHome: "Back to Home",
    dashboard: "Dashboard",
    finalize: "Finalize",
    goToHome: "Go to Home",
    next: "Next",
    register: "Register",
    resendEmail: "Resend email",
    sending: "Sending...",
    submit: "Submit",
    submitting: "Submitting...",
    saveChanges: "Save Changes",
    login: "Login",
    signup: "Sign up",
    logout: "Logout",
    cancel: "Cancel",
    delete: "Delete",
    confirm: "Confirm",

  },
  common: {
    loading: "Loading...",
    refresh: "Refresh",
    noDataAvailable: "No data available",
    search: "Search...",
    backToCalls: "Back to Calls",
    user: "User"
  },
  userDropdown: {
    profile: "Profile",
    settings: "Settings",
    darkMode: "Dark mode",
    lightMode: "Light mode",
    toggleTheme: "Toggle theme",
    logout: "Log out"
  },
  chat: {
    disclaimer:
      "Parla may display inaccurate information, including about people, so verify its responses.",
    input: "Write a text",
    intro: "How can I help you today?",
    label: "I am excited to help you!",
    send: "Send",
    welcome: "Welcome",
  },
  call_page: {
    agent: "Agent",
    agents: "Agents",
    agentDeadAir: "Agent Dead Air",
    agentTalkDuration: "Agent Talk Duration",
    analytics: "Analytics",
    calls: "Calls",
    callDetails: "Call Details",
    client: "Client",
    chat: "Chat",
    clientTalkDuration: "Client Talk Duration",
    callDurationDistribution: "Call Duration Distribution",
    callDetailsHeader: "Call Details",
    callDuration: "Call Duration",
    callSummary: "Call Summary",
    close: "Close",
    conversation: "Conversation",
    crosstalk: "Crosstalk",
    customer: "Client",
    date: "Processing Date",
    dayProcessed: "Processing Date",
    overview: "Overview",
    phoneNumber: "Phone Number",
    project: "Project",
    scorecards: "Scorecards",
    status: "Status",
    talkRatio: "Talk Ratio",
    totalDeadAir: "Total Dead Air",
    transactions: "Transactions",
    type: "Type",
    wordFrequency: "Word Frequency",
  },
  agentScoreChart: {
    title: "Agent Score Over Time",
    description: "Monthly average score trend",
    trendingUp: "Trending up",
    trendingDown: "Trending down",
    noChange: "No change ",
    byPercentage: "by {percentage}% this month",
    noDataAvailable: "No data available",
  },

  conversationsTab: {
    tableColumnName: "Name",
    tableColumnPhone: "Phone Number",
    tableColumnScore: "Score",
    tableColumnCallDuration: "Call Duration",
    tableColumnProject: "Project",
    tableColumnStatus: "Status",
    tableColumnActions: "Actions",
    buttonDetails: "View the details of this call",
    buttonDelete: "Delete this call",
    statusLabels: {
      done: "Done",
      processing: "Processing",
      new: "New",
    },
    deleteConfirmTitle: "Confirm Deletion",
    deleteConfirmDescription:
      "Are you sure you want to delete this call? This action cannot be undone.",
  },
  dashboard: {
    activeNow: "Active Now",
    amount: "Amount",
    approved: "Approved",
    averageTime: "Average Call Time",
    conversations: "Conversations",
    customer: "Customer",
    declined: "Declined",
    fromLastMonth: "from last month",
    processingTime: "Average Processing Time",
    recentConversations: "Recent conversations",
    recentSales: "Recent Sales",
    recentTransactions: "Recent transactions from your store.",
    refund: "Refund",
    sale: "Sale",
    sales: "Sales",
    score: "Average Call Score",
    sinceLastHour: "since last hour",
    subscriptions: "Subscriptions",
    totalCalls: "Total Calls",
    transactions: "Transactions",
    type: "Type",
    viewAll: "View All",
  },
  dateRangeSelector: {
    selectPeriodLabel: "Select a period",
    periods: ["Last 7 days", "Last 30 days", "Last 90 days", "Custom"],
    startDateLabel: "Start Date",
    endDateLabel: "End Date",
    pickDate: "Pick a date",
  },
  descriptions: {
    chatDisclaimer:
      "NextJourney may display inaccurate information, including about people, so verify its responses.",
    chooseDepartment:
      "Tell us which department you work in. We want to know where you make a difference!",
    choosePartner:
      "Select the partner you are working with to get started on the right foot!",
    chooseProject:
      "Select the project you are associated with. Let's get to work!",
    chooseTeamLeader: "Select your team leader.",
    chooseProfileIcon: "Choose an avatar to personalize your profile.",
    default:
      "Complete the following steps to get started. We are excited to have you here!",
    emailNotFound: "Could not retrieve the email address. Please try again.",
    enterDob:
      "Enter your date of birth. We might surprise you on your special day!",
    enterEmail: "Enter your email and password to log in.",
    register: "Enter your information to create an account",
    success: "You have successfully completed the setup.",
    totalCalls: "Total calls in the database",
    totalCallsChange: "with x% more/less processed compared to last month",
    verifyEmail:
      "We just sent an email to <b>{email}</b>. Click the link in the email to verify your email address.",
    recentTransactions: "Recent transactions from your store.",
    welcome:
      "NextMind is your platform for collaborating with our partners. Let's start by completing a few steps to customize your experience!",
  },
  dropdown: {
    profile: "Profile",
    logOut: "Log out",
  },
  gemini: {
    agentName: "The agent's name is",
    agentText: "Agent:",
    assistant_instruction:
      "You are a Quality Assurance, you need to be friendly, human, and empathetic. Your goal is to evaluate call center calls to identify strengths and areas that need improvement, providing constructive feedback and detailed advice to help operators/agents improve their sales techniques, general attitude, and approach during calls. Additionally, you will provide practical guidance on improving communication efficiency, managing customer objections, and creating a positive experience for them, thus contributing to optimizing team performance and achieving organizational goals.",
    example_questions: {
      question1:
        "How should I approach an unhappy customer who wants to cancel the service?",
      question2:
        "What techniques can I use to increase the chances of closing a sale?",
      question3: "How can I improve my tone and attitude during calls?",
    },
    example_answers: {
      answer1:
        'Approaching an unhappy customer who wants to cancel the service requires empathy, professionalism, and a genuine desire to understand their frustration. Here are some key steps:\n\n**1. Listen actively and validate:**\n\n* **Listen carefully** to what the customer has to say, without interrupting. Focus on the emotion behind the words, not just the facts. \n* **Confirm** that you understand the situation and the customer\'s feelings: "I completely understand why you are unhappy and I assure you that I will do my best to clarify the situation."\n* **Empathize**: "I can imagine how frustrating it must be to go through this."\n\n**2. Apologize and take responsibility:**\n\n* **Apologize sincerely**, even if the problem is not directly your fault. "I am very sorry for the unpleasant experience you had with our service."\n* **Take responsibility** for resolving the situation, without blaming other colleagues or departments.\n\n**3. Identify the problem and offer solutions:**\n\n* **Ask specific questions** to understand exactly why the customer wants to cancel the service: "Can you give me more details about what exactly dissatisfied you?"\n* **Present concrete solutions** tailored to the customer\'s needs. For example, offer a free trial period, a discount on the subscription, or dedicated technical support. \n* **Be realistic** about what you can offer and do not promise things you cannot fulfill.\n\n**4. Maintain a positive and professional attitude:**\n\n* **Stay calm** and speak in a calm and respectful tone, even if the customer is angry or verbally aggressive. \n* **Avoid** justifying yourself or arguing with the customer. \n* **Focus** on finding a mutually beneficial solution.\n\n**5. Document the interaction:**\n\n* **Note** all important details of the conversation, including the problems reported by the customer and the solutions proposed. \n* **Follow up** on the promised solution and ensure that the customer is satisfied with the result.\n\n**Remember:**\n\n* Sometimes, even if you make every effort, some customers may decide to cancel the service. The important thing is to handle the situation professionally and leave the customer with a positive impression, even upon departure. \n* Use negative feedback as an opportunity to learn and improve the services offered.',
      answer2:
        "Here are some effective techniques to increase the chances of closing a sale in a call center:\n\n**Before the call:**\n\n* **Research and qualify leads:** Make sure the people you contact are part of the target audience and need your product/service. Use information available online (e.g., LinkedIn, company website) to better understand their needs. \n* **Prepare a flexible \"script\":** A script can guide you during the conversation, but avoid reading it word for word. Adapt it according to the interlocutor's reactions. \n* **Set a clear objective:** What do you want to achieve from this call? A demo appointment? A quote request? Having a clear objective will help you focus better during the conversation.\n\n**During the call:**\n\n* **Build a relationship:** Be empathetic, friendly, and authentic. Show interest in the interlocutor and their needs.\n* **Listen actively:** Focus on what the interlocutor is saying and ask relevant questions to demonstrate that you are listening.\n* **Highlight benefits, not features:** Don't limit yourself to presenting the features of the product/service. Focus on how they can solve the customer's problems or improve their life.\n* **Use stories and concrete examples:** People remember information presented in the form of a story more easily. Use case studies and examples to demonstrate the value of the product/service.\n* **Handle objections:** Be prepared to respond to objections calmly and professionally. Turn objections into opportunities to provide more information and demonstrate the value of the product/service.\n* **End with a clear \"call to action\":** Don't let the conversation end without proposing a concrete action, such as scheduling a demo or sending a personalized quote.\n\n**After the call:**\n\n* **Prompt follow-up:** Contact the customer promptly, according to the promises made during the call.\n* **Maintain the connection:** Even if you didn't close the sale immediately, keep in touch with the customer via email or phone. Provide useful information and demonstrate that you are interested in their long-term success.\n\n**Additional recommendations:**\n\n* **Perfect your tone of voice:** Speak clearly, with enthusiasm and confidence.\n* **Be patient and persistent:** Don't be discouraged if you don't close the sale on the first call. Building a trust relationship takes time.\n* **Learn from each interaction:** Analyze your calls and identify what worked and what could be improved.\n\nBy applying these techniques and being dedicated, you can significantly increase your chances of closing a sale in the call center.",
      answer3:
        'Here are some practical tips for improving your tone and attitude during call center calls:\n\n**Before the call:**\n\n* **Mentally prepare:** Take a few minutes before the call to relax and get into a positive mindset. \n* **Smile:** Even if the interlocutor cannot see you, the smile is felt in the voice and will help you appear friendlier and more approachable.\n* **Adjust your posture:** Sit up straight or walk around the room while speaking. Correct posture will help you breathe more easily and have a stronger voice.\n\n**During the call:**\n\n* **Control your speaking speed:** Speak clearly, loudly enough, and at a moderate pace. Short pauses between ideas will make your message easier to follow.\n* **Voice modulation:** Avoid speaking monotonously. Vary your tone to emphasize certain words or ideas and to maintain the interlocutor\'s interest.\n* **Use positive language:** Focus on solutions, not problems. Replace negative phrases with positive alternatives: \n    * Instead of "It\'s not possible," say "Here\'s what we can do..."\n    * Instead of "I don\'t know," say "I will check and get back to you with an answer."\n* **Empathize with the interlocutor:** Show that you understand the customer\'s perspective and care about their problem.\n* **Be patient and listen actively:** Give the interlocutor the necessary time to express themselves and listen carefully to what they have to say.\n* **End on a positive note:** Thank the interlocutor for their time and express your willingness to help in the future.\n\n**Practical exercises:**\n\n* **Record yourself:** Record a few calls and listen to them later. You will more easily identify the aspects that can be improved.\n* **Role-playing:** Practice with a colleague or friend various call scenarios and provide constructive feedback to each other.\n* **Breathing and diction exercises:** There are numerous online resources with breathing and diction exercises that can help you improve your voice and clarity.\n\n**Remember:** Improving tone and attitude requires time and conscious effort. Be patient with yourself and celebrate your progress!',
    },
    clientText: "Client:",
    feedback_headline: "Why did you choose this rating? (optional)",
    feedback_buttons: {
      correct: "Correct",
      easy: "Easy",
      complete: "Complete",
      offensive: "Offensive / Unsafe",
      incorrect: "Not factually correct",
      other: "Other",
    },
    feedback_note:
      "Even when Gemini app activity is turned off, submitted feedback will include the last 24 hours of your conversations to help improve Gemini.",
    frequentWords: "The most frequent words are:",
    generate_error: "Error generating response",
    learn_more: " Learn more",
    placeholders: {
      additionalFeedback: "Provide additional feedback",
    },
    buttons: {
      submit: "Submit",
    },
    network_error: "Network response was not OK",
    occurrences: "times",
    projectName: "The agent's project is",
    sentimentAverage: "The average sentiment of the conversation was",
    sentimentScale: "on a scale from 1 to 5.",
    tooltip_copy: "Copy",
    tooltip_copy_success: "Copied!",
    tooltip_email: "Send by email",
    tooltip_feedback_thumbs_down: "Negative response",
    tooltip_feedback_thumbs_up: "Positive response",
  },
  headers: {
    login: "Log in",
    dashboard: "Dashboard",
    register: "Register",
    close: "Close",
    platform: "Platform",
    pricing: "Pricing",
    light: "Light",
    dark: "Dark",
    system: "System",
    settings: "Settings",
    theme: "Theme",
    language: "Language",
    getStarted: "Get Started",
    languageSelect: {
      ro: "Romanian",
      en: "English",
    },
  },
  homepage: {
    learnMore: "Learn more",
    start: "Start now",
    subtitle: "Your platform for collaboration with our partners.",
    title: "Welcome to NextMind!",
  },
  labels: {
    dob: "Date of Birth",
    department: "Department",
    email: "Email Address",
    firstName: "First Name",
    lastName: "Last Name",
    partner: "Partner",
    password: "Password",
    profileIcon: "Avatar",
    project: "Project",
    teamLeader: "Team Leader",
    user: "User",
    company: "Company",
  },
  links: {
    alreadyHaveAccount: "Already have an account?",
    authentication: "Authentication",
    discover: "Discover",
    dontHaveAccount: "Don't have an account?",
    forgetPassword: "Forgot your password?",
    license: "License",
    privacyPolicy: "Privacy Policy",
    register: "Register",
    refundPolicy: "Refund Policy",
    support: "Support",
    termsAndConditions: "Terms & Conditions",
  },
  loading: {
    loadingAuthentication: "Authenticating...",
    loadingIcons: "Loading...",
    loadingPage: "Loading...",
  },
  overviewTab: {
    title: "Overview",
    description: "Overview of the company's performance",
    handleConnectionError: "An error occurred while connecting to the server",
    handleConnectionUnknownError: "An unknown error occurred",
    handleInfoNotExist: "Information for last month does not exist",
    titlePresentation: "Monthly Overview",
    titleRecentCalls: "Recent Calls",
  },
  placeholders: {
    chatInput: "Write a text",
    department: "Choose a department",
    dob: "Date of Birth",
    partner: "Choose a partner",
    project: "Choose a project",
    teamLeader: "Choose a team leader",
  },
  tabs: {
    conversations: "Conversations",
    overview: "Overview",
    sales: "Sales",
    transactions: "Transactions",
  },
  titles: {
    chooseDepartment: "Your Department",
    choosePartner: "Choose Partner",
    chooseProfileIcon: "Choose Your Avatar",
    chooseProject: "Choose Project",
    chooseTeamLeader: "Team Leader",
    default: "Welcome!",
    enterDob: "Your Special Day",
    register: "Register",
    success: "Congratulations!",
    userProfile: "Edit Profile",
    verifyEmail: "Please verify your email",
    welcome: "Welcome to NextMind!",
  },
  userProfile: {
    avatarFallback: "User Avatar",
    chooseDepartment: "Choose a department",
    chooseProject: "Choose a project",
    company: "Company",
    department: "Department",
    description:
      "Make changes to your profile here. Click save when you're done.",
    editProfile: "Edit Profile",
    email: "Email Address",
    errors: {
      noUserData: "No user data available",
      projectsError: "Error loading projects",
      departmentsError: "Error loading departments",
    },
    firstName: "First Name",
    lastName: "Last Name",
    loading: {
      loadingProjects: "Loading projects...",
      loadingDepartments: "Loading departments...",
    },
    placeholders: {
      project: "Select a project",
      department: "Select a department",
    },
    profileChangesSaved: "Your profile changes have been saved successfully.",
    saveChanges: "Save Changes",
    title: "Edit Profile",
  },
  dialog: {
    title: "Changes Saved",
    description: "Your profile changes have been saved successfully.",
  },
  goTo: {
    title: "Choose a destination",
    subtitle: "Select where you want to go next.",
  },
  callDurationDistribution: {
    title: "Talk Duration Agent",
  },
  averageDurationDisplay: {
    title: "Average Talk Duration",
    noData: "No Data"
  },
  averageScoreDisplay: {
    title: "Average Call Score",
  },
  averageSentimentDisplay: {
    title: "Average Sentiment",
  },
  countDisplay: {
    title: "Total Calls",
  },
  monthlyBarChart: {
    title: "Monthly Data",
  },
  agentsPage: {
    title: "Agents",
    description: "List of agents and their information",
    tableColumnName: "Name",
    tableColumnUsername: "Username",
    tableColumnProject: "Project",
    tableColumnActions: "Actions",
    buttonDetails: "View this agent's details",
    searchPlaceholder: "Search agents...",
    viewDetails: "View Details",
  },
  callsPage: {
    title: "Calls",
    description: "View and manage call records",
    searchPlaceholder: "Search calls...",
  },
  nextAiPage: {
    title: "Next AI",
    description: "AI-powered features and insights",
    // Add more specific translations for the Next AI page
  },
  agent_page: {
    id: "Agent ID",
    agentTitle: "Quality Assurance Specialist",
    agentDetails: "Agent Details",
    agentInformation: "Agent Information",
    firstName: "First Name",
    lastName: "Last Name",
    username: "Username",
    project: "Project",
    profile: "Profile",
    statistics: "Statistics",
    close: "Close",
    projectOverview: "Agent Overview",
    agentActivity: "Agent Activity",
    analytics: "Analytics",
    settings: "Settings",
    projectName: "Project Name",
    recentCalls: "Recent Calls",
    overview: {
      title: "Agent Overview",
      description: "Overview of the agent's performance",
    },
    activity: {
      title: "Agent Activity",
      description: "Activity of the agent",
    },
  },
  agentDetailsDrawer: {
    agentSummary: "Agent Performance Summary",
    agentSummaryDescription: "AI-generated analysis of agent performance",
  },
  callsTable: {
    phoneNumber: "Phone Number",
    date: "Date",
    duration: "Duration",
    score: "Score",
    actions: "Actions",
    view: "View",
  },
  projectsPage: {
    title: "Projects",
    description: "Manage and view all projects",
    searchPlaceholder: "Search projects...",
    tableColumnDescription: "Description",
    tableColumnAgentsCount: "Agents Count",
    tableColumnActions: "Actions",
    tableColumnName: "Project Name",
    tableColumnCompanies: "Companies",
    tableColumnGreetings: "Greetings",
  },
  analyticsPage: {
    title: "Analytics",
    description: "Overview of the company's analytics",
  },
  metadata: {
    dashboard: "Dashboard"
  },

  // New translations 
  // Sign in page
  signinPage: {
    title: "Please Enter your Account details",
    emailLabel: "Email",
    emailPlaceholder: "johndoe@example.com",
    passwordLabel: "Password",
    passwordPlaceholder: "••••••••",
    forgotPassword: "Forgot Password",
    signInButton: "Sign in",
    signingInButton: "Signing in...",
    createAccount: "Create an account",
    testimonialTitle: "What's our Clients Said.",
    cardTitle: "Get your right tool and right place apply now",
    cardDescription: "Be among the first founders to experience the easiest way to analyze your business.",
    dontHaveAccount: "Don't have an account? ",
  },
  signupPage: {
    title: "Create Your Account",
    firstName: "First Name",
    firstNamePlaceholder: "John",
    lastName: "Last Name",
    lastNamePlaceholder: "Doe",
    email: "Email Address",
    emailPlaceholder: "john.doe@company.com",
    password: "Password",
    passwordPlaceholder: "••••••••",
    signUpButton: "Sign up",
    signingUpButton: "Signing up...",
    alreadyHaveAccount: "Already have an account?",
    loginLink: "Log in",
    testimonialTitle: "Join Our Thriving Community",
    cardTitle: "Start Your Journey Today",
    cardDescription: "Join thousands of professionals finding their dream careers through our platform.",
  },
  forgotPasswordPage: {
    title: "Reset Your Password",
    description: "Enter your email address and we'll send you a link to reset your password.",
    emailLabel: "Email Address",
    emailPlaceholder: "johndoe@example.com",
    sendButton: "Send Reset Link",
    sendingButton: "Sending...",
    successTitle: "Reset Link Sent",
    successMessage: "Check your email for the password reset link.",
    backToSignIn: "Back to Sign In",
    rememberPassword: "Remembered your password?",
    signIn: "Sign In",
    cardTitle: "Forgot Your Password?",
    cardDescription: "Don't worry, it happens to the best of us. Let's get you back into your account.",
    
  },
  resetPasswordPage: {
    title: "Reset Password",
    newPasswordLabel: "New Password",
    confirmPasswordLabel: "Confirm New Password",
    resetButton: "Reset Password",
    resettingButton: "Resetting...",
    successTitle: "Password Reset Successful",
    successMessage: "Your password has been successfully reset. You can now sign in with your new password.",
    backToSignIn: "Back to Sign In",
    invalidLinkTitle: "Invalid Reset Link",
    invalidLinkMessage: "The password reset link is invalid or has expired. Please request a new one.",
  },
  confirmEmailPage: {
    title: "Email Confirmed",
    message: "Your email has been successfully confirmed.",
    successTitle: "Email Confirmed!",
    successMessage: "You can now sign in with your email.",
    backToSignIn: "Back to Sign In"
  },
  verifyEmailPage: {
    title: "Verify Your Email",
    sentMessage: "We've sent a verification email to {email}.",
    checkInbox: "Check your email inbox for a message from us.",
    clickLink: "Click on the verification link in the email to activate your account.",
    checkSpam: "If you don't see the email, check your spam folder.",
    didntReceive: "Didn't receive the email? Click below to resend.",
    resendEmail: "Resend Verification Email",
    backToSignIn: "Back to Sign In",
    emailResent: "Verification email resent",
    resending: "Resending...",
  },
  errors: {
    emailNotFound: "The email address was not found. Please register or try again.",
    enterDob: "Please enter your date of birth.",
    generalError: "An error occurred. Please try again.",
    invalidCredential: "Invalid credentials. Please check your email and password and try again.",
    invalidEmail: "The email address is incorrectly formatted.",
    invalidPassword: "Password must be at least 6 characters long.",
    selectDepartment: "Please select a department.",
    selectPartner: "Please select a partner.",
    selectProject: "Please select a project.",
    selectTeamLeader: "Please select a team leader.",
    userDisabled: "This user has been disabled.",
    wrongPassword: "Incorrect password. Please try again.",
    signInError: "Sign In Error",
    authenticationError: "Authentication Error",
    emailRequired: "Email is required",
    passwordRequired: "Password is required",
    validationError: "Validation Error",
    companyNotFound: "Company Not Found",
    companyNotFoundDescription: "Company not found for the provided email domain.",
    signUpError: "Sign Up Error",
    passwordResetError: "Password Reset Error",
    tooManyRequests: "Too many requests. Please try again later.",
    missingEmail: "Please enter your email address.",
    passwordLength: "Password must be at least 8 characters long",
    confirmPasswordRequired: "Please confirm your password",
    passwordMismatch: "Passwords do not match",
    passwordRequirements: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    emailResendError: "Error resending verification email",
    tryAgainLater: "Please try again later",
    userNotFound: "User not found",
    trySignInAgain: "Please try signing in again",
  },
};
