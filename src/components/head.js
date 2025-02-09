import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import config from '@config';
import favicon from '@images/favicons/favicon.ico';
import ogImage from '@images/og.png';
import appleIcon57x57 from '@images/favicons/apple-icon-57x57.png';
import appleIcon60x60 from '@images/favicons/apple-icon-60x60.png';
import appleIcon72x72 from '@images/favicons/apple-icon-72x72.png';
import appleIcon76x76 from '@images/favicons/apple-icon-76x76.png';
import appleIcon114x114 from '@images/favicons/apple-icon-114x114.png';
import appleIcon120x120 from '@images/favicons/apple-icon-120x120.png';
import appleIcon144x144 from '@images/favicons/apple-icon-144x144.png';
import appleIcon152x152 from '@images/favicons/apple-icon-152x152.png';
import appleIcon180x180 from '@images/favicons/apple-icon-180x180.png';
import androidIcon192x192 from '@images/favicons/android-icon-192x192.png';
import favicon32x32 from '@images/favicons/favicon-32x32.png';
import favicon96x96 from '@images/favicons/favicon-96x96.png';
import favicon16x16 from '@images/favicons/favicon-16x16.png';
import msIcon144x144 from '@images/favicons/ms-icon-144x144.png';
import Logo from '@images/logo.png'
const Head = ({ metadata }) => (
  <Helmet>
    <html lang="en" prefix="og: http://ogp.me/ns#" />
    <title itemProp="name" lang="en">
      {metadata.title}
    </title>
    <link rel="shortcut icon" href={favicon} />
    <link rel="canonical" href="http://yashitanamdeo.github.io/" />

    <meta name="description" content={metadata.description} />
    <meta name="keywords" content={config.siteKeywords} />
    <meta name="google-site-verification" content={config.googleVerification} />
    <meta property="og:title" content={metadata.title} />
    <meta property="og:description" content={metadata.description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={metadata.siteUrl} />
    <meta property="og:site_name" content={metadata.title} />
    <meta property="og:image" content={`${config.siteUrl}${ogImage}`} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:locale" content={config.siteLanguage} />
    <meta itemProp="name" content={metadata.title} />
    <meta itemProp="description" content={metadata.description} />
    <meta itemProp="image" content={`${config.siteUrl}${ogImage}`} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content={metadata.siteUrl} />
    <meta name="twitter:site" content={config.twitterHandle} />
    <meta name="twitter:creator" content={config.twitterHandle} />
    <meta name="twitter:title" content={metadata.title} />
    <meta name="twitter:description" content={metadata.description} />
    <meta name="twitter:image" content={`${config.siteUrl}${ogImage}`} />
    <meta name="twitter:image:alt" content={metadata.title} />

    <meta name="msapplication-TileColor" content={config.colors.navy} />
    <meta name="msapplication-TileImage" content={Logo} />
    <meta name="theme-color" content={config.colors.navy} />
  </Helmet>
);

export default Head;

Head.propTypes = {
  metadata: PropTypes.object.isRequired,
};
