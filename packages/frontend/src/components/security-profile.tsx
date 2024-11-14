import { Card, CardContent } from "@mui/material";
import Symbol from "./symbol";

type SecurityProfileProps = {
  ticker: string;
  securityName: string;
  country: string;
  sector: string;
};

const SecurityProfile = ({ ticker, securityName, country, sector }: SecurityProfileProps) => {
  return (
    <Card sx={{ width: "100%", minWidth: "100%", margin: "auto" }} className="relative">
      <CardContent>
        <ul className="space-y-1">
          <li className="space-y-3 mb-5">
            <Symbol text={ticker} />
            <p className="space-x-2">
              <span className="">{ticker}:</span>
              <span className="font-bold text-xl">{securityName}</span>
            </p>
          </li>
          <li className="space-x-2">
            <span className="">Sector:</span>
            <span className="text-lg">{sector}</span>
          </li>
          <li className="space-x-2">
            <span className="">Country:</span>
            <span className="text-lg">{country}</span>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default SecurityProfile;
