import React, { ReactNode } from 'react';
import NextHead from 'next/head';

interface HeadProps {
  title: string;
  description: string;
  children?: ReactNode | ReactNode[];
}

export const Head: React.FC<HeadProps> = ({ title, description, children }) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name='description' content={description} />
      <link rel='icon' href='/favicon.ico' />

      {/* <!-- Google / Search Engine Tags --> */}
      <meta itemProp='name' content='Reed' />
      <meta itemProp='description' content={description} />
      <meta
        itemProp='image'
        content='https://www.kindpng.com/picc/m/80-802054_ios-7-contacts-app-icon-iphone-camera-roll.png'
      />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property='og:url' content='https://alvarocaslte.com' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta
        property='og:image'
        content='https://www.kindpng.com/picc/m/80-802054_ios-7-contacts-app-icon-iphone-camera-roll.png'
      />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta
        name='twitter:image'
        content='https://www.kindpng.com/picc/m/80-802054_ios-7-contacts-app-icon-iphone-camera-roll.png'
      />

      {children}
    </NextHead>
  );
};
