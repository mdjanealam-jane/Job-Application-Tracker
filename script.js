let jobs = [
  {
    id: 1, companyName: 'Mobile First Corp', position: 'React Native Developer',
    location: 'Remote', type: 'Full-time', salary: '$130,000 - $175,000',
    description: 'Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.',
    status: 'none'
  },
  {
    id: 2, companyName: 'WebFlow Agency', position: 'Web Designer & Developer',
    location: 'Los Angeles, CA', type: 'Part-time', salary: '$80,000 - $120,000',
    description: 'Design and develop stunning, responsive websites using modern web technologies and CMS platforms.',
    status: 'none'
  },
  {
    id: 3, companyName: 'CloudTech Solutions', position: 'Backend Engineer',
    location: 'New York, NY', type: 'Full-time', salary: '$140,000 - $160,000',
    description: 'Design scalable microservices using Node.js and PostgreSQL. Optimize database queries for high-traffic environments.',
    status: 'none'
  },
  {
    id: 4, companyName: 'FinTrust Bank', position: 'Frontend Developer',
    location: 'Remote', type: 'Contract', salary: '$90/hr',
    description: 'Revamp the customer-facing dashboard using modern frameworks. Ensure WCAG accessibility compliance.',
    status: 'none'
  },
  {
    id: 5, companyName: 'DataViz Inc', position: 'Data Engineer',
    location: 'Seattle, WA', type: 'Full-time', salary: '$150,000 - $180,000',
    description: 'Build robust data pipelines utilizing Python and AWS infrastructure to support our machine learning initiatives.',
    status: 'none'
  },
  {
    id: 6, companyName: 'SecureNet', position: 'Cybersecurity Analyst',
    location: 'Austin, TX', type: 'Full-time', salary: '$110,000 - $130,000',
    description: 'Monitor network traffic for security breaches, investigate violations, and implement secure firewall protocols.',
    status: 'none'
  },
  {
    id: 7, companyName: 'NextGen AI', position: 'Machine Learning Engineer',
    location: 'San Francisco, CA', type: 'Full-time', salary: '$160,000 - $200,000',
    description: 'Train and deploy generative AI models. Collaborate with researchers to bring algorithms into production.',
    status: 'none'
  },
  {
    id: 8, companyName: 'EcoLogistics', position: 'Product Manager',
    location: 'Chicago, IL', type: 'Full-time', salary: '$120,000 - $145,000',
    description: 'Lead the development lifecycle of our green-shipping route optimization software from ideation to launch.',
    status: 'none'
  }
];

let currentTab = 'all';
const container = document.getElementById('container');
const hiddenCard = document.getElementById('hidden-card');

const totaljob = document.getElementById('total-job');
const totalInterview = document.getElementById('total-interview');
const totalRejected = document.getElementById('total-rejected');

function updateDashboard() {
  let allJobs = jobs.length;
  
  let allInterview = jobs.filter(function(job){
    return job.status === 'interview';
  }).length;

  let allRejected = jobs.filter(function(job){
    return job.status === 'rejected';
  }).length;

  totaljob.innerText = allJobs;
  totalInterview.innerText = allInterview;
  totalRejected.innerText = allRejected;
};

function showingJobs(){
  while(container.firstChild){
    container.removeChild(container.firstChild);
  }

  let showJobs = jobs;
  if(currentTab === 'interview'){
    showJobs = jobs.filter(function(job){
      return job.status === 'interview';
    });
  }
  else if(currentTab === 'rejected'){
    showJobs = jobs.filter(function(job){
      return job.status === 'rejected';
    });
  }
  showJobs.forEach(function(job){
    let newCard = hiddenCard.cloneNode(true);
    newCard.classList.remove('hidden');
    
    newCard.querySelector('.company-name').innerText = job.companyName;
    newCard.querySelector('.job-position').innerText = job.position;
    newCard.querySelector('.job-location').innerText = job.location;
    newCard.querySelector('.job-type').innerText = job.type;
    newCard.querySelector('.job-salary').innerText = job.salary;
    newCard.querySelector('.job-description').innerText = job.description;

    let badge = newCard.querySelector('.job-status');
    if (job.status === 'none') {
      badge.innerText = 'NOT APPLIED';
    } else if (job.status === 'interview') {
      badge.innerText = 'INTERVIEW';
      badge.className = 'job-status px-3 py-1 rounded text-xs font-bold bg-teal-50 text-teal-700'; 
    } else if (job.status === 'rejected') {
      badge.innerText = 'REJECTED';
      badge.className = 'job-status px-3 py-1 rounded text-xs font-bold bg-red-50 text-red-700';
    }
      container.appendChild(newCard);
  });

  updateDashboard();
}
showingJobs();