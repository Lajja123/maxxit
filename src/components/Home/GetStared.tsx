import React from "react";
import Button from "../UI/Button";
import { Typography } from "../UI/Typography";

function GetStarted() {
  return (
    <div className="flex flex-col gap-8  border border-white/10 bg-linear-to-br from-[#141827] via-[#080B13] to-[#03050A] p-8 text-center sm:text-left">
      <Typography variant="h2" color="white" weight="bold">
        Ready to build your agent?
      </Typography>
      <p className="text-sm text-white/70">
        Launch a private Maxxit workspace, invite collaborators, and deploy your
        first automation with our guided templates.
      </p>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Button
          variant="black"
          paddingX="px-8"
          paddingY="py-4"
          className="w-full border border-white/20 bg-white/10 text-white hover:border-white/40 hover:bg-white/20 sm:w-auto"
        >
          Launch dashboard
        </Button>
        <Button
          variant="black"
          paddingX="px-8"
          paddingY="py-4"
          className="w-full border border-white/20 text-white hover:border-white/40 sm:w-auto"
        >
          Talk to an expert
        </Button>
      </div>
    </div>
  );
}

export default GetStarted;
