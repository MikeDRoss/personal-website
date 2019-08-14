import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faLinkedinIn from '@fortawesome/fontawesome-free-brands/faLinkedinIn';
import faEnvelope from '@fortawesome/fontawesome-free-regular/faEnvelope';

type Icon = {
    link : string,
    label: string,
    icon: any
}

const icons: Array<Icon> = [
  {
    link: 'https://github.com/MikeDRoss',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.linkedin.com/in/michael-ross-0067a0b5',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'mailto:michael4725@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default icons;
