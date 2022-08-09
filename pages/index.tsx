import type { NextPage } from "next";
import React from "react";
import GeneratedForm from "../components/form";
import { getJsonFile, formElement } from "../utils";

const Home: NextPage = () => {
  const [jsonFile, setJsonFile] = React.useState<null | Array<formElement>>(
    null
  );

  React.useEffect(() => {
    getJsonFile("/form.json").then((data) => {
      setJsonFile(data);
    });
  }, []);

  return (
    <div className="container mx-auto">
      <GeneratedForm
        elements={jsonFile}
        onSubmit={(values) => {
          console.log(values);
          alert(JSON.stringify(values));
        }}
      />
    </div>
  );
};

export default Home;
