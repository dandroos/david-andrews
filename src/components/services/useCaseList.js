import React from "react";
import UseCase from "./useCase";

export default function UseCaseList() {
  return (
    <ul>
      <UseCase
        title="Client admin"
        description="Software to help you maintain strong relationships
                            with your clients."
      />
      <UseCase
        title="Invoicing"
        description="Come away from the Microsoft Word template and step
                            into the light of a fully-automated solution!"
      />
      <UseCase
        title="Business analysis"
        description="Collate data from all areas of your business to
                            perform detailed analysis, including impressive
                            visualisations."
      />
    </ul>
  );
}
