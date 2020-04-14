import React from "react"

//Algolia Search Start
import { CustomHits } from "../../../Search/searchPreview"
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Configure } from 'react-instantsearch-dom';

const ClickOutHandler = require('react-onclickout');

const algoliaClient = algoliasearch( process.env.GATSBY_ALGOLIA_APP_ID, process.env.GATSBY_ALGOLIA_SEARCH_KEY );

// removes empty query searches from analytics
const searchClient = {
  search(requests) {
    const newRequests = requests.map((request) => {
      // test for empty string and change request parameter: analytics
      if (!request.params.query || request.params.query.length === 0) {
        request.params.analytics = false;
      }
      return request;
    });
    return algoliaClient.search(newRequests);
  },
};
// Algolia Search End





class Nav2 extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          hasInput: false,
          refresh: false,
        };
      }
    
      // click out search results box
      onClickOut = () => {
        document.getElementsByClassName('ais-SearchBox-input')[0].value = '';
        this.setState(() => ({
          hasInput: false,
        }));
      }
    
      render() {

        const { refresh, hasInput } = this.state;

        return (
            <div className="navhere text-center">
                <div className="h1">Gatsby + Netlify CMS + Algolia
                    <span> by @<a target="_blank" rel="noopener noreferrer" href="https://developerjahid.com">developerjahid</a></span>
                </div>
                <div className="indexform">
                    {/* Aloglia Widgets Start */}
                            <div className="form-inline header__search">
                                <ClickOutHandler onClickOut={this.onClickOut}>
                                    <InstantSearch
                                        searchClient={searchClient}
                                        indexName={ `${process.env.GATSBY_ALGOLIA_INDEX_NAME}` }
                                        refresh={refresh}
                                    >
                                        <Configure hitsPerPage={5} />

                                        {/* forcefeed className because component does not accept natively as prop */}
                                        <SearchBox
                                        className="searchbox"
                                        class="ais-SearchBox-input"
                                        submit={<></>}
                                        reset={<></>}
                                        translations={{
                                            placeholder: 'Search Blog',
                                        }}
                                        onKeyUp={(event) => {
                                            this.setState({
                                            hasInput: event.currentTarget.value !== '',
                                            });
                                        }}
                                        />

                                        <div className={!hasInput ? 'input-empty' : 'input-value'}>
                                            <CustomHits hitComponent={Hits} />
                                        </div>
                                    </InstantSearch>
                                </ClickOutHandler>
                            </div>
                    {/* Aloglia Widgets End */}
                </div>
            </div>
        )
    }
}


export default Nav2
