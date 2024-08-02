'use client';

import React, { useState } from 'react';
import { Group } from '@mantine/core';
import { IconPlanet, IconSearch, IconTelescope } from '@tabler/icons-react';
import classes from './NavbarSimple.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { ColorSchemeToggle } from '../ColorShemeToggle/ColorShemeToggle';

const data = [
  { link: '/About', label: 'About Nasa', icon: IconPlanet },
  { link: '/ISS', label: 'ISS', icon: IconTelescope },
  { link: '/Discover', label: 'Discover', icon: IconSearch },
];

function NavbarSimple({ closeDrawer }) {
  const [active, setActive] = useState('');

  const links = data.map((item) => (
    <Link
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        closeDrawer();
        setActive(item.label);
      }}>
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <Image src="/smalllogo.png" width={250} height={70} alt="logo" />
        </Group>
        {links}
      </div>
      <div className={classes.footer}>
      <ColorSchemeToggle />
      <div>Nasa Galley</div>
      </div>
    </nav>
  );
}

export default NavbarSimple;