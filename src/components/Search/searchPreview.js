import React from 'react';
import { Link } from "gatsby"
import { Input } from "reactstrap"
import { connectSearchBox, connectHits } from 'react-instantsearch-dom';
import "./search.css"

const SearchBox = ({ currentRefinement, refine }) => (
  <div className="searchform ais-SearchBox">
    <form noValidate action="" role="search" className="input-group searchbox ais-SearchBox-form">
      <Input bsSize="sm"  placeholder="Search the Blogs"
        className="form-control ais-SearchBox-input"
        type="search"
        value={currentRefinement}
        onChange={(event) => refine(event.currentTarget.value)}
      />
    </form>
  </div>
);

export const CustomSearchBox = connectSearchBox(SearchBox);

// on page load do not display
const Hits = ({ hits }) => (
  // if parent component set is type, render, otherwise hide
  <ul className="style">
    {hits.length < 1 ? <li>No search results found</li> : ''}
    {hits.map((hit) => (
      <li key={hit.id}>
        <Link to={hit.path}>
          <span className="search-title" dangerouslySetInnerHTML={{ __html: hit._highlightResult.title.value }} />
          <p dangerouslySetInnerHTML={{ __html: hit._snippetResult.excerpt.value }} />
        </Link>
      </li>

      //  Work on highlighting
      // /////////////////////////////////////////////////
      // <li key={hit.title}>
      //   <a href={hit}>
      //     <Highlight attribute="title" hit={hit} />
      //   </a>
      // </li>
      // ////////////////////////////////////////////////
    ))}
  </ul>
);

export const CustomHits = connectHits(Hits);