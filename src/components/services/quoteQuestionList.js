import React from "react";

import Zoom from "react-reveal/Zoom";

import QuoteQuestion from "./quoteQuestion";

export default function QuoteQuestionList() {
  return (
    <Zoom>
      <ul>
        <QuoteQuestion
          question="Is your content static or dynamic? (Will you be
	                            regularly adding content - such as a blog - or will
	                            it be a basic brochure-style site?)"
        />
        <QuoteQuestion
          question="Will you need a database? (Will you want to store
	                            data about products, clients and users?)"
        />
        <QuoteQuestion
          question="Do you have graphics/visual elements already
	                            prepared? (Do you already have logos and branding or
	                            will you need me to create that?)"
        />
        <QuoteQuestion
          question="Do you already have a domain name and a hosting
	                            plan?"
        />
        <QuoteQuestion question="Do you already have a design in mind?" />
      </ul>
    </Zoom>
  );
}
