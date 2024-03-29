// import flatten from 'flat'  TODO: install flat if require nested objects in en.js
import { flatten } from "flat";
const en = {
  login: {
    login: "Login",
    resetPassword: "reset password",
    findWork: "find work",
    findTalent: "find talent",
    talent: "talent",
    title1: " sourcing and management",
    done: "done",
    fast: " fast,",
    title2: " affordably, efficiently",
    viewPlans: "view plans",
    signUp: "Sign up",
    firstName: "first name",
    lastName: "last name",
    emailAddrees: "email address",
    password: "password",
    newPassword: "newPassword",
    contact: "contact number",
    // signUpLabel:'By signing up, I agree to be bound by Crayon’s Terms of Service and Privacy Policy.',
    s1: "By signing up, I agree to be bound by Crayon’s  ",
    s2: "  Terms of Service ",
    s3: " & ",
    s4: "  Privacy Policy.",
    letsGo: "let's Go",
    cancel: "cancel",
    // candidate: 'candidate'
  },
  topBar: {
    login: "login",
    join: "join",
    logout: "logout",
    talent: "talent",
    lite: "lite",
    upgrade: "upgrade",
    myCrayon: "my crayon",
  },
  searchBar: {
    filters: "filters",
    letsGo: "let's go!",
    jobTitle: "job title(s)",
    location: "location(s)",
    skills: "skills",
    region: "region(s)",
    experience: "experience",
    salary: "salary",
    and: "and",
    or: "or",
  },
  jobs: {
    searchPlaceholder: "find me this job...",
    noData: "No Jobs Found.",
  },
  talent: {
    searchPlaceholder: "find me this talent...",
  },
  myJobs: {
    searchPlaceholder: "search my jobs...",
  },
  jobCard: {
    recruit: "recruit",
    lite: "lite jobs",
    matchnow: "match now",
    review: "review",
    tech: "tech",
    fullTime: "full-time",
    remote: "remote",
    apply: "apply",
    matchMe: "match me",
    earn$: "earn $",
    challengers: "challengers",
    contemplators: "contemplators",
    detailed: "detailed",
    marketing: "marketing",
    operations: "operations",
    manage: "manage",
  },
  talentCard: {
    shortlist: "shortlist",
    active: "active",
    inDemand: "in demand",
    tech: "tech",
    fullTime: "full-time",
    remote: "remote",
    matchMe: "match me",
    earn$: "earn $",
    challengers: "challengers",
    contemplators: "contemplators",
    detailed: "detailed",
  },
  dialog: {
    close: "close",
  },
  manageJob: {
    title: "Lead Developer",
    recruit: "recruit",
    review: "review",
    tech: "tech",
    fullTime: "full-time",
    talentText: "Talent",
    remote: "remote",
    manage: "manage",
    edit: "edit",
    close: "close",
    challengers: "challengers",
    contemplators: "contemplators",
    detailed: "detailed",
    talentBtn: "Talent",
    editJob: "Edit job",
    pauseJob: "Pause job",
    closeJob: "Close job",
    duplicateJob: "Duplicate job",
    reactivateJob: "Reactivate Job",
  },
  teamMenu: {
    label: "team",
    title: "Who can access this job?",
  },
  draggableCard: {
    videoApp: "video app",
    qAnda: "Q&A",
    cv: "CV",
    qAnda: "Q&A",
    crayonButton: "crayon cam",
    fullCV: "full CV",
    portfolio: "portfolio",
    crayonInterview: "crayon interview",
    history: "history",
    requestInterview: "request interview",
    chat: "chat",
    challenger: "challenger",
    collaborator: "collaborator",
  },
  buildSearch: {
    title: "Build a search",
    and: "and",
    update: "update",
    approved: "approved",
    clearAll: "clear all",
  },
  jobTitles: {
    title: "Job titles",
    broad: "broad",
    currentAndPast: "current & past",
    approved: "approved",
  },
  activeJobs: {
    title: "Active jobs",
    interview: "interview",
    copyLink: "copy link",
    viewSpec: "view spec",
    recruit: "recruit",
    interviews: "interviews",
    crayonComfort: "crayon comfort",
    active: "active",
    lite: "lite",
    update: "update",
    industries: "Industries",
    tools: "Tools",
    qualifications: "Qualifications",
    institutions: "Institutions",
    associations: "Associations",
    jobQuestions: "Job Questions",
    question1: "Question:",
    question2: "Question 2:",
    question3: "Question 3:",
    manageTalent: "manage talent",
  },
  pendingJobs: {
    title: "Pending Jobs",
    paused: "Paused Jobs",
    closed: "Closed Jobs",
    activeJob: "Active Jobs",
    approveJob: "approve job",
    viewspec: "View Spec",
    copylink: "Copy Link",
    uploadedspec: "Uploaded Spec",
    bookbriefing: "Book a briefing",
    managebtn: "manage talent",
    jobquestions: "Job Questions",
    answer: "Answer",
    viewbriefing: "View Briefing",
    crayonVitae: "Crayon Vitae",
    resume: "Resume",
    portfolio: "Portfolio",
    active: "active",
    history: "history",
    chat: "chat",
    match: "match",
    addToPool: "add to pool",
    addToJob: "add to job",
    tags: "Tags",
    industries: "Industries",
    tools: "Tools",
    qualifications: "Qualifications",
    highestQualification: "Highest Qualification",
    institutions: "Institutions",
    associations: "Associations",
    languages: "Languages",
    nationality: "Nationality",
    school: "School",
    workHistory: "Work History",
    alerts: "Alerts",
    type: "Type(s)",
    region: "Region(s)",
    currency: "Currency(ies)",
    industry: "Industry(ies)",
    salary: "Salary",
    experience: "Experience",
    comments: "Comments",
    personality: "Personality",
    challenger: "Challenger",
    collaborator: "Collaborator",
    detailed: "detailed",
    adaptable: "adaptable",
    organised: "organised",
    proactive: "proactive",
    thrivesOnStress: "thrives on stress",
  },
  allTalent: {
    addPersonality: "Add Personality",
    title: "All talent",
    cv: "CV",
    crayonVitae: "Crayon Vitae",
    resume: "Resume",
    portfolio: "Portfolio",
    active: "active",
    history: "history",
    chat: "chat",
    match: "match",
    addToPool: "add to pool",
    addToJob: "add to job",
    tags: "Tags",
    industries: "Industries",
    tools: "Tools",
    qualifications: "Qualifications",
    highestQualification: "Highest Qualification",
    institutions: "Institutions",
    associations: "Associations",
    languages: "Languages",
    nationality: "Nationality",
    school: "School",
    workHistory: "Work History",
    alerts: "Alerts",
    type: "Type(s)",
    region: "Region(s)",
    currency: "Currency(ies)",
    industry: "Industry(ies)",
    salary: "Salary",
    experience: "Experience",
    comments: "Comments",
    personality: "Personality",
    challenger: "Challenger",
    collaborator: "Collaborator",
    detailed: "detailed",
    adaptable: "adaptable",
    organised: "organised",
    proactive: "proactive",
    thrivesOnStress: "thrives on stress",
  },

  myJobsCandidate: {
    shortlist: "shortlist",
    recruit: "recruit",
    review: "review",
    tech: "tech",
    fullTime: "full-time",
    remote: "remote",
    matchMe: "match me",
    earn$: "earn $",
    challengers: "challengers",
    contemplators: "contemplators",
    detailed: "detailed",
    inOrOut: "in or out: pending",
    status: "status: active",
  },
  myCV: {
    workJobTitle: "Enter your job title",
    crayonVitae: "Crayon Vitae",
    uploadCV: "upload CV",
    scrapeCV: "scrape CV",
    currentJobTitle: "Enter your current job title",
    dreamNextJobTitle: "Enter your ideal next job title",
    preferredIndustries:
      'Enter your preferred industry and press "Tab" to add more',
    skills: 'Enter your skill(s) and press "Tab" to add more',
    yearsWorkExperience: "years work experience",
    noticePeriod: "notice period",
    highestQualificationLevel: "Select",
    preferredWorkType: "Select",
    preferredSalary: "Select",
    addPortfolio: "add portfolio",
    portfolioLink: "Enter a link to your profile",
    companyName: "Select or add the name of the company",
    jobTitle: "what is/was your job title?",
    clientsAwardsAccolades: "clients, awards, accolades",
    startDate: "Start date",
    endDate: "End date",
    companyName: "company name",
    jobTitle: "job title",
    companyNameLabel: "Company Name",
    stillCompletingLabel: "Still Completing?",
    institutionPlaceholder: "Select or add the name of the institution",
    qualificationPlaceholder: "Select or add the name of the qualification",
    typeOfqualificationPlaceholder: "Select the type of qualification",
    jobTitleLable: "Job Title",
    descriptionJobLabel: "Description Incl. clients, awards, accolades",
    latestEducation: "Latest Education",
    previousEducation: "Previous Education",
    basic: "The basics",
    workLife: "Work life",
    studyLife: "Study life",
    institutionLabel: "Institution",
    yearOfCompletionLabel: "Year of Completion",
    qualificationLabel: "Qualification",
    typeOfQualificationLabel: "Type of qualification",
    latestJobLabel: "Latest Job",
    previousJobLabel: "Previous Job",
    mostRecent: "(most recent)",
    clientsAwards: "Add any details you would like to hightlight",
    startDate1: "start date",
    endDate1: "end date",
    school: "school",
    year: "year",
    institution: "institution",
    qualification: "qualification",
    dateCompleted: "date completed",
    institution: "institution",
    qualification: "qualification",
    professionalDesignation: "professional designation(s)",
    addPortfolio: "+ Upload File",
    quickSave: "save",
    save: "save",
    preferredCurrency: "Select",
    noWorkExp: "No work experience",
    noStudyExp: "no study experience",
    currentJobTitleLabel: "Current Job Title",
    dreamNextJobLabel: "Dream Next Job Title",
    industriesLabel: "Industry(ies)",
    skillsLabel: "Skills",
    yearsOfExperienceLabel: "Years of Work Experience",
    noticePeriodLabel: "Notice Period",
    qualificationLevelLabel: "Highest qualification Level",
    preferedWorkTypeLabel: "Preferred Work Type",
    preferedCurrencyLabel: "Preffered Currency",
    requiredSalaryRangeLabel: "Required Salary Range (Monthly rate)",
    requiredSalaryRangeLabel2: "Required Rate Range (Hourly rate)",
    portfolioLabel: "Portfolio",
    workBottonText: "+ Add work experience",
    previousStudyBottonText: "+ Add Previous Study",
    highSchoolLabel: "High School / A-Levels",
    schoolName: "School",
    schoolPlaceholder: "Select or add the name of the school",
    professionalAssociationLabel: "Professional Association(s)",
    associationLabel: "Association",
    associationPlaceholder: "select or add the name of the association",
    inProgressSwitchLabel: "In Progress?",
  },
  postAJob: {
    title: "Design your next employee",
    theBasics: "The basics",
    theDetails: "The details",
    next: "Next",
    theCulture: "The culture",
    preferredCurrency: "Select the preferred currency",
    jobTitle: "Select or add the required job title",
    roleType: "Is this a permanent contract or freelance job",
    displaySalary: "display salary?",
    countryPlaceHolder: "Which country",
    salaryNegotiable: "salary negotiable?",
    workSetup: "work setup",
    country: "country",
    town: "town",
    skills: "Enter any required skill(s) relating to the job",
    tools: 'Enter any required tool(s) and press "Tab" to add more',
    requiredQualificationLevel:
      "Enter the minimum required qualification level",
    preferredQualification: "Enter any required qualification(s)",
    yearsWorkExperience: "years work experience",
    uploadSpec: "upload spec",
    scrapeSpec: "scrape spec",
    howTheyWillRole: "how they’ll role (role summary)",
    whatTheyWillDo: "what they’ll do (role responsibilities)",
    whatTheyWillNeed: "what they’ll need (role requirements)",
    screeningQuestionPara:
      "You can add up to 5 screening questions (The candidate will be requested to answer this these questions as part of their application)",
    cultureAdd: "The culture add",
    preferredDominantPersonality: "preferred dominant personality",
    preferredShadowPersonality: "preferred shadow personality",
    preferredTraits: "preferred traits",
    screeningQuestions: "The Questions",
    question: "question #",
    quickSave: "quick save",
    save: "Post",
    saveToSpecs: "Save to my specs",
    jobTitleLabel: "Job Title",
    roleTypeLabel: "Role Type",
    currencyIdLabel: "Currency",
    salaryRangeLable: "Salary Range (Monthly rate)",
    salaryRangeLable2: "Rate Range (Hourly rate)",
    countryIdLabel: "Country",
    townIdLabel: "Town",
    townPlaceHolder: "Select the town where the office is based",
    workSetupPlaceholder: "Where will they be required qualification level",
    workSetupLable: "Work Setup",
    toolsLable: "Tools",
    skillsLabel: "Skills",
    requiredQualificationLable: "Required Qualification Level",
    preferredQualificationLabel: "Preferred Qualification(s)",
    yearsWorkExperienceLabel: "Years Work Experience",
    primaryLabel: "Preffered Primary Personality",
    shadowLabel: "Preffered Shadow Personality",
    traitsLabel: "Preffered Traits",
    gritScoreLabel: "Preffered Grit Score",
    addButton: "+ Add a question",
    videoLabel: "Require the candidate to complete a video",
    videoParaLabel: "The candidate will attach a video presenting them self",
    jobTypeLabel: "Job Type",
    recruitParaLabel:
      "The crayon recruit team will facilate the process on your behalf and present only the most suitable options!",
    cryonRecruitLabel: "Crayon Recruit",
    cryonLiteLabel: "Crayon Lite",
    liteParaLabel:
      "You will be in control of the process from start to finish via your employer dashboard!",
  },
  myProfile: {
    title: "build my profile",
    nameLabel: "First Name",
    surnameLabel: "Surname",
    emailLabel: "Email",
    myBio: "My Bio",
    myBioPlace: "Tell us about yourself (max 500 characters)",
    genderLabel: "Gender",
    contactLabel: "Contact Number",
    birthLabel: "Birth Date",
    countryLabel: "Country",
    townLabel: "City/Town",
    nationalityLabel: "Nationality(ies)",
    languageLabel: "Language(s)",
    linkedInLabel: "LinkedIn Profile",
    passwordChangeLabel: "Change Password",
    name: "Enter your first name",
    surname: "Enter your surname",
    email: "Enter your email",
    password: "Enter your current password",
    contactNumber: "Enter your contact number",
    country: "Enter your country",
    city: "city/town",
    linkedIn: "Enter your linked In profile link",
    yearsWorkExperience: "years work experience",
    noticePeriod: "notice period",
    highestQualificationLevel: "highest qualification level",
    preferredWorkType: "preferred work type",
    preferredSalary: "preferred salary/rate",
    portfolioLink: "portfolio link",
    resetPassword: "Reset password",
    willingToRelocate: "willing to relocate?",
    save: "save",
    uploadPhoto: "Upload a photo",
    take: "Take a photo",
    nationality: 'Enter your nationality and press "Tab" to add more',
    language: "language(s)",
    crayonSkinz: "crayon skinz",
    seekingWork: "seeking work",
    hideMyProfile: "hide my profile",
    hideMyAge: "hide my age",
    hideMyVideo: "hide my video",
    moveAndScale: "move and scale",
    upload: "upload",
    cancel: "cancel",
    hide_profile: "Hide my profile",
    hide_age: "Hide my age",
    hide_video: "Hide my video",
    myInfo: "my info",
    companyInfo: "company info",
    myPlan: "my plan",
    billing: "billing",
  },
  empMyProfile: {
    dateJoined: "Date joined",
    profileCompletion: "Profile Completion",
    uploadAlogo: "Upload a logo",
    updateProfile: "Update Profile",
    townPlace: "Select",
    cancelProfile: "Cancel Updation",
    firstName: "First Name",
    firstNamePlace: "Enter your first name",
    surname: "Surname",
    surnamePlace: "Enter your Surname",
    email: "Email",
    emailPlace: "Enter your email",
    changePassword: "Change Password",
    changePasswordPlace: "Enter your current password",
    resetPassword: "Reset Password",
    phoneNumber: "Phone Number",
    phoneNumberPlace: "Enter your contact number",
    gender: "Gender",
    male: "Male",
    female: "Female",
    country: "Country",
    select: "select",
    cityTown: "City/Town",
    crayonSkinz: "Crayon Skinz",
    save: "Save",
    companyInfo: "Company info",
    myInfo: "My info",
    cancel: "cancel",
    companyName: "Company Name",
    companyNamePlace: "Enter your company name",
    companyWebsite: "Company Website",
    companyWebsitePlace: "Enter company website",
    companyIndustry: "Company Industry(ies)",
    companyIndustryPlace:
      'Enter your company industry and press "Tab" to add more',
    companyDescription: "Company Description",
    companyDescriptionPlace: "Enter your company description...",
    moveAndScale: "move and scale",
    upload: "upload",
  },
};
export default flatten(en);
