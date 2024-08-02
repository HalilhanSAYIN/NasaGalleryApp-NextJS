import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';
import '@/components/Footer/FooterSocial'
import { FooterSocial } from '@/components/Footer/FooterSocial';
import { HeaderSimple } from '@/components/HeaderSimple/HeaderSimple';
import {Archivo} from "@next/font/google"


const archivoFont = Archivo({subsets:["latin"]})

export const metadata = {
  title: 'Nasa Gallery App',
  description: 'I am using Mantine with Next.js!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className={archivoFont.className}>
        <MantineProvider theme={theme}>
          <HeaderSimple/>
          <main>{children}</main>
          <FooterSocial/>
        </MantineProvider>
      </body>
    </html>
  );
}
