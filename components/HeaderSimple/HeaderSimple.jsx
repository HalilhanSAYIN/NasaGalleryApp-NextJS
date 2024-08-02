"use client"

import { useState } from 'react';
import { Container, Group, Burger, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderSimple.module.css';
import Image from 'next/image';
import Link from 'next/link';
import NavbarSimple from '@/components/SimpleNavbar/NavbarSimple';
import { ColorSchemeToggle } from '../ColorShemeToggle/ColorShemeToggle';
const links = [
  { link: '/About', label: 'About Nasa' },
  { link: '/ISS', label: 'ISS' },
  { link: '/Discover', label: 'Discover' },

];

export function HeaderSimple() {
  const [opened, { open, close }] = useDisclosure(false);
  const [active, setActive] = useState();

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header} >
      <Container size="md" className={classes.inner}>
      <ColorSchemeToggle/>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        
        <Link href={'/'}>
          <Image
            src="/nasa.png"
            width={128}
            height={128}
            alt="logo"/>
        </Link>
       
        <Burger opened={opened} onClick={open} hiddenFrom="xs" size="sm" />
        <Drawer
          opened={opened}
          onClose={close}
          padding="md"
          size="sm">
          <NavbarSimple closeDrawer={close} /> {}
        </Drawer>
      </Container>
    </header>
  );
}