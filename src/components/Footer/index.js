import React from 'react';

import ExternalLink from '../ExternalLink';
import { config } from '../../../data';

import './index.scss';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 text-center">
          <p className="architecture">
            Build with&nbsp;at&nbsp;
            <ExternalLink
              href="https://github.com/calpa/gatsby-starter-calpa-blog"
              title="calpa/gatsby-starter-calpa-blog"
            />&nbsp;Theme by Calpa Liu
          </p>
          <p className="copyright">
            Copyright&nbsp;
            <ExternalLink href="https://calpa.me/" title="&copy;MuRong" />
            &nbsp;
            {config.title}
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
