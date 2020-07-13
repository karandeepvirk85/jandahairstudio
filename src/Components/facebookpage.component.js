import React, { Component} from 'react';
import { FacebookProvider, Page } from 'react-facebook';
 
export default class FbPage extends Component {
  render() {
    return (
		<FacebookProvider appId="378244259239209">
			 <Page href="https://www.facebook.com/hairstudioja" tabs="timeline" width="500" height="690" />
		</FacebookProvider>
    );
  }
}