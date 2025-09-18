import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TeamSection from '@/components/TeamSection';
import ModuleSection from '@/components/ModuleSection';
import NavigationDots from '@/components/NavigationDots';
import BackToTop from '@/components/BackToTop';
import Footer from '@/components/Footer';

import phone1 from '@/assets/images/modules/sprs1p.png';
import phone2 from '@/assets/images/modules/sprs2p.png';
import phone3 from '@/assets/images/modules/sprs3p.png';
import phone4 from '@/assets/images/modules/sprs4p.png';

import phone5 from '@/assets/images/modules/app1p.png';
import phone6 from '@/assets/images/modules/app2p.png';
import phone7 from '@/assets/images/modules/app3p.png';
import phone8 from '@/assets/images/modules/app4p.png';

import phone9 from '@/assets/images/modules/tele1p.png';
import phone10 from '@/assets/images/modules/tele2p.png';
import phone11 from '@/assets/images/modules/tele3p.png';
import phone12 from '@/assets/images/modules/tele4p.png';
import phone13 from '@/assets/images/modules/tele5p.png';
import phone14 from '@/assets/images/modules/tele6p.png';

import phone15 from '@/assets/images/modules/erdoc1p.png';
import phone16 from '@/assets/images/modules/erdoc2p.png';
import phone17 from '@/assets/images/modules/erdoc3p.png';
import phone18 from '@/assets/images/modules/erdoc4p.png';
import phone19 from '@/assets/images/modules/erdoc5p.png';

import phone20 from '@/assets/images/modules/add11.png';
import phone21 from '@/assets/images/modules/add22.png';
import phone22 from '@/assets/images/modules/add33.png';
import phone23 from '@/assets/images/modules/add44.png';
import phone24 from '@/assets/images/modules/add55.png';


import web1 from '@/assets/images/modules/sprs1.png';
import web2 from '@/assets/images/modules/sprs2.png';
import web3 from '@/assets/images/modules/sprs3.png';

import web4 from '@/assets/images/modules/appoint1.png';
import web5 from '@/assets/images/modules/app2.png';
import web6 from '@/assets/images/modules/appoint3.png';

import web7 from '@/assets/images/modules/tele1.png';
import web8 from '@/assets/images/modules/tele2.png';
import web9 from '@/assets/images/modules/tele3.png';
import web10 from '@/assets/images/modules/tele4.png';

import web11 from '@/assets/images/modules/erdoc1.png';
import web12 from '@/assets/images/modules/erdoc2.png';
import web13 from '@/assets/images/modules/erdoc3.png';
import web14 from '@/assets/images/modules/erdoc4.png';
import web15 from '@/assets/images/modules/erdoc5.png';

import web16 from '@/assets/images/modules/add1.png';
import web17 from '@/assets/images/modules/add2.png';
import web18 from '@/assets/images/modules/add3.png';
import web19 from '@/assets/images/modules/add4.png';
import web20 from '@/assets/images/modules/add5.png';

import video1 from '@/assets/images/modules/sprs1m.webm';
import video2 from '@/assets/images/modules/recording2.webm';
import video3 from '@/assets/images/modules/recording3.webm';
import video4 from '@/assets/images/modules/recording4.webm';
import video5 from '@/assets/images/modules/recording5.webm';


const Index = () => {
  const modules = [
    {
      id: 'sprs',
      title: 'Smart Patient Registration System (SPRS)',
      description: 'The Smart Patient Registration System provides a centralized and efficient process for registering new patients, collecting their personal, contact, insurance, and emergency contact details.',
      features: ['Patient search and profile lookup', 'Complete registration form', 'Data validation and required field checks', 'Sync with hospital database'],
      phoneImages: [ phone1, phone2, phone3, phone4 ],
      webImages: [web1, web2, web3],
      videoUrl: video1
    },
    {
      id: 'ass',
      title: 'Appointment and Scheduling System (ASS)',
      description: 'This module manages patient appointment bookings and doctor availability schedules. It allows staff to set, view, and update appointments while preventing conflicts.',
      features: ['Appointment booking form', 'Real-time doctor availability', 'Appointment list by date', 'Automated conflict checks'],
      phoneImages: [ phone5, phone6, phone7, phone8],
      webImages: [web4, web5, web6],
      videoUrl: video2
    },
    {
      id: 'tocs',
      title: 'Telehealth and Outpatient Care System (TOCS)',
      description: 'The Telehealth and Outpatient Care System enables remote consultations and follow-up care for patients who do not require on-site treatment.',
      features: ['Video consultation room', 'Virtual schedule management', 'Medical records access', 'Follow-up tracking'],
      phoneImages: [phone9, phone10, phone11, phone12, phone13, phone14],
      webImages: [web7, web8, web9, web10],
      videoUrl: video3
    },
    {
      id: 'eerts',
      title: 'Emergency and ER Triage System (EERTS)',
      description: 'This system handles emergency patient assessment and prioritization upon arrival. It allows frontline staff to record vital signs and assign triage categories.',
      features: ['Emergency patient registration', 'Triage level classification', 'Vital signs input', 'ER queue monitoring'],
      phoneImages: [phone15, phone16, phone17, phone18, phone19],
      webImages: [web11, web12, web13, web14, web15],
      videoUrl: video4
    },
    {
      id: 'ibms',
      title: 'Inpatient and Bed Management System (IBMS)',
      description: 'The Inpatient and Bed Management System provides real-time tracking of bed availability, patient admissions, and discharges.',
      features: ['Real-time bed status', 'Room and department tracking', 'Patient admission form', 'Pending discharge list'],
      phoneImages: [phone20, phone21, phone22, phone23, phone24],
      webImages: [web16, web17, web18, web19, web20],
      videoUrl: video5
    }
  ];

  return (
    <main className="relative">
      {/* Header with Navigation */}
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Team Section */}
      <TeamSection />
      
      {/* Module Sections */}
      {modules.map((module) => (
        <ModuleSection key={module.id} {...module} />
      ))}
      
      {/* Footer */}
      <Footer />
      
      {/* Navigation Components */}
      <NavigationDots />
      <BackToTop />
    </main>
  );
};

export default Index;
