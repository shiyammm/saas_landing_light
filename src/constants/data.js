import acme from '@/assets/logo-acme.png';
import apex from '@/assets/logo-apex.png';
import celestial from '@/assets/logo-celestial.png';
import pulse from '@/assets/logo-pulse.png';
import quantum from '@/assets/logo-quantum.png';
import echo from '@/assets/logo-echo.png';
import avatar1 from '@/assets/avatar-1.png';
import avatar2 from '@/assets/avatar-2.png';
import avatar3 from '@/assets/avatar-3.png';
import avatar4 from '@/assets/avatar-4.png';
import avatar5 from '@/assets/avatar-5.png';
import avatar6 from '@/assets/avatar-6.png';
import avatar7 from '@/assets/avatar-7.png';
import avatar8 from '@/assets/avatar-8.png';
import avatar9 from '@/assets/avatar-9.png';

const navLinks = ['about', 'features', 'customers', 'price', 'help', 'careers'];
const images = [
  { src: acme, alt: 'acme' },
  { src: apex, alt: 'apex' },
  { src: celestial, alt: 'celestial' },
  { src: pulse, alt: 'pulse' },
  { src: quantum, alt: 'quantum' },
  { src: echo, alt: 'echo' },
];

const priceDetails = [
  {
    version: 'Free',
    cost: '0',
    isFree: true,
    isInverse: false,
    isPopular: false,
    access: [
      'Up to 5 project members',
      'Unlimited tasks and projects',
      '2GB Storage',
      'Integrations',
      'Basic Support',
    ],
  },
  {
    version: 'Pro',
    cost: '9',
    isFree: false,
    isInverse: true,
    isPopular: true,
    access: [
      'Up to 50 project members',
      'Unlimited tasks and projects',
      '50GB storage',
      'Integrations',
      'Priority support',
      'Advanced support',
      'Export support',
    ],
  },
  {
    version: 'Business',
    cost: '19',
    isFree: false,
    isInverse: false,
    isPopular: false,
    access: [
      'Up to 5 project members',
      'Unlimited tasks and projects',
      '200GB storage',
      'Integrations',
      'Dedicated account manager',
      'Custom fields',
      'Advanced analytics',
      'Export capabilities',
      'API access',
      'Advanced security features',
    ],
  },
];

const testimonials = [
  {
    name: 'Jamie Rivera',
    username: '@jamietechguru00',
    img: avatar1,
    statement:
      'As a seasoned developer always on the lookout for innovative designs, this template instantly grabbed my attention.',
  },
  {
    name: 'Josh Smith',
    username: '@jjsmith',
    img: avatar2,
    statement:
      "Our team's productivity has skyrocketed since we started using this tool.",
  },
  {
    name: 'Morgan Lee',
    username: '@morganleewhiz',
    img: avatar3,
    statement:
      'This app has completely transformed how I manage my projects and deadlines.',
  },
  {
    name: 'Casey Jordan',
    username: '@caseyi',
    img: avatar4,
    statement:
      'I was amazed at how quickly we were able to integrate this app into our workflow.',
  },
  {
    name: 'Taylor Kim',
    username: '@taylorkimm',
    img: avatar5,
    statement:
      'Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.',
  },
  {
    name: 'Riley Smith',
    username: '@rileysmith1',
    img: avatar6,
    statement:
      'The customizability and integration capabilities of this app are top-notch.',
  },
  {
    name: 'Jordan Patels',
    username: '@jpatelsdesign',
    img: avatar7,
    statement:
      'Adopting this app for our team has streamlined our project management and improved communication across the board.',
  },
  {
    name: 'Sam Dawson',
    username: '@dawsontechtips',
    img: avatar8,
    statement:
      'With this app, we can easily assign tasks, track progress, and manage documents all in one place.',
  },
  {
    name: 'Casey Harper',
    username: '@casey09',
    img: avatar9,
    statement:
      'Its user-friendly interface and robust features support our diverse needs.',
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

import { ImLinkedin } from 'react-icons/im';
import { FaXTwitter } from 'react-icons/fa6';
import { AiFillInstagram } from 'react-icons/ai';
import { FaPinterest } from 'react-icons/fa6';
import { IoLogoYoutube } from 'react-icons/io5';

const socialLinks = [
  FaXTwitter,
  AiFillInstagram,
  ImLinkedin,
  FaPinterest,
  IoLogoYoutube,
];

export {
  navLinks,
  images,
  priceDetails,
  firstColumn,
  secondColumn,
  thirdColumn,
  socialLinks,
};
