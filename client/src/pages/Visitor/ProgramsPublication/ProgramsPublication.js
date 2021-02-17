import React, { useEffect, useState } from "react";
import Program from "../../../components/Visitor/Programs/Program";
import { PROGRAM_ID } from "../../../utils/constants";

import {Card} from "antd";

import { getProgramVisitorApi } from "../../../api/program";

export default function ScienceProgram() {
  const [program, setProgram] = useState([]);

  useEffect(() => {
    getProgramVisitorApi(localStorage.getItem(PROGRAM_ID)).then(
      (response) => {
        setProgram(response.programData);
      }
    );
  });

  return (
    <>
    <Card>
      <Program program={program} />
    </Card>
    </>
  );
}
