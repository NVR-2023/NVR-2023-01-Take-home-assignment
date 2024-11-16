import { useState, useEffect } from "react";
import { PriceType } from "../../../backend/src/types/data-types";

export const useSecurityDetails = (securityId: number) => {
  const [securityDetailsData, setSecurityDetailsData] = useState<PriceType[]>();
  const [isSecurityDetailsLoading, setIsSecurityDetailsLoading] = useState<boolean>(false);
  const [hasSecurityDetailsErrors, setSecurityDetailsErrors] = useState<boolean>(false);

  useEffect(() => {
    const fetchSecurityPrices = async () => {
      setIsSecurityDetailsLoading(true);
      setSecurityDetailsErrors(false);

      try {
        const endpointUrl = `http://localhost:3000/api/v1/private/securities/prices/${securityId}`;
        const response = await fetch(endpointUrl);

        if (!response.ok) {
          throw new Error("Failed to fetch security prices");
        }

        const data = await response.json();
        if (data.ok) {
          const transformedSievedData = data.data.map((dataPoint: PriceType) => ({
            ...dataPoint,
            date: new Date(dataPoint.date).getTime(),
          }));
          setSecurityDetailsData(transformedSievedData);
        } else {
          setSecurityDetailsErrors(true);
        }
      } catch (error) {
        console.error(`Error fetching security prices: ${error}`);
        setSecurityDetailsErrors(true);
      } finally {
        setIsSecurityDetailsLoading(false);
      }
    };

    fetchSecurityPrices();
  }, [securityId]);

  return { securityDetailsData, isSecurityDetailsLoading, hasSecurityDetailsErrors };
};
