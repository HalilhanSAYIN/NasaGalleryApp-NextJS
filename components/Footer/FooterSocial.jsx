import { Container, Group, ActionIcon, rem } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';

import classes from './FooterSocial.module.css';
import Link from 'next/link';

export function FooterSocial() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <div>2024 © Halilhan SAYIN</div>
        <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
          <Link href="https://linkedin.com/in/halilhan-sayin" target='_blank'>
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandLinkedin style={{ width: rem(24), height: rem(24) }} stroke={1.5} />
            </ActionIcon>
          </Link>
          <Link href="https://github.com/HalilhanSAYIN" target='_blank'>
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandGithub style={{ width: rem(24), height: rem(24) }} stroke={1.5} />
            </ActionIcon>
          </Link>
        </Group>
      </Container>
    </div>
  );
}